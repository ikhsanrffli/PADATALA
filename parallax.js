$(document).ready(function() {
  $(window).mousemove(function(e) {
    let screenWidth = $(window).width();
    let screenHeight = $(window).height();
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    
    // Parallax effect
    let parallaxX = -(mouseX / screenWidth * 20);
    let parallaxY = -(mouseY / screenHeight * 20);
    $(".parallax").css({
      transform: "translate(" + parallaxX + "px, " + parallaxY + "px)"
    });
    
    // Text-container positioning
    let textContainerX = (mouseX / screenWidth * 45);
    let textContainerY = (mouseY / screenHeight * 45);
    $(".text-container").css({
      transform: "translate(" + textContainerX + "px, " + textContainerY + "px)"
    });
  });

  $(".parallax-container").mouseenter(function() {
    $(this).find(".text-container").addClass("show");
  });

  $(".parallax-container").mouseleave(function() {
    $(this).find(".text-container").removeClass("show");
  });
});
$(document).ready(function() {
  // Array of background images
  var backgroundImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    "https://wallpapercave.com/uwp/uwp3582857.webp",
    "https://wallpapercave.com/dwp1x/wp10942751.jpg"
  ];

  // Assign background images to respective parallax containers
  $(".parallax-container").each(function(index) {
    $(this).css("background-image", "url(" + backgroundImages[index] + ")");
  });
});
 // Smooth scroll animation
 const navLinks = document.querySelectorAll('.navbar a');
 navLinks.forEach(link => {
   link.addEventListener('click', smoothScroll);
 });
 
 function smoothScroll(e) {
   e.preventDefault();
   
   const targetId = this.getAttribute('href');
   const targetSection = document.querySelector(targetId);
   const targetOffset = targetSection.offsetTop;
   
   window.scrollTo({
     top: targetOffset,
     behavior: 'smooth'
   });
 }
