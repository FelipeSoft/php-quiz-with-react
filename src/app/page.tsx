"use client";

import { questions } from "@/app/data/questions";
import { Question } from "./components/Question";
import { Answer } from "@/app/components/Answer";
import { AnswerType } from "@/app/types/AnswerType";
import { useState } from "react";
import { Result } from "@/app/components/Result";
import { Points } from "@/app/types/Points";

const Page = () => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<AnswerType>({ index: 0, status: 0 });
  const [isInteractable, setIsInteractable] = useState<boolean>(true);
  const [enable, setEnable] = useState<boolean>(false)
  const [current, setCurrent] = useState<number>(0)
  const [result, setResult] = useState<boolean>(false);
  const [points, setPoints] = useState<Points>({correct: 0, incorrect: 0});
  
  const handleClick = (event: React.SyntheticEvent<HTMLDivElement>, index: number) => {
    if (!isInteractable) return;
    let status = index === questions[current].correct;

    if(status){
      
    }
    setSelectedAnswerIndex({ index: index, status: status });
    setIsInteractable(false);
    setEnable(true);
  };

  const handleNext = () => {
    if(current < questions.length){
      setEnable(false);
      setCurrent(current + 1);
      setIsInteractable(true);
      setSelectedAnswerIndex({index: 0, status: 0})
    } else {
      setResult(true);
    }
  }

  return (
    <div className="container mx-auto w-screen min-h-screen flex flex-col items-center justify-center">
      <Question 
        label={questions[current].question} 
        assistant={questions[current].assistant}
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
      <Result 
        enable={enable}
        correct={points.correct}
        incorrect={points.incorrect}
      />
    </div>
  );
};

export default Page;