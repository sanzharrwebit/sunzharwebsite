$(function () {
  $("#video-button").click(function () {
    let about = $(".modal");

    if (about.css("display") === "none") {
      about.css("display", "block");
    } else {
      about.css("display", "none");
    }
  });
  $(".modal-close").click(function () {
    $(".modal").css("display", "none");
  });
});
