const text = "Welcome to ShopSmart";
const typingText = document.getElementById("typing-text");
const cursor = document.querySelector(".cursor");
let index = 0;

function typeLetter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 100);
  } else {
    cursor.style.display = "none"; // hide cursor when typing is complete
  }
}

window.onload = typeLetter;
