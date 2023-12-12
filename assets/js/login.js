const logincontainer=document.querySelector('.logincontainer');
const loginlink=document.querySelector('.loginlink');
const signlink=document.querySelector('.signlink');
const btnPop=document.querySelector('.loginbtn');
const closeicon=document.querySelector('.closeicon');

signlink.addEventListener('click',()=>{
    logincontainer.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    logincontainer.classList.remove('active');
});

btnPop.addEventListener('click',()=>{
    logincontainer.classList.add('active-pop');
});

closeicon.addEventListener('click',()=>{
    logincontainer.classList.remove('active-pop');
});