// Mensagem animada no topo
const msg = "Viviane, algo especial chegou para você. Desbloqueie com lembranças só nossa.";
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

    // Esconde elementos do envelope logo no início
    document.getElementById("mensagem-topo").classList.add("sumir");
    document.querySelector('.envelope-body').classList.add('sumir');
    document.querySelector('.envelope-flap').classList.add('sumir');

    envelope.classList.add('voar-envelope');
    carta.classList.add('voar');

    // Sem esperar tempo — já troca as classes
    requestAnimationFrame(() => {
      carta.classList.remove('voar');
      carta.classList.add('expandida');
      loginBox.style.display = 'none';
      conteudo.style.display = 'block';
      iniciarSwiper();
    },100);

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
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 40,
    effect: "fade", // Efeito suave como troca de foto
    fadeEffect: {
      crossFade: true
    },
    
    simulateTouch: true, // → arrastar com dedo
    touchRatio: 0.3,
    touchAngle: 45,
  });
}



function finalizarCarta() {
  const conteudo = document.getElementById("conteudo-amor");
  conteudo.innerHTML = `
    <div id="mensagem-final" class="mensagem-central">
      <p id="texto-final" class="digitando"></p>
    </div>
  `;

  const fraseFinal = `Fazemos muitas escolhas na vida — algumas boas, outras nem tanto.
Uma coisa é certa: as melhores escolhas são aquelas que Deus faz por nós.
Indubitavelmente **você foi escolhida por Deus pra mim**, minha esposa e eterna namorada.

Feliz Dia dos Namorados! 💖`;

  let i = 0;
  function digitarFinal() {
    if (i < fraseFinal.length) {
      document.getElementById("texto-final").innerHTML = fraseFinal.slice(0, i + 1) + '|';
      i++;
      setTimeout(digitarFinal, 50); // digitação um pouco mais rápida
    } else {
      document.getElementById("texto-final").innerHTML = fraseFinal;
      setTimeout(recolherCarta, 3000);
    }
  }

  digitarFinal();
}

function recolherCarta() {
  const carta = document.querySelector('.carta');
  const envelope = document.querySelector('.envelope');
  const mensagemTopo = document.getElementById("mensagem-topo");
  const convite = document.querySelector('.convite-touch');

  // Esconde votos ou swiper
  document.getElementById("conteudo-amor").innerHTML = '';

  // Reposiciona "Eu te amo"
  mensagemTopo.textContent = "Eu te Amo! 💖";
  mensagemTopo.classList.remove('sumir');

  

  // Recolhe carta suavemente com classe nova
  carta.classList.remove('expandida');
  carta.classList.add('recolhida');

  // Garante que o envelope volte ao centro e fique fechado
  envelope.classList.remove('voar-envelope');
  envelope.classList.add('retornar');
  envelope.classList.add('abrir'); // aplica fechamento

  mensagemTopo.classList.remove('sumir');
  mensagemTopo.classList.add('final-volta');

  // Remove qualquer sumiço no body/flap
  document.querySelector('.envelope-body').classList.remove('sumir');
  document.querySelector('.envelope-flap').classList.remove('sumir');
}


function invitationHeart() {
  const convite = document.querySelector('.convite-touch');
  if (!convite.classList.contains('flutuar')) {
    convite.classList.add('flutuar');
  }
}


