import { connectionAPI } from "./connectionAPI.js";


const products = connectionAPI.getProducts

const productContainer = document.querySelector('.products__container')

// GET Products
products.forEach(product => {
    const { id, name, price, image} = product
    const productElement = `
        <div class="product" data-id="${id}">
            <div class="product__image">
                <img src="${image}" alt="${name} Image">
            </div>
            <p class="product__name">${name}</p>
            <div class="product__info">
                <p class="product__price">$ ${price}</p>
                <span data-id="${id}"><i class="fa-solid fa-trash-can"></i></span>
            </div>
        </div>
    `;

    productContainer.innerHTML += productElement
});

// POST product
const formData = document.querySelector('.new-product__form')
async function newProduct(event) {

    event.preventDefault()

    const name = document.querySelector('#product-name').value.trim()
    const price = document.querySelector('#product-price').value
    const imageUrl =  document.querySelector('#product-image').value.trim()
    if(name !== '' || imageUrl !== '' ) {
        connectionAPI.createNewProduct(name, price, imageUrl)
        window.location.reload()
    } else {
        console.log('Campos vacios');
    }
}
formData.addEventListener('submit', event => newProduct(event))

// DELETE product

const ids = document.querySelectorAll('.product__info span')
ids.forEach(id => {
   id.addEventListener('click', () => {
    const deleteData = confirm('Estas seguro de eliminar')
    if(deleteData) {
        console.log('Borrar', id.getAttribute("data-id"));
        connectionAPI.deleteProduct(id.getAttribute('data-id'))
    } else {
        return
    }
   })
})