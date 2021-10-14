// import '../public/assets/svgs/close_small.svg';
import "../public/index.html";
import './styles/styles.scss';
import PDF from "../public/assets/resume/Resume.pdf";

// Selectors
const $mainNav = document.querySelector('.nav-styles');
const $titleAboutMe = document.querySelector('.aboutMe__title');
const $aboutMeContainer = document.querySelector('#about_me');
const $hamburguerMenu = document.querySelector('.menu');
const $modalMenu = document.querySelector('.header__modal');
const $modalClose = document.querySelector('.modal__close');
const $mobileNavs = document.querySelectorAll('.nav__mobile');
const $btn = document.querySelector('.btn-primary');

const observer = new IntersectionObserver( entries => {

    const [ entrie ] = entries;

    if( entrie.isIntersecting ){
        $mainNav.classList.remove( 'navAnimation' );
        $aboutMeContainer.classList.remove( 'mt-10' );
    }else{
        $mainNav.classList.add( 'navAnimation' );
        $aboutMeContainer.classList.add( 'mt-10' );
    }

});

observer.observe($titleAboutMe);

// EVENTS
$hamburguerMenu.addEventListener( 'click', () => { 
   $modalMenu.classList.remove( 'd-none' ); 
});

$modalClose.addEventListener( 'click', () => {    
    $modalMenu.classList.add( 'd-none' );
});

$mobileNavs.forEach( nav => { 
    nav.addEventListener( 'click', () => {
        $modalMenu.classList.add( 'd-none' );
    } );
});

$btn.addEventListener('click', () => {
    window.open(PDF);
});