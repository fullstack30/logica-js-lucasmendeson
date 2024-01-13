function hello (parametro, parametro2) {
    parametro = "Hello,";
    return parametro.concat(" ", parametro2);
}


let nome = hello (" ", "World!");

console.log(nome);