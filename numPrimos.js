function numPrimo(n) {
  var inicio = 2;
  while (inicio <= Math.sqrt(n)) 
  if (n % inicio++ < 1) 
  return 'O número '+n+' não é primo';
  
  return n > 1;
}
console.log(numPrimo(13));