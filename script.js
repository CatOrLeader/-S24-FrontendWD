document.getElementById('change-theme-btn').addEventListener('click', function () {
    let body = document.body;
    let bio = document.querySelector('.bio');
    let projects = document.querySelector('.projects');
    let projectCards = document.querySelectorAll('.project-card');
    let socialLinks = document.querySelector('.social-links');

    if (body.style.backgroundColor === 'black') {
        changeColor(body, 'black', 'white')
        changeColor(bio, 'black', 'white')
        changeColor(projects, 'black', 'white')
        changeColor(socialLinks, 'black', 'white')
        projectCards.forEach(function (card) {
            changeColor(card, 'black', 'white')
        });
    } else {
        changeColor(body, 'white', 'black')
        changeColor(bio, 'white', '#333')
        changeColor(projects, 'white', '#333')
        changeColor(socialLinks, 'white', '#333')
        projectCards.forEach(function (card) {
            changeColor(card, 'white', '#333')
        });
    }
});

function changeColor(obj, color, backgroundColor) {
    obj.style.backgroundColor = backgroundColor;
    obj.style.color = color;
}

function openProject(projectId) {
    window.open(`${projectId}.html`, '_blank');
}

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.json loaded...');
});
