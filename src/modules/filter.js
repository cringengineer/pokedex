const typesBtn = document.querySelectorAll('.type__item');
const closeBtn = document.querySelector('.close__filter');
const filterPopup = document.querySelector('#filter');
const openFilter = document.querySelector('.filter__button');
const applyBtn = document.querySelector('.apply');
const reset = document.querySelector('.reset');



openFilter.addEventListener('click', function() {
    filterPopup.classList.remove('hiden');
    filterPopup.classList.add('filter__popup');
})

closeBtn.addEventListener('click',function() {
    filterPopup.classList.remove('filter__popup');
    filterPopup.classList.add('hiden');
})

let choosedPokemons = [];

typesBtn.forEach(function(e) {
    e.addEventListener('click',function() {
        if(this.classList.contains('choosed__type')) {
            this.classList.remove('choosed__type');
            let indexOfPokemon = choosedPokemons.indexOf(this.value.toLowerCase());
            choosedPokemons.splice(indexOfPokemon, 1);
        } else {
            this.classList.add('choosed__type');
            choosedPokemons.push(this.value.toLowerCase());
            console.log(choosedPokemons)
        }
    })
})


applyBtn.addEventListener('click', function() {
    console.log(choosedPokemons)
    cards.forEach(function(card) {
        for(let i = 0;i<choosedPokemons.length;i++) {
            if(!card.classList.contains(choosedPokemons[i])) {
                card.classList.add('hiden')
            }
        }
    })
})

reset.addEventListener('click',function() {
    cards.forEach(function(card) {
        if(card.classList.contains('hiden')) {
            card.classList.remove('hiden');
        }
    })
    typesBtn.forEach(function(e) {
        e.classList.remove('choosed__type')
    })
    choosedPokemons = []
})