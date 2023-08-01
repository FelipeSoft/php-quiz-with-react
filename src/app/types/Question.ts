import React from "react";

export type Question = {
    id: number;
    question: string;
    answers: Array<string>;
    correct: number;
    assistant?: string;
}