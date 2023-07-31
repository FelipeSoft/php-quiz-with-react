type Props = {
    children: React.ReactNode;
    label: string;
    assistant?: string;
    numberOfQuestions: number;
    currentQuestion: number;
    enable: boolean;
    onClick: () => void
}

export const Question = ({ onClick, assistant, enable, children, label, numberOfQuestions, currentQuestion }: Props) => {
    return (
        <div className="max-h-full max-w-lg">
            <p className="text-gray-500 text-xs">{currentQuestion} / {numberOfQuestions}</p>
            <h1 className="text-white text-lg mb-2 text-sm">{ label }</h1>
            <p className="text-white text-md mb-10">{ assistant }</p>
            <code></code>
            <div className="flex flex-col">
                { children }
            </div>
            <button 
                className={`w-full h-10 bg-blue-800 rounded-md text-white mt-4 ${enable && "block"} ${!enable && "hidden"}`} 
                onClick={onClick}>Next</button>
        </div>
    );
}