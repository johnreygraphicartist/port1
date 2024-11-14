function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}




