const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var Container = document.querySelector(".container");
var Fixed = document.querySelector(".fixed");

Container.addEventListener("mousemove", function (){
    Fixed.style.display = "block";
})
Container.addEventListener("mouseleave", function (){
    Fixed.style.display = "none";
})
var Fixed1 = document.querySelector(".fixed1");

Container.addEventListener("mousemove", function (){
    Fixed1.style.display = "block";
})
Container.addEventListener("mouseleave", function (){
    Fixed1.style.display = "none";
})
var image = document.querySelectorAll(".mini1");
image.forEach(function(e){
    e.addEventListener("mousemove",function(){
        var img = e.getAttribute("pic")
        Fixed.style.backgroundImage = `url(${img})`;
        Fixed.style.backgroundSize = "cover"

    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var day = document.querySelector("#day_icon");

  var nav_part2 = document.getElementById("nav_part2");
  
  nav_part2.addEventListener("click", function (){
      day.src = "night-mode.png";
      var element = document.getElementById("day_icon");
      element.id = "night_icon";
 });


  var night = document.querySelector("#night_icon");

  var nav_part2 = document.getElementById("nav_part2");
  
  nav_part2.addEventListener("click", function (){
      night.src = "day-mode.png";
      var element1 = document.getElementById("night_icon");
      element1.id = "day_icon";
 });
  
