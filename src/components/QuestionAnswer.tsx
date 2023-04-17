import React, { useState } from "react";
import styled from "styled-components";
import { questions } from "../questions";

const QnAWrap = styled.ul``;
const QuestionWrap = styled.li`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;
const Question = styled.p``;
const AnswerButton = styled.button``;
const Answer = styled.li`
  width: 100%;
  white-space: pre-wrap;
`;

interface Question {
  question: string;
  answer: string;
}

function QuestionAnswer() {
  //showAnswer은 boolean 값을 가지는 배열로 문제의 답이 보여지는지 여부를 저장
  //questions 배열의 길이만큼 크기를 가지고 모든요소를 false로 fill(저장)해서 초기화한 배열 생성함
  const [showAnswer, setShowAnswer] = useState(
    Array(questions.length).fill(false)
  );
  const handleClick = (index: number) => {
    //새로운 배열 newShowAnswers를 만들어서 현재 showAnswers 배열을 복사
    const newShowAnswer = [...showAnswer];

    //클릭된 문제의 인덱스에 해당하는 요소를 반전시킴
    newShowAnswer[index] = !newShowAnswer[index];

    //setShowAnswers를 호출하여 상태를 업데이트
    setShowAnswer(newShowAnswer);
  };
  return (
    <div>
      <QnAWrap>
        {questions.map((question, index) => (
          <QuestionWrap key={question.id}>
            <Question>{question.question}</Question>
            <AnswerButton onClick={() => handleClick(index)}>
              {showAnswer[index] ? "Hide Answer" : "Show Answer"}
            </AnswerButton>

            {showAnswer[index] && <Answer>{question.answer}</Answer>}
            {/* {showAnswer[index] &&
              question.answer
                .split("\n")
                .map((line, i) => <Answer key={i}>{line}</Answer>)} */}
          </QuestionWrap>
        ))}
      </QnAWrap>
    </div>
  );
}

export default QuestionAnswer;
