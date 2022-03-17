const resultEl = document.getElementById("result");
const filterEl = document.getElementById("filter");
const listItems = [];

getData();

filterEl.addEventListener("input", function (e) {
  filterData(e.target.value);
});

async function getData() {
  const response = await fetch("https://randomuser.me/api?results=30");
  const { results } = await response.json();
  //   console.log(results);

  //   clear innerElements
  resultEl.innerHTML = "";

  results.forEach((user) => {
    const liEl = document.createElement("li");
    listItems.push(liEl);
    // console.log(element);
    liEl.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}"/>
    <div class="user_info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    resultEl.appendChild(liEl);
  });
}

function filterData(searchValue) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
