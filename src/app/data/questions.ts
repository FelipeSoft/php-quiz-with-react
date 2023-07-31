import { Question } from "@/app/types/Question";
import { Assistant } from "@/app/components/Assistant";

export const questions: Question[] = [
    {
        id: 1, 
        question: "Como as variáveis são declaradas no PHP?", 
        answers: ["variavel = 0", "_variavel = 0", "$variavel = 0", "$_variavel = 0"],
        correct: 2
    },
    {
        id: 2, 
        question: "Qual a forma correta de declarar funções anônimas no PHP?", 
        answers: ["fn() { código }", "function() { código }", "f() { código }", "def { código }"],
        correct: 1
    },
    {
        id: 3, 
        question: "Qual a diferença entre require e include?", 
        answers: 
            [
                "A expressão include inclui um arquivo e avalia-o, já a require é idêntica a include exceto que em caso de falha também produzirá um erro fatal de nível E_COMPILE_ERROR.", 
                "A expressão require inclui um arquivo e avalia-o, já a include é idêntica a require exceto que em caso de falha também produzirá um erro fatal de nível E_COMPILE_ERROR.", 
                "A expressão include importa um arquivo da bibloteca PHP Error de acordo com um erro, já a require também importa um arquivo da biblioteca, contudo para a execução do script exibindo um Fatal Error.", 
                "A expressão require importa um arquivo da bibloteca PHP Error de acordo com um erro, já a include também importa um arquivo da biblioteca, contudo para a execução do script exibindo um Fatal Error."
            ],
        correct: 0
    },
    {
        id: 4, 
        question: "Analise o código abaixo e assinale a alternativa que responde ao resultado correto:", 
        assistant: <Assistant />,
        answers: 
            [
                "Sequência: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.", 
                "Sequência: 1, 2, 3, 4, 5, 6, 7, 8, 9.", 
                "Sequência: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0.", 
                "Sequência: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1."
            ],
        correct: 2
    },
    {
        id: 5, 
        question: "Diferencie as estruturas de repetições while e do-while:", 
        answers: 
            [
                "A estrutura while verifica uma condição inicialmente para depois executar um bloco de código, já o do-while executa um trecho de código primeiro e depois faz uma verificação.", 
                "Ambas as estruturas fazem uma verificação inicialmente para depois executar um bloco de código.", 
                "A estrutura do-while verifica uma condição inicialmente para depois executar um bloco de código, já o while executa um trecho de código primeiro e depois faz uma verificação.",
                "Ambas as estruturas fazem a execução de um bloco de código para verificar as condições."
            ],
        correct: 0
    },
    {
        id: 6, 
        question: "Diferencie as estruturas de repetições while e do-while:", 
        answers: 
            [

            ],
        correct: 0
    },
    {
        id: 7, 
        question: "Diferencie as estruturas de repetições while e do-while:", 
        answers: 
            [

            ],
        correct: 0
    },
    {
        id: 8, 
        question: "Diferencie as estruturas de repetições while e do-while:", 
        answers: 
            [

            ],
        correct: 0
    },
    {
        id: 9, 
        question: "Diferencie as estruturas de repetições while e do-while:", 
        answers: 
            [

            ],
        correct: 0
    },
    {
        id: 10, 
        question: "Diferencie as estruturas de repetições while e do-while:", 
        answers: 
            [
 
            ],
        correct: 0
    },
];