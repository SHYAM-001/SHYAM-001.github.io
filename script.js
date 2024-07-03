/* toggle icon navbar */
const modal = () => {
    var modal = document.createElement('div');
    modal.style.width = 'auto';
    modal.style.height = '50px';
    modal.style.borderRadius='10px';
    modal.style.position = 'fixed';
    modal.style.color='white';
    modal.style.backgroundColor='green';
    modal.style.top = '85%'; // Change this to '0' to position the modal at the top
    modal.style.left = '50%';
    modal.style.zIndex=10;
    modal.style.transform = 'translateX(-50%)'; // Change this to only translate in the X direction
    modal.style.padding = '5px';
    modal.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
    modal.style.textAlign = 'center';

    // Add text to the modal
    var text = document.createElement('p');
    text.textContent = 'Message Has Been Sent Successfully';
    modal.appendChild(text);

    // Add the modal to the body
    document.body.appendChild(modal);

    // Remove the modal after 3 seconds
    setTimeout(function() {
        modal.remove();
    }, 3000);
}

function sendContactDetails(){
    event.preventDefault();
                (function(){
                    emailjs.init("8tRlDR9PUSV3NXH8C");
                })();
            
                let subject = document.getElementById("subject").value;
                const to_name = "SHYAM K S";
                let from_name = document.getElementById("name").value;
                let sender_email = document.getElementById("email_to").value ;
                let phone_no = document.getElementById("phone").value;
                let message= document.getElementById("message").value ;
                console.log("message recieved");

                var params = {
                    subject : subject,
                    to_name : to_name,
                    from_name : from_name,
                    sender_email : sender_email ,
                    phone_no : phone_no,
                    message : message,
                };

                var serviceID = "service_2igh02o";
                var templateID = "template_1krrdkk";

                emailjs.send(serviceID,templateID,params)
                .then( res => {
                    modal();
                    document.getElementById("subject").value = "";
                    document.getElementById("name").value = "";
                    document.getElementById("email_to").value = "";
                    document.getElementById("phone").value = "";
                    document.getElementById("message").value = "";
                })
                .catch();
}
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
    distance: '10px',
    duration:1800,
    delay:150,
});

ScrollReveal().reveal('.portfolio-home-content, .portfolio-heading, .portfolio-education-border',{origin: 'top'});
ScrollReveal().reveal('.portfolio-home-img, .portfolio-services-container, .portfolio-box, .portfolio-contact form,.portfolio-education-heading,.portfolio-education-heading .portfolio-education-box',{origin: 'bottom'});
ScrollReveal().reveal('.portfolio-home-content h1, .portfolio-about-img ',{origin: 'left'});
ScrollReveal().reveal('.portfolio-home-content p, .portfolio-about-content, .portfolio-achievement-container',{origin: 'right'});

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
