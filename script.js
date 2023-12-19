// Define the text and the typing speed
const text = 'Hey, I am Sibin Joshi'; // Replace [Your Name] with your actual name
const typingSpeed = 150; // The speed/duration of the effect in milliseconds

let index = 0;

function typeWriter() {
  if (index < text.length) {
    // Add next character
    document.getElementById('typewriter-text').innerHTML += text.charAt(index);
    index++;
    // Wait before adding next character
    setTimeout(typeWriter, typingSpeed);
  }
}

// Start the typewriter effect once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    
    document.getElementById('home-link').addEventListener('click', function() {
      document.getElementById('home-content').style.display = 'block';
      document.getElementById('cv-content').style.display = 'none';
    });
    
    document.getElementById('cv-link').addEventListener('click', function() {
      document.getElementById('home-content').style.display = 'none';
      document.getElementById('cv-content').style.display = 'block';
    });
  });
  