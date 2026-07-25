const header = document.querySelector("header");

const sections = document.querySelectorAll(".menu-content[id]");

const navLinks = document.querySelectorAll(".menu-category-nav a");

window.addEventListener("scroll", () => {

    // Shrink header
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Highlight current section
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

fadeElements.forEach(element => {

    observer.observe(element);

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500){

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});