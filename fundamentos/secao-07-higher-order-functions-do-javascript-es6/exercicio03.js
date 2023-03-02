const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    } if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
}

const score = (rightAnswer, studentAnswer, action) => {
    let count = 0;
    for (let i = 0; i < rightAnswer.length; i += 1) {
        const finalReturn = action(rightAnswer[i], studentAnswer[i]);
        count += finalReturn;
    }
    return `O resultado é: ${count}`;
};

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));