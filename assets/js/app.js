const menuList = document.querySelector('.menu-list');
const navBar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-toggle');
const menuBtn = document.querySelector('.menu-toggle');
const removeLogo = document.querySelector('.logo');

menuBtn.onclick = () => {
    menuList.classList.add('active');
    navBar.classList.add('active');
    closeBtn.classList.add('active');
    menuBtn.classList.add('active');
    removeLogo.classList.add('active');
}

closeBtn.onclick = () => {
    menuList.classList.remove('active');
    navBar.classList.remove('active');
    menuBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    removeLogo.classList.remove('active');
}
