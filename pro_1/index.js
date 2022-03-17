let bgEl = document.getElementById("bg");
let paraEl = document.getElementById("progress");
let messageEl = document.getElementById("text");
let timer = 0;

const timerId = setInterval(function () {
  timer += 5;
  if (timer >= 100) {
    clearInterval(timerId);
  }
  paraEl.textContent = `${timer}%`;
  messageEl.style.opacity = Scale(timer, 0, 100, 1, 0);

  bgEl.style.filter = `blur(${Scale(timer, 0, 100, 30, 0)}px)`;

  console.log(timer);
}, 1000);

function Scale(num, min_in, max_in, min_out, max_out) {
  const result =
    ((num - min_in) * (max_out - min_out)) / (max_in - min_in) + min_out;
  return result;
}
