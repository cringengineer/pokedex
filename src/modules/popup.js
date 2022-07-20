let cards = document.querySelectorAll(".pokemon__card");
let popup = document.querySelector(".popup");
let body = document.querySelector("body");

let createPopup = function (type) {
  switch (type) {
    case "Grass":
      popup.style.backgroundImage = "url('./src/img/themes/junggle.png')";
      break;
    case "Water":
      popup.style.backgroundImage = "url('./src/img/themes/water2.png')";
      break;
    case "Fire":
      popup.style.backgroundImage = "url('./src/img/themes/fire.png')";
      break;
    case "Bug":
      popup.style.backgroundImage = "url('./src/img/themes/forest.png')";
      break;
    case "Normal":
      popup.style.backgroundImage = "url('./src/img/themes/field.png')";
      break;
    case "Electric":
      popup.style.backgroundImage = "url('./src/img/themes/electro.png')";
      break;
    case "Ground":
      popup.style.backgroundImage = "url('./src/img/themes/ground.png')";
      break;
    case "Poison":
      popup.style.backgroundImage = "url('./src/img/themes/poison.png')";
      break;
    case "Fairy":
      popup.style.backgroundImage = "url('./src/img/themes/fairy.png')";
      break;
  }
};

let closePopup = function () {
  if (popup.classList.contains("open")) {
    let close = document.querySelector(".close");
    close.addEventListener("click", function () {
      popup.classList.remove("open");
      popup.classList.add("closed");
      body.style.overflow = "";
    });
  }

  document.addEventListener("mousedown", (elem) => {
    if (!elem.target.closest(".popup")) {
      popup.classList.remove("open");
      popup.classList.add("closed");
      body.style.overflow = "";
    }
  });
};

cards.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    popup.classList.add("open");
    popup.classList.remove("closed");
    body.style.overflow = "hidden";
    let name = e.path[2].childNodes[5].outerText;
    let description = e.path[2].childNodes[9].outerText;
    let id = e.path[2].childNodes[3].outerText;
    let firstType = e.path[2].childNodes[7].childNodes[1].outerText;
    let secondType = e.path[2].childNodes[7].childNodes[3].outerText;
    let src = id.substr(1);
    let html = "";
    let segment = ` 
                            <div class="popup__wraper">
                            <img class="popup__img" src=./src/img/pokemons/${src}.png>
                            <div class="popup__container">
                            <div class="close"><span class="line__one"></span><span class="line__two"></span></div>
                            <div class="title__container">
                            <p class="popup__name">${name}</p>
                            <p class="popup__id">${id}</p>
                            </div>
                            <div class="types">
                            <p class="popup__firsttype ${firstType}" >${firstType}</p>
                            <p class="popup__secondtype ${secondType}">${secondType}</p>
                            </div>
                            <p class="popup__description">${description}</p>
                            </div>
                            `;
    createPopup(firstType);
    html += segment;
    popup.innerHTML = html;
    closePopup();
  });
});

closePopup();
