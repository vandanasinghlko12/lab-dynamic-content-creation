# About this Project
JavaScript

## Author
Vandana Singh

# How to Run the Project:
* Clone this repository to your local machine.
* git clone <https://github.com/vandanasinghlko12/lab-dynamic-content-creation.git>
* Open the project folder in Visual Studio Code.
* Use live server it will open the page in the default browser.

# Reflection Question
## How did you dynamically create and append new elements to the DOM?
I used document.createElement("li") to create a new list item for each product. I then used textContent to display the product name, price, and quantity. I also created a Remove button and added a click event listener to it. Finally, I used appendChild() to add the list item to the cart displayed on the webpage.
## What steps did you take to ensure accurate updates to the total price?
* I converted the product price input into a number using Number().
* I updated the logic to handle product quantities correctly. When the same product was added again, I used the find() method to check whether it already existed in the shopping cart. If it existed, I increased its quantity instead of adding a duplicate item. I also made sure the total price increased by the product's unit price each time it was added. When displaying the cart, I multiplied the unit price by the quantity so the product subtotal was shown correctly.

## How did you handle invalid input for product name or price
I used an if-else condition to validate the product name and price before adding a product to the shopping cart. I checked that the product name was not empty and that the price was greater than zero. If the input was valid, the product was added to the cart or its quantity was increased if it already existed. Otherwise, I displayed an "Invalid entry" alert. I also tested different scenarios, including empty product names, zero or negative prices, and valid product entries, to make sure the validation worked correctly.

## What challenges did you face when implementing the remove functionality
One challenge I faced was identifying the correct product to remove from the shopping cart and making sure the total price was updated correctly. Since the Remove button was created dynamically, I used an event listener and event.target.closest("li") to identify the corresponding product. I also had to update the shopping cart array and subtract the product's total price based on its quantity. Testing these scenarios helped me understand how to keep the DOM, shopping cart array, and total price synchronized.