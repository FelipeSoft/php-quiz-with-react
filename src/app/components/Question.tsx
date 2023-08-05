import React from "react";
import { Button } from "./Button";

type Props = {
    children: React.ReactNode;
    label: string;
    numberOfQuestions: number;
    currentQuestion: number;
    enableButtonConfirm: boolean; 
    enableButtonNext: boolean;
    enableQuestion: boolean;
    image?: string;
    onClick1: () => void;
    onClick2: () => void;
}

export const Question = ({ onClick1, onClick2, enableButtonConfirm, enableButtonNext, enableQuestion, children, label, numberOfQuestions, currentQuestion, image }: Props) => {
    return (
        <div className={`h-full w-full ${enableQuestion && "block"} ${!enableQuestion && "hidden"} mt-20`}>
            <p className="text-gray-500 text-xs">{currentQuestion} / {numberOfQuestions}</p>
            <h1 className="text-white text-sm">{ label }</h1>
            <div className="w-full h-auto">
                <img className={`w-full h-auto my-4`} src={`../assets/images/${image}`} alt="" />
            </div>
            <div className="flex flex-col">
                { children }
            </div>
            <div className={`flex items-center justify-between w-full gap-4`}>
                <div><Button onClick={onClick1} enable={enableButtonConfirm} label={"Confirmar"} backgroundColor={"bg-blue-600"}/></div>
                <div><Button onClick={onClick2} enable={enableButtonNext} label={"Próxima"} backgroundColor={"bg-blue-800"}/></div>
            </div>
        </div>
    );
}