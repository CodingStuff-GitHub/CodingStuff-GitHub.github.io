/**
 * Activates scrollspy on the main navigation element and handles the scrolling behavior when a navigation link is clicked.
 * It also updates the active navigation link based on the current scroll position.
 */
function scrollNavigator() {
  const sections = document.querySelectorAll("section");

  /**
   * Handles the click event on a navigation link.
   * Prevents the default link behavior, gets the target section based on the clicked link's href attribute, and scrolls to the target section smoothly.
   */
  const handleNavClick = (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute("href"));
    const offset = target.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  /**
   * Updates the active navigation link based on the current scroll position.
   */
  const setActiveNav = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let defaultActive = "about";

    sections.forEach((section) => {
      const navLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );
      const { offsetTop, offsetHeight } = section;

      if (
        offsetTop <= scrollPosition &&
        offsetTop + offsetHeight > scrollPosition
      ) {
        navLink.classList.add("active");
        defaultActive = section.id;
      } else {
        navLink.classList.remove("active");
      }
    });

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
  setActiveNav();
}

/**
 * This function handles the toggling of a responsive navigation bar.
 * It collapses the navbar when the toggler is visible and toggles the menu icon when the toggle button is clicked.
 */
function navigationToggler() {
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = Array.from(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );

  responsiveNavItems.forEach(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  const toggleButton = document.getElementById("toggleButton");
  const menuIcon = document.getElementById("menuIcon");
  toggleButton.addEventListener("click", function () {
    const currentIcon = menuIcon.getAttribute("icon");
    menuIcon.setAttribute(
      "icon",
      currentIcon === "mdi:menu" ? "mdi:close" : "mdi:menu"
    );
    const navbarResponsive = document.getElementById("navbarResponsive");
    menuIcon.getAttribute("icon");
    if (menuIcon.getAttribute("icon") === "mdi:menu") {
      navbarResponsive.style.display = "none";
    } else {
      navbarResponsive.style.display = "block";
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

/**
 * Adds a click event listener to all link elements with the class "playLink".
 * When a link is clicked, it prevents the default navigation behavior and plays an audio element with the id "audioPlayer".
 */
function loadAudio() {
  const playLinks = document.querySelectorAll(".playLink");
  const audioPlayer = document.getElementById("audioPlayer");
  function handleNavClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("active")) {
      audioPlayer.play();
    }
  }
  playLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  loadingScreen();
  navigationToggler();
  scrollNavigator();
  loadAudio();
});
