const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

let shoppingCart = [];

addProductButton.addEventListener("click", () => {
  let product = productNameInput.value;
  let price = Number(productPriceInput.value);
  let existingProduct = shoppingCart.find(
    (item) => item.productNameInput === product,
  );

  let shoppingList = {
    productNameInput: product,
    productPriceInput: price,
    quantity: 1,
  };
  if (product !== "" && price > 0) {
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      shoppingCart.push(shoppingList);
      console.log(shoppingCart);
    }
    updateTotalPrice(price);
  } else {
    alert("invalid entry");
  }

  displayCart();
});

function displayCart() {
  cart.innerHTML = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    let li = document.createElement("li");
        li.dataset.product = shoppingCart[i].productNameInput;
    li.dataset.price =
      shoppingCart[i].productPriceInput * shoppingCart[i].quantity;

      let subTotal=shoppingCart[i].productPriceInput * shoppingCart[i].quantity;
    li.textContent =
      shoppingCart[i].productNameInput +
      "  " +
      " $" +
      subTotal +
      "  " +
      " Quantity " +
      shoppingCart[i].quantity;

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", removeItem);
    li.appendChild(removeButton);
    cart.appendChild(li);
  }
}

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = Number(item.dataset.price);
   const product = item.dataset.product;
  updateTotalPrice(-price);
  shoppingCart=shoppingCart.filter((p)=>p.productNameInput!==product);
  item.remove();
}
