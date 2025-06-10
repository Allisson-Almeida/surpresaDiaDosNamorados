// Animação da mensagem no topo (digitando)
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

// Validação do login + expansão da carta
function validarLogin() {
  const r1 = document.getElementById("input1").value.trim();
  const r2 = document.getElementById("input2").value.trim().toLowerCase();

  if (r1 === "19/10/2023" && (r2 === "praça da light" || r2 === "light")) {
    alert("💖 Login aceito! Pronta para a próxima surpresa?");

    // Tocar música
    const musica = document.getElementById("musicaAmor");
    musica.play().catch(() => {
      console.log("Autoplay bloqueado — pode ser necessário interação.");
    });

    // Aplica animação à carta e envelope
    const carta = document.querySelector('.carta');
    const envelope = document.querySelector('.envelope');

    carta.classList.add('dançar-e-centralizar');
    envelope.classList.add('voar-envelope');

    // Após animações, mostra conteúdo
    setTimeout(() => {
      envelope.style.display = 'none';
      document.getElementById("login-box").style.display = "none";
      document.getElementById("conteudo-amor").style.display = "block";
      iniciarSwiper();
    }, 2500); // tempo da animação
  } else {
    alert("Erro isso Viviane? Tá brincando, né? tenta de novo meu Galak!");
  }
}



// Animação de toque inicial
function iniciarCarta() {
  const convite = document.querySelector('.convite-touch');
  convite.classList.add('fadeOut');

  setTimeout(() => {
    abrirEnvelope();
  }, 800);
}

// Animação de abrir envelope
function abrirEnvelope() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.add('abrir');
  
  const selo = document.querySelector('.selo-coração');
  if (selo) selo.style.opacity = 0;
}

// SwiperJS: carrossel de fotos
function iniciarSwiper() {
  new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
}


