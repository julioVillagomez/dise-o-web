

function validacion(){
    var nombre = document.querySelector("#nombre");
    var ape_pat = document.querySelector("#ape_pat");
    var ape_mat = document.querySelector("#ape_mat");
    var edad = document.querySelector("#edad");
    var smalls = document.querySelectorAll("#formulario small");
    var form_group = document.querySelectorAll("#formulario .form-group");

    for(i = 0 ; i < smalls.length ; i++){
        smalls[i].remove();
    }

    for(i = 0 ; i < form_group.length ; i++){
        form_group[i].classList.remove("invalid");
    }

    // if(nombre.value == ""){
    //     var padreNombre = nombre.parentNode;
    //     padreNombre.classList.add("invalid");
    //     var etiquetaError = document.createElement("small")
    //     var textoEtiqueta = document.createTextNode("Campo requerido");
    //     etiquetaError.classList.add("error");
    //     etiquetaError.appendChild(textoEtiqueta);
    //     padreNombre.appendChild(etiquetaError);
    // }

    validacionRequired(nombre);
    validacionRequired(ape_pat);
    validacionRequired(ape_mat);

    // if(ape_pat.value == ""){

    //     var padreAPePat = ape_pat.parentNode;
    //     padreAPePat.classList.add("invalid");
    //     var etiquetaErrorApePat = document.createElement("small");
    //     var textoEtiquetaApepat = document.createTextNode("Campo requerido");
    //     etiquetaErrorApePat.classList.add("error");
    //     etiquetaErrorApePat.appendChild(textoEtiquetaApepat);
    //     padreAPePat.appendChild(etiquetaErrorApePat);

    // }

    // if(ape_mat.value == ""){

    //     var padreAPeMat = ape_mat.parentNode;
    //     padreAPeMat.classList.add("invalid");
    //     var etiquetaErrorApeMat = document.createElement("small");
    //     var textoEtiquetaApeMat = document.createTextNode("Campo requerido");
    //     etiquetaErrorApeMat.classList.add("error");
    //     etiquetaErrorApeMat.appendChild(textoEtiquetaApeMat);
    //     padreAPeMat.appendChild(etiquetaErrorApeMat);

    // }


    if(edad.value == "" ){

        var padreEdad = edad.parentNode;
        padreEdad.classList.add("invalid");
        var etiquetaErrorEdad = document.createElement("small");
        var textoEtiquetaEdad = document.createTextNode("Campo requerido");
        etiquetaErrorEdad.classList.add("error");
        etiquetaErrorEdad.appendChild(textoEtiquetaEdad);
        padreEdad.appendChild(etiquetaErrorEdad);


    }else{
        if(edad.value < 18){
            var padreEdad = edad.parentNode;
            padreEdad.classList.add("invalid");
            var etiquetaErrorEdad = document.createElement("small");
            var textoEtiquetaEdad = document.createTextNode("Edad Mayor 18");
            etiquetaErrorEdad.classList.add("error");
            etiquetaErrorEdad.appendChild(textoEtiquetaEdad);
            padreEdad.appendChild(etiquetaErrorEdad);
            
        }

    }

    tabla(nombre.value, ape_pat.value, ape_mat.value,  edad.value)

    return false;

}

function validacionRequired(elemento){
    if(elemento.value == ""){

        var padre = elemento.parentNode;
        padre.classList.add("invalid");
        var etiqueta = document.createElement("small");
        var textoEtiqueta = document.createTextNode("Campo requerido");
        etiqueta.classList.add("error");
        etiqueta.appendChild(textoEtiqueta);
        padre.appendChild(etiqueta);
        
        return 1;
    }

    return 0;
}

