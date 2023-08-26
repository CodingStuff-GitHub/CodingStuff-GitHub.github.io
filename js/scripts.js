window.addEventListener("DOMContentLoaded", (event) => {
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
  const responsiveNavItems = Array.from(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );

  responsiveNavItems.forEach(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Wait for screen to load and then hide loading and show main content
  window.addEventListener("load", function () {
    // Hide the loading screen
    document.getElementById("loading-screen").style.display = "none";
    // Show the main content
    document.getElementById("content").style.display = "block";
  });
  document.getElementById("content").style.display = "block";
});
