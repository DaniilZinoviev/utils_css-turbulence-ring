import "./scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  new Filter("#filter--displacementMap", "#feDisplacementMap", "scale");
});

/**
 * @description
 * The function binds input value with SVG filter property.
 * So, if user will update an input SVG updates automatically.
 * 
 * @param {string} inputSelector
 * @param {string} targetSelector
 * @param {string} property
 * @returns {void}
 */
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
