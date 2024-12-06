import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../config";
import { Link } from "react-router-dom";
import { Book } from "../models/Book";
import { PageOptions } from "../models/PageOptions";
import styled from "styled-components";

const BookListPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [pageOptions, setPageOptions] = useState<PageOptions>({
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0, // 초기값 1
    searchQuery: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/books`, {
          params: {
            page: pageOptions.currentPage,
            limit: pageOptions.itemsPerPage,
            search: pageOptions.searchQuery,
          },
        });

        if (res.status === 200) {
          setBooks(res.data.books);
          setPageOptions((prev) => ({
            ...prev,
            totalPages: res.data.totalPages,
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pageOptions.currentPage, pageOptions.searchQuery]);

  // 페이지네이션 처리
  const handlePageChange = (newPage: number) => {
    setPageOptions((prev) => ({
      ...prev,
      currentPage: newPage,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageOptions((prev) => ({
      ...prev,
      searchQuery: e.target.value,
      currentPage: 1,
    }));
  };

  return (
    <>
      <Input
        type="text"
        value={pageOptions.searchQuery}
        onChange={handleSearchChange}
        placeholder="검색어를 입력하세요"
      />

      <Section>
        <BookList>
          {books.map((book) => (
            <BookItem key={book.id}>
              <BookLink to={`/books/${book.id}`} state={{ book }}>
                <BookInfo>
                  <h4>{book.title}</h4>
                  <BookAuthor>{book.author}</BookAuthor>
                </BookInfo>
              </BookLink>
            </BookItem>
          ))}
        </BookList>
      </Section>
      <Pagination>
        <button
          disabled={pageOptions.currentPage === 1}
          onClick={() => handlePageChange(pageOptions.currentPage - 1)}
        >
          이전
        </button>
        <span>{`Page ${pageOptions.currentPage} of ${pageOptions.totalPages}`}</span>
        <button
          disabled={pageOptions.currentPage === pageOptions.totalPages}
          onClick={() => handlePageChange(pageOptions.currentPage + 1)}
        >
          다음
        </button>
      </Pagination>
    </>
  );
};

export default BookListPage;

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Section = styled.section`
  margin: 1em 0;
`;

const BookList = styled.ul``;

const BookItem = styled.li``;

const BookLink = styled(Link)``;

const BookInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  padding: 0.3em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0efff;
  }
`;

const BookAuthor = styled.p`
  color: #555;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;

  button {
    padding: 0.5em 1em;
    margin: 0 1em;
    border: none;
    background: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
  }
`;
