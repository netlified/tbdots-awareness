
const menuBtn  = document.querySelector("#menu")



// menuBtn.addEventListener("click", function(){
//     // navSide.style.backgroundColor = 'red';
//     let navSide = document.getElementById('nav')
//     if(navSide.style.width == "300px"){
//         navSide.style.width = "0px";
//     }else{
//         navSide.style.width = "300px";
//     }
// })

// function navChange(){
//     document.navSide.style.backgroundColor = "red";
// }

function menuShow(x){
    x.classList.toggle('change');
    let navSide = document.getElementById('nav')

       
        if(navSide.style.width == "300px"){
            navSide.style.width = "0px";
        }else{
            navSide.style.width = "300px";
        }
}


