let n = 5;
let meio = (n+1)/2;

for (let index = 1; index <= meio; index+= 1) {
  let mark = '';
  for (let side = 1; side <= (meio - index); side+= 1) {
    mark += ' ';
  }
  for (let position = 1; position <= (2 * index - 1); position+= 1) {
    mark += '*';
  }
  console.log(mark);
}
