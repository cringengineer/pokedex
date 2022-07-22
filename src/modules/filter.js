const typesBtn = document.querySelectorAll('.type__item');
const closeBtn = document.querySelector('.close__filter');
const filterPopup = document.querySelector('#filter');
const openFilter = document.querySelector('.filter__button');



openFilter.addEventListener('click', function() {
    filterPopup.classList.remove('hiden')
    filterPopup.classList.add('filter__popup');
})

closeBtn.addEventListener('click',function() {
    filterPopup.classList.remove('filter__popup')
    filterPopup.classList.add('hiden')
})



typesBtn.forEach(function(e) {
    e.addEventListener('click',function(elem) {
        console.log(this.value)
    })
})