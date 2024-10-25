

/** TURNS THE MENU HAMBURGUER INTO A X */

const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu()
});

function toggleMenu () {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

const form = document.querySelector('#contact-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const messageInput = document.querySelector('#message')

const serviceID = 'service_guilhermefrr13';
const templateID = 'template_guilhermefrr13';
const publicKey = 'WBEUrkK1r3M5Fd0be';

emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputData = {
        from_name: nameInput.value,
        user_email: emailInput.value,
        phone_number: phoneInput.value,
        message: messageInput.value,
    };

    emailjs.send(serviceID,templateID, inputData).then(
        ()=>{
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            messageInput.value = '';
            console.log('Success!');
        }, 
        (error)=> {
            console.log(error);
        }
    )
});

const themeToggle = document.getElementById('theme-toggle');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a, .nav-responsive a');
const btn = document.querySelector('.btn2');
const toggleCircle = document.querySelector('.toggle-circle');

// Evento para alternar o modo claro/escuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    sections.forEach(section => {
        section.classList.toggle('light-mode');
    });
    navLinks.forEach(link => {
        link.classList.toggle('light-mode');
    });
    // Adiciona o movimento da bolinha junto com a alternância do tema
    toggleCircle.classList.toggle('move');
});

// Evento para mover a bolinha do botão de alternância
btn.addEventListener('click', () => {
    toggleCircle.classList.toggle('move');
});