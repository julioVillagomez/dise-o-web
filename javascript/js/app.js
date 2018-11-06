var uno = 3;
var dos = 10;

// console.log( uno + dos );
// console.log( uno - dos );
// console.log( uno * dos );
// console.log( uno / dos );

// == uno igual dos        
// != uno diferente dos        
// > uno mayor dos        
// >= uno mayor igual dos        
// < uno menor dos        
// <= uno menor igual dos    

// === uno exactamente igual dos (tipo y valor)
// !== uno totalmente diferente dos (tipo y valor)
// console.log( uno == parseInt(dos));
// console.log( uno === parseInt(dos));
// console.log( uno != parseInt(dos));
// console.log( uno !== parseInt(dos));
// console.log( uno > dos);
// console.log( uno >= dos);
// console.log( uno < dos);
// console.log( uno <= dos);



// uno = 1;
// console.log(typeof(uno))
// uno = "Hola mundo desde javascript";
// console.log(typeof(uno));
// uno = ["hola", "hola2"];
// console.log(typeof(uno));
// uno = 1.3;
// console.log(typeof(uno));

// ciclos

// for(let i = 0; i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);

//     },500);
// }

// do{
//     console.log(uno)
//     uno++
// }while(uno > dos)


// while (uno < dos) {
//    console.log(uno);
//    uno++;

// }

// alert("hola");
// console.log("esperando")

// console.log("hola");
// document.write("<h1>Hola</h1>")

// var h1 = document.getElementById("h1");
// var h1 = document.querySelector("#h1");
// var h1 = document.getElementsByClassName("h1");
// var h1 = document.querySelector(".h1");
// var h1 = document.getElementsByTagName("h1");
// var h1 = document.querySelector("h1");
// var h1 = document.getElementsByName("h1");
// var h1 = document.querySelector('[name="h1"]');



function rojo(){
    var h1 = document.querySelector("h1");
    h1.style.color = "red";
    h1.style.fontSize = "90px";

    var a = document.querySelector("a");
    console.log(a);
    a.href = "julio";

    var cuadrado = document.querySelector(".cuadrado");
    // cuadrado.classList.add("circulo");
    cuadrado.classList.remove("circulo");
    // cuadrado.style.borderRadius = "50%"
    // cuadrado.style.borderRadius = "50px"
}