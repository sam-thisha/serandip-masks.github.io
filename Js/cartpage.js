
// let currentCart = (JSON.parse(sessionStorage.cart));
// console.log(currentCart);

let count = 0;
let mytotal = 0;


for (let x in currentCart){
    
    var CartTable = document.getElementById("CartTable");
    var row = CartTable.insertRow(-1);
    //Find the template
    var template = document.getElementById('temp');
    //Clone it's contents
    var newRow = template.content.cloneNode(true);
    //Append the new row
    CartTable.appendChild(newRow);
    // console.log("fe");
    document.getElementById("count").id = count;
    // var trname = document.getElementsByClassName("count");
    // console.log(trname);
    // trname[0].class = "count2";
    // trname[count].id = count;
    // console.log(trname[count]);

    var itemName = document.getElementsByClassName("item-name");
    itemName[count].innerHTML = currentCart[x][1];

    var itemName = document.getElementsByClassName("item-quantity");
    itemName[count].innerHTML = currentCart[x][0];
    
    var itemName = document.getElementsByClassName("item-price");
    itemName[count].innerHTML = currentCart[x][2];
    
    var itemName = document.getElementsByClassName("item-total");
    itemName[count].innerHTML = (currentCart[x][0] * currentCart[x][2]).toFixed(2) ;

    var subTotal = document.getElementById("sub-total");

    mytotal = mytotal + parseFloat(currentCart[x][2] * currentCart[x][0] );
    subTotal.innerHTML = parseFloat(mytotal).toFixed(2);
    
    var orderImg = document.getElementsByClassName("cart-img");
    let orderTypeNo = currentCart[x][3];
    let itemNo = currentCart[x][4];
    let imgName;
    if(itemNo == "1"){
        imgName = "../Img/Storeitems/promask";
        imgName = imgName.concat(orderTypeNo,"f");
        imgName = imgName.concat(".png");
        
        orderImg[count].src = imgName;
    }
    else if(itemNo == "2"){
        imgName = "../Img/Storeitems/yakaface";
        imgName = imgName.concat(orderTypeNo,".png");
        orderImg[count].src = imgName;
    }
    else if(itemNo == "3"){
        imgName = "../Img/Storeitems/keytag";
        imgName = imgName.concat(orderTypeNo,".png");
        orderImg[count].src = imgName;
    }
    else if(itemNo == "4"){
        imgName = "../Img/Storeitems/shell";
        imgName = imgName.concat(orderTypeNo,"f.png");
        orderImg[count].src = imgName;
    }
    else if(itemNo == "5"){
        imgName = "../Img/Storeitems/paint";
        imgName = imgName.concat(orderTypeNo,".png");
        orderImg[count].src = imgName;
    }
    else if(itemNo == "6"){
        imgName = "../Img/Storeitems/bag";
        imgName = imgName.concat(orderTypeNo,".png");
        orderImg[count].src = imgName;
    }
    else if(itemNo == "7"){
        imgName = "../Img/Storeitems/cap";
        imgName = imgName.concat(orderTypeNo,".png");
        orderImg[count].src = imgName;
    }
    else if(itemNo == "8"){
        imgName = "../Img/Storeitems/tool";
        imgName = imgName.concat(orderTypeNo,".png");
        orderImg[count].src = imgName;
    }


    // console.log(typeno2); 

    
    
    count++;
}

 
function payNow(){
    var fName = document.getElementById("fName");
    var Num = document.getElementById("Num");

    if(fName.value == ""){
        alert("Please Enter Your Name");
        fName.focus();
    }
    else if(Num.value == ""){
        alert("Please Enter Your Mobile Number");
        Num.focus();
    }
    else{
    sessionStorage.name = fName.value;
    sessionStorage.number = Num.value;

    // console.log(sessionStorage.name);
    // console.log(sessionStorage.number);
    
    window.location.replace("../Pages/paymentgateway.html");

    }
}

function removeFromCart(OrderID){
    // console.log(OrderID);
    
    let newcart = {};
    let count = 0;
    for (let x in currentCart){
        if(count == OrderID){
            console.log(currentCart[x]);
        }
        else{
        newcart[x] = currentCart[x];
        }
        count++;
    }
    sessionStorage.cart = JSON.stringify(newcart);
    // console.log(newcart);

}








