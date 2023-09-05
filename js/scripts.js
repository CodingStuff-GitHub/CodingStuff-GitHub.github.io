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
    let defaultActive = "about"; // Set default active section to "About"

    sections.forEach((section) => {
      const navLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );

      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        navLink.classList.add("active");
        defaultActive = section.id; // Update default active section
      } else {
        navLink.classList.remove("active");
      }
    });

    // Add "active" class to the default active section link
    const defaultNavLink = document.querySelector(
      `.nav-link[href="#${defaultActive}"]`
    );
    if (defaultNavLink) {
      defaultNavLink.classList.add("active");
    }
  };

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  window.addEventListener("scroll", setActiveNav);
  setActiveNav(); // Set active section based on scroll position
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

  // Check the current icon and toggle it
  const toggleButton = document.getElementById("toggleButton");
  const menuIcon = document.getElementById("menuIcon");
  toggleButton.addEventListener("click", function () {
    if (menuIcon.getAttribute("icon") === "mdi:menu") {
      menuIcon.setAttribute("icon", "mdi:close");
    } else {
      menuIcon.setAttribute("icon", "mdi:menu");
    }
  });
}

/**
 * Hides the loading screen and displays the main content once the window has finished loading.
 */
function loadingScreen() {
  window.addEventListener("load", function () {
    const loadingScreenElement = document.getElementById("loading-screen");
    const contentElement = document.getElementById("content");
    loadingScreenElement.style.display = "none";
    contentElement.style.display = "block";
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  loadingScreen();
  navigationToggler();
  scrollNavigator();
});
