let inssTax;
let irTax;

const salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    inssTax = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inssTax = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inssTax = salarioBruto * 0.11;
} else {
    inssTax = 570.88;
}

const salario = salarioBruto - inssTax;

if (salario <= 1903.98) {
    irTax = 0;
} else if (salario <= 2826.65) {
    irTax = (salario * 0.075) - 142.80;
} else if (salario <= 3751.05) {
    irTax = (salario * 0.15) - 354.80;
} else if (salario <= 4664.68) {
    irTax = (salario * 0.225) - 636.13;        
} else {
    irTax = (salario * 0.275) - 869.36;
}
console.log ("O Salário é de: " + (salario - irTax));
