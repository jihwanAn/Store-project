import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../config";
import { Link } from "react-router-dom";
import { Book } from "../models/Book";
import styled from "styled-components";

const BookListPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/books`);

        if (res.status === 200) {
          setBooks(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>책 목록 페이지</h1>
      {/* 검색창 */}
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
      {/* 페이지네이션 */}
    </>
  );
};

export default BookListPage;

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
    background-color: #f0f0f0;
  }
`;

const BookAuthor = styled.p`
  color: #555;
`;
