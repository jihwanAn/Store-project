import express from "express";
import cors from "cors";
import { getBooks, addBook, deleteBook } from "./routers/books";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/books", getBooks);
app.post("/books/add", addBook);
app.post("/books/delete", deleteBook);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
