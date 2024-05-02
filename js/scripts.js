let count = 1;
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true
}

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

  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
  }

  btnMobile.addEventListener('click', toggleMenu);