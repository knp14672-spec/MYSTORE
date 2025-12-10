const products = [
  {
    name: "Product 1",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/product1"
  },
  {
    name: "Product 2",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/product2"
  },
  {
    name: "Product 3",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/product3"
  }
];

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
const products = [
  {
    name: "Product 1",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/product1"
  },
  {
    name: "Product 2",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/product2"
  },
  // Tum yaha naya product add kar sakte ho
  {
    name: "Product 3",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/product3"
  }
];
