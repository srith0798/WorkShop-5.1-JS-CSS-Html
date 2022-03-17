const leftSlideEl = document.querySelector(".left__bar");
const rightSlideEl = document.querySelector(".right__bar");
const bgLayerEl = document.querySelector(".bg__layer");
const upBtnEl = document.querySelector(".up");
const downBtnEl = document.querySelector(".down");
const lengthEl = rightSlideEl.querySelectorAll("div").length;
console.log(lengthEl);

let activeSlideIndex = 0;

leftSlideEl.style.top = `-${(lengthEl - 1) * 100}vh`;

upBtnEl.addEventListener("click", function () {
  return changeSlide("up");
});

downBtnEl.addEventListener("click", function () {
  return changeSlide("down");
});

function changeSlide(direction) {
  const sliderHeight = bgLayerEl.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > lengthEl - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = lengthEl - 1;
    }
  }

  rightSlideEl.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlideEl.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}
