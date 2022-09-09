let menu = "open";

document.getElementById("switch").addEventListener('click', ()=>{
    if(menu === "open"){
        document.getElementById("nav").style.display= "flex";
        menu = "close"
}
else{
    document.getElementById("nav").style.display= "none";
    menu ="open"
}
}

)
