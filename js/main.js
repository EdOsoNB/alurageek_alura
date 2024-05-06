import { connectionAPI } from "./connectionAPI.js";

const products = await connectionAPI.products

const productContainer = document.querySelector('.products__container')

products.forEach(product => {
    const { name, price, image} = product
    const productElement = `
        <div class="product">
        <div class="product__image">
            <img src="${image}" alt="product_image">
        </div>
        <p class="product__name">${name}</p>
        <div class="product__info">
            <p class="product__price">$ ${price / 100}</p>
            <span><i class="fa-solid fa-trash-can"></i></span>
        </div>
        </div>
    `;

    productContainer.innerHTML += productElement
});



