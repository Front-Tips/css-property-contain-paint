document.addEventListener("DOMContentLoaded", () => {
  const mainElementsWrapper = document.querySelector(
    ".elements:nth-child(2)"
  );
  const shadowElementsWrapper = document.querySelector(
    ".elements.elements--shadow"
  );
  const containValue =
    document.getElementById("containValue");
  const buttons = document.querySelectorAll(
    ".controls button"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const containType = button.textContent;
      mainElementsWrapper.classList.toggle(
        "paint",
        containType === "paint"
      );
      shadowElementsWrapper.classList.toggle(
        "fade",
        containType === "paint"
      );
      containValue.innerHTML = `contain: <b>${containType}</b>;`;

      buttons.forEach((btn) =>
        btn.classList.remove("active")
      );
      button.classList.add("active");
    });
  });
});
