"use strict";

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const song = document.querySelector("audio");

let playing = true;

const playmusic = () => {
  playing = true;
  song.play();
  play.classList.replace("fa-circle-play", "fa-circle-pause");
};

function pausemusic() {
  playing = false;
  song.pause();
  play.classList.replace("fa-circle-pause", "fa-circle-play");
}

play.addEventListener("click", () => {
  playing ? pausemusic() : playmusic();
});

const next = document.getElementById("next");
const previous = document.getElementById("previous");

next.addEventListener("click", () => {
  console.log("next buttion clicked");
});

previous.addEventListener("click", () => {
  console.log("previous buttion clicked");
});

const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const play3 = document.getElementById("play3");
const play4 = document.getElementById("play4");
const play5 = document.getElementById("play5");

const img = document.getElementById("music-img");
const musicname = document.querySelector(".music-name");
const musicartist = document.querySelector(".music-artist");

play1.addEventListener("click", () => {
  img.src = "img/endoftime.jpg";
  musicname.textContent = "End of Time";
  musicartist.textContent = "K-391, Alan Walker";
  song.src = "song/endoftime.mp3";
  play.classList.add("fa-circle-pause");
  play.classList.remove("fa-circle-play");
  song.play();
});

play2.addEventListener("click", () => {
  img.src = "img/allfallsdown.jpg";
  musicname.textContent = "All Falls Down";
  musicartist.textContent = "Alan Walker & Noah Cyrus";
  song.src = "song/allfallsdown.mp3";
  play.classList.add("fa-circle-pause");
  play.classList.remove("fa-circle-play");
  song.play();
});

play3.addEventListener("click", () => {
  img.src = "img/tired.jpg";
  musicname.textContent = "Tired";
  musicartist.textContent = "Alan Walker ft. Gavin James";
  song.src = "song/tired.mp3";
  play.classList.add("fa-circle-pause");
  play.classList.remove("fa-circle-play");
  song.play();
});

play4.addEventListener("click", () => {
  img.src = "img/nightchanges.png";
  musicname.textContent = "Night Changes";
  musicartist.textContent = "One Direction";
  song.src = "song/nightchanges.mp3";
  play.classList.add("fa-circle-pause");
  play.classList.remove("fa-circle-play");
  song.play();
});

play5.addEventListener("click", () => {
  img.src = "img/stealmygirl.jpg";
  musicname.textContent = "Steal My Girl";
  musicartist.textContent = "One Direction";
  song.src = "song/stealmygirl.mp3";
  play.classList.add("fa-circle-pause");
  play.classList.remove("fa-circle-play");
  song.play();
});
