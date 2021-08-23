console.log("Hola!");

document.addEventListener("DOMContentLoaded", async () => {
  const dataAllProducts = await getAllProducts();

  await paintProductCards(dataAllProducts);
});

const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/Api/Products/");
  const data = await response.json();
  console.log(data);
  return data;
};

const paintProductCards = async (dataProducts) => {
  $(".product-card").remove();

  const contenedor = document.querySelector("#contenedor_products");

  dataProducts.productos.forEach(({ name, url_image, price, discount }) => {
    const divCard = document.createElement("div");
    divCard.classList.add("col-md-3", "col-sm-6", "mb-4", "product-card");
    divCard.innerHTML += `
        <div class="card h-100">
          <div class="product-grid">
            <div class="product-image">
              <a href="#">
                  <img class="pic-1" src="${
                    url_image == "" || url_image == null
                      ? `https://www.cuestalibros.com/content/images/thumbs/default-image_550.png`
                      : url_image
                  }" alt="Bebida">
              </a>
              <ul class="social">
                  <li><a href="" data-tip="Vista rápida"><i class="fa fa-search"></i></a></li>
                  <li><a href="" data-tip="Agregar a la lista"><i class="fa fa-shopping-bag"></i></a></li>
                  <li><a href="" data-tip="Agregar al carro"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
              ${
                discount > 0
                  ? `<span class="product-new-label">Oferta</span><span class="product-discount-label">${discount}%</span>`
                  : ""
              }
            </div>
            <div class="product-content">
              <h3 class="title"><a href="#">${name}</a></h3>
              ${
                discount > 0
                  ? `<div class="price">$${((100 - discount) * price) / 100}
                    <span>$${price}</span>
                  </div>`
                  : `<div class="price">$${price}</div>`
              }
                <a class="add-to-cart" href="">+ Agregar</a>
            </div>
          </div>
        </div>
      `;
    contenedor.appendChild(divCard);
  });
};

const searchProduct = async () => {
  let inputSearch = document.querySelector("#input_search").value;
  const response = await fetch(
    `http://localhost:3000/Api/Products/Search/${inputSearch}`
  );
  const productsFound = await response.json();
  console.log(productsFound);
  await paintProductCards(productsFound);
};
