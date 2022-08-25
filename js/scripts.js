window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

let one = "#10e88a",
  two = "#7f3995",
  three = "#0d78e7",
  four = "#f88f18",
  five = "#bb6774";

$(window).on("scroll touchmove", function () {
  if ($(document).scrollTop() >= $("#one").position().top) {
    $("body").css("background", $("#one").attr("data-color"));
  }
  if ($(document).scrollTop() > $("#two").position().top) {
    $("body").css("background", $("#two").attr("data-color"));
  }
  if ($(document).scrollTop() > $("#three").position().top) {
    $("body").css("background", $("#three").attr("data-color"));
  }
  if ($(document).scrollTop() > $("#four").position().top) {
    $("body").css("background", $("#four").attr("data-color"));
  }
  if ($(document).scrollTop() >= $("#five").position().top) {
    $("body").css("background", $("#five").attr("data-color"));
  }
});
