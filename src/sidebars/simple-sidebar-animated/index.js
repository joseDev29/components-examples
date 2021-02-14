const btnToggle = document.querySelector(".toggle-btn");

const sidebar = document.querySelector("#sidebar");

btnToggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("active");
});
