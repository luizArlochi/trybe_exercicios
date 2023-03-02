const lotteryCheck = (betNumber, number) => betNumber === number;

const result = (betNumber, callback) => {
    const number = Math.floor((Math.random()* 3) + 1);
    return callback(betNumber, number) ? 'Vitória' : 'Derrota';
}

console.log(result(2, lotteryCheck));
