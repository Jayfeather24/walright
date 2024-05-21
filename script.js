function checkAnswers() {
    // Get the user's input and split it into an array of answers
    let userInput = document.getElementById('answersInput').value.trim().toUpperCase().split(/\s*/);
    console.log(userInput);
    // Define the correct answers
    let correctAnswers = ['D', 'C', 'C', 'A', 'A', 'E', 'A', 'A', 'E', 'B', 'A', 'A', 'E', 'B', 'B', 'C', 'B', 'D', 'A', 'B', 'E', 'B', 'D', 'B', 'A', 'D', 'C', 'D', 'B', 'D'];
    console.log(userInput.length, correctAnswers.length);
    // Check if the number of answers provided matches the number of correct answers
    if (userInput.length !== correctAnswers.length) {
        document.getElementById('result').innerText = 'Error: Please provide all answers.';
        return;
    }

    let incorrectAnswers = [];

    // Check each answer against the correct answer
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] !== correctAnswers[i]) {
            incorrectAnswers.push({ position: i + 1, userAnswer: userInput[i], correctAnswer: correctAnswers[i] });
        }
    }

    // Calculate the score
    let correctCount = correctAnswers.length - incorrectAnswers.length;
    let score = (correctCount / correctAnswers.length) * 100;

    // Convert score to letter grade
    let grade;
    if (score >= 90) {
        grade = 'A';
        gradetext = "You CHEATER!"
    } else if (score >= 80) {
        grade = 'B';
        gradetext = "So bad not even an A"
    } else if (score >= 70) {
        grade = 'C';
        gradetext = "You are walright I guess"
    } else if (score >= 60) {
        grade = 'D';
        gradetext = "Maybe you should use GPT"
    } else {
        grade = 'F';
        gradetext = "Have some CatPats"
    }

    // Display the score and grade
    document.getElementById('result').innerHTML = `
        <div class="score">${score.toFixed(2)}%</div>
        <div class="grade">Grade: ${grade}<br>${gradetext}</div>
    `;

    // Display incorrect answers
    if (incorrectAnswers.length > 0) {
        let incorrectAnswersText = '<div class="incorrect-answers">Incorrect answers:</div>';
        incorrectAnswers.forEach(answer => {
            incorrectAnswersText += `
                <div class="answer-item">
                    ${answer.position}. Your answer ${answer.userAnswer} is incorrect.
                </div>
            `;
        });
        document.getElementById('incorrectAnswers').innerHTML = incorrectAnswersText;
    } else {
        document.getElementById('incorrectAnswers').innerHTML = '';
    }
}
