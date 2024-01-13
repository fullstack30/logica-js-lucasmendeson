function retornaNome (parametro, parametro2) {
    parametro = "Hello,";
    return parametro.concat(" ", parametro2);
}


let nome = retornaNome(" ", "World!");

console.log(nome);