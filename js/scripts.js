window.addEventListener("DOMContentLoaded", (event) => {
  // AJAX LOAD JSON DATA
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

// Fetches the data from about and put it in the page.
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

// Wait for screen to load and then shide loading and show main content
console.log("Before waiting for load event");

window.addEventListener("load", function () {
  console.log("Load event triggered");
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("content").style.display = "block";
});

console.log("After adding load event listener");
