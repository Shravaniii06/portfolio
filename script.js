// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent ✅");
});