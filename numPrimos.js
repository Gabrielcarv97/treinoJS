function numPrimo(number) {
  var inicio = 2;
  while (inicio <= Math.sqrt(number)) 
  if (number % inicio++ < 1) 
  return 'O número '+number+' não é primo';
  
  return number > 1;
}
console.log(numPrimo(13));