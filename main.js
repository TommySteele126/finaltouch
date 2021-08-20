let cart = document.querySelectorAll(`.add-cart`);

let products = {

    Name : 'Greyhoodie',
    tag: 'greyshirt',
    price: 20,
    inCart :1,
    



},



for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', ()=> {
        cartNumber();
    })
}


function cartNumber(){
let productNumber = localStorage.getItem('cartNumber');

productNumbe = parseInt(productNumber);
console.log(productNumber)
localStorage.setItem('cartNumber',1);

}