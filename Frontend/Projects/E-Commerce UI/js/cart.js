let cartItems = JSON.parse(localStorage.getItem("cart")) || [] //load cart from cookies or initialize empty cart

function loadCart() {
    cartItems = JSON.parse(localStorage.getItem("cart")) || []
    let cartContainer = document.getElementById("cart-items");
    if(cartContainer === null) return; // Exit if cart container is not found (e.g., on non-cart pages)
    cartContainer.innerHTML = "";
    let totalAmount = 0; 

    cartItems.forEach((item, idx) => {
        let itemAmount = item.price * item.quantity;
        totalAmount += itemAmount;

        cartContainer.innerHTML += 
            `<tr>
                <td>${idx + 1}</td>
                <td><img src="${item.imageUrl}" alt="${item.name}" width="50"></td>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${idx}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-secondary" onclick="changeQuantity(${idx}, 1)">+</button>
                </td>
                <td>₹${itemAmount.toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${idx})">Remove</button>
                </td>
            </tr>
            `;

        document.getElementById("total-amount").innerText = totalAmount.toFixed(2);
    });
}

function addToCart(id, name, price, imageUrl) {
    price = parseFloat(price);

    let itemIdx = cartItems.findIndex(item => item.id === id) // this function runs for every item and Checks if item already exists in cart
    if (itemIdx !== -1) {
        cartItems[itemIdx].quantity += 1;
    } else {
        cartItems.push({ 
            id: id, 
            name: name, 
            price: price, 
            imageUrl: imageUrl, 
            quantity: 1 
        });
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartCounter();
}

function updateCartCounter(){
    document.querySelector(".cart-badge").innerText = cartItems.length;
}

function changeQuantity(idx, count){
    cartItems[idx].quantity += count;
    if(cartItems[idx].quantity <= 0){
        cartItems.splice(idx, 1); // Remove item if quantity is 0
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    loadCart();
    updateCartCounter();
}

function removeFromCart(idx){
    cartItems.splice(idx, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    loadCart();
    updateCartCounter();
}


document.addEventListener("DOMContentLoaded", loadCart);
document.addEventListener("DOMContentLoaded", updateCartCounter);