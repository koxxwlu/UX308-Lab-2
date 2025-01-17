let levelA = 90;
let levelB = 85;
let levelC = 75;
let levelD = 65;
let levelE = 51;
let levelF = 50;

let numGrade = 65;
var letterGrade = "A";

if (numGrade >= levelA) {
    letterGrade = "A";
} else if (numGrade >= levelB) {
    letterGrade = "B";
} else if (numGrade >= levelC) {
    letterGrade = "C";
} else if (numGrade >= levelD) {
    letterGrade = "D";
} else if (numGrade >= levelE) {
    letterGrade = "E";
} else if (numGrade <= levelF) {
    letterGrade = "F"
}

console.log(`${numGrade}% is a letter grade of ${letterGrade}.`)