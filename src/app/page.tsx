"use client";

import { useState } from "react";
import { questions } from "@/app/data/questions";
import { Question } from "./components/Question";
import { Answer } from "@/app/components/Answer";
import { Result } from "@/app/components/Result";
import { Points } from "@/app/types/Points";
import { ProgressBar } from "@/app/components/ProgressBar";

const Page = () => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState({ index: -1, status: 0 });
  const [isInteractable, setIsInteractable] = useState(true);
  const [enable, setEnable] = useState({ enableButtonNext: false, enableButtonConfirm: false });
  const [current, setCurrent] = useState(0);
  const [enableResult, setEnableResult] = useState(false);
  const [points, setPoints] = useState<Points>({ correct: 0, incorrect: 0 });
  const [showCorrect, setShowCorrect] = useState<number | null>(null);
  const [progressPoints, setProgressPoints] = useState(1);
  const [selected, setSelected] = useState(-1);
  const [confirmed, setConfirmed] = useState(false);

  const handleSelect = (index: number) => {
    if (!isInteractable) return;
    setSelected(index);
    setSelectedAnswerIndex({ index: index, status: 0 });
    setEnable({ ...enable, enableButtonConfirm: true });
  };

  const handleConfirm = () => {
    const status = selectedAnswerIndex.index === questions[current].correct ? 1 : 0;
    setIsInteractable(false);
    setEnable({ enableButtonNext: true, enableButtonConfirm: false });
    setSelectedAnswerIndex({ index: selected, status: status });
    setEnableResult(false);
    setConfirmed(true);

    if (status) {
      setPoints({ ...points, correct: points.correct + 1 });
    } else {
      setPoints({ ...points, incorrect: points.incorrect + 1 });
      setShowCorrect(questions[current].correct);
    }
  };

  const handleNext = () => {
    setEnable({ enableButtonNext: false, enableButtonConfirm: false });
    setIsInteractable(true);
    setShowCorrect(null);
    setSelectedAnswerIndex({ index: -1, status: 0 });
    setProgressPoints(progressPoints + 1);
    setCurrent(current + 1);

    if (current >= questions.length - 1) {
      setEnableResult(true);
      setIsInteractable(false);
    }
    setConfirmed(false);
  };

  const handleReset = () => {
    setEnableResult(false);
    setCurrent(0);
    setEnable({ enableButtonConfirm: false, enableButtonNext: false })
    setProgressPoints(1);
    setSelectedAnswerIndex({ index: -1, status: 0 });
    setIsInteractable(true);
  }

  const progress = (progressPoints / questions.length) * 100;
  const enableProgress = current < questions.length;

  return (
    <div className="relative container mx-auto max-w-lg min-h-screen flex flex-col items-center justify-center p-4">
      <ProgressBar width={progress} enable={enableProgress} />
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        {current < questions.length && (
          <Question
            enableQuestion={true}
            label={questions[current].question}
            image={questions[current].assistant}
            numberOfQuestions={questions.length}
            currentQuestion={current + 1}
            enableButtonConfirm={enable.enableButtonConfirm}
            enableButtonNext={enable.enableButtonNext}
            onClick1={handleConfirm}
            onClick2={handleNext}
          >
            {questions[current].answers.map((element, index) => (
              <Answer
                key={index}
                standard={!(selectedAnswerIndex.index === index) && !(showCorrect === index)}
                isCorrect={showCorrect === index}
                confirmed={confirmed}
                validator={selectedAnswerIndex.index === questions[current].correct}
                onClick={() => handleSelect(index)}
                label={element}
                className={!isInteractable ? "disable-hover" : ""}
                isSelected={selectedAnswerIndex.index === index}
              />
            ))}
          </Question>
        )}
        {enableResult && (
          <Result
            onClick={handleReset}
            correct={points.correct}
            incorrect={points.incorrect}
            total={questions.length}
            enable={enableResult}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
