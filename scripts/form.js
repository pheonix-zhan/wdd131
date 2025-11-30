// ---------- Footer: Current Year & Last Modified ----------
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Product Array (your custom array)
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
    option.value = product.id;  // FIXED: Use id as value (matches original requirements)
    option.textContent = product.name;  // Display name
    productSelect.appendChild(option);
  });
});
