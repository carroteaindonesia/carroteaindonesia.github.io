$(window).scroll(function() {
    $('.sticky-top').toggleClass('scrolled', $(this).scrollTop() > 200);
});

// ScrollReveal
window.sr = ScrollReveal();

sr.reveal('.container-tips .box-custom', {
    origin: 'bottom',
    distance: '300px',
    interval: 500
});

sr.reveal('.img-highlight', {
    duration: 2000,
    origin: 'right',
    distance: '50px',
    delay: 500
});

sr.reveal('.para', {
    duration: 2000,
    delay: 200
});

sr.reveal('.read-more', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    delay: 200
});

sr.reveal('.produk-detail-kanan a', {
    origin: 'bottom',
    distance: '300px',
    interval: 500,
    delay: 200
});

sr.reveal('.visi-misi', {
    origin: 'bottom',
    distance: '300px',
    interval: 200
    
});

sr.reveal('.quotes', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    delay: 200
});
       
sr.reveal('.custom-card', {
    duration: 3000,
    origin: 'bottom',
    distance: '300px',
    interval: 200
});

  
sr.reveal('.contact-carrotea .form-group', {
    origin: 'bottom',
    distance: '50px',
    interval: 200,
    delay: 500
});
  
sr.reveal('.contact-carrotea h3', {
    duration: 3000
});
  
sr.reveal('.contact-carrotea li', {
    duration: 1000,
    origin: 'right',
    distance: '70px',
    interval: 500,
    delay: 300
});

// footer 
sr.reveal('.up-section .logo-brand', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('.up-section .social .social-icons a', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    interval: 500
});

sr.reveal('.up-section .support li', {
    duration: 3000,
    delay: 500
});