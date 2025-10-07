document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Smooth scroll para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Fecha o menu ao clicar em um item no mobile
        mainNav.classList.remove('active');
      }
    });
  });
});

// Scroll suave para comissões e benefícios
document.querySelectorAll('.main-nav a[href="#comissoes"], .main-nav a[href="#beneficios"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#comissoes-beneficios').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
