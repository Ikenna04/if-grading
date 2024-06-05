// Grading Scores

let score = 67;
let grade;
let collegeStudent = false;
let totalScore = Number(score);

if (totalScore <= 100 && totalScore >= 90) {
	grade = 'A';
} else if (totalScore < 90 && totalScore >= 80) {
	grade = 'B';
} else if (totalScore < 80 && totalScore >= 70) {
	grade = 'C';
} else if (totalScore < 70 && totalScore >= 60) {
	grade = 'D';
} else if (totalScore < 60 && totalScore >= 50) {
	grade = 'E';
} else if (totalScore < 50 && totalScore >= 0) {
	if (collegeStudent) {
		grade = 'Your Result Is Unsatisfactory\nYou Got An F';
	} else {
		grade = 'F';
	}
} else {
	grade = 'Input A valid Number';
}

console.log(`Your score is ${score}`);
console.log(`Your grade is ${grade}`);
