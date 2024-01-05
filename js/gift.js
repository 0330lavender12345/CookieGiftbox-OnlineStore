window.addEventListener('scroll', function() {
    let image = document.querySelector('.giftimg img');
    let imagePosition = image.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (imagePosition < screenPosition) {
        image.classList.add('visible');
    } else {
        image.classList.remove('visible');
    }
});