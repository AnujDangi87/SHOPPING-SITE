// Typing text effect
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
    cursor.style.display = "none"; // hide cursor when done
  }
}

// Load footer dynamically
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
}

window.onload = () => {
  typeLetter();
  loadFooter();
};
