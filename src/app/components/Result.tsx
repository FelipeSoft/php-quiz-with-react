import { questions } from "../data/questions";
import { Button } from "./Button";

type Props = {
    enable: boolean;
    correct: number;
    incorrect: number;
    total: number;
    onClick: () => void;
}

export const Result = ( { enable, correct, incorrect, total, onClick }: Props ) => {
    return (
        <div className={`
            w-max h-max bg-white p-7 rounded-md
            ${enable && "block"} 
            ${!enable && "hidden"}`}>   
            <div className="w-30 h-30">
                <h1 className="font-bold text-3xl mb-4">Questionário Finalizado!</h1>
                <p className="text-xs text-black text-center md:text-lg">Total de Questões: { total }</p>    
                <p className="text-xs text-black text-center md:text-lg">Porcentagem: { ((correct / questions.length) * 100).toFixed(1) } %</p>      
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-full rounded-md bg-green-800 text-white text-sm px-4 py-2 mt-3">Corretas: { correct }</div>   
                    <div className="w-full rounded-md bg-red-800 text-white text-sm px-4 py-2 mt-3">Incorretas: { incorrect }</div> 
                </div>    
            </div>  
            <Button onClick={onClick} label={"Resetar"} backgroundColor={"bg-blue-900"} enable={true}></Button>
        </div>
    );
}