const container = document.getElementById("flowers-container");

function loadFlowers() {
    if (!flowerDatabase) {
        console.error("Flower database is not loaded!");
        return;
    }

    Object.entries(flowerDatabase).forEach(([key, flower]) => {
        const card = `
        <div class="col-12 col-sm-6 col-lg-4 mb-4">
            <div class="card h-100">
                <a href="../html/item.html?flower=${key}" style="text-decoration: none; color: inherit;">
                    <img src="${flower.image_url}" class="card-img-top" alt="${flower.name}">
                </a>
                <div class="card-body text-center">
                    <h5 class="card-title">
                        <a href="../html/item.html?flower=${key}" style="text-decoration: none; color: inherit;">
                            ${flower.name}
                        </a>
                    </h5>
                    <p class="card-text">${flower.description}</p>
                    <p class="card-text"><strong>Price:</strong> $${flower.price}</p>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += card;
    });
}

document.addEventListener("DOMContentLoaded", loadFlowers);
