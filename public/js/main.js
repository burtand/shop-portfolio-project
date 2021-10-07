'use strict';

let burger = document.querySelector('.burger');
let sideMenu = document.querySelector('.side-menu');
console.log(sideMenu);
burger.addEventListener('click', function () {
    sideMenu.classList.toggle('visible');
});