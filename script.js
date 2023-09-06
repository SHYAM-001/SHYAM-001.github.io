/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.portfolio-navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll secrions active link */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* scroll reveal */

ScrollReveal({
    reset:true,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.portfolio-home-content, .portfolio-heading, .portfolio-education-border',{origin: 'top'});
ScrollReveal().reveal('.portfolio-home-img, .portfolio-services-container, .portfolio-box, .portfolio-contact form,.portfolio-education-heading,.portfolio-education-heading .portfolio-education-box',{origin: 'bottom'});
ScrollReveal().reveal('.portfolio-home-content h1, .portfolio-about-img ',{origin: 'left'});
ScrollReveal().reveal('.portfolio-home-content p, .portfolio-about-content ',{origin: 'right'});

/* typed js */
const typed = new Typed('.portfolio-multiple-text',{
    strings : ['Student','Frontend Developer','FullStack Developer','Freelancer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const about_me = new Typed('.portfolio-multiple-text-aboutme',{
    strings : ['Student','Frontend Developer','FullStack Developer','Freelancer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
