const answerButtons = document.querySelectorAll('.checkAnswer');
const resultContainer = document.getElementById('resultContainer');

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedAnswer = button.textContent;
        checkAnswer(selectedAnswer);
    });
});

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === 'word') {
        showResult('¡Correcto!');
    } else {
        showResult('¡Incorrecto!');
    }
}

function showResult(result) {
    resultContainer.textContent = result;
}