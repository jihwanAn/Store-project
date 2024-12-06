import React from "react";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const book = location.state.book;

  return (
    <>
      <h1>상세 페이지</h1>
      <section>
        <div>제목: {book.title}</div>
        <div>저자: {book.author}</div>
      </section>
    </>
  );
};

export default DetailsPage;
