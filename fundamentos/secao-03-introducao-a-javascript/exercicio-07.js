let n = 5;
let resultado = '';
let mark = "*"
let position = n;

for (let index = 0; index <= n; index +=1){
    for (let side = 0; side <= n; side += 1){
        if (side < position){
            resultado += ' ';
        } else {
            resultado += mark;
        }
    }
    console.log(resultado);
    resultado = '';
    position-= 1;
}