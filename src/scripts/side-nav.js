const allItems = document.querySelectorAll('.dot-nav ul li a');

allItems.forEach(item => {
    item.addEventListener('click', function(e) {
        //loop
        for(var i = 0; i < allItems.length; i++) {
            allItems[i].classList.remove('active');
        }
        this.classList.add('active');
    });
});

