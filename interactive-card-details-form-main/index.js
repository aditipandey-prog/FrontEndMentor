let cname="";
document.getElementById('cname').addEventListener("keydown", cardName);
document.getElementById('cmm').addEventListener("keydown", month);
document.getElementById('cyy').addEventListener("keydown", yaer);
document.getElementById('cnumber').addEventListener("keydown", cardNumber);
function cardName(event) {
   console.log(event);
    if(event.key==="Backspace")
    {
        cname=cname.substring(0,cname.length-1);
        
    }
    else if((event.keyCode>96 && event.keyCode<124) || (event.keyCode>64 && event.keyCode<91) || event.keyCode===32){
        cname+=event.key;
    }

    if(cname.length===0)
    {
        document.getElementsByClassName('c_name')[0].textContent="Jane Appleseed";
    }
    else{
        document.getElementsByClassName('c_name')[0].textContent=cname;
    }
 }

