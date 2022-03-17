const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const userName = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML = `<img
    src="https://i.postimg.cc/d06KctmL/the-division-3840x2160-tom-clancy-s-minimal-4k-14522.jpg"
    alt=""
  />`;
  title.innerHTML = "Play The Division, experience the Open world of Gaming";
  excerpt.innerHTML =
    "Create a team with your friends or play Solo. Enjoy the Enhanced military experience!";
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  userName.innerHTML = `John Doe`;
  date.innerHTML = `Oct 08, 2021`;
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2000);
