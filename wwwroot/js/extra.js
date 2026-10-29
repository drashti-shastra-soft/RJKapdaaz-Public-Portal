$('.carousel').carousel({
    interval: 2500
});

//Reveal Division on scroll
const sections = document.querySelectorAll("section");

sections.forEach((section) => {

    window.addEventListener("load", eventListener);
    window.addEventListener("scroll", eventListener);

    function eventListener() {
        let windowHeight = window.innerHeight;
        let sectionRectTop = section.getBoundingClientRect().top;

        if (sectionRectTop < windowHeight) {
            section.classList.add("active");
        }
    }
    window.addEventListener("scroll", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            if (section.classList.contains("active")) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });

    window.addEventListener("load", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealRectTop = reveal.getBoundingClientRect().top;

            if (revealRectTop < windowHeight) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });
});

$('.owl-carousel').owlCarousel({
    items: 7,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        960: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
});

var d = new Date();
var n = d.getFullYear();
document.getElementById("footerDate").innerHTML = n;

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
        $(".BackToTop").css("opacity", "1");
        $(".BackToTop").css("transform", "translate(0, 0)");
    } else {
        $(".BackToTop").css("opacity", "0");
        $(".BackToTop").css("transform", "translate(0, 50px)");
    }
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 3500; // Adjust the divisor for speed

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 10); // Adjust for smoother animation
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});