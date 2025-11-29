 var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto", 
            initialSlide: 1, 
            loop: true, 
            coverflowEffect: {
                rotate: 0, 
                stretch: 0, 
                depth: 100, 
                modifier: 2.5, 
                slideShadows: true, 
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });