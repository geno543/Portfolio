var slide = 0;
var slidecontent = [
    "software engineer", "Developer", "code"
];
var slidervalue = document.getElementById("slide");

function slider() {
    if (slide >= slidecontent.length) {
        slide = 0;
    }
    slidervalue.innerHTML = "";
    slidervalue.classList.remove('holder-animation');

    
    void slidervalue.offsetWidth;
    slidervalue.classList.add('holder-animation');

    for (let i = 0; i < slidecontent[slide].length; i++) {
        let letter = document.createElement('div');
        letter.innerHTML = slidecontent[slide][i];
        if (letter.innerHTML === ' ') {
            letter.innerHTML = '&nbsp;';
        }
        letter.classList.add('start');
        letter.classList.add('animation');
        letter.style.animationDelay = i / 10 + 's';
        slidervalue.appendChild(letter);
    }
    slide++;
}

slider();
setInterval(slider, 4000); 

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('active');
    });

    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('active');
        }
    });
});










