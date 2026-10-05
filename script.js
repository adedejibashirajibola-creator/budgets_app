function displayText() {
    let productName = document.getElementById("productName");
    let productPrice = Number(document.getElementById("productPrice").value);
    let productQuantity = Number(document.getElementById("productQuantity").value);
    document.getElementById("items").innerHTML = productName.value;
    document.getElementById("price").innerHTML = productPrice;
    document.getElementById("quantity").innerHTML = productQuantity;
    let totalPrice = productPrice * productQuantity;
    document.getElementById("totalPrice").innerHTML = totalPrice;
    let money = document.getElementById("money");
    document.getElementById("yourMoney").innerHTML = money.value;
    document.getElementById("spent").innerHTML = totalPrice;
    document.getElementById("remaining").innerHTML = money.value - totalPrice;
    if (totalPrice > money.value) {
        document.getElementById("remaining").innerHTML = money.value - totalPrice;
    } 
}