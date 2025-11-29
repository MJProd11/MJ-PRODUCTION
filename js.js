window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-left');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 300); 
    });
});

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll('.typing-text');

    paragraphs[0].style.display = 'block';

    function typeParagraph(p, speed = 0.5, callback) {
        const text = p.textContent;
        p.textContent = '';
        let charIndex = 0;

        function typeChar() {
            if (charIndex < text.length) {
                p.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, speed);
            } else if (callback) {
                callback();
            }
        }
        typeChar();
    }

    function typeAll(index = 0) {
        if (index < paragraphs.length) {
          
            paragraphs[index].style.display = 'block';

            typeParagraph(paragraphs[index], 0.5, () => {

                typeAll(index + 1);
            });
        }
    }

    typeAll(); 
});


document.getElementById("sendBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const form = this.closest("form");
    const firstName = form.querySelector('input[name="first_name"]').value.trim();
    const lastName = form.querySelector('input[name="last_name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!firstName || !lastName || !email || !message) {
        alert("Please fill in all required fields before sending your message.");
        return; 
    }
    alert("Your message has been sent!");
    form.reset();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: false,    
  loop: false,              

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
