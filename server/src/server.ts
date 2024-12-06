import express, { Request, Response } from "express";
import cors from "cors";
import { Book } from "./models/Book";

const mockBooks: Book[] = [
  { id: 1, title: "우리는 사랑 안에 살고있다", author: "유혜주, 조정연" },
  { id: 2, title: "트렌드 코리아 2025", author: "김난도, 전미영, 최지혜" },
  { id: 3, title: "급류", author: "정대건" },
];

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// 책 목록
app.get("/books", (req: Request, res: Response) => {
  try {
    res.status(200).json(mockBooks);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// 상세 페이지
// app.get("/books/:id", (req: Request, res: Response) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
