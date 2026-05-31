const stories = [
  {
    path: "/story-1",
    tag: "EH APENI!",
    title: "Ada Surprise Untuk <span>Irfan</span>",
    message: "Nak tahu? Tak boleh 😼 Tekan dulu bluek, kuatkan volume tau. Slow ii je baca, hayati lagu hehe",
    hint: true,
    signature: "Dari org yg dianggp KAWAN je 😔 "
  },
  {
    path: "/story-2",
    title: "HI IRFAN HI HI IRFAN HI HI HI HI IRFAN HI HI HI HI IRFAN 😺😺😺😺",
    message: "Tak kan lah x igt birthday, xyh ckp pun mmg dah tau dri thun lps birthday bila. sje je tdi. ❤️😹, bersedia tak ? tapi jangan terkejut pulak HAHHA"
  },
  {
    path: "/story-3",
    title: "",
    message: "Janganlah palau atau seen chat 😔 ataupun dry bole tak?"
  },
  {
    path: "/story-4",
    title: "🎉 Selamat Hari Lahir, Irfan! 🎉",
    message: "Semoga Allah panjangkan umur, dilimpahkan rezeki, sihat selalu, dan jadi orang yang berjaya di dunia dan akhirat. Terima kasih sbb bagi brainrot dan tak scam wktu first kenal, kenal kau adalah moment terbaik yang pernah terjadi 2tahun kebelakang ni. Soalan last, kau anggap aq ape ? kwn baik ke ? aq hrp tak sbb aq anggp kau lebih dri itu wkkw. Okey tu je . Semoga tahun 2026 menjadi tahun yang indah untuk irfan.❤️"
  }
];

const tagEl = document.getElementById("tag");
const titleEl = document.getElementById("title");
const messageEl = document.getElementById("message");
const hintEl = document.getElementById("hint");
const signatureEl = document.getElementById("signature");
const giftEl = document.getElementById("gift");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const page2Playground = document.getElementById("page2Playground");

const song = document.getElementById("birthdaySong");
const musicToggle = document.getElementById("musicToggle");
const statusText = document.getElementById("status");

giftEl.addEventListener("error", () => {
  giftEl.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Crect width='220' height='220' rx='28' fill='%23fff'/%3E%3Ctext x='50%25' y='56%25' text-anchor='middle' font-size='120'%3E%F0%9F%8E%81%3C/text%3E%3C/svg%3E";
});

function findIndexByPath(pathname) {
  const cleanPath = pathname.replace(/\/$/, "") || "/story-1";
  const index = stories.findIndex((item) => item.path === cleanPath);
  return index === -1 ? 0 : index;
}

let current = findIndexByPath(window.location.pathname);

function syncMusicButton() {
  musicToggle.classList.toggle("muted", song.muted);
  musicToggle.setAttribute("aria-label", song.muted ? "Buka muzik" : "Mute muzik");
}

function renderPage2(story) {
  page2Playground.style.display = "block";
  page2Playground.innerHTML = `
    <img class="p2-cat-single" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExemE2djN5YzJpZHl2eHI4cXU0emcwa3FseHRwODByM3M0bnd2ajZlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y4nk5bgwpWL6T5Ax9y/giphy.gif" alt="cat" />
    <div class="p2-center reveal reveal-2">
      <h2>${story.title}</h2>
      <div class="p2-note reveal reveal-3"><p>${story.message}</p></div>
      <button id="p2Next" class="p2-next reveal reveal-4" type="button">Cepatlah</button>
    </div>
  `;

  const p2Next = document.getElementById("p2Next");
  p2Next.addEventListener("click", () => {
    current = 2;
    render(true);
  });
}

