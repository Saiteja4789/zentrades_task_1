document.addEventListener('DOMContentLoaded', function() {
    let productsContainer = document.querySelector('.products');

    async function fetchProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            // Extract products from the data
            const products = Object.values(response.products);

            // Sort products based on descending popularity
            const sortedProducts = products.sort((a, b) => b.popularity - a.popularity);

            sortedProducts.forEach(product => {
                productsContainer.innerHTML += `
                    <div class="product">
                        <h2 class="product-title">${product.title}</h2>
                        <p class="product-price">$${product.price}</p>
                    </div>
                `;
            });
        } catch (err) {
            console.log(err);
        }
    }

    fetchProducts('https://s3.amazonaws.com/open-to-cors/assignment.json');
});
