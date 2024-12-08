import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state?.book) {
    alert("잘못된 접근입니다. 다시 시도해주세요.");
    navigate("/");
    return null;
  }

  const book = location.state.book;

  const handleEdit = () => {
    navigate(`/books/edit`, { state: { book } });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/books/delete`, { data: { id: book.id } });
      alert("삭제되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("삭제에 실패했습니다. 잠시후 다시 시도해 주세요");
    }
  };

  return (
    <section>
      <ButtonContainer>
        <EditButton onClick={handleEdit}>수정</EditButton>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </ButtonContainer>
      <BookDetails>
        <h3>{book.title}</h3>
        <p>
          <strong>저자:</strong> {book.author}
        </p>
        <p>
          <strong>설명:</strong> {book.description}
        </p>
      </BookDetails>
    </section>
  );
};

export default DetailsPage;

const BookDetails = styled.div`
  padding-right: 8em;

  h3 {
    margin-bottom: 0.5em;
    color: #333;
  }

  p {
    margin-bottom: 1em;
    color: #555;
  }

  strong {
    color: #333;
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: right;
  margin-right: 10em;
  gap: 1em;
`;

const EditButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
`;

const DeleteButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
`;
