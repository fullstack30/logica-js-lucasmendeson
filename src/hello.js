
function retornaNome (parametro, parametro2) {
    parametro = "Hello,";
    return parametro.concat(" ", parametro2);
}


let nome = retornaNome(" ", "World!");

function hello(frase = "World") {
    
    if (typeof frase != 'string') {
        frase = "World";
    }
    return "Hello, " + frase + "!";
}
console.log(nome);

