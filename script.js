// Jdem zagruzki DOM
document.addEventListener('DOMContentLoaded',function() {
    const ctaButton = 
    document.getElementById ('cta-btn');
    const navLinks =
    document.querySelectorAll ('.nav-links a');

    //Obrabotchik knopki CTA
    ctaButton.addEventListener('click', 
        function() {
        alert('Spasibo za interes! Skoro zdes budet bolshe informatsii.');
    });

    //Plavnay prokrutka dlya navigatsii
    navLinks.forEach(link => {
        link.addEventListener('click',
            function(e) {
                e.preventDefault();
                const targetId =
                this.getAttribute('href');
                const targetSection =
                document.querySelector(targetId);
                window.scrollTo({
                    top:
                    targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
    });

// Prostoy effect pri skrole
window.addEventListener( 'sscroll',
    function() {
        const header =
        document.querySelector('.header');
        if (window.scrollY > 100) {
            header. style. background
            = 'rgba(255, 255, 255, 0.95)';
        header. style.backdropFilter =
    'blur(10px)';
                } else {
                    header.style.background
                    = 'var(--white)';
                    header.style.backdropFilter =
                    'none';
                }        
            });
        });
            
            