type Props = {
    children: React.ReactNode;
    label: string;
    numberOfQuestions: number;
    currentQuestion: number;
    enable: boolean;
    onClick: () => void
}

export const Question = ({ onClick, enable, children, label, numberOfQuestions, currentQuestion }: Props) => {
    return (
        <div className="max-h-full max-w-lg">
            <p className="text-gray-500 text-xs">{currentQuestion} / {numberOfQuestions}</p>
            <h1 className="text-white text-xl mb-10">{ label }</h1>
            <div className="flex flex-col">
                { children }
            </div>
            <button 
                className={`w-full h-10 bg-blue-800 text-white mt-4 ${enable && "block"} ${!enable && "hidden"}`} 
                onClick={onClick}>Next</button>
        </div>
    );
}