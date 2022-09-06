const refs = {
  openModalBtn: document.querySelector("[data-open-modal-window]"),
  closeModalBtn: document.querySelector("[data-close-modal-window]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  document.body.classList.toggle("modal-open");
  refs.backdrop.classList.toggle("is-hidden");
}

function logBackdropClick() {
  // console.log("This is the click into backdrop");
}

// script for the burger-menu open-closing

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnRef2 = document.querySelector("[data-menu-button2]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuRef2 = document.querySelector("[data-menu2]");
  const mobileMenuRef3 = document.querySelector("[data-menu3]");
  const mobileMenuRef4 = document.querySelector("[data-menu4]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef2.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileMenuRef2.classList.toggle("is-open");
    mobileMenuRef3.classList.toggle("is-open");
    mobileMenuRef4.classList.toggle("is-open");
  });
})();

// script for the form processing tracking

(() => {
  document.querySelector(".request-form").addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
  });
})();
