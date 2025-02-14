var modal = document.getElementById("myModal");
var img = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        img.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

setTimeout(function() {
    document.getElementById("body").style.opacity = 1;
  }, 500); // Tunda selama 2 detik

// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const photoWidth = document.querySelector('.photo').offsetWidth;
// let currentPosition = 0;

// nextButton.addEventListener('click', () => {
//   currentPosition += photoWidth;
//   if (currentPosition > photos.offsetWidth - gallery.offsetWidth) {
//     currentPosition = photos.offsetWidth - gallery.offsetWidth;
//   }
//   photos.style.transform = `translateX(-${currentPosition}px)`;
// });

// prevButton.addEventListener('click', () => {
//   currentPosition -= photoWidth;
//   if (currentPosition < 0) {
//     currentPosition = 0;
//   }
//   photos.style.transform = `translateX(-${currentPosition}px)`;
// });