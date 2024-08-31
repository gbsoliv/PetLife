
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const img = question.querySelector('img');
        const paragraph = question.querySelector('.paragraph');
        
        img.addEventListener('click', () => {
            if (question.classList.contains('ativa')) {
                question.classList.remove('ativa');
            } else {
                question.classList.add('ativa');
            }
        });

        question.querySelector('h3').addEventListener('click', () => {
            if (question.classList.contains('ativa')) {
                question.classList.remove('ativa');
            } else {
                question.classList.add('ativa');
            }
        });
    });
});


