var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var totals = {itemName: item, itemPrice: Math.floor(Math.random()*100) }
  cart.push(totals)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0)
  {
    return "Your shopping cart is empty."
  }else if (cart.length === 1) {

    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`

  }else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    var test = "In your cart, you have "
    for (let i = 0; i < cart.length - 1; i++){
      test += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return test + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`


  }

}


function total() {
  let totes = 0
  for(let i = 0; i < cart.length; i++){
    totes += cart[i].itemPrice
  }
  return totes

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {


}
