document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Smooth scroll para links de âncora, exceto "Comece a vender"
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href === '#comece') {
        // Não rola a tela para "Comece a vender"
        e.preventDefault();
        mainNav.classList.remove('active'); // Fecha menu se estiver aberto
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        mainNav.classList.remove('active'); // Fecha o menu ao clicar no mobile
      }
    });
  });

  // Scroll suave para comissões e benefícios
  document.querySelectorAll('.main-nav a[href="#comissoes"], .main-nav a[href="#beneficios"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('#comissoes-beneficios').scrollIntoView({ behavior: 'smooth', block: 'start' });
      mainNav.classList.remove('active'); // Fecha menu mobile
    });
  });
});

