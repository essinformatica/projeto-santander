// Como podemos rodar isso em um arquivo .ts sem causar erros? 
//resposta 1
let empregados = {
    codigo: 10,
    nome:"Jose"
};

empregados.codigo =10;
empregados.nome= "Jose";

//resposta 2
let empregados1:{codigo:number, nome:string}={
    codigo:10,
    nome: "Maria"

} 
empregados1.codigo=10;
empregados1.nome="Maria";

//resposta 3
interface Ifuncionario{
    codigo: number,
    nome : string
};


let empregados2: Ifuncionario={
    codigo: 1,
    nome: "Maria"

};
//resposta 4
const empregados4 ={} as Ifuncionario
empregados4.codigo=2;
empregados4.nome = "Pedro";


