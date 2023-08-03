type Props = {
    label: string;
    className: string;
    confirmed: boolean;
    isSelected: boolean;
    isCorrect: boolean;
    validator: boolean | 0;
    standard: boolean;
    onClick: () => void;
};
  
export const Answer = ({ className, label, onClick, validator = 0, isCorrect, standard, isSelected, confirmed }: Props) => {
    return (
        <div
        onClick={onClick}
        className={`${className} text-xs h-max cursor-pointer w-full border-2 border-blue-950 rounded-md text-white flex items-center justify-start mb-4 px-4 py-2            
            ${isSelected && "border-white bg-white text-black font-bold"}
            ${standard && "bg-slate-900"}
            ${isSelected && confirmed && validator && "bg-green-800 border-green-800"}
            ${!isSelected && confirmed && !validator && "bg-red-800 border-red-800"}
            ${isCorrect && !isSelected && "bg-green-800 border-green-800"}
            `}>
        {label}
        </div>
    );
};
  