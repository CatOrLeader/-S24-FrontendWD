'use strict';

import "./common";

import {Comic} from './types';
import moment from 'moment';
import {changeColor} from "./common";

document.addEventListener('DOMContentLoaded', function () {
    let email: string = 'a.mukhutdinov@innopolis.university';

    fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`)
        .then((response: Response) => (<PromiseLike<string> | string>response.json()))
        .then(comicId => fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`))
        .then((response: Response) => (<PromiseLike<Comic> | Comic>response.json()))
        .then(comic => {
            let comicTitle: HTMLHeadingElement = document.createElement('h3');
            comicTitle.textContent = comic.safe_title;

            let comicDate: HTMLParagraphElement = document.createElement('p');
            let date: Date = new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day));
            comicDate.textContent = `Published on: ${date.toLocaleDateString()} (${moment(date).fromNow()})`;

            let comicPicture: HTMLImageElement = document.createElement('img');
            comicPicture.setAttribute('src', comic.img);
            comicPicture.setAttribute('alt', comic.alt);

            let comicContainer: HTMLElement | null = document.getElementById('comic-container');

            if (comicContainer) {
                comicContainer.appendChild(comicTitle);
                comicContainer.appendChild(comicDate);
                comicContainer.appendChild(comicPicture);
            }
        })
        .catch(error => console.error('Error while fetching comic, logs further:', error));
});

document.getElementById('back-to-main-btn')?.addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.getElementById('change-theme-btn')?.addEventListener('click', function () {
    let body = document.body as HTMLElement;
    let comicContent = document.querySelector('#comic-content') as HTMLElement;
    let backButton = document.querySelector('#back-to-main-btn') as HTMLElement;

    if (body.style.backgroundColor === 'black') {
        changeColor(body, 'black', 'white');
        changeColor(comicContent, 'black', 'white');
        backButton.style.backgroundColor = '#FF6347';
        backButton.style.color = 'white';
    } else {
        changeColor(body, 'white', 'black');
        changeColor(comicContent, 'white', 'black');
        backButton.style.backgroundColor = '#007BFF';
        backButton.style.color = 'white';
    }
});
