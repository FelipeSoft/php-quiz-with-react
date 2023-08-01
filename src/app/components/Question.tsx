import React from "react";

type Props = {
    children: React.ReactNode;
    label: string;
    numberOfQuestions: number;
    currentQuestion: number;
    enable: boolean;
    enableQuestion: boolean;
    image?: string;
    onClick: () => void
}

export const Question = ({ onClick, enable, enableQuestion, children, label, numberOfQuestions, currentQuestion, image }: Props) => {
    return (
        <div className={`max-h-full w-full ${enableQuestion && "block"} ${!enableQuestion && "hidden"}`}>
            <p className="text-gray-500 text-xs">{currentQuestion} / {numberOfQuestions}</p>
            <h1 className="text-white mb-4 text-sm">{ label }</h1>
            <div className="w-full h-auto">
                <img className={`w-full h-auto`} src={`/assets/images/ ${image}`} alt="" />
            </div>
            <div className="flex flex-col">
                { children }
            </div>
            <button 
                className={`w-full h-max px-4 py-2 bg-blue-800 rounded-md text-white text-xs mt-4 ${enable && "block pointer-events-auto"} ${!enable && "opacity-0 pointer-events-none"}`} 
                onClick={onClick}>Next</button>
        </div>
    );
}