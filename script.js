const products = [
  {
    name: "Producto 1",
    price: "Q150",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Producto 2",
    price: "Q200",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Producto 3",
    price: "Q180",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Producto 4",
    price: "Q220",
    image: "https://via.placeholder.com/300x200",
  }
];

const phone = "50255965491";
const productList = document.getElementById("product-list");

products.forEach((product, index) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p>${product.price}</p>
    <a class="whatsapp-btn" href="https://wa.me/${phone}?text=Hola%2C%20quiero%20más%20información%20sobre%20el%20${encodeURIComponent(product.name)}">Pedir por WhatsApp</a>
  `;
  productList.appendChild(div);
});
