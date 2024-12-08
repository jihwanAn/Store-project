import express from "express";
import cors from "cors";
import { getBooks, addBook, deleteBook } from "./routers/books";

const app = express();
const PORT = 8080;

// cors 설정: 클라이언트 도메인
const allowedOrigin = ["https://free-book-store.netlify.app"];

app.use(
  cors({
    origin: allowedOrigin,
  })
);

app.use(express.json());

app.get("/books", getBooks);
app.post("/books/add", addBook);
app.post("/books/delete", deleteBook);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
