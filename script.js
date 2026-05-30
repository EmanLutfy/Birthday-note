const stories = [
  {
    path: "/story-1",
    tag: "EH APENI!",
    title: "Ada Surprise Untuk <span>Irfan</span>",
    message: "Nak tahu? Tak boleh 😼 Tekan dulu bluek",
    hint: true,
    signature: "dari Eman  ❤️"
  },
  {
    path: "/story-2",
    title: "HI IRFAN HI HI IRFAN HI HI HI HI IRFAN HI HI HI HI IRFAN 😺😺😺😺",
    message: "Jangan panik... ni bukan serangan! Sila duduk dengan tenang dan siap sedia ❤️😹"
  },
  {
    path: "/story-3",
    tag: "",
    title: "",
    message: ""
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

  document.body.classList.toggle("page-one", isPageOne);
  document.body.classList.toggle("page-two", isPageTwo);

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
  } else {
    tagEl.style.display = "none";
    titleEl.style.display = "none";
    messageEl.style.display = "none";
    hintEl.style.display = "none";
    signatureEl.style.display = "none";
    giftEl.style.display = "none";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    statusText.style.display = "none";
    page2Playground.style.display = "none";
    page2Playground.innerHTML = "";
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
      ? "Muzik dimute. Tekan ikon untuk buka semula."
      : "Lagu sedang dimainkan. Selamat hari jadi, kawan!";
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
    ? "Muzik dimute. Tekan ikon untuk buka semula."
    : "Muzik dibuka semula. Selamat hari jadi, kawan!";
});

window.addEventListener("load", () => {
  render(false);
  startSong();
});
