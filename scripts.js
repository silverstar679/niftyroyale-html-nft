$(function () {
  $("#toggle").click(function () {
    if ($(this).attr("class") == "day") {
      $("#day").css("display", "none");
      $("#night").fadeIn("fast");
      $("span").html('<i class="fa-solid fa-sun fa-lg"></i>');
      $(this).attr("class", "night");
    } else {
      $("#day").fadeIn("fast");
      $("#night").css("display", "none");
      $("span").html('<i class="fa-solid fa-moon fa-lg"></i>');
      $(this).attr("class", "day");
    }
  });
});
