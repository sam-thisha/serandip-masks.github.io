let empty = {}

if(sessionStorage.cart == undefined){
    sessionStorage.cart = JSON.stringify(empty);    
}


let currentCart = (JSON.parse(sessionStorage.cart));
// console.log(currentCart);

// sessionStorage.removeItem()









function addToCart(item,price,type,quantity){
    
    quantity = parseInt(quantity);
    price = parseFloat(price);

    let typeno = parseInt(type.slice(-1));
    // console.log(typeno);
    type = type.slice(0,(type.length-1));
    // console.log(type);


    if(type == 0){
        alert("Please Select a Category");
        return false;
    }
   
    let currentCart = (JSON.parse(sessionStorage.cart)); // Get Information from SessionStorage to Current Cart
    let orderName = "".concat(item,type); //create OrderName => "Order{Item}{variant}"
   
    if(currentCart[orderName] == null){
        currentCart[orderName] = [quantity,type,price,typeno,item]; // Add Item to Cart
    }
    else{
        currentCart[orderName] = [quantity,type,price,typeno,item]; // Update Quantity
    }
   
    // console.log(currentCart); // For debugging only
    sessionStorage.cart = JSON.stringify(currentCart);
    alert("Item successfully added to cart");
    return false;
}