// Atualiza ano no footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Inicializa ParticlesJS
particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: '#00e0ff' },
    shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
    opacity: { value: 0.5, random: true, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 150, color: '#00e0ff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Inicializa Swiper para cases
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
});

// Inicializa AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  once: true,
});

// Scroll suave para ancoras internas (fallback para browsers sem suporte)
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}); 

// Expande/oculta a descrição da automação ao clicar no botão
function toggleDescricao(button) {
  const descricao = button.nextElementSibling;
  const isVisible = descricao.style.display === "block";
  descricao.style.display = isVisible ? "none" : "block";
  button.textContent = isVisible ? "Ver detalhes" : "Ocultar detalhes";
}