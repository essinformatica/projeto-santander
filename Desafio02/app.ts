
// Como podemos melhorar o esse código usando TS? 
//resposta 01
let pessoa1 = {
    nome:"maria",
    idade:29,
    profissao: "atriz"
};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

//resposta 02
let pessoa2:{nome:string, idade:number,profissao: string}= {
    nome: "roberto",
    idade:19,
    profissao:"Padeiro"
}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";
enum profissao{
    Padeiro,
    Atriz,
    Engenheiro
}

interface Ipessoa{
    nome: string,
    idade:number,
    profissao :profissao
}

//resposta 03
let pessoa3 :Ipessoa ={
    nome: "laura",
    idade: 32,
    profissao:profissao.Atriz
};

//resposta 04
const pessoa4 ={} as Ipessoa; {
    pessoa4.nome = "carlos",
    pessoa4.idade = 19,
    pessoa4.profissao = profissao.Padeiro
}