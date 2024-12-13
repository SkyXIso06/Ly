document.querySelectorAll('.lightbox').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const imgSrc = item.getAttribute('href');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = imgSrc;
        document.getElementById('lightbox').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

document.getElementById('lightbox').addEventListener('click', (event) => {
    if (event.target !== document.getElementById('lightbox-img')) {
        document.getElementById('lightbox').style.display = 'none';
    }
});