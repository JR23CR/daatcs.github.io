const products = [
  {
    name: "Taza 11oz",
    price: "Q.40.00",
    image: "img/taza11oz.jpg.jpg",
  },
  {
    name: "Llavero",
    price: "Q35.00",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Cuadros",
    price: "Q100.00",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Gorras",
    price: "Q.55.00",
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
