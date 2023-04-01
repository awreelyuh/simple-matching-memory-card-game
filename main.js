const accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const cards = document.querySelectorAll('.card');
function flipCard() {
    this.classList.toggle('is-flipped');
}
cards.forEach((card) => card.addEventListener('click', flipCard));