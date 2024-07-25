document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.messages-container .animate');
    let delay = 0;

    elements.forEach((el) => {
        setTimeout(() => {
            el.style.opacity = '1';
            
            if (el.closest('.message')) {
                el.style.animation = `fadeIn 0.5s forwards`;
                if (el.tagName === 'LI') {
                }
            } else if (el.closest('.reply', )) {
                el.style.animation = `fadeInSlide 0.5s forwards`;
            }
        }, delay);
        delay += 600; 
    });
});
