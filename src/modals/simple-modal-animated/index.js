const modalOpenBtn = document.getElementById("modalOpenBtn");
const modalContainer = document.getElementById("modalContainer");

modalOpenBtn.addEventListener("click", (e) => {
  renderModal();
});

function renderModal() {
  modalContainer.classList.add("fade-in");
  modalContainer.classList.add("modal-active");
  modalContainer.innerHTML = ` 
    <div class="modal fade-in">
        <button id="closeModalBtn" class="close-modal-btn">Cerrar Modal</button>
    </div> 
  `;

  const closeModalBtn = document.getElementById("closeModalBtn");

  closeModalBtn.addEventListener("click", function () {
    removeModal(this);
  });
}

function removeModal(closeModalBtn) {
  modalContainer.classList.remove("fade-in");
  modalContainer.classList.add("fade-out");

  closeModalBtn.removeEventListener("click", function () {
    removeModal(this);
  });

  setTimeout(() => {
    modalContainer.innerHTML = "";
    modalContainer.classList.remove("modal-active");
    modalContainer.classList.remove("fade-out");
  }, 500);
}
