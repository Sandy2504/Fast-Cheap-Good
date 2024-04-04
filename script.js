const fastCheckbox = document.getElementById("fastCheckbox");
const cheapCheckbox = document.getElementById("cheapCheckbox");
const goodCheckbox = document.getElementById("goodCheckbox");

let lastCheckedCheckbox = null;

[fastCheckbox, cheapCheckbox, goodCheckbox].forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (cheapCheckbox.checked && goodCheckbox.checked && fastCheckbox.checked) {
      lastCheckedCheckbox.checked = false;
    }

    if (checkbox.checked) {
      lastCheckedCheckbox = checkbox;
    }
  });
});