function render(pushUrl = false) {
  const story = stories[current];
  const isPageOne = current === 0;
  const isPageTwo = current === 1;
  const isPageThree = current === 2;
  const isPageFour = current === 3;

  document.body.classList.toggle("page-one", isPageOne);
  document.body.classList.toggle("page-two", isPageTwo);
  document.body.classList.toggle("page-three", isPageThree);
  document.body.classList.toggle("page-four", isPageFour);

  if (isPageOne) {
    tagEl.textContent = story.tag;
    titleEl.innerHTML = story.title;
    messageEl.textContent = story.message;
    hintEl.textContent = story.hint ? story.message : "";
    signatureEl.textContent = story.signature || "";

    tagEl.style.display = "";
    titleEl.style.display = "";
    messageEl.style.display = story.hint ? "none" : "block";
    hintEl.style.display = story.hint ? "block" : "none";
    signatureEl.style.display = "";
    giftEl.style.display = "block";
    prevBtn.style.display = "";
    nextBtn.style.display = "";
    statusText.style.display = "";
    page2Playground.style.display = "none";
    page2Playground.innerHTML = "";

    prevBtn.disabled = true;
    nextBtn.textContent = "Tengok sikit";
  } else if (isPageTwo) {
    tagEl.style.display = "none";
    titleEl.style.display = "none";
    messageEl.style.display = "none";
    hintEl.style.display = "none";
    signatureEl.style.display = "none";
    giftEl.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    statusText.style.display = "none";
    renderPage2(story);
 } else if (isPageThree) {
  page2Playground.style.display = "block";

  page2Playground.innerHTML = `
    <div class="wish-layout reveal reveal-1">

      <img
        class="wish-cat wish-float reveal reveal-2"
        src="https://media1.tenor.com/m/bmxESZp93QYAAAAd/cute-staring-cat.gif"
        onerror="this.onerror=null;this.src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExemE2djN5YzJpZHl2eHI4cXU0emcwa3FseHRwODByM3M0bnd2ajZlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y4nk5bgwpWL6T5Ax9y/giphy.gif';"
        alt="Kucing comel"
      >

      <div class="wish-card reveal reveal-3">
        <small>🙏 SATU PERMINTAAN</small>

        <p>${story.message}</p>

        <button id="runBtn" class="run-btn" type="button">
          Taknak 😤
        </button>

        <button id="okBtn" class="ok-btn reveal reveal-5" type="button">
          Baiklah 😉
        </button>
      </div>

    </div>
  `;

  setTimeout(initRunButton, 2000);
  ensurePage3Styles();

  tagEl.style.display = "none";
  titleEl.style.display = "none";
  messageEl.style.display = "none";
  hintEl.style.display = "none";
  signatureEl.style.display = "none";
  giftEl.style.display = "none";
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  statusText.style.display = "none";
} else {
  page2Playground.style.display = "block";
  page2Playground.innerHTML = `
    <div class="p4-wrap">
      <img class="p4-g p4-a" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExemE2djN5YzJpZHl2eHI4cXU0emcwa3FseHRwODByM3M0bnd2ajZlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y4nk5bgwpWL6T5Ax9y/giphy.gif" alt="celebration" />
      <img class="p4-g p4-b" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW5pcHRyeGphNDIwdWh4dWFyc2U0bGdoNWVnZzFrcjNkbmxyaHIydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GAXXHdS0zXawVLOJLY/giphy.gif" alt="celebration" />
      <img class="p4-g p4-e" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VkeXNvb2phczU1aWNnZWpjdW9qMjY0d3NvaGJtcXNjeXdiZmgweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iXbnkZTxCo4t8l8mxK/giphy.gif" alt="celebration" />
      <img class="p4-g p4-f" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2p3NGhkNGtmY3Nxb3kwa3J1ZWE2Ym5wa2UzanFtbXc2b2Y0djEycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gSQp32H82WETR5EFO6/giphy.gif" alt="celebration" />

      <div class="p4-rain" aria-hidden="true">
        <span>🎉</span><span>❤️</span><span>😻</span><span>🎈</span><span>🌸</span><span>🎊</span><span>💖</span><span>🥳</span><span>✨</span><span>💐</span>
      </div>

      <span class="p4-float p4-heart h1">🫶</span>
      <span class="p4-float p4-heart h2">❤️</span>
      <span class="p4-float p4-heart h3">🫶</span>
      <span class="p4-float p4-cat c1">😻</span>
      <span class="p4-float p4-cat c2">🥳</span>
      <span class="p4-float p4-cat c3">😽</span>

      <div class="p4-card">
        <p id="p4Title" class="p4-title"></p>
        <p id="p4Msg" class="p4-msg"></p>
        <div class="p4-emo">🎂 🎉 ❤️ 😻 🎈 🌸</div>
        <div class="p4-actions">
          <button id="p4Again" class="p4-btn p4-btn-orange" type="button">Lagi sekali😹</button>
          <button id="p4Shot" class="p4-btn p4-btn-pink" type="button">Jangan share kt sapa ii auu </button>
        </div>
        <p class="p4-sign">dibuat dengan hati oleh? </p>
      </div>
    </div>
  `;
  ensurePage4Styles();
  const p4Again = document.getElementById("p4Again");
  if (p4Again) {
    p4Again.addEventListener("click", () => {
      current = 0;
      render(true);
    });
  }
  animatePage4Text(story.title, story.message);

  birthdayBlast();

  tagEl.style.display = "none";
  titleEl.style.display = "none";
  messageEl.style.display = "none";
  hintEl.style.display = "none";
  signatureEl.style.display = "none";
  giftEl.style.display = "none";
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  statusText.style.display = "none";
}

function animatePage4Text(title, message) {
  const titleEl = document.getElementById("p4Title");
  const msgEl = document.getElementById("p4Msg");
  if (!titleEl || !msgEl) return;

  titleEl.textContent = "";
  msgEl.textContent = "";

  let i = 0;
  const titleTimer = setInterval(() => {
    titleEl.textContent += title[i] || "";
    i += 1;
    if (i >= title.length) {
      clearInterval(titleTimer);
      let j = 0;
      const msgTimer = setInterval(() => {
        msgEl.textContent += message[j] || "";
        j += 1;
        if (j >= message.length) clearInterval(msgTimer);
      }, 18);
    }
  }, 22);
}

  if (pushUrl) {
    history.pushState({ index: current }, "", story.path);
  }
}

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
    render(true);
  }
});

