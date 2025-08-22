
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


function typeWriter(element, text, speed) {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    element.style.animation = 'none';
                    element.style.borderRight = 'none';
                }
            }, speed);
        }

        
        const typingTextElement = document.getElementById('typing-text');
        
        
        const myText = "A Passionate Web Developer";
        const typingSpeed = 75;
        
        window.addEventListener('load', () => {
            typeWriter(typingTextElement, myText, typingSpeed);
        });


    
    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000);
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const messageBox = document.getElementById('messageBox');


form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    
    setTimeout(() => {
        
        console.log('Form data submitted!');
        
        
        showMessage('Message sent successfully!');

        
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Message';
        
        
        form.reset();
    }, 2000); 
});


function showMessage(message) {
    messageBox.textContent = message;
    messageBox.classList.add('show');    


window.addEventListener('load', typeWriter);


document.getElementById('current-year').textContent = new Date().getFullYear();
}
