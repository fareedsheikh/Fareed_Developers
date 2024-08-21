// <!-- -------------------------------------------------- Const ---------------------------------------------- -->

const hamburger = document.querySelector('#links .hamburger');
const nav_span = document.querySelectorAll("#links span")
const nav_links = document.querySelectorAll("#links a")
const sidebar = document.querySelector('.side_menu')
const burger = document.querySelector('.hamburger')
const hero = document.querySelector(".overlay");
const croxx = document.querySelector('.close')

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
window.addEventListener("load", function() {
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

let lastScroll = 0;
const scrollHandler = () => {
    const currentScroll = window.scrollY;
    if (Math.abs(currentScroll - lastScroll) > 50) {
        lastScroll = currentScroll;
    }
};

window.addEventListener('scroll', scrollHandler);

document.addEventListener("DOMContentLoaded", function() {


    if (hero) {
        setTimeout(() => {
            hero.classList.add("transitioned");
        }, 100);
    }
});

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



window.onload = function() {
    const span = document.querySelector('.hero_content span');
    const p = document.querySelector('.hero_content p');

    if (performance.navigation.type === 1) {
        span.classList.add('reloaded');
        p.classList.add('reloaded');
    }
};

window.onload = function() {
    const span = document.querySelector('.hero_content span');
    const p = document.querySelector('.hero_content p');
    const scroller = document.querySelector('.scroller');
    const scrollerText = document.querySelector('.scroller p');
    const buttons = document.querySelectorAll('.btn a'); // Select all button links

    // Check if the page was reloaded
    if (performance.navigation.type === 1) {
        // Create a GSAP timeline for the hero content and scroller
        const tl = gsap.timeline()
            .fromTo(span, { filter: 'blur(5px)', color: 'var(--transition-color)', opacity: 0 }, { filter: 'blur(0px)', color: 'var(--primary-color)', opacity: 1, duration: 1.5 })
            .fromTo(p, { filter: 'blur(5px)', color: 'var(--transition-color)', opacity: 0 }, { filter: 'blur(0px)', color: 'var(--secondary-color)', opacity: 1, duration: 1.5 }, "-=1.5")
            .fromTo(scroller, { opacity: 0 }, { opacity: 1, duration: .7 })
            .fromTo(scrollerText, { xPercent: 100 }, { xPercent: 0, duration: .5, ease: "power1.inOut" });

        // Add animations for buttons
        buttons.forEach((button, index) => {
            tl.fromTo(button, { opacity: 0, y: -50, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: .5, ease: "bounce.out" }, `-=${0.5 * index}`);
        });
    }
};




window.onload = function() {
    const chatBox = document.getElementById('chat_box');
    const aboutUs = document.getElementById('about_us');
    const scrollLine = document.querySelector('.scroll-line');

    // Calculate the scroll positions
    const chatBoxTop = chatBox.offsetTop;
    const chatBoxHeight = chatBox.clientHeight;
    const aboutUsTop = aboutUs.offsetTop;

    // Calculate the start and end positions for the line animation
    const startScroll = chatBoxTop + chatBoxHeight / 2; // Start animation when scrolling past the middle of #chat_box
    const endScroll = aboutUsTop; // End animation when reaching #about_us

    // Create the GSAP animation timeline
    const tl = gsap.timeline({ paused: true })
        .to(scrollLine, { width: '100%', duration: 1, ease: 'power2.inOut' });

    // Scroll event listener
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;

        // Check if scroll position is within the range of #chat_box and #about_us
        if (scrollPosition > startScroll && scrollPosition < endScroll) {
            tl.play(); // Play animation if within range
        } else {
            tl.reverse(); // Reverse animation if outside range
        }
    });
};









// <!-- -------------------------------------------------- Click_Hamburger_to_show_Side_Menu_With_Gsap_Animation_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Chat_Box_Background_Color_Change_To_White_From_Black_When_Scroll ---------------------------------------------- -->

gsap.registerPlugin(ScrollTrigger);

