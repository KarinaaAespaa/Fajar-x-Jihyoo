document.getElementById("orderButton").onclick = function () {
    let foodPrice = parseInt(document.getElementById("food").value);
    let drinkPrice = parseInt(document.getElementById("drink").value);

  let totalPrice = foodPrice + drinkPrice;

  let dicsount = 0;

  if (totalPrice > 100) {
      alert('ok');
  }


}