type Props = {
    label: string;
    className: string;
    border: string;
    selected: boolean;
    validator: boolean | 0;
    isFirst: boolean;
    onClick: (e: React.SyntheticEvent<HTMLDivElement>) => void;
};
  
export const Answer = ({ border, className, selected, label, onClick, validator = 0, isFirst }: Props) => {
const borderColor = isFirst && validator === false ? "border-red-800" : "border-blue-950";

return (
    <div
    onClick={onClick}
    className={`${border} ${className} text-xs h-max cursor-pointer w-full h-10 border-2 rounded-md text-white flex items-center justify-start mb-4 px-4 py-2
        ${validator === 0 ? "bg-slate-900" : ""}
        ${selected && validator ? "bg-green-800 border-green-800" : ""}
        ${selected && !validator ? "bg-red-800" : ""}
        ${!selected ? "bg-slate-900" : ""}
        ${borderColor}
    `}
    >
    {label}
    </div>
);
};
  