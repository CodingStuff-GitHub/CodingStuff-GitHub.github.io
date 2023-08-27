window.addEventListener("DOMContentLoaded", (event) => {
  loadingScreen();
  navigationToggler();
  scrollNavigator();
});

// Activate Bootstrap scrollspy on the main nav element
function scrollNavigator() {
  const sections = document.querySelectorAll("section"); // Get all sections

  const handleNavClick = (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute("href")); // Get the target section
    const offset = target.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  const setActiveNav = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const navLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );

      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  };
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  window.addEventListener("scroll", setActiveNav);
  setActiveNav(); // Set initial active section on page load
}

// Collapse responsive navbar when toggler is visible
function navigationToggler() {
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
}

// Wait for screen to load and then hide loading and show main content
function loadingScreen() {
  window.addEventListener("load", function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
  });
}
