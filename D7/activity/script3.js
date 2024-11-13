const firstProductButton = document.querySelector("#product-1");
const secondProductButton = document.querySelector("#product-2");
const thirdProductButton = document.querySelector("#product-3");
// Extend for more products

const productButtons = [
    firstProductButton,
    secondProductButton,
    thirdProductButton,
];

productButtons.forEach((button) => {
    button.addEventListener("click", handleProductButtonClick);
});

function handleProductButtonClick(event) {
    const price = event.target.value;
    const productId = event.target.id;
    const idNumber = productId.split("-")[1];
    const rowId = `cart-${productId}`;

    console.log(event);
    console.log(idNumber);

    let cartRow;
    cartRow = document.querySelector(`#${rowId}`);
    // Create a row if it doesn't exist and update quantity if it does
    if (!cartRow) {
        cartRow = document.createElement("tr");
        cartRow.id = rowId;
        const productName = document.createElement("td");
        productName.textContent = `Product ${idNumber}`;
        const productPrice = document.createElement("td");
        productPrice.textContent = price;
        const productQuantity = document.createElement("td");
        productQuantity.textContent = 1;
        productQuantity.id = `quantity-${productId}`;
        const removeButton = document.createElement("button");
        removeButton.className = "btn btn-del";
        removeButton.textContent = "Remove";
        removeButton.value = productQuantity.id;
        removeButton.addEventListener("click", handleRemoveButtonClick);
        const buttonContainer = document.createElement("td");
        buttonContainer.appendChild(removeButton);

        // Append to DOM
        const rowChildren = [
            productName,
            productPrice,
            productQuantity,
            removeButton,
        ];

        rowChildren.forEach((child) => {
            cartRow.appendChild(child);
        });

        const tableBody = document.querySelector("tbody");
        tableBody.appendChild(cartRow);
    } else {
        const productQuantity = document.querySelector(
            `#quantity-${productId}`,
        );

        const updatedQuantity = parseInt(productQuantity.textContent) + 1; //updated quantity
        productQuantity.textContent = updatedQuantity;
    }

    updateTotal();
}

function handleRemoveButtonClick(event) {
    const rowId = event.target.value;
    const productQuantity = document.getElementById(rowId);
    console.log(productQuantity);
    let quantity = parseInt(productQuantity.textContent);

    console.log(quantity);
    quantity--;
    if (quantity <= 0) {
        const parentNode = event.target.parentElement; // parent node contains the row
        parentNode.remove();
    } else {
        productQuantity.textContent = quantity;
    }

    updateTotal();
}

function updateTotal() {
    const cartTotal = document.querySelector("#cart-total");
    const cartItems = document.querySelectorAll("#cart-items tr");
    let total = Array.from(cartItems).reduce((acc, item) => {
        const price = parseInt(item.querySelectorAll("td")[1].textContent);
        const quantity = parseInt(item.querySelectorAll("td")[2].textContent);
        return acc + price * quantity;
    }, 0);
    cartTotal.textContent = `Total: $${total}`;
}
