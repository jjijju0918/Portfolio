'use strict'

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
   if(window.scrollY > navbarHeight) {
    navbar.classList.add("narbar__dark");
   } else {
    navbar.classList.remove("narbar__dark");
   }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//Make home slowly fade to transparent as the window scrolls dowm
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1-window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down 
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; 
    if(filter == null) {
        return;
    }

    // Remove selection form the previous item and select the new one
    const acrive = document.querySelector('.category__btn.selected');
    acrive.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target :
                    e.target.parentNode; 
    target.classList.add('selected');


    projectContainer.classList.add('anim-out');
    setTimeout (() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}