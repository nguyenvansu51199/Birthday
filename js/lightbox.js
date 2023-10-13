function showModal(modalElement) {
  // make sure bootstrap script is loaded
  if (!window.bootstrap) return;

  const modal = new bootstrap.Modal(modalElement);
  if (modal) modal.show();
  console.log("modal");
}

export function registerLightbox({
  modalId,
  imageSelector,
  prevSelector,
  nextSelector,
}) {
  const modalElement = document.getElementById(modalId);

  document.addEventListener("click", (event) => {
    console.log("click", event.target);

    showModal(modalElement);
  });
}
