'use strict';

import "./common";

import {changeColor} from "./common";

document.getElementById('change-theme-btn')?.addEventListener('click', function () {
    const body = document.body as HTMLElement;
    const bio = document.querySelector('.bio') as HTMLElement;
    const projects = document.querySelector('.projects') as HTMLElement;
    const projectCards = document.querySelectorAll('.project-card') as NodeListOf<HTMLElement>;
    const socialLinks = document.querySelector('.social-links') as HTMLElement;

    if (body.style.backgroundColor === 'black') {
        changeColor(body, 'black', 'white');
        changeColor(bio, 'black', 'white');
        changeColor(projects, 'black', 'white');
        changeColor(socialLinks, 'black', 'white');
        projectCards.forEach(function (card: HTMLElement) {
            changeColor(card, 'black', 'white');
        });
    } else {
        changeColor(body, 'white', 'black');
        changeColor(bio, 'white', '#333');
        changeColor(projects, 'white', '#333');
        changeColor(socialLinks, 'white', '#333');
        projectCards.forEach(function (card: HTMLElement) {
            changeColor(card, 'white', '#333');
        });
    }
});

document.getElementById('view-comic-btn')?.addEventListener('click', function () {
    window.location.href = 'comic.html';
});
