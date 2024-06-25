document.addEventListener('DOMContentLoaded', (event) => {
    let inputSequence = '';
    const secretCode = 'marcowashere';

    document.addEventListener('keydown', (event) => {
        inputSequence += event.key;

        if (inputSequence.length > secretCode.length) {
            inputSequence = inputSequence.slice(-secretCode.length);
        }

        if (inputSequence === secretCode) {
            window.location.href = '../games/rizzler-simulator-skibidi.html';
        }
    });
});