gsap.to("#chat_box", {
    backgroundColor: "#000000",
    duration: .6,
    scrollTrigger: {
        trigger: "#chat_box",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- Chat_Box_Background_Color_Change_To_White_From_Black_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Chat_Box_Span_Color_Change_When_Scroll ---------------------------------------------- -->

gsap.to(".chat_span", {
    color: "#36454F",
    duration: .6,
    scrollTrigger: {
        trigger: ".chat_span",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- Chat_Box_Span_Color_Change_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Chat_Box_Span_Rotate_When_Scroll ---------------------------------------------- -->

gsap.registerPlugin(ScrollTrigger);

const initialX = -151.19;
const initialY = -0.88923;
const initialZ = 0;

// Animation for scroll-based movement along x, y, and z axes

gsap.to(".chat_text1", {
    x: initialX - 300,
    y: initialY - 90,
    z: initialZ - 50,
    scrollTrigger: {
        trigger: ".chat_text1",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

gsap.registerPlugin(ScrollTrigger);

const initialX1 = 185.413;
const initialY1 = -46.3603;
const initialZ1 = 0;

// Animation for scroll-based movement along x, y, and z axes
gsap.to(".chat_text2", {
    x: initialX1 - -300,
    y: initialY1 - 90,
    z: initialZ1 - 50,
    scrollTrigger: {
        trigger: ".chat_text2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});


gsap.registerPlugin(ScrollTrigger);

const initialX2 = -196.671;
const initialY2 = 22.6817;
const initialZ2 = 0;

// Animation for scroll-based movement along x, y, and z axes
gsap.to(".chat_text3", {
    x: initialX2 - 300,
    y: initialY2 - 90,
    z: initialZ2 - 50,
    scrollTrigger: {
        trigger: ".chat_text3",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});


gsap.registerPlugin(ScrollTrigger);

const initialX3 = 288.06;
const initialY3 = -44.4857;
const initialZ3 = 0;

// Animation for scroll-based movement along x, y, and z axes
gsap.to(".chat_text4", {
    x: initialX3 - -300,
    y: initialY3 - 90,
    z: initialZ3 - 50,
    scrollTrigger: {
        trigger: ".chat_text4",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

gsap.registerPlugin(ScrollTrigger);

const initialX4 = -50.0663;
const initialY4 = 22.6817;
const initialZ4 = 0;

// Animation for scroll-based movement along x, y, and z axes
gsap.to(".chat_text5", {
    x: initialX4 - 30,
    y: initialY4 - -110,
    z: initialZ4 - 50,
    scrollTrigger: {
        trigger: ".chat_text5",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

// <!-- -------------------------------------------------- Chat_Box_Span_Rotate_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Change_Hamburger_Color_When_Scroll_to_Chat_Box_To_White ---------------------------------------------- -->

ScrollTrigger.create({
    trigger: "#chat_box",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(hamburger, { color: "#FFFFFF", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(hamburger, { color: "#000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#chat_box",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_span, { color: "#FFFFFF", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_span, { color: "#000000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#chat_box",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_links, { color: "#FFFFFF", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_links, { color: "#000000", duration: 0.3 });
    }
});
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#chat_box",
    start: "top 15%",
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

// <!-- -------------------------------------------------- Change_Hamburger_Color_When_Scroll_to_Chat_Box_To_White_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- About_Us_Background_Color_Change_To_White_From_Black_When_Scroll ---------------------------------------------- -->

gsap.registerPlugin(ScrollTrigger);

gsap.to("#about_us", {
    backgroundColor: "#fff",
    duration: .6,
    scrollTrigger: {
        trigger: "#about_us",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- About_Us_Background_Color_Change_To_White_From_Black_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- About_Us_Paragraph_Background_Color_Change_To_White_From_Black_When_Scroll---------------------------------------------- -->


gsap.to(".about_content p", {
    color: "#000",
    duration: .6,
    scrollTrigger: {
        trigger: ".about_content p",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- About_Us_Paragraph_Background_Color_Change_To_White_From_Black_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- About_Us_Hamburger_Color_Change_To_Black_From_White_When_Scroll ---------------------------------------------- -->


ScrollTrigger.create({
    trigger: "#about_us",
    start: "top 10%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to black");
        gsap.to(hamburger, { color: "#000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(hamburger, { color: "#ffffff", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#about_us",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_span, { color: "#000000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_span, { color: "#FFFFFF", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#about_us",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_links, { color: "#000000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_links, { color: "#FFFFFF", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#about_us",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing to white logo");
        gsap.to(".white_logo", { opacity: 0, duration: 0.3 });
        gsap.to(".dark_logo", { opacity: 1, duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting to dark logo");
        gsap.to(".white_logo", { opacity: 1, duration: 0.3 });
        gsap.to(".dark_logo", { opacity: 0, duration: 0.3 });
    }
});

// <!-- -------------------------------------------------- About_Us_Hamburger_Color_Change_To_Black_From_White_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Case_Studies_Background_Color_Change_To_Black_From_White_When_Scroll ---------------------------------------------- -->

gsap.registerPlugin(ScrollTrigger);

gsap.to("#Case_Studies", {
    backgroundColor: "#000",
    duration: .6,
    scrollTrigger: {
        trigger: "#Case_Studies",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- Case_Studies_Background_Color_Change_To_Black_From_White_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Case_Studies_Hamburger_Color_Change_To_White_From_Black_When_Scroll---------------------------------------------- -->

ScrollTrigger.create({
    trigger: "#Case_Studies",
    start: "top 10%",
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
    trigger: "#Case_Studies",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_span, { color: "#FFFFFF", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_span, { color: "#000000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#Case_Studies",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_links, { color: "#FFFFFF", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_links, { color: "#000000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#Case_Studies",
    start: "top 15%",
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

// <!-- -------------------------------------------------- Case_Studies_Hamburger_Color_Change_To_White_From_Black_When_Scroll_End---------------------------------------------- -->

// <!-- -------------------------------------------------- Case_Studies_Image_Slide_animation_When_Scroll ---------------------------------------------- -->

gsap.registerPlugin(ScrollTrigger);
gsap.to(".slide_case_first", {
    x: "-13%",
    scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

gsap.to(".slide_case_second", {
    x: "13%",
    scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

// <!-- -------------------------------------------------- Case_Studies_Image_Slide_animation_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Services_Background_Color_Change_To_White_From_Black_When_Scroll---------------------------------------------- -->
gsap.registerPlugin(ScrollTrigger);
gsap.to("#portfolio", {
    backgroundColor: "#fff",
    duration: .6,
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- Services_Background_Color_Change_To_White_From_Black_When_Scroll_End---------------------------------------------- -->

// <!-- -------------------------------------------------- Services_Hamburger_Color_Change_To_Blacl_From_White_When_Scroll---------------------------------------------- -->

ScrollTrigger.create({
    trigger: "#portfolio",
    start: "top 10%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to black");
        gsap.to(hamburger, { color: "#000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(hamburger, { color: "#fff", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#portfolio",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_span, { color: "#000000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_span, { color: "#FFFFFF", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#portfolio",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_links, { color: "#000000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_links, { color: "#FFFFFF", duration: 0.3 });
    }
});


ScrollTrigger.create({
    trigger: "#portfolio",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing to white logo");
        gsap.to(".white_logo", { opacity: 0, duration: 0.3 });
        gsap.to(".dark_logo", { opacity: 1, duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting to dark logo");
        gsap.to(".white_logo", { opacity: 1, duration: 0.3 });
        gsap.to(".dark_logo", { opacity: 0, duration: 0.3 });
    }
});

// <!-- -------------------------------------------------- Services_Hamburger_Color_Change_To_Blacl_From_White_When_Scroll---------------------------------------------- -->

// <!-- -------------------------------------------------- Contact_Hamburger_Color_Change_To_White_From_Black_When_Scroll---------------------------------------------- -->



gsap.registerPlugin(ScrollTrigger);

gsap.to("#client", {
    backgroundColor: "#000",
    duration: .6,
    scrollTrigger: {
        trigger: "#client",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- Case_Studies_Background_Color_Change_To_Black_From_White_When_Scroll_End ---------------------------------------------- -->

// <!-- -------------------------------------------------- Case_Studies_Hamburger_Color_Change_To_White_From_Black_When_Scroll---------------------------------------------- -->

ScrollTrigger.create({
    trigger: "#client",
    start: "top 10%",
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
    trigger: "#client",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_span, { color: "#FFFFFF", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_span, { color: "#000000", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#client",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_links, { color: "#FFFFFF", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_links, { color: "#000000", duration: 0.3 });
    }
});


ScrollTrigger.create({
    trigger: "#client",
    start: "top 15%",
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




gsap.registerPlugin(ScrollTrigger);
gsap.to(".banner", {
    backgroundColor: "#00000018",
    duration: .6,
    scrollTrigger: {
        trigger: ".banner",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".banner_logo span", {
    color: "#000",
    duration: .7,
    scrollTrigger: {
        trigger: ".banner_logo span",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- Services_Background_Color_Change_To_White_From_Black_When_Scroll_End---------------------------------------------- -->

// <!-- -------------------------------------------------- Services_Hamburger_Color_Change_To_Blacl_From_White_When_Scroll---------------------------------------------- -->

ScrollTrigger.create({
    trigger: "#call_to_action",
    start: "top 10%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to black");
        gsap.to(hamburger, { color: "#000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(hamburger, { color: "#fff", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#call_to_action",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_span, { color: "#000000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_span, { color: "#FFFFFF", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#call_to_action",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing color to white");
        gsap.to(nav_links, { color: "#000000", duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting color");
        gsap.to(nav_links, { color: "#FFFFFF", duration: 0.3 });
    }
});

ScrollTrigger.create({
    trigger: "#call_to_action",
    start: "top 15%",
    onEnter: () => {
        console.log("ScrollTrigger activated: changing to white logo");
        gsap.to(".white_logo", { opacity: 0, duration: 0.3 });
        gsap.to(".dark_logo", { opacity: 1, duration: 0.3 });
    },
    onLeaveBack: () => {
        console.log("ScrollTrigger deactivated: reverting to dark logo");
        gsap.to(".white_logo", { opacity: 1, duration: 0.3 });
        gsap.to(".dark_logo", { opacity: 0, duration: 0.3 });
    }
});

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
    start: "top 10%",
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
    start: "top 10%",
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
    start: "top 10%",
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
    start: "top 10%",
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

// <!-- -------------------------------------------------- Contact_Hamburger_Color_Change_To_White_From_Black_When_Scroll_End---------------------------------------------- -->

// <!-- -------------------------------------------------- Change_Heading_Color_To_Black_When_Scroll---------------------------------------------- -->



gsap.to(".heading", {
    color: "#000",
    duration: 2,
    scrollTrigger: {
        trigger: ".heading",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});

// <!-- -------------------------------------------------- Change_Heading_Color_To_Black_When_Scroll_End---------------------------------------------- -->

// <!-- -------------------------------------------------- Change_Heading_Color_To_White_When_Scroll---------------------------------------------- -->

gsap.to(".white", {
    color: "#fff",
    duration: 2,
    scrollTrigger: {
        trigger: ".white",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
    }
});



// <!-- -------------------------------------------------- Change_Heading_Color_To_White_When_Scroll_End---------------------------------------------- -->
window.addEventListener('scroll', function() {
    const whatsappButton = document.getElementById('whatsapp');
    if (window.scrollY > 100) {
        whatsappButton.style.display = 'block';
    } else {
        whatsappButton.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".contact_content span", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".contact_content form .form-group", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
    });
});
