type Props = {
    enable: boolean;
    backgroundColor: string;
    label: string;
    onClick: () => void;
}

export const Button = ({ enable, backgroundColor, label, onClick }: Props) => {
    return (
        <button onClick={onClick} className={`w-full h-max px-4 py-2 ${backgroundColor} rounded-md text-white text-xs 
        ${enable && "block pointer-events-auto"} 
        ${!enable && "opacity-0 pointer-events-none"}`}>
        { label }
        </button>
    )
}