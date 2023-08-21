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

// Simulate a minimum loading time of 2 seconds
window.addEventListener("load", function () {
  // Calculate the time remaining until the minimum loading time is reached
  const currentTime = new Date().getTime();
  const twoSecondsLater = currentTime + 2000;

  // Hide the loading screen after the minimum loading time
  const hideLoadingScreen = function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
  };

  if (currentTime < twoSecondsLater) {
    setTimeout(hideLoadingScreen, twoSecondsLater - currentTime);
  } else {
    hideLoadingScreen();
  }
});
