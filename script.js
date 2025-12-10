// Limited Products Array
const products = [
  {
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/300x200?text=Headphones",
    link: "https://example.com/product1"
  },
  {
    name: "Smart Watch",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
    link: "https://example.com/product2"
  },
  {
    name: "Stylish Shoes",
    image: "https://via.placeholder.com/300x200?text=Shoes",
    link: "https://example.com/product3"
  },
  {
    name: "Gaming Laptop",
    image: "https://via.placeholder.com/300x200?text=Laptop",
    link: "https://example.com/product4"
  },
  {
    name: "Sunglasses",
    image: "https://via.placeholder.com/300x200?text=Sunglasses",
    link: "https://example.com/product5"
  }
];

// Render Products
const container = document.getElementById('product-container');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <a href="${product.link}" target="_blank">Buy Now</a>
    </div>
  `;
  container.appendChild(card);
});
