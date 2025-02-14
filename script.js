const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let input = '';
const correctPassword = '300624';

function processInput() {
    if (input === correctPassword) {
        window.location.href = 'question.html';
     } else //if (input.length === correctPassword.length)
      {
        alert('Salah = Coklat'); 
        clearInput();
    }
}

function clearInput() {
    input = '';
    display.textContent = '';
}

function deleteLastCharacter() {
    input = input.slice(0, -1);
    display.textContent = input;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '>') {
            processInput();
        } else if (button.textContent === 'del') {
            deleteLastCharacter();
        } else {
            input += button.textContent;
            display.textContent = input;
        }
    });
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processInput();
    }
});

// window.onload = function() {
//     var audio = new Audio('media/Jim_Brickman_Martina_McBride_-_My_Valentine_Lyrics.mp3');
//     audio.loop = true; // Memutar audio berulang-ulang
//     // audio.volume = 1; // Mengatur volume menjadi 40%
//     audio.play(); // Memutar audio secara otomatis
//   }
var audio = document.getElementById("myAudio");

    function playAudio() {
      audio.muted = false;
      audio.play();
    }

    const passcodeDisplay = document.querySelector('.display');
