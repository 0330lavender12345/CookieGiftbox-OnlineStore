const openbtn = document.querySelector(".profile-btn");
const closebtn = document.querySelector("#closemodal");
const procontain = document.querySelector(".procontain");

openbtn.addEventListener('click', () => {
    procontain.classList.add('open');
});

closebtn.addEventListener('click', () => {
    procontain.classList.remove('open');
});