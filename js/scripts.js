
var swiper = new Swiper(".mySwiper", {
    
   
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1.4,
    
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });





  var button = document.querySelector('button');
  var text = document.querySelector('.tabletop-hidden');
  var buttonImg = document.querySelector('.button-img')
  var isHidden = true;
  
  button.addEventListener('click', function() {
  if (isHidden) {
    buttonImg.style.transform = 'rotate(180deg)';
  text.style.display = 'flex';
  button.textContent = 'Скрыть все';
  
  isHidden = false;
  } else {
    buttonImg.style.transform = 'rotate(0deg)';
  text.style.display = 'none';
  button.textContent = 'Показать все';
  isHidden = true;
  }
  });






























 /* const button = document.querySelector('.show-hide')

  button.onclick = function() {
      var div = document.getElementById('tabletop-hidden')
      if (div.style.display !== 'none') {
        button.textContent = "Показать Элемент";
        
          div.style.display = 'none';
      }
      else {
        button.textContent = "Скрыть элемент ";
          div.style.display = 'flex';
      }
  }; */




/* /*   const btn = document.querySelector(".show-hide");
  const content = document.querySelector(".tabletop-hidden");
  btn.addEventListener("click", btnClick);

  function btnClick() {
    console.log(content.classList);

    if (div.style.display !== 'none') {
        btn.textContent = "Скрыть элемент";
        div.style.display = 'none'; }
       
       else {
        div.style.display = 'flex';
        btn.textContent = "Показать элемент";
      }

      content.classList.toggle("none");
    }
 */