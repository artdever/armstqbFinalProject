// Parse flower ID from URL
const params = new URLSearchParams(window.location.search);
const flowerId = params.get("flower");

// Reference to DOM elements
const nameEl = document.getElementById("flower-name");
const descEl = document.getElementById("flower-description");
const priceEl = document.getElementById("flower-price");
const imgEl = document.getElementById("flower-img");
const imgWrapper = document.getElementById("flower-img-wrapper");

if (flowerDatabase && flowerDatabase[flowerId]) {
    const flower = flowerDatabase[flowerId];
    nameEl.textContent = flower.name;
    descEl.textContent = flower.description;
    priceEl.textContent = flower.price;
    imgEl.src = flower.image_url;
    imgEl.alt = flower.name;
} else {
    document.body.innerHTML = `
        <div class="container text-center mt-5">
            <h3>Flower not found</h3>
            <a href="index.html" class="btn btn-secondary mt-3">Back to Home</a>
        </div>
    `;
}

// Add the click event listener to the image itself (for zoom effect)
imgEl.addEventListener("click", function () {
    imgWrapper.classList.toggle("zoomed");  // Toggle zoom effect on image click
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const flowerName = document.getElementById('flower-name').textContent;
            const flowerPrice = document.getElementById('flower-price').textContent;
            const flowerImg = document.getElementById('flower-img').src;

            const item = {
                name: flowerName,
                price: flowerPrice,
                image: flowerImg
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert("Flower added to cart!");
        });
    }
});



    document.addEventListener('DOMContentLoaded', function() {
        const buyNowBtn = document.getElementById('buyNowBtn');
        const addToCartBtn = document.getElementById('addToCartBtn');

        buyNowBtn.addEventListener('click', function() {
            // Remove the Add to Cart button
            if (addToCartBtn) {
                addToCartBtn.remove();
            }

            alert('Thanks for your purchase! Further steps will be processed.');
            
        });
    });


