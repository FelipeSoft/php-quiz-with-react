"use client";

import { questions } from "@/app/data/questions";
import { Question } from "./components/Question";
import { Answer } from "@/app/components/Answer";
import { AnswerType } from "@/app/types/AnswerType";
import { useState, useEffect } from "react";

const Page = () => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<AnswerType>({ index: 0, status: 0 });
  const [isInteractable, setIsInteractable] = useState<boolean>(true);
  const [enable, setEnable] = useState<boolean>(false)

  let current = 0;

  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>, index: number) => {
    if (!isInteractable) return;
    let status = index === questions[current].correct;

    setSelectedAnswerIndex({ index: index, status: status });
    setIsInteractable(false);
    setEnable(true);
  };

  const handleNext = () => {
    setEnable(false);
    current++;
    console.log(questions[current]);
  }

  return (
    <div className="container mx-auto w-screen min-h-screen flex flex-col items-center justify-center">
      <Question 
        label={questions[current].question} 
        numberOfQuestions={questions.length} 
        currentQuestion={current + 1}
        enable={enable}
        onClick={handleNext}
        >
        {questions[current].answers.map((element, index) => (
          <Answer
            key={index}
            border={`border-blue-950`}
            validator={selectedAnswerIndex.status}
            selected={selectedAnswerIndex.index === index}
            onClick={(event) => handleClick(event, index)}
            label={element}
            className={!isInteractable ? "disable-hover" : ""}
            isFirst={index === 0}
          />
        ))}
      </Question>
    </div>
  );
};

export default Page;