'use strict'

// Navbar 올라가면 투명하게 만들기
// event listner 등록 : 스크롤 될때마다 함수 호출
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY); 
    console.log(`navbarHeight: ${navbarHeight}`);

    // window scrollY가 navbarHeight보다 크면 navbar가 어두워지게
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
    } else {
        navbar.classList.remove('navbar__dark');
    }
});
