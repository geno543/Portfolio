var slide = 0;
var slidecontent = [
    "software engineer", "Developer", "code"
];
var slidervalue = document.getElementById("slide");

function slider() {

}

slider();
setInterval(slider, 2000);

document.addEventListener('DOMContentLoaded', (event) => {
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










