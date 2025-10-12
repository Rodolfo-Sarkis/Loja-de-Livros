document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  // Abre/fecha o menu ao clicar no botão
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita o clique "vazar"
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    // Só fecha se o menu estiver aberto e o clique for fora do menu e do botão
    if (
      mainNav.classList.contains('active') &&
      !mainNav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // Scroll suave para links de âncora (exceto "Comece a vender")
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href === '#comece') {
        e.preventDefault();
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  // Scroll suave para "comissões" e "benefícios"
  document.querySelectorAll('.main-nav a[href="#comissoes"], .main-nav a[href="#beneficios"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('#comissoes-beneficios').scrollIntoView({ behavior: 'smooth', block: 'start' });
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});


// ======================
// Validação do formulário
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const msg = document.getElementById("mensagem");
  const telefoneInput = document.getElementById("telefone");

  // Máscara de telefone
  telefoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/^(\d*)/, "($1");
    }

    e.target.value = value;
  });

  // Validação e mensagens
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const senha = form.senha.value;
    const confirmar = form.confirmarSenha.value;

    if (!nome || !email || !telefone || !senha || !confirmar) {
      return mostrarMensagem("Por favor, preencha todos os campos.", "erro");
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) return mostrarMensagem("Digite um e-mail válido.", "erro");

    const telValido = telefone.replace(/\D/g, "");
    if (telValido.length < 10) return mostrarMensagem("Digite um telefone válido.", "erro");

    if (senha.length < 6) return mostrarMensagem("A senha deve ter pelo menos 6 caracteres.", "erro");
    if (senha !== confirmar) return mostrarMensagem("As senhas não coincidem.", "erro");

    mostrarMensagem("Cadastro realizado com sucesso!", "sucesso");
    alert("Conta criada com sucesso!");
    form.reset();
  });

  function mostrarMensagem(texto, tipo) {
    msg.textContent = texto;
    msg.className = `mensagem ${tipo}`;
  }
});
