// CLAVES DE ENCRIPTADO

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
 const messageDesencriptar = document.querySelector("#messageDesencriptar");
 const textoValue = document.querySelector("#texto");

const limpiar = () => {
    let elemento = document.getElementById("messageEncriptado");
    textoValue.value = "";
    messageDesencriptar.style.display = "block";
    if(elemento){
        document.getElementById("resultadoTexto").removeChild(elemento);
    }
}

const encriptar = () => {
    messageDesencriptar.style.display = "none";
    let elementEncriptado = document.createElement("p");
    elementEncriptado.id = "messageEncriptado";    
    let texto = textoValue.value;
    texto = texto.toLowerCase();
    console.log(texto);
    let textoEncriptado = texto.replace("e", "enter");
    console.log(textoEncriptado);
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
    elementEncriptado.innerHTML = textoEncriptado;
    document.getElementById("resultadoTexto").appendChild(elementEncriptado);
}




 const btnEncriptar = document.getElementById("btnEncriptar");
 btnEncriptar.addEventListener("click", encriptar);

 const btnClean = document.getElementById("btnClean");
    btnClean.addEventListener("click", limpiar);
