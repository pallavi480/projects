const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const playlistDiv = document.getElementById("playlist");

const songs = [
  {
    title: "On & On",
    artist: "Daniel Levi",
    src: "Music by <a href="https://pixabay.com/users/daniel-soul-pro-33031374/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=138914">Daniel Balogh</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=138914">Pixabay</a>",
    img: "https://i.ytimg.com/vi/XsZZQPKLChY/maxresdefault.jpg",
  },
  {
    title: "Dreams",
    artist: "Joakim Karud",
    src: "songs/song2.mp3",
    img: "https://cdn.pixabay.com/photo/2016/11/29/05/08/adventure-1868726_1280.jpg",
  },
  {
    title: "Sunny",
    artist: "KODOMOi",
    src: "songs/song3.mp3",
    img: "https://cdn.pixabay.com/photo/2020/06/02/08/55/music-5258563_1280.jpg",
  },
];

let songIndex = 0;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  album.src = song.img;
  audio.src = song.src;
  updatePlaylistHighlight();
}

function playSong() {
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  audio.play();
}
function pauseSong() {
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  audio.pause();
}

let isPlaying = false;
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
  isPlaying = !isPlaying;
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});
nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

audio.addEventListener("timeupdate", (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
});
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener("ended", nextSong);

function buildPlaylist() {
  playlistDiv.innerHTML = "";
  songs.forEach((song, index) => {
    const div = document.createElement("div");
    div.classList.add("song");
    div.textContent = `${song.title} — ${song.artist}`;
    div.addEventListener("click", () => {
      songIndex = index;
      loadSong(songs[songIndex]);
      playSong();
    });
    playlistDiv.appendChild(div);
  });
}
function updatePlaylistHighlight() {
  const allSongs = document.querySelectorAll(".song");
  allSongs.forEach((el, i) => {
    el.classList.toggle("active", i === songIndex);
  });
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

buildPlaylist();
loadSong(songs[songIndex]);
