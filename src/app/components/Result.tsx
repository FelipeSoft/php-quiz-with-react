import { questions } from "../data/questions";

type Props = {
    enable: boolean;
    correct: number;
    incorrect: number;
}

export const Result = ( { enable, correct, incorrect }: Props ) => {
    let message = "";

    return (
        <div className={`
            w-max h-max 
            ${enable && "block"} 
            ${!enable && "hidden"}`}>   
            <div className="w-30 h-30">
                <p className="text-xs text-white text-center">Total de Questões: { correct + incorrect }</p>    
                <p className="text-xs text-white text-center">Porcentagem: { ((correct / questions.length) * 100).toFixed(1) } %</p>      
                <div className="w-full rounded-md bg-green-800 text-white text-sm px-4 py-2 mt-3">Corretas: { correct }</div>   
                <div className="w-full rounded-md bg-red-800 text-white text-sm px-4 py-2 mt-3">Incorretas: { incorrect }</div> 
            </div>  
            <h1 className="text-lg text-white">{ message }</h1>
        </div>
    );
}