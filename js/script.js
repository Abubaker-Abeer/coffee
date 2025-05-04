// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabcursor:true,
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
  });

// Nav open close
   const body=document.querySelector('body'),
         navMenu=body.querySelector('.menu-content'),
         navClosebtn=body.querySelector('.navClose-btn'),
         navOpenbtn=body.querySelector('.navOpen-btn');
      if(navMenu && navOpenbtn){
        navOpenbtn.addEventListener("click", ()=>{
            navMenu.classList.add('open')
            body.style.overflowY="hidden"
        })
      }
      if(navMenu && navClosebtn){
        navClosebtn.addEventListener("click", ()=>{
            navMenu.classList.remove('open')
            body.style.overflowY="scroll"
        })
      }

// Change header bg color


// Scroll up button
  
  
  
// Nav link indicator
 
  
// Scroll Reveal Animation
  