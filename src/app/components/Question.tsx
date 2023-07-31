import React from "react";

type Props = {
    children: React.ReactNode;
    label: string;
    assistant?: React.ReactNode;
    numberOfQuestions: number;
    currentQuestion: number;
    enable: boolean;
    enableQuestion: boolean;
    onClick: () => void
}

export const Question = ({ onClick, assistant, enable, enableQuestion, children, label, numberOfQuestions, currentQuestion }: Props) => {
    const createMarkup = (HTMLString: any) => {
        return { __html: HTMLString}
    }

    const assistantElement = React.createElement('div', {dangerouslySetInnerHTML: createMarkup(assistant)})

    return (
        <div className={`max-h-full max-w-lg ${enableQuestion && "block"} ${!enableQuestion && "hidden"}`}>
            <p className="text-gray-500 text-xs">{currentQuestion} / {numberOfQuestions}</p>
            <h1 className="text-white text-lg mb-2 text-sm">{ label }</h1>
            <div className="text-white text-md mb-10">{ assistantElement }</div>
            <div className="flex flex-col">
                { children }
            </div>
            <button 
                className={`w-full h-10 bg-blue-800 rounded-md text-white mt-4 ${enable && "block"} ${!enable && "hidden"}`} 
                onClick={onClick}>Next</button>
        </div>
    );
}