function somatorio(numeros){
let total = 0;

for ( let i = 0; i < numeros.length; i++ ){
   total += numeros[i];
}
return total
}
let numeros = [1, 2, 34, 2];
console.log(somatorio(numeros));