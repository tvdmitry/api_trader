$(document).ready(function () {
  $(".menu-header__body").on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr("href"),
      top = $(id).offset().top - document.querySelector("header").offsetHeight;

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

const iconMenu = document.querySelector(".menu-header__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu-header__body");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
