const form = document.querySelector(".cta-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    button.textContent = "Solicitud enviada";
    button.disabled = true;
  });
}
