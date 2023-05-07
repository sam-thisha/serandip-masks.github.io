const form=document.getElementById("contact-form");

const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const msg=document.getElementById("msg");

const send=document.getElementById("send-btn");
const clear=document.getElementById("clear-btn");

clear.addEventListener("click",()=>{
    form.reset();
});

send.addEventListener("click",()=>{
    var name=fname.value+" "+lname.value;
    alert(name+" successfully send your message!");
});
