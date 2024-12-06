import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Book } from "../models/Book";
import { SERVER_URL } from "../config";

type AddBookReq = Omit<Book, "id">;

const AddBookPage = () => {
  const [formData, setFormData] = useState<AddBookReq>({
    title: "",
    author: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // form 데이터 검증
    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.description.trim()
    ) {
      alert("작성란을 모두 입력해 주세요");
      return;
    }

    try {
      const res = await axios.post<{ success: boolean; book: Book }>(
        `${SERVER_URL}/books/add`,
        formData
      );

      if (res.status === 200) {
        // 임시로 로컬스토리지에 저장
        const newBooks = JSON.parse(localStorage.getItem("newBook") || "[]");
        newBooks.push(res.data);
        localStorage.setItem("newBook", JSON.stringify(newBooks));
        navigate("/");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Container>
      <Title>Add a New Book</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          제목:
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="추가하실 책 제목을 입력해 주세요"
          />
        </Label>
        <Label>
          저자:
          <Input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="책의 저자를 입력해 주세요"
          />
        </Label>
        <Label>
          설명:
          <Textarea
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            placeholder="설명을 작성해 주세요"
          />
        </Label>
        <Button type="submit">추가하기</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2em;
`;

const Title = styled.h2`
  margin-bottom: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
  font-weight: bold;
`;

const Input = styled.input`
  margin-top: 0.3em;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-top: 0.3em;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Button = styled.button`
  margin-top: 2em;
  padding: 0.75em;
  font-size: 1em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default AddBookPage;
