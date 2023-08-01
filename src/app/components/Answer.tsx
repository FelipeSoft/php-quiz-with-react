import { AnswerType } from "../types/AnswerType";

type Props = {
    label: string;
    className: string;
    selected: boolean;
    isCorrect: boolean;
    validator: boolean | 0;
    onClick: (e: React.SyntheticEvent<HTMLDivElement>) => void;
};
  
export const Answer = ({ className, selected, label, onClick, validator = 0, isCorrect}: Props) => {
    return (
        <div
        onClick={onClick}
        className={`${className} text-xs h-max cursor-pointer w-full border-2 rounded-md text-white flex items-center justify-start mb-4 px-4 py-2
            ${!selected && "bg-slate-900 border-blue-950"}
            ${selected && validator && "bg-green-800 border-green-800"}
            ${selected && !validator && "bg-red-800 border-red-800"}
            ${!selected && !validator && "bg-slate-900"}
            ${isCorrect && "bg-green-800 border-green-800"}
            `}>
        {label}
        </div>
    );
};
  