'use strict'

// Navbar 올라가면 투명하게 만들기
// event listner 등록 : 스크롤 될때마다 함수 호출
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY); 
    // console.log(`navbarHeight: ${navbarHeight}`);

    // window scrollY가 navbarHeight보다 크면 navbar가 어두워지게
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    } else {
        navbar.classList.remove('navbar__dark');
    }
});

// navbar 메뉴 탭 할 시, 스크롤 다루기
const  navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }

    scrollIntoView(link);

});

// "contact me" 클릭 시 해당 세션으로 이동하기
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}