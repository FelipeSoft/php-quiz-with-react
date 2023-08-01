"use client";

import { questions } from "@/app/data/questions";
import { Question } from "./components/Question";
import { Answer } from "@/app/components/Answer";
import { AnswerType } from "@/app/types/AnswerType";
import { useState } from "react";
import { Result } from "@/app/components/Result";
import { Points } from "@/app/types/Points";
import { ProgressBar } from "@/app/components/ProgressBar";

const Page = () => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<AnswerType>({ index: null, status: 0 });
  const [isInteractable, setIsInteractable] = useState<boolean>(true);
  const [enable, setEnable] = useState<boolean>(false)
  const [current, setCurrent] = useState<number>(0)
  const [enableResult, setEnableResult] = useState<boolean>(false);
  const [points, setPoints] = useState<Points>({correct: 0, incorrect: 0});
  const [enableQuestion, setEnableQuestion] = useState<boolean>(true);
  const [showCorrect, setShowCorrect] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(10);
  const [progressPoints, setProgressPoints] = useState<number>(2);
  const [enableProgress, setEnableProgress] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (!isInteractable) return;
    let status = index === questions[current].correct;

    if(status){
      setPoints({
        ...points,
        correct: points.correct + 1
      });
      setSelectedAnswerIndex({index: index, status: status})
    } else if (!status) {
      setPoints({
        ...points,
        incorrect: points.incorrect + 1
      });
      setShowCorrect(questions[current].correct)
      setSelectedAnswerIndex({ index: index, status: 0 })
    }
    
    setIsInteractable(false);
    setEnable(true);
    setEnableResult(false);
  };

  const handleNext = () => {
    if(current + 1 < questions.length){
      setEnable(false);
      setCurrent(current + 1);
      setIsInteractable(true);
      setShowCorrect(null)
      setSelectedAnswerIndex({ index: null, status: 0 });

      setProgressPoints(progressPoints + 1);
      setProgress(( progressPoints / questions.length ) * 100);
    } else {
      setEnableResult(true);
      setEnableQuestion(false);
      setEnableProgress(false);
    }
  }

  return (
    <div className="relative container mx-auto max-w-lg min-h-screen flex flex-col items-center justify-center p-4">
      <ProgressBar width={progress} enable={enableProgress}/>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <Question   
          enableQuestion={enableQuestion}
          label={questions[current].question} 
          image={questions[current].assistant}
          numberOfQuestions={questions.length} 
          currentQuestion={current + 1}
          enable={enable}
          onClick={handleNext}
          >
          {questions[current].answers.map((element, index) => (
            <Answer
              standard={!(selectedAnswerIndex.index === index) && !(showCorrect === index)}
              isCorrect={showCorrect === index}
              key={index}
              validator={selectedAnswerIndex.status}
              selected={selectedAnswerIndex.index === index}
              onClick={() => handleClick(index)}
              label={element}
              className={!isInteractable ? "disable-hover" : ""}
            />
          ))}
        </Question>
        <Result 
          enable={enableResult}
          correct={points.correct}
          incorrect={points.incorrect}
        />
      </div>
    </div>
  );
};

export default Page;