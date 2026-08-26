const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-link-container");
const menuOverlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
  menuOverlay.classList.toggle("active");
});

menuOverlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
  menuOverlay.classList.remove("active");
});


const form = document.querySelector("form");

let snackbar;
let snackbarTimeout;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (snackbar) {
    snackbar.classList.remove("show");

    clearTimeout(snackbarTimeout);

    setTimeout(() => {
      snackbar.remove();
      createSnackbar();
    }, 250);
  } else {
    createSnackbar();
  }

  form.reset();
});

function createSnackbar() {
  snackbar = document.createElement("div");
  snackbar.className = "snackbar";

  snackbar.innerHTML = `
    <span class="snackbar-message">
      Message sent successfully!
    </span>
    <button class="snackbar-action">OK</button>
  `;

  document.body.appendChild(snackbar);

  requestAnimationFrame(() => {
    snackbar.classList.add("show");
  });

  snackbar.querySelector(".snackbar-action").addEventListener("click", () => {
    closeSnackbar();
  });

  snackbarTimeout = setTimeout(() => {
    closeSnackbar();
  }, 4000);
}

function closeSnackbar() {
  if (!snackbar) return;

  snackbar.classList.remove("show");

  clearTimeout(snackbarTimeout);

  setTimeout(() => {
    if (snackbar) {
      snackbar.remove();
      snackbar = null;
    }
  }, 250);
}