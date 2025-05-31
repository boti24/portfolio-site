$(document).ready(function () {
  // portfolio filter
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
  });

  // fancybox
  $(".fancybox").fancybox({
    openEffect: "zoom",
    closeEffect: "zoom",
  });
});
// flashlight effect
$(document).ready(function () {
  $("#about-flash-img").on("click", function () {
    var $flash = $("#flashlight-overlay");
    $flash.show().css("opacity", 1);
    $flash.animate({ opacity: 0 }, 600, function () {
      $flash.hide();
    });
    setTimeout(function () {
      window.location.href = "contact.html";
    }, 800);
  });
});
