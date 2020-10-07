function mdc(m, n) {
    var numero = 0;
    m = parseInt(m);
    n = parseInt(n);

    numero = Math.min(m, n);

    while (m % numero != 0 || n % numero != 0) {
        numero--;
    }

    return numero;
}
console.log(mdc(40, 20))