function ejercicio(word) {
    const frase = word.split("").reverse().join("")

    return frase === word ? "Es Palindrome" : "No Es palindrome"
};

console.log(ejercicio("Anna"));
console.log(ejercicio("hola"));
console.log(ejercicio("nose"));
console.log(ejercicio("progrmar"));
console.log(ejercicio("ayuda"));
console.log(ejercicio("mama"));
console.log(ejercicio("polo"));