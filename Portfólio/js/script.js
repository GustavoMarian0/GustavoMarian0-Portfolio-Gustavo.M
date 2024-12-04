var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

 let btnMenu = document.getElementById('btn-menu')
 let menu = document.getElementById('menu-mobile')
 let overlay = document.getElementById('overlay-menu')

 btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
 })

 menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
 })

 overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
 })