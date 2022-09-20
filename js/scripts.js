window.addEventListener("DOMContentLoaded", (event) => {
  // (B1) AJAX LOAD JSON DATA
  fetchAbout();
  // Activate Bootstrap scrollspy on the main nav element
  try {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  } catch (e) {
    console.log(e);
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

function fetchAbout() {
  fetch("/assets/data/about.json")
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach(function (key) {
        try {
          document.getElementById(key).innerHTML = data[key];
        } catch (error) {
          console.log("No id found with this key : " + key);
        }
      });
    });
}
