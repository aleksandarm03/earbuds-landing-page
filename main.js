
const pic = document.querySelector("#main-earbuds");
const black = document.querySelector(".black");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const white = document.querySelector(".white");
const colors = document.querySelectorAll(".color");

const info = [
    { src: './src/black.png' },
    { src: './src/pink.png' },
    { src: './src/blue.png' },
    { src: './src/white.png' }
]

black.addEventListener("click", function () { pic.src = info[0].src; })
pink.addEventListener("click", function () { pic.src = info[1].src; })
blue.addEventListener("click", function () { pic.src = info[2].src; })
white.addEventListener("click", function () { pic.src = info[3].src; })

function color() {
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));

//Sticky navbar

var navbar = document.querySelector(".navbar");
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

// Navbar Toggling

const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}

// Closing Menu when navlink is clicked

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", linkAction));




//Sending message

function sendMessage(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('.form-control');

    let isValid = true;
    let values = [];

    inputs.forEach(input => {
        const val = input.value.trim();
        values.push(val);
        if (val === "") {
            isValid = false;
        }
    });

    if (!isValid) {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Fields',
            text: 'Please fill out all the fields.'
        });
        return;
    }

    const email = values[1]; // pretpostavljamo redosled: name, email, phone, subject, message
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for reaching out. We’ll get back to you soon.'
    });

    form.reset();
}



function subscribeNewsletter(event) {
    event.preventDefault();

    const form = document.getElementById('newsletter-form');
    const emailInput = form.querySelector('.txtb');
    const email = emailInput.value.trim();

    if (!email) {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Email',
            text: 'Please enter your email address.'
        });
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return false;
    }

    Swal.fire({
        icon: 'success',
        title: 'Subscribed!',
        text: 'Thanks for joining our Sound Community 🎶'
    });

    form.reset();
    return false;
}

