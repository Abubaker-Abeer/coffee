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
window.addEventListener("scroll",() =>{
   const scrollY=window.pageYOffset
   if(scrollY>5){
    document.querySelector("header").classList.add("header-active")
   }
   else{
   document.querySelector("header").classList.remove("header-active")

   }
// Scroll up button
  const scrollUpBtn=document.querySelector('.scrollUp-btn')
  if(scrollY>250){
    scrollUpBtn.classList.add("scrollUp-btn-active")
  }
  else{
   scrollUpBtn.classList.remove("scrollUp-btn-active")
  }

  // Nav link indicator

  const sections =document.querySelectorAll('section[id]')
  sections.forEach(section =>{
    const sectionHeight =section.offsetHeight,
    sectionTop=section.offsetTop-60;
    let navId=document.querySelector(`.menu-content a[href*= ${section.id}]`)
    if(scrollY>sectionTop && scrollY<= sectionTop+sectionHeight){
       
        navId.classList.add('active-navlink')
    }
    else{
       navId.classList.remove('active-navlink')
    }
    navId.addEventListener("click",() =>{
        navMenu.classList.remove('open')
            body.style.overflowY="scroll"
    })
  })
  })
 
// Scroll Reveal Animation
  const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
  })
  sr.reveal(`.menu-title,.menu-subtitle,.menu-description, .brand-img, .testitmonial, .newsletter, .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links `)
  sr.reveal(`.about-imagecontent, .menu-items`,{origin:'left'})
    sr.reveal(`.about-details, .time-table`,{origin:'right'})