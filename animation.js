window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animation');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const revealPoint = 100; // adjust as needed

        if(elementPosition < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'all 0.7s ease-in-out';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
        }
    });
});