const fetchProducts = async () => {
    // Select the user container element
    const userContainer = document.getElementById("productContainer");

    try {
        // Fetch user data from the JSONPlaceholder API
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        // Extract JSON data from the response
        const data = await response.json();
        console.log(data);

        let html = "";
        // Generate HTML markup for each user
        for (let i = 0; i < data.length; i += 3) {
            html += '<div class="row">';
            for (let j = i; j < i + 3 && j < data.length; j++) {
                const product = data[j];
                html += `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">
                                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <br>
                                <h6 class="card-subtitle">$${product.price}</h6>
                                <br>
                                <p class="card-text">${product.description}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
            html += "</div>";
        }

        userContainer.innerHTML = html;
    } catch (error) {
        // Display an error message if fetching data fails
        userContainer.innerHTML = "An error occurred while fetching data.";
        console.error(error);
    }
};

fetchProducts();
