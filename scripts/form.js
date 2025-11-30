// ---------- Footer: Current Year & Last Modified ----------
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Product Array
const products = [
  { id: 1, name: "Super Drill" },
  { id: 2, name: "Hammer Pro" },
  { id: 3, name: "Galaxy Wrench" },
  { id: 4, name: "Ultra Saw" }
];

// Populate Product Select Options
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;  // value is product name
    option.textContent = product.name;  // display name
    productSelect.appendChild(option);
  });
});