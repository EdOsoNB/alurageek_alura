const url = 'http://localhost:3000/products'

async function fetchAPI(url) {
    try {
        const api = await fetch(url)
        if(api.status != 200) {
            throw new Error('Error en la consulta')
        }
        const response = await api.json();
        return response    
    } catch (error) {
        console.log(error);
    }
}

// GET products
const getProducts = await fetchAPI(url)
console.log(getProducts);

// POST product
async function createNewProduct(name, price, urlImage) {
    try {
        const product = await fetch(url, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                name, 
                price,
                image: urlImage
            })
        })
        if(!product.ok) {
            throw new Error("Error al agregar el producto")
        }
        // const response = await product.json()
    } catch (error) {
        console.log(error);
    }
}

// DELETE product
async function deleteProduct(id) {
    try {
        const product = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {"Content-type": "application/json"}
        })

        if(!product.ok) {
            throw new Error("Error al eliminar el producto")
        }
    } catch(error) {
        console.log(error);
    }
}

export const connectionAPI = {
    getProducts, 
    createNewProduct,
    deleteProduct
}