nextBtn.addEventListener("click", async () => {
  nextBtn.classList.add("press-pop");
  setTimeout(() => nextBtn.classList.remove("press-pop"), 220);

  if (current === 0) {
    try {
      await song.play();
    } catch (error) {
      // ignore
    }

    song.muted = false;
    localStorage.setItem("birthdayMuted", "false");
    syncMusicButton();
  }

  if (current < stories.length - 1) {
    current += 1;
  } else {
    current = 0;
  }
  render(true);
});

window.addEventListener("popstate", () => {
  current = findIndexByPath(window.location.pathname);
  render(false);
});

song.muted = true;
localStorage.setItem("birthdayMuted", "true");
syncMusicButton();

async function startSong() {
  try {
    await song.play();
    statusText.textContent = song.muted
      ? "Tekan ikon untuk lagu"
      : "Lagu sedang dimainkan.";
  } catch (error) {
    statusText.textContent = "";
  }
}

musicToggle.addEventListener("click", async () => {
  if (song.paused) {
    await startSong();
  }

  song.muted = !song.muted;
  localStorage.setItem("birthdayMuted", String(song.muted));
  syncMusicButton();
  statusText.textContent = song.muted
    ? "Tekan ikon untuk lagu"
    : "Muzik dibuka semula.";
});

window.addEventListener("load", () => {
  render(false);
  startSong();
});

