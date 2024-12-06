import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <TitleLink to="/">BOOKSTORE.</TitleLink>
      <Btn to="/books/add">책 추가하기</Btn>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2em;
  background-color: #eef7ff;
  color: #005abb;
`;

const TitleLink = styled(Link)`
  font-weight: bold;
`;

const Btn = styled(Link)``;

export default Header;
