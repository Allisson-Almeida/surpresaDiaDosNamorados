// Mensagem animada no topo
const msg = "Você recebeu uma carta de alguém que te ama muito...";
let i = 0;
function digitar() {
  if (i < msg.length) {
    document.getElementById("mensagem-topo").innerHTML = msg.slice(0, i + 1) + '|';
    i++;
    setTimeout(digitar, 60);
  } else {
    document.getElementById("mensagem-topo").innerHTML = msg;
  }
}
window.onload = digitar;

// Máscara de data (dd/mm/aaaa)
function mascaraData(input) {
  let valor = input.value.replace(/\D/g, '');
  if (valor.length > 2) valor = valor.slice(0, 2) + '/' + valor.slice(2);
  if (valor.length > 5) valor = valor.slice(0, 5) + '/' + valor.slice(5, 9);
  input.value = valor;
}

// Validação e animação principal
function validarLogin() {
  const r1 = document.getElementById("input1").value.trim();
  const r2 = document.getElementById("input2").value.trim().toLowerCase();

  if (r1 === "19/10/2023" && (r2 === "praça da light" || r2 === "light")) {
    alert("💖 Login aceito! Pronta para a próxima surpresa?");

    const musica = document.getElementById("musicaAmor");
    musica.play().catch(() => {});

    const envelope = document.querySelector('.envelope');
    const carta = document.querySelector('.carta');
    const loginBox = document.getElementById("login-box");
    const conteudo = document.getElementById("conteudo-amor");

    // Etapa 1: envelope voa e some
    envelope.classList.add('voar-envelope');

    // Etapa 2: carta faz voo dramático
    carta.classList.add('voar');

    // Etapa 3: após o voo, carta se posiciona e revela conteúdo
    setTimeout(() => {
      carta.classList.remove('voar');
      carta.classList.add('expandida');
      loginBox.style.display = 'none';
      conteudo.style.display = 'block';
      document.getElementById("mensagem-topo").classList.add("sumir");
      document.querySelector('.envelope-body').classList.add('sumir');
      document.querySelector('.envelope-flap').classList.add('sumir');
      document.getElementById("mensagem-topo").classList.add("sumir");
      iniciarSwiper();
    }, 1200); // tempo de voo da carta
  } else {
    alert("Erro isso Viviane? Tenta de novo meu Galak!");
  }
}

// Toque inicial
function iniciarCarta() {
  const convite = document.querySelector('.convite-touch');
  convite.classList.add('fadeOut');

  setTimeout(() => {
    abrirEnvelope();
  }, 800);
}

// Abrir envelope
function abrirEnvelope() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.add('abrir');
}

// Iniciar Swiper
function iniciarSwiper() {
  new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1, // ← alterado de "auto" para 1
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // ← mantém isso
    },
  });
}
