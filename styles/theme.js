// theme.js — the ONLY JavaScript in this project. Its one job: switch and
// remember the selected color theme. Nothing else.

const root = document.documentElement;
const toggleButton = document.querySelector("#theme-toggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("qb-theme", theme);
  toggleButton.textContent = theme === "dark" ? "Switch to light" : "Switch to dark";
}

// On load: use a previously saved choice if there is one.
const saved = localStorage.getItem("qb-theme");
if (saved) {
  applyTheme(saved);
}

toggleButton.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(current);
});
