$(document).ready(function () {
  var currentSection = 0;
  $("#menu").hide();
  $("li a").click(function () {
    $("li a").removeClass("links");
    $(this).addClass("links");

    var href = $(this).attr("href");
    $("#isimenu>div").hide();

    $(href).show();

    if (currentSection == 0) {
      $("#menu").slideToggle(200);
      currentSection = href;
    } else if (currentSection == href) {
      $("#menu").slideToggle(200);
      currentSection = 0;
    } else {
      currentSection = href;
    }
    return false;
  });
});