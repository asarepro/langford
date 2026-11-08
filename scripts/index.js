let nav_btn = document.querySelector('.nav_btn');
let menu_list = document.querySelector('.menu_list');
let dark = document.querySelector('.dark_toggle');

AOS.init({
    duration: 1200, // default duration for all animations
});


nav_btn.addEventListener('click',
    () => {
        menu_list.classList.toggle('menu_open');
        nav_btn.classList.toggle('nav_btn_close');
    }
)


dark.addEventListener('click',
    () => {
        dark.classList.toggle('sun')
        let body = document.querySelector('.body');
        body.classList.toggle('darks');
        let fig = document.querySelectorAll('figcaption');
        let p = document.querySelectorAll('div');
        let par = document.querySelectorAll('p');

        fig.forEach(function (fig) {
            fig.style.background = 'red'
        })

        p.forEach(function (p) {
            p.style.color = 'white'
        })

        par.forEach(function (par) {
            par.style.color = 'white' 
        })
    }
)