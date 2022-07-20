const text = document.querySelector(".input__search");
const findBtn = document.querySelector(".find__button");
let listItem = document.querySelectorAll(".list__item");

text.addEventListener("input", () => {
  let val = text.value.trim().toLowerCase();
  if (!val == "") {
    for (let i = 0; i < listItem.length; i++) {
      if (listItem[i].outerText.toLowerCase().search(val) !== -1) {
        listItem[i].classList.remove("hiden");
      } else {
        listItem[i].classList.add("hiden");
      }
    }
  } else {
    for (let i = 0; i < listItem.length; i++) {
      listItem[i].classList.add("hiden");
    }
  }
});

listItem.forEach((el) => {
  el.addEventListener("click", function (val) {
    body.style.overflow = "hidden";
    let nameOfPokemon = val.path[0].innerHTML;
    for (let i = 0; i < pokemonList.length; i++) {
      if (nameOfPokemon == pokemonList[i].name) {
        popup.classList.add("open");
        popup.classList.remove("closed");
        let html = "";
        let segment = ` 
                            <div class="popup__wraper">
                            <img class="popup__img" src=${pokemonList[i].img}>
                            <div class="popup__container">
                            <div class="close"><span class="line__one"></span><span class="line__two"></span></div>
                            <div class="title__container">
                            <p class="popup__name">${pokemonList[i].name}</p>
                            <p class="popup__id">${pokemonList[i].id}</p>
                            </div>
                            <div class="types">
                            <p class="popup__firsttype ${pokemonList[i].type}" >${pokemonList[i].type}</p>
                            <p class="popup__secondtype ${pokemonList[i].secondType}">${pokemonList[i].secondType}</p>
                            </div>
                            <p class="popup__description">${pokemonList[i].description}</p>
                            </div>
                            `;
        let firstType = pokemonList[i].type;
        createPopup(firstType);
        html += segment;
        popup.innerHTML = html;
      }
    }
    closePopup();
  });
});
