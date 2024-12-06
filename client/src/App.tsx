import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import BookListPage from "./pages/BookListPage";
import DetailsPage from "./pages/DetailsPage";
import AddBookPage from "./pages/AddBookPage";

const App = () => {
  return (
    <Container>
      <Header />
      <Contents>
        <Routes>
          <Route path="/" element={<BookListPage />} />
          <Route path="/books/:id" element={<DetailsPage />} />
          <Route path="/books/add" element={<AddBookPage />} />
        </Routes>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Contents = styled.main`
  width: 100%;
  height: 100%;
  padding: 1.2em;
`;

export default App;
