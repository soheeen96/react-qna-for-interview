import React from "react";
import styled from "styled-components";
import QuestionAnswer from "./Components/QuestionAnswer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Header from "./Components/Header";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/qna" element={<QuestionAnswer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
