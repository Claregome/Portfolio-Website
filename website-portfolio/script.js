let menu  = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
     menu.classList.remove('bx-x');
     navbar.classList.remove('active');

}

const typed = new Typed('.multiple-text', {
      strings: ['Computer Science Student', 'Web Developer','AI Developer','Systems Builder','Problem Solver'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

    // Certificate Image Zoom
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".certificate-box img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function (event) {
    const modals = document.querySelectorAll(".project-modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};