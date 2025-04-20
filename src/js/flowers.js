const container = document.getElementById("flowers-container");

function loadFlowers() {
    if (!flowerDatabase) {
        console.error("Flower database is not loaded!");
        return;
    }

    Object.values(flowerDatabase).forEach(flower => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${flower.image_url}" class="card-img-top" alt="${flower.name}">
                    <div class="card-body">
                        <h5 class="card-title">${flower.name}</h5>
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
