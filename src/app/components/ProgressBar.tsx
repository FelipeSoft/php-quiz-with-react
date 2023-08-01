type Props = {
    width: number;
    enable: boolean;
}

export const ProgressBar = ({ width, enable }: Props) => {
    return (
        <div className={`absolute top-5 w-full h-4 bg-slate-900 border-2 border-gray-400 rounded-full ${enable && "block"} ${!enable && "hidden"}`}>
            <div style={{ width: `${width.toString()}%` }} className={`h-full rounded-full bg-gradient-to-l to-blue-300 via-blue-600 from-blue-900 transition-all`}></div>
        </div>
    );
}