function initRunButton() {

  const btn = document.getElementById("runBtn");
  const okBtn = document.getElementById("okBtn");
  const card = document.querySelector(".wish-card");

  if (!btn || !okBtn || !card) return;

  function move() {

  const cardRect = card.getBoundingClientRect();

  const x =
    Math.random() *
    (cardRect.width - btn.offsetWidth - 20);

  const y =
    Math.random() *
    (cardRect.height - btn.offsetHeight - 20);

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";

}

btn.addEventListener("mouseover", move);
btn.addEventListener("mousemove", move);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  move();
});

btn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  move();
});

  okBtn.addEventListener("click", () => {

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="birthday-popup">

      <div class="birthday-popup-card">

        <img
          src="orang.jpg"
          class="birthday-popup-img"
          alt="Birthday Person"
        >

        <h2>ohh , Lupa nak cakap, ni la Irfan tu, dh janji eh xnk bluetick </h2>

        <p>
          hensem kan, ramai awek minat 👀
        </p>

        <button id="popupNextBtn">
          Ok ok, jom ke ucapan sekarang
        </button>

      </div>

    </div>
    `
  );

  document
    .getElementById("popupNextBtn")
    .addEventListener("click", () => {

      document
        .querySelector(".birthday-popup")
        .remove();

      current = 3;
      render(true);

    });

});

}

function ensurePage3Styles() {
  if (document.getElementById("page3-inline-style")) return;

  const style = document.createElement("style");
  style.id = "page3-inline-style";
  style.textContent = `
    .wish-layout {
      min-height: 78vh;
      display: grid;
      place-items: center;
      padding: 24px 12px;
      gap: 16px;
    }

    .wish-cat {
      width: min(180px, 42vw);
      height: auto;
      border-radius: 16px;
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
      margin-bottom: 8px;
    }

    .wish-float {
      animation: wishFloat 3.2s ease-in-out infinite;
    }

    .wish-card {
      width: min(560px, 92vw);
      background: #fff0f6;
      border: 2px solid #fda4af;
      border-radius: 18px;
      padding: 20px 16px;
      text-align: center;
    }

    .wish-card small {
      display: block;
      margin-bottom: 8px;
      font-weight: 700;
      color: #9f1239;
    }

    .wish-card p {
      margin: 0 0 14px;
      color: #9f1239;
      font-weight: 700;
      font-size: 1.1rem;
      line-height: 1.5;
    }

    .run-btn,
    .ok-btn {
      border: 0;
      border-radius: 999px;
      padding: 10px 18px;
      font-weight: 700;
      cursor: pointer;
      color: #fff;
      margin: 0 6px;
    }

    .run-btn {
      background: #fb7185;
      position: relative;
      z-index 10;
    }

    .ok-btn {
      background: linear-gradient(135deg, #f43f5e, #c026d3);
    }
    
    .reveal {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp .8s ease forwards;
}

.reveal-1 {
  animation-delay: .1s;
}

.reveal-2 {
  animation-delay: .4s;
}

.reveal-3 {
  animation-delay: .8s;
}

.reveal-4 {
  animation-delay: 2s;
}

.reveal-5 {
  animation-delay: 1.6s;
}

@keyframes fadeUp {

  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}

    @keyframes wishFloat {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
  `;

  document.head.appendChild(style);
}

function ensurePage4Styles() {
  if (document.getElementById("page4-inline-style")) return;

  const style = document.createElement("style");
  style.id = "page4-inline-style";
  style.textContent = `
    body.page-four,
    body.page-five {
      background: linear-gradient(135deg, #fce7f3, #f3e8ff, #ede9fe, #fce7f3, #fff1f2);
      background-size: 400% 400%;
      animation: pageOneGradient 14s ease infinite;
    }
    body.page-four .card,
    body.page-five .card {
      width: min(960px, 96vw);
      background: transparent;
      border: 0;
      box-shadow: none;
    }
    .p4-wrap { min-height: 88vh; position: relative; }
    .p4-g { position: absolute; width: 190px; height: 190px; object-fit: cover; border-radius: 22px; box-shadow: 0 10px 24px rgba(0,0,0,.2); opacity: .95; z-index: 1; animation: p4float 3.4s ease-in-out infinite; }
    .p4-a { top: 2%; left: 1%; transform: rotate(-10deg); }
    .p4-b { top: 2%; right: 1%; transform: rotate(10deg); }
    .p4-e { bottom: 2%; left: 1%; transform: rotate(12deg); }
    .p4-f { bottom: 2%; right: 1%; transform: rotate(-12deg); }
    .p4-card { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(630px, 86vw); background: rgba(255,255,255,.45); border: 1px solid rgba(255,255,255,.6); border-radius: 30px; padding: 28px 22px; text-align: center; backdrop-filter: blur(6px); z-index: 3; box-shadow: 0 18px 36px rgba(0,0,0,.08); }
    .p4-title { margin: 0 0 12px; color: #e11d48; font-weight: 800; font-size: clamp(2rem, 4vw, 2.9rem); line-height: 1.2; }
    .p4-msg { margin: 0; color: #9f1239; font-weight: 600; line-height: 1.6; font-size: clamp(1rem, 1.8vw, 1.2rem); min-height: 6.4em; }
    .p4-emo { margin-top: 14px; font-size: 1.5rem; }
    .p4-actions { margin-top: 18px; display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
    .p4-btn { border: 0; border-radius: 999px; padding: 12px 22px; font: inherit; font-weight: 800; color: #fff; cursor: pointer; box-shadow: 0 10px 20px rgba(0,0,0,.14); }
    .p4-btn-orange { background: linear-gradient(90deg,#fb8c00,#ff5252); }
    .p4-btn-pink { background: linear-gradient(90deg,#ff4d7e,#c026d3); }
    .p4-sign { margin: 14px 0 0; color: #fb7185; font-weight: 600; }
    .p4-rain { position: absolute; inset: 0; pointer-events: none; z-index: 6; overflow: hidden; }
    .p4-rain span { position: absolute; top: -10%; font-size: 1.8rem; opacity: .8; animation: p4rain linear infinite; }
    .p4-rain span:nth-child(1) { left: 8%; animation-duration: 7s; }
    .p4-rain span:nth-child(2) { left: 17%; animation-duration: 8s; animation-delay: .6s; }
    .p4-rain span:nth-child(3) { left: 28%; animation-duration: 6.4s; animation-delay: 1s; }
    .p4-rain span:nth-child(4) { left: 39%; animation-duration: 7.8s; animation-delay: .4s; }
    .p4-rain span:nth-child(5) { left: 52%; animation-duration: 7.2s; animation-delay: 1.3s; }
    .p4-rain span:nth-child(6) { left: 63%; animation-duration: 6.8s; animation-delay: .8s; }
    .p4-rain span:nth-child(7) { left: 73%; animation-duration: 8.1s; animation-delay: 1.1s; }
    .p4-rain span:nth-child(8) { left: 82%; animation-duration: 7.4s; animation-delay: .3s; }
    .p4-rain span:nth-child(9) { left: 90%; animation-duration: 6.9s; animation-delay: 1.5s; }
    .p4-rain span:nth-child(10) { left: 95%; animation-duration: 8.4s; animation-delay: .9s; }
    .p4-float { position: absolute; z-index: 2; font-size: 2.2rem; animation: p4float 4.2s ease-in-out infinite; }
    .p4-heart.h1 { top: 8%; left: 33%; }
    .p4-heart.h2 { bottom: 10%; left: 46%; }
    .p4-heart.h3 { bottom: 18%; right: 18%; }
    .p4-cat.c1 { top: 10%; right: 22%; }
    .p4-cat.c2 { top: 34%; right: 21%; }
    .p4-cat.c3 { bottom: 8%; right: 44%; }
    @media (max-width: 700px) {
      .p4-g { width: 110px; height: 110px; border-radius: 14px; }
      .p4-card { width: 86vw; padding: 18px 14px; }
      .p4-title { font-size: 1.9rem; }
      .p4-float { font-size: 1.7rem; }
      .p4-heart.h1 { top: 11%; left: 8%; }
      .p4-heart.h2 { bottom: 12%; left: 16%; }
      .p4-heart.h3 { bottom: 8%; right: 10%; }
      .p4-cat.c1 { top: 14%; right: 8%; }
      .p4-cat.c2 { top: 32%; right: 5%; }
      .p4-cat.c3 { bottom: 9%; right: 40%; }
    }
    @keyframes p4float {
      0% { margin-top: 0; }
      50% { margin-top: -8px; }
      100% { margin-top: 0; }
    }
    @keyframes p4rain {
      from { transform: translateY(-10vh) rotate(0deg); }
      to { transform: translateY(110vh) rotate(25deg); }
    }
  `;

  document.head.appendChild(style);
}

function initScratch() {
  const canvas = document.getElementById("scratchCanvas");
  const result = document.getElementById("p5Result");
  const popup = document.getElementById("p5Popup");
  const next = document.getElementById("p5Next");
  if (!canvas || !result || !popup || !next) return;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;

  ctx.fillStyle = "#cbb9da";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 32px 'Baloo 2', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Scratch sini 👆", canvas.width / 2, canvas.height / 2);

  let down = false;
  let done = false;

  function scratchAt(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
  }

  function checkDone() {
    if (done) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 120) cleared += 1;
    }
    const ratio = cleared / (canvas.width * canvas.height);
    if (ratio > 0.52) {
      done = true;
      canvas.style.opacity = "0";
      canvas.style.pointerEvents = "none";
      result.textContent = "hensem kan dia";
      popup.hidden = false;
    }
  }

  canvas.addEventListener("pointerdown", (e) => {
    down = true;
    scratchAt(e.clientX, e.clientY);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!down) return;
    scratchAt(e.clientX, e.clientY);
  });
  window.addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    checkDone();
  });

  next.addEventListener("click", () => {
    current = 4;
    render(true);
  });
}


function ensurePage5Styles() {
  if (document.getElementById("page5-inline-style")) return;
  const style = document.createElement("style");
  style.id = "page5-inline-style";
  style.textContent = `
    .p5-wrap { min-height: 82vh; display: grid; place-items: center; gap: 14px; }
    .p5-title { margin: 0; color: #e11d48; }
    .p5-scratch-box { position: relative; width: min(760px, 92vw); aspect-ratio: 16 / 9; border-radius: 20px; overflow: hidden; box-shadow: 0 14px 30px rgba(0,0,0,.14); }
    .p5-image { width: 100%; height: 100%; object-fit: cover; display: block; }
    .p5-canvas { position: absolute; inset: 0; width: 100%; height: 100%; transition: opacity .35s ease; touch-action: none; }
    .p5-result { min-height: 28px; margin: 0; color: #c2185b; font-weight: 800; font-size: 1.25rem; }
    .p5-popup { position: fixed; inset: 0; background: rgba(0,0,0,.3); display: grid; place-items: center; z-index: 20; }
    .p5-popup-card { background: #fff; border-radius: 14px; padding: 16px; width: min(320px, 86vw); text-align: center; }
    .p5-popup-card p { margin: 0 0 10px; font-weight: 700; }
    .p5-popup-card button { border: 0; border-radius: 999px; padding: 10px 16px; font-weight: 700; color: #fff; background: linear-gradient(90deg,#ff4d7e,#c026d3); }
  `;
  document.head.appendChild(style);

}

function birthdayBlast() {

  const duration = 5000; // 5 saat
  const end = Date.now() + duration;

  (function frame() {

    confetti({
      particleCount: 4,
      angle: 60,
      spread: 70,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 4,
      angle: 120,
      spread: 70,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }

  })();

}
