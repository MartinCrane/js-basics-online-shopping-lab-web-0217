var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  console.log(item + ' has been added to your cart.');
  getCart().push(updateObjectWithKeyAndValue({}, item, price));
  return getCart();
}

function viewCart() {
  if (getCart().length >0) {
    var sentence = 'In your cart, you have '
    getCart().forEach(function(element) {
      var item = Object.keys(element);
      sentence = sentence + item + ' at $' + element[item] + ", ";
    })
    console.log(sentence.slice(0, -2) + ".")
  } else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(food) {
  var exist = true
  getCart().forEach(function(item, index){
    var newfood = Object.keys(item);
    if (food == newfood) {
      var arr = getCart().slice(0, index).concat(getCart().slice(index + 1));
      cart = arr;
      exist = false
      return getCart()
    } else {}
  })
  if (exist) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cc) {
  if (typeof cc === "undefined") {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    var cartTotal = 0;
    getCart().forEach(function(element, index) {
      var item = Object.keys(element);
      cartTotal = cartTotal + element[item];
    });
    cart = [];
    console.log('Your total cost is $'+ cartTotal +', which will be charged to the card '+cc+'.' )
  }
}
