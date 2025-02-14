const messages = [
    "Yakin?",
    "Bener2 yakin kah??",
    "Ga becanda kan?",
    "please lah..",
    "Pikirin baik2!",
    "Kalo jawabnya engga gua sedih ini buset",
    "gua marah y",
    "peringatan terakhir",
    "yaudah deh gabisa maksa gua..",
    "lol banget dia cu, i love youww ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "time.html";
}