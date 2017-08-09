


$( document ).ready(function() {


  $(".profileimage").click(function() {
    $("img").toggle("bounce", {times: 3}, "slow");
  });


/*Mobile menu hide*/
$( window ).resize(function() {
  if ($(window).width() < 537) {
    $(".mobilenav").hide();
    $(".mobilebutton").show();
    $(".mobilebutton").click(function(){
      $(".mobilenav").toggle();
    });
  }
  else {
    $(".mobilebutton").hide();
    $("nav").show();
  }
});

});
