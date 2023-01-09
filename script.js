const frutas = ["laranja", "limão", "uva"];


// Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.
const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]
console.log(fruta1.innerHTML)

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]
console.log(fruta2.innerHTML)

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]
console.log(fruta3.innerHTML)

// # Exercício 2

// Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
// Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
// Cole o comando aqui:
// ```jsx
//    document.getElementById("frutaNova")
//    <input type="text" name="frutaNova" id="frutaNova">
//    console.log(frutaNova.value)
// // ```


// # Exercício 3

// Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.
const fruta4 = document.getElementById("fruta-4")
const addFruta = () => {
    fruta4.innerHTML = document.getElementById("frutaNova").value;
    frutas.splice(3,1); /*Usei esse metodo de array para que toda fosse adicionado uma nova fruta, fosse apagado o ultimo que havia sido adicionado e colocasse a nova fruta digitada no input*/ 
    frutas.push(fruta4.innerHTML);
    console.log(frutas);
}