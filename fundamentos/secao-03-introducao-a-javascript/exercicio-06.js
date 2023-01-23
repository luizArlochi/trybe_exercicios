let angA = 20;
let angB = 50;
let angC = 110;
let soma = angA + angB + angC;
let angPositive = angA > 0 && angB > 0 && angC > 0;

if (angPositive) {
    if (soma === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('erro')
}