import React from "react";
import styled from "styled-components";
import QuestionAnswer from "./components/QuestionAnswer";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

function App() {
  return (
    <div>
      <Title>리액트 면접 대비 정리</Title>
      <QuestionAnswer />
    </div>
  );
}

export default App;
