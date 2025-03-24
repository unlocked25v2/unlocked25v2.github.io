document.addEventListener('DOMContentLoaded', (event) => {
    let inputSequence = '';
    const secretCode = 'testgames';

    document.addEventListener('keydown', (event) => {
        inputSequence += event.key;

        if (inputSequence.length > secretCode.length) {
            inputSequence = inputSequence.slice(-secretCode.length);
        }

        if (inputSequence === secretCode) {
            window.location.href = '../games/testgames1029384756.html';
        }
    });
});