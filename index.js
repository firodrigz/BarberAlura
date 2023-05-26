const icon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav-header');

icon.addEventListener('click', () =>{
    nav.classList.toggle('hidden');
})