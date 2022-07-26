const typesBtn = document.querySelectorAll('.type__item');
const btnFilter = document.querySelector('.filter__button');
const typeList = document.querySelector('.type__list')



btnFilter.addEventListener('click', function() {
    if (btnFilter.classList.contains('opened')) {
        btnFilter.classList.remove('opened');
        typeList.style.display = '';
    } else {
        btnFilter.classList.add('opened');
        typeList.style.display = 'grid';
    }
})


typesBtn.forEach(function(e) {
    e.addEventListener('click',function() {
        if(this.classList.contains('choosed__type')) {
            this.classList.remove('choosed__type');
            cards.forEach(function(e) {
                    e.classList.remove('hiden')
            })
        } else {
            typesBtn.forEach(function(e) {
                e.classList.remove('choosed__type')
            })
            this.classList.add('choosed__type');
            let currentType = this.value.toLowerCase();
            console.log(currentType)
            cards.forEach(function(e) {
                if(!e.classList.contains(currentType)) {
                    e.classList.add('hiden')
                }
            })
            
        }
    })
})