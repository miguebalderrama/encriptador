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
        document.getElementById("btnCopiar").style.display = "none";

    }
    
    const encriptar = () => {
        messageDesencriptar.style.display = "none"; 
        let elemento = document.getElementById("messageEncriptado");
        if(elemento){
            document.getElementById("resultadoTexto").removeChild(elemento);
        }   
        let elementEncriptado = document.createElement("p");
        elementEncriptado.id = "messageEncriptado"; 
        elementEncriptado.className = "messageEncriptado";   
        let texto = textoValue.value;
        texto = texto.toLowerCase();        
        let textoEncriptado = texto.replace("e", "enter");        
        textoEncriptado = textoEncriptado.replaceAll("i", "imes");
        textoEncriptado = textoEncriptado.replaceAll("a", "ai");
        textoEncriptado = textoEncriptado.replaceAll("o", "ober");
        textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
        elementEncriptado.innerHTML = textoEncriptado;
        document.getElementById("resultadoTexto").appendChild(elementEncriptado);
        const list = document.getElementById("resultadoTexto");
        list.insertBefore(elementEncriptado, list.children[0]);        
        document.getElementById("btnCopiar").style.display = "block";
    }
    
    const desencriptar = () => {
        messageDesencriptar.style.display = "none";
        let elemento = document.getElementById("messageEncriptado");
        if(elemento){
            document.getElementById("resultadoTexto").removeChild(elemento);
        }
        let elementEncriptado = document.createElement("p");
        elementEncriptado.id = "messageEncriptado";
        elementEncriptado.className = "messageEncriptado";   
        let texto = textoValue.value;
        texto = texto.toLowerCase();        
        let textoEncriptado = texto.replaceAll("enter", "e");        
        textoEncriptado = textoEncriptado.replaceAll("imes", "i");
        textoEncriptado = textoEncriptado.replaceAll("ai", "a");
        textoEncriptado = textoEncriptado.replaceAll("ober", "o");
        textoEncriptado = textoEncriptado.replaceAll("ufat", "u");
        elementEncriptado.innerHTML = textoEncriptado;
        document.getElementById("resultadoTexto").appendChild(elementEncriptado);
        const list = document.getElementById("resultadoTexto");
        list.insertBefore(elementEncriptado, list.children[0]);        
        document.getElementById("btnCopiar").style.display = "block";

    }

    const copiar = () => {
        let elemento = document.getElementById("messageEncriptado");        
        navigator.clipboard.writeText(elemento.innerHTML);
        console.log(elemento.innerHTML);
          }
   

    const btnEncriptar = document.getElementById("btnEncriptar");
    btnEncriptar.addEventListener("click", encriptar);

    const btnClean = document.getElementById("btnClean");
    btnClean.addEventListener("click", limpiar);

    const btnDesencriptar = document.getElementById("btnDesencriptar");
    btnDesencriptar.addEventListener("click", desencriptar);

    const btnCopiar = document.getElementById("btnCopiar");
    btnCopiar.addEventListener("click", copiar);
    
    