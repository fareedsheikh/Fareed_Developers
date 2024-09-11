const hamburger = document.querySelector('#links .hamburger');
const nav_span = document.querySelectorAll("#links span")
const nav_links = document.querySelectorAll("#links a")
const sidebar = document.querySelector('.side_menu')
const burger = document.querySelector('.hamburger')
const hero = document.querySelector(".overlay");
const croxx = document.querySelector('.close')



// <!-- -------------------------------------------------- Const ---------------------------------------------- -->


gsap.to(".dot", {
    y: 40,
    scaleX: 1.7,
    scaleY: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: {
        each: 0.2
    }
});

// JavaScript to handle the preloader
window.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            preloader.style.display = "none";
        }
    });
});


// <!-- -------------------------------------------------- Gsap_Basic ---------------------------------------------- -->
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// <!-- -------------------------------------------------- Gsap_Basic_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Gsap_Basic_Animation_For_Scrolling ---------------------------------------------- -->



// <!-- -------------------------------------------------- Gsap_Basic_Animation_For_Scrolling_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Gsap_Transition_for_Navbar_When_Scroll ---------------------------------------------- -->


// <!-- -------------------------------------------------- Gsap_Transition_for_Navbar_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Click_Hamburger_to_show_Side_Menu_With_Gsap_Animation ---------------------------------------------- -->

burger.addEventListener("click", () => {
    sidebar.classList.add("visible");
});

croxx.addEventListener("click", () => {
    sidebar.classList.remove("visible");
});

gsap.set(sidebar, { xPercent: 100 });

function openSidebar() {
    gsap.to(sidebar, { xPercent: 0, duration: 0.5, ease: 'power2.inOut' });
}

function closeSidebar() {
    gsap.to(sidebar, { xPercent: 100, duration: 0.5, ease: 'power2.inOut' });
}

burger.addEventListener('click', openSidebar);

croxx.addEventListener('click', closeSidebar);


gsap.registerPlugin(ScrollTrigger);
gsap.to("#contact", {
    backgroundColor: "#000",
    duration: .6,
    scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});


ScrollTrigger.create({
    trigger: "#contact",
    start: "top 7%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to black");
        gsap.to(hamburger, { color: "#fff", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(hamburger, { color: "#000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#contact",
    start: "top 7%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_span, { color: "#fff", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_span, { color: "#000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#contact",
    start: "top 7%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_links, { color: "#fff", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_links, { color: "#000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#contact",
    start: "top 7%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing to white logo");
        gsap.to(".dark_logo", { opacity: 0, duration: 0.3 });
        gsap.to(".white_logo", { opacity: 1, duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting to dark logo");
        gsap.to(".dark_logo", { opacity: 1, duration: 0.3 });
        gsap.to(".white_logo", { opacity: 0, duration: 0.3 });
    }
});


window.addEventListener('scroll', function() {
    const whatsappButton = document.getElementById('whatsapp');
    if (window.scrollY > 100) {
        whatsappButton.style.display = 'block';
    } else {
        whatsappButton.style.display = 'none';
    }
});