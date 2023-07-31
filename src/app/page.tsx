"use client";

import { questions } from "@/app/data/questions";
import { Question } from "./components/Question";
import { Answer } from "@/app/components/Answer";
import { AnswerType } from "@/app/types/AnswerType";
import { useState } from "react";

const Page = () => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<AnswerType>({index: 0, status: 0});
    const [isInteractable, setIsInteractable] = useState<boolean>(true);

    const handleClick = (event: React.SyntheticEvent<HTMLDivElement>, index: number) => {
        if (!isInteractable) return;

        setSelectedAnswerIndex({index: index, status: 0});

        if(index === questions[0].correct){
            setSelectedAnswerIndex({index: index, status: true});
        } else {
            setSelectedAnswerIndex({index: index, status: false});
        }

        setIsInteractable(false);
    }

    return (
        <div className="container mx-auto w-screen min-h-screen flex flex-col items-center justify-center">
            <Question label={questions[0].question} numberOfQuestions={questions.length} currentQuestion={1}>
                {questions[0].answers.map((element, index) => 
                    <Answer
                        validator={selectedAnswerIndex.status}
                        selected={selectedAnswerIndex.index === index}
                        onClick={(event) => handleClick(event, index)} 
                        label={element}
                    />
                )}
            </Question>
        </div>
    );
}

export default Page;