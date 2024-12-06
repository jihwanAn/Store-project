import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import BookListPage from "./pages/BookListPage";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <Container>
      <Header />
      <Contents>
        <Router>
          <Routes>
            <Route path="/" element={<BookListPage />} />
            <Route path="/books/:id" element={<DetailsPage />} />
          </Routes>
        </Router>
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
  border: 1px solid blue;
  width: 100%;
  height: 100%;
  padding: 1.2em;
`;

export default App;
