const products = [
  {
    name: "Taza 11oz",
    price: "Q.40.00",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdanitexbh.com.ar%2Fproductos%2Ftaza-de-ceramica-sublimable-importada-x36%2F&psig=AOvVaw2aDmdMdhWdUmj29F-uoUe_&ust=1742770816037000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICcja_lnowDFQAAAAAdAAAAABAE",
  },
  {
    name: "Llavero",
    price: "Q35.00",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Cuadros",
    price: "Q100.00",
    image: "img.zip/f352b03e1c5534d482de17ee9d3740ba.jpg",
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
