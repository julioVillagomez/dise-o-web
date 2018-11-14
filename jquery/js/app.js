$(document).ready(function(){
    // $("#id").
    // $(".class")
    // $("etiqueta")
    // $("[name='atributo']")
    $("tr > td.even")

    // var h1 = $("#h1");
    // h1.css('color', 'red');
    // h1.attr('onclick','eliminar()');
    // h1.addClass('color-purpura');
    // h1.removeClass('rojo')
    // h1.html('<b>Hola soy jquery</b>');
    // h1.text('hola cambiar')
    // h1.val();
    // h1.append('<p>hollaa</p>');
    // h1.hide(5000)

    // $.ajax({
    //     method:
    //     data
    //     url
    //     success
    //     error
    //     finally
        
    // })

    // $.get(url, success, error)
    // $.post(url,success,error)

    // setTimeout(function(){
    //     h1.show(5000)
        
    // }, 5000);
    // console.log(h1);

    var arrayObject = [];
    var cadena1        = "nombre";
    var cadena2        = "clase";

    for(var i = 1; i <= 30; i++){
        let objecto = new Object();
        objecto.id = i;
        objecto.nombre = cadena1 +" "+i
        objecto.clase  = cadena2 +" "+ i
        arrayObject.push(objecto);
    }
    var cadena_tabla ="";
    for(var i = 0; i < arrayObject.length ; i++ ){
        // cadena_tabla += "<tr>";
        // cadena_tabla += "<td>" + arrayObject[i].id + "</td>";
        // cadena_tabla += "<td>" + arrayObject[i].nombre + "</td>";
        // cadena_tabla += "<td>"+arrayObject[i].clase +"</td>";
        // cadena_tabla += "</tr>"; 

        cadena_tabla += `<tr> <td>${arrayObject[i].id}</td> <td> ${arrayObject[i].nombre} </td> 
        <td>${arrayObject[i].clase}</td>
        </tr>`
    }

    // $.each(arrayObject,function(i,obj){
    //     console.log(obj);
    // });
    
    // $('#tabla').append(cadena_tabla);
    // var cadenaP = `hola
    //     mundo
    //     reto
    // `
    // $('span').append(cadenaP);


    // $('#formulario').validate({
    //     onsubmit:false,
    //     debug: true,
    //     success: "valid",
    //     rules:{
    //         name:"required",
    //         apellido:{
    //             required:true,
    //             minlength:5,
    //             email:true
    //         }

    //     },
    //     messages:{
    //         name:{
    //             required: "Campo requerido"
    //         }
    //     },
    //     errorClass:"invalid",
    //     errorElement:"small",
    //     // validClass:"validado"
    //      submitHandler: function () {
    //          alert("Submitted!")
    //      }

    // })

    // $("#_tabla_").dataTable();

    
}); ///documen ready

function  maxWidth(){
    $('.cuadrado').animate({
        // width: parseInt($('.cuadrado').css('width')) == 200 ? '500px' : "200px",
        // height:"500px",
        // left: "100px"
        opacity:"toggle"
    },500,function(){
        alert("ajj")
    })
}

// $(document).ready(function () {
//     $('#example').DataTable({
//         "ajax": "data/objects.txt",
//         "columns": [{
//                 "data": "name",
//                 render:function(data,type,row){
//                     return formatear(data);
//                 }
//             },
//             {
//                 "data": "position"
//             },
//             {
//                 "data": "office"
//             },
//             {
//                 "data": "extn"
//             },
//             {
//                 "data": "start_date"
//             },
//             {
//                 "data": "salary"
//             }
//         ]
//     });
// });