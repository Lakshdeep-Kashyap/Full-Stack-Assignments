const products = [
  { name: "Laptop", category: "Electronics", price: 500, rating: 4.5 },
  { name: "Headphones", category: "Electronics", price: 50, rating: 4.0 },
  { name: "Shirt", category: "Clothing", price: 20, rating: 4.2 },
  { name: "Jeans", category: "Clothing", price: 40, rating: 4.1 },
  { name: "Book", category: "Books", price: 15, rating: 4.8 },
  { name: "Notebook", category: "Books", price: 5, rating: 4.0 },
  { name: "Shoes", category: "Clothing", price: 60, rating: 4.3 },
  { name: "Smartphone", category: "Electronics", price: 300, rating: 4.6 },
  { name: "Tablet", category: "Electronics", price: 200, rating: 4.4 },
  { name: "Jacket", category: "Clothing", price: 80, rating: 4.7 },
  { name: "Pen", category: "Books", price: 2, rating: 3.9 },
  { name: "Bag", category: "Clothing", price: 35, rating: 4.0 },
  { name: "Monitor", category: "Electronics", price: 150, rating: 4.2 },
  { name: "Keyboard", category: "Electronics", price: 30, rating: 4.1 },
  { name: "Mouse", category: "Electronics", price: 25, rating: 4.3 },
  { name: "Novel", category: "Books", price: 12, rating: 4.5 },
  { name: "Dress", category: "Clothing", price: 45, rating: 4.4 },
  { name: "Sneakers", category: "Clothing", price: 70, rating: 4.6 },
  { name: "Charger", category: "Electronics", price: 20, rating: 4.0 },
  { name: "Backpack", category: "Clothing", price: 50, rating: 4.2 },
];

const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const productsDiv = document.getElementById("products");

const categories = [...new Set(products.map(p => p.category))];
categories.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  categoryFilter.appendChild(option);
});

function renderer(list) {
  productsDiv.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.width = "150px";
    div.innerHTML = `
      <strong>${p.name}</strong><br>
      Category: ${p.category}<br>
      Price: $${p.price}<br>
      Rating: ${p.rating}
    `;
    productsDiv.appendChild(div);
  });
}

function updateProds() {
  let filtered = products;
  const selectedCat = categoryFilter.value;
  if (selectedCat !== "all") {
    filtered = filtered.filter(p => p.category === selectedCat);
  }

  const sortValue = sortSelect.value;
  const [prop, order] = sortValue.split("-");
  filtered.sort((a, b) => {
    if (a[prop] < b[prop]) return order === "asc" ? -1 : 1;
    if (a[prop] > b[prop]) return order === "asc" ? 1 : -1;
    return 0;
  });

  renderer(filtered);
}

updateProds();

categoryFilter.addEventListener("change", updateProds);
sortSelect.addEventListener("change", updateProds);
