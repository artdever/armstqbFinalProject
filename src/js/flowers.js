const flowerFiles = ['flower_1.json', 'flower_2.json', 'flower_3.json', 'flower_4.json', 'flower_5.json', 'flower_6.json', 'flower_7.json', 'flower_8.json', 'flower_9.json', 'flower_10.json', 'flower_11.json', 'flower_12.json', 'flower_13.json', 'flower_14.json', 'flower_15.json', 'flower_16.json', 'flower_17.json', 'flower_18.json', 'flower_19.json', 'flower_20.json', 'flower_21.json', 'flower_22.json', 'flower_23.json', 'flower_24.json', 'flower_25.json', 'flower_26.json', 'flower_27.json', 'flower_28.json', 'flower_29.json', 'flower_30.json', 'flower_31.json', 'flower_32.json', 'flower_33.json', 'flower_34.json', 'flower_35.json', 'flower_36.json', 'flower_37.json', 'flower_38.json', 'flower_39.json', 'flower_40.json', 'flower_41.json', 'flower_42.json', 'flower_43.json', 'flower_44.json', 'flower_45.json', 'flower_46.json', 'flower_47.json', 'flower_48.json', 'flower_49.json', 'flower_50.json']; 

const container = document.getElementById("flowers-container");

function loadFlowers() {
    flowerFiles.forEach(file => {
        fetch(`./DB/flowers_db/${file}`)  // Adjusted path to fetch JSON files from DB/flowers_db inside src
            .then(response => response.json())
            .then(flower => {
                // Adjusted path for image URLs inside DB/flowers_img folder in src
                const imagePath = `./DB/flowers_img/${flower.image_url}`; 

                const card = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${imagePath}" class="card-img-top" alt="${flower.name}">
                        <div class="card-body">
                            <h5 class="card-title">${flower.name}</h5>
                            <p class="card-text">${flower.description}</p>
                            <p class="card-text"><strong>Price:</strong> $${flower.price}</p>
                        </div>
                    </div>
                </div>`;
                container.innerHTML += card;
            })
            .catch(error => console.error('Error loading', file, error));
    });
}

document.addEventListener("DOMContentLoaded", loadFlowers);
