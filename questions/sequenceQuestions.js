const sequenceQuestions = [
  {
    question: "2, 4, 6, 8,",
    options: ["10", "11", "12", "13", "14"],
    type: 'sequence',
    correctAnswer: ["10", "12","14"],
  },
  {
    question: "A A B A A B ",
    options: ["B", "A", "D", "A", "C","B"],
    type: 'sequence',
    correctAnswer: ["A", "A", "B"],
  },
  {
    question: "3, 6, 9, 3, 6, 9",
    options: ["7", "10", "9", "6", "3","8"],
    type: 'sequence',
    correctAnswer: ["3", "6", "9"],
  },
  {
    question: "1, 1, 5, 1, 1, 6, 1, 1, 7",
    options: ["1", "10", "9", "1", "8","1"],
    type: 'sequence',
    correctAnswer: ["1", "1", "8"],
  },
  {
    question: "1, 3, 5, 7, 9",
    options: ["10", "11", "12", "13", "14","15"],
    type: 'sequence',
    correctAnswer: ["11", "13"],
  },
];

export default sequenceQuestions;
