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
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  restoreFormData();  // Restore saved data if it exists
});

// ----------- LOCAL STORAGE FUNCTIONS -----------

// Save form data as the user types
document.addEventListener("input", () => {
  const formData = {
    productName: document.getElementById("productName").value,
    rating: document.querySelector("input[name='rating']:checked")?.value || "",
    installDate: document.getElementById("installDate").value,
    features: Array.from(document.querySelectorAll("input[name='features']:checked")).map(cb => cb.value),
    review: document.getElementById("review").value,
    userName: document.getElementById("userName").value
  };

  localStorage.setItem("savedFormData", JSON.stringify(formData));
});

// Restore saved form data
function restoreFormData() {
  const saved = JSON.parse(localStorage.getItem("savedFormData"));
  if (!saved) return;

  if (saved.productName) document.getElementById("productName").value = saved.productName;
  if (saved.rating) {
    const ratingInput = document.querySelector(`input[name='rating'][value='${saved.rating}']`);
    if (ratingInput) ratingInput.checked = true;
  }
  if (saved.installDate) document.getElementById("installDate").value = saved.installDate;

  if (saved.features) {
    saved.features.forEach(val => {
      const cb = document.querySelector(`input[name='features'][value='${val}']`);
      if (cb) cb.checked = true;
    });
  }

  if (saved.review) document.getElementById("review").value = saved.review;
  if (saved.userName) document.getElementById("userName").value = saved.userName;
}

// ----------- HANDLE FORM SUBMISSION -----------
const form = document.querySelector("form");

form.addEventListener("submit", () => {
  // Increment submission count
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);

  // Save full review
  const reviewData = {
    productName: document.getElementById("productName").value,
    rating: document.querySelector("input[name='rating']:checked")?.value,
    installDate: document.getElementById("installDate").value,
    features: Array.from(document.querySelectorAll("input[name='features']:checked")).map(cb => cb.value),
    review: document.getElementById("review").value,
    userName: document.getElementById("userName").value,
    submittedAt: new Date().toLocaleString()
  };

  // Store review in an array
  let storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  storedReviews.push(reviewData);
  localStorage.setItem("reviews", JSON.stringify(storedReviews));

  // Clear saved form progress
  localStorage.removeItem("savedFormData");
});
