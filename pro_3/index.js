let textareaEl = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textareaEl.addEventListener("keyup", (e) => {
  createTagElements(e);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 100);
    randomFunc();
  }
});

function createTagElements(e) {
  const textValue = e.target.value;
  const textList = textValue
    .split(",")
    .filter((each) => each.trim() !== "")
    .map((tag) => tag.trim());
  //   console.log(textList);
  tagsEl.innerHTML = "";

  textList.forEach((element) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = element;
    tagsEl.appendChild(tagEl);
  });
}

function randomFunc() {
  //   console.log("123");
  const time = 30;
  const timerId = setInterval(() => {
    const randomTag = pickOne();

    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(timerId);
    setTimeout(() => {
      const randomTag = pickOne();
      highlightTag(randomTag);
    });
  }, time * 100);
}

function pickOne() {
  const picking = document.querySelectorAll(".tag");
  return picking[Math.floor(Math.random() * picking.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
