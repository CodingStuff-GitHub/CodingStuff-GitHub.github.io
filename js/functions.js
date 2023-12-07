window.addEventListener("DOMContentLoaded", (event) => {
  darkmode();
  navigationToggler();
});

/**
 * This function handles the toggling of a responsive navigation bar.
 * It collapses the navbar when the toggler is visible and toggles the menu icon when the toggle button is clicked.
 */
function navigationToggler() {
  const drawerButton = document.getElementById("drawer-button");
  const sidebar = document.getElementById("logo-sidebar");
  const menuIcon = document.getElementById("menuIcon");
  function toggleSidebar() {
    if (sidebar.classList.contains("translate-x-0")) {
      sidebar.classList.remove("translate-x-0");
      sidebar.classList.add("-translate-x-full");
      menuIcon.setAttribute("icon", "mdi:menu");
    } else {
      sidebar.classList.add("translate-x-0");
      sidebar.classList.remove("-translate-x-full");
      menuIcon.setAttribute("icon", "mdi:close");
    }
  }

  // Toggle sidebar visibility when drawer button is clicked
  drawerButton.addEventListener("click", function () {
    toggleSidebar();
  });
}

function darkmode() {
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon"
  );
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
  var themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
}
