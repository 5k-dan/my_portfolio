const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on menu icon click
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// Open GitHub profile when "Visit GitHub" button is clicked
document.getElementById("visit-github").onclick = () => {
    window.open("https://github.com/5k-dan", "_blank");
};
