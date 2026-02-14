const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const subtext = document.getElementById("subtext");
const mainCard = document.getElementById("mainCard");
const letterCard = document.getElementById("letterCard");
const letterText = document.getElementById("letterText");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const bgMusic = document.getElementById("bgMusic");
const noMessage = document.getElementById("noMessage");

let noClicks = 0;

const messages = [
  "you can't say no",
  "stop lying",
  "just tell me you hate me bruh",
  "cutie pie please"
];

noBtn.addEventListener("click", () => {
  if (noClicks < messages.length) {
    noMessage.textContent = messages[noClicks];
    noClicks++;

    noBtn.style.transform = `scale(${1 - noClicks * 0.15})`;
    yesBtn.style.transform = `scale(${1 + noClicks * 0.1})`;

    // If this was the last message, remove the button
    if (noClicks === messages.length) {
      noBtn.classList.add("fade-out");

      setTimeout(() => {
        noBtn.style.display = "none";
      }, 400);
    }
  }
});


yesBtn.addEventListener("click", () => {
  mainCard.innerHTML = "<h2>I love you so much 😽😽</h2>";
  setTimeout(() => {
    mainCard.classList.add("hidden");
    letterCard.classList.remove("hidden");
    startLetter();
  }, 1500);
});

const letterContent = `
Hey Esme,

I know a website might not be what you expected, but here I am. I look around and see everyone has plans for Valentine's Day, everyone is buying gifts for their partners, and everyone is excited, and it makes me sad that I can't do any of that for you. I wish I could show you in every way just how much you mean to me, and I'm sorry that I can't.

But then I think about you, and I feel so happy, because you choose me. You choose me every day, and that is the most nicest thing anyone has ever done for me. You have given me so much love and support, more than I ever thought I could have, and I can't imagine my life without it. Genuinely, you are one of the best things that has ever happened to me. 

I love all the little things about you. The way you laugh and the way you smile make my heart feel full, the way you hold my hand and make me feel like nothing else matters, the way simply being with you makes everything feel right. 

I don't know what this year will bring, but I do know that I want to spend Valentine's and every single other day with you. You are my favorite part of every day, and I hope I can make you feel even half as loved as you make me feel. I said this before and I'll say it again because it is true, your love is the most precious thing I have. Do not ever feel like you're alone in anything because I'll always be there with you no matter what. 

I love you so freaking much!!!

Your pook ❤️,
Rakshan Reddy Mallela
`;

function startLetter() {
  let i = 0;
  function typeWriter() {
    if (i < letterContent.length) {
      letterText.innerHTML += letterContent.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }
  typeWriter();
}

window.addEventListener("load", () => {
  bgMusic.volume = 0.2;
  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Music started successfully, show pause icon
        musicIcon.innerHTML = `
          <rect x="5" y="4" width="4" height="16" fill="white"></rect>
          <rect x="15" y="4" width="4" height="16" fill="white"></rect>
        `;
      })
      .catch((error) => {
        // Autoplay blocked: fallback to play icon
        musicIcon.innerHTML = `
          <polygon points="5,3 19,12 5,21" fill="white"></polygon>
        `;
        console.log("Autoplay blocked, user must tap to play music");
      });
  }
});

// Button toggle behavior
musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.innerHTML = `
      <rect x="5" y="4" width="4" height="16" fill="white"></rect>
      <rect x="15" y="4" width="4" height="16" fill="white"></rect>
    `;
  } else {
    bgMusic.pause();
    musicIcon.innerHTML = `
      <polygon points="5,3 19,12 5,21" fill="white"></polygon>
    `;
  }
});

/* --------------------------
   Floating Hearts Generation
-------------------------- */
const heartContainer = document.querySelector(".floating-hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (Math.random() * 1 + 0.8) + "rem";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";
  heart.style.opacity = 0.2 + Math.random() * 0.3;
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);
