import "./scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  new Filter("#filter--displacementMap", "#feDisplacementMap", "scale");
});

function Filter(inputSelector, targetSelector, property) {
  var input = document.querySelector(inputSelector);
  var target = document.querySelector(targetSelector);

  if (!input || !target) {
    console.error(
      "Error: new Filter has uncorrect selectors. Please check:",
      inputSelector,
      targetSelector
    );
    return;
  }

  input.addEventListener("input", function () {
    target.setAttribute(property, this.value);
  });
}
