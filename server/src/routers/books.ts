import express, { Request, Response } from "express";
import { Book } from "../models/Book";
import { PageOptions } from "../models/PageOptions";
import { mockBooks } from "../mockData/mockBooks";

// 검색 필터 함수
const filterBooks = (books: Book[], searchQuery: string): Book[] => {
  if (!searchQuery) return books;

  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

// 책 목록
export const getBooks = async (
  req: Request<{}, {}, {}, PageOptions>,
  res: Response
) => {
  try {
    const { page, limit, search } = req.query;

    const currentPage = page ? Number(page) : 1;
    const itemsPerPage = limit ? Number(limit) : 10;

    // 검색어 없으면 빈 문자열
    const searchQuery = search ? (search as string).toLowerCase() : "";

    // 검색 필터링
    const filteredBooks = filterBooks(mockBooks, searchQuery);

    // 페이지네이션 처리
    const totalBooks = filteredBooks.length;
    const totalPages = Math.ceil(totalBooks / itemsPerPage);
    const offset = (currentPage - 1) * itemsPerPage;
    const paginatedBooks = filteredBooks.slice(offset, offset + itemsPerPage);

    res.status(200).json({
      books: paginatedBooks,
      totalPages,
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// 책 추가
export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, description } = req.body;

    const newBook = { title, author, description, id: Date.now() }; // DB 없이 임시 id 생성
    res.status(200).send(newBook);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// 책 삭제
export const deleteBook = async (req: Request, res: Response) => {
  try {
    res.status(200).send();
  } catch (error) {
    res.status(500).send("Server error");
  }
};
