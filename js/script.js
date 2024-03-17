
$(".header-burger").on("click", function () { 

  if ($(".mobile-menu").hasClass("is-active")) {
    $(".mobile-menu").slideUp(500); 
    $(".mobile-menu").removeClass("is-active");
  } 
  else {
    $(".mobile-menu").slideDown(500); 
    $(".mobile-menu").addClass("is-active");
  }

});


$(".header-mobile-close").click(() => {
  $(".mobile-menu").slideUp(500); 
  $(".mobile-menu").removeClass("is-active");
})

/*   .about-subtitle {
    font-size: 13px;
    max-width: 310px;
  }
  .about-buy-btn, .about-video-btn {
    padding: 8px 17px;
    font-size: 13px;
  }
  .about-lg {
    font-size: 25px;
    line-height: 1.6;
  }
  .about-sm {
    font-size: 13px;
    margin-left: 6px;
  }
  .about-best-cars {
    gap: 0 20px;
  }  */