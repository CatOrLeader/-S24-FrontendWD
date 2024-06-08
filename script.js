document.getElementById('change-theme-btn').addEventListener('click', function() {
    let body = document.body;
    let bio = document.querySelector('.bio');
    let projects = document.querySelector('.projects');
    let projectCards = document.querySelectorAll('.project-card');
    let socialLinks = document.querySelector('.social-links');

    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';
        bio.style.backgroundColor = '#fff';
        bio.style.color = '#333';
        projects.style.backgroundColor = '#fff';
        projects.style.color = '#333';
        socialLinks.style.backgroundColor = '#fff';
        socialLinks.style.color = '#333';
        projectCards.forEach(function(card) {
            card.style.backgroundColor = '#fff';
            card.style.color = '#333';
        });
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        bio.style.backgroundColor = '#333';
        bio.style.color = 'white';
        projects.style.backgroundColor = '#333';
        projects.style.color = 'white';
        socialLinks.style.backgroundColor = '#333';
        socialLinks.style.color = 'white';
        projectCards.forEach(function(card) {
            card.style.backgroundColor = '#333';
            card.style.color = 'white';
        });
    }
});

function openProject(projectId) {
    window.open(`${projectId}.html`, '_blank');
}

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded...');
});
