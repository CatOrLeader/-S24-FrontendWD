document.addEventListener('DOMContentLoaded', function () {
    const email = 'a.mukhutdinov@innopolis.university';

    fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(comicId => fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`))
        .then(response => response.json())
        .then(comic => {
            const comicTitle = document.createElement('h3');
            comicTitle.textContent = comic.safe_title;

            const comicDate = document.createElement('p');
            const date = new Date(comic.year, comic.month, comic.day);
            comicDate.textContent = `Published on: ${date.toLocaleDateString()}`;

            const comicPicture = document.createElement('img');
            comicPicture.setAttribute('src', comic.img);
            comicPicture.setAttribute('alt', comic.alt);

            const comicContainer = document.getElementById('comic-container');

            comicContainer.appendChild(comicTitle);
            comicContainer.appendChild(comicDate);
            comicContainer.appendChild(comicPicture);
        })
        .catch(error => console.error('Error while fetching comic, logs further:', error));
});

document.getElementById('back-to-main-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.getElementById('change-theme-btn').addEventListener('click', function () {
    let body = document.body;
    let comicContent = document.querySelector('#comic-content');
    let backButton = document.querySelector('#back-to-main-btn');

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

function changeColor(obj, color, backgroundColor) {
    obj.style.backgroundColor = backgroundColor;
    obj.style.color = color;
}
