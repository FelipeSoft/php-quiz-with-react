type Props = {
    label: string;
    selected: boolean;
    validator: boolean | 0;
    onClick: (e: React.SyntheticEvent<HTMLDivElement>) => void;
}

export const Answer = ({ selected, label, onClick, validator = 0}: Props) => {
    return (
        <div 
            onClick={onClick} 
            className={`cursor-pointer w-full h-10 border-2 border-blue-950 rounded-xl text-white flex items-center justify-start mb-4 px-4 hover:bg-slate-800 hover:border-slate-800
            ${validator === 0 ? "bg-slate-900" : ""}
            ${selected && validator && "bg-green-800"}
            ${selected && !validator && "bg-red-800"} 
            `}>
            { label }
        </div>
    );
}