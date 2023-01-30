  function encriptar()
  {
    var parrafo = document.getElementById("textoEncriptado").value.toLowerCase();
    
    var textoEncriptado = parrafo.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("textoEncriptado").value='';
    //document.getElementById("textoEncriptado").select();
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    document.getElementById("contenedor-muneco").style.display = "none";
    document.getElementById("contenerdo-titulo").style.display = "none";
    document.getElementById("contenedor-parrafo").style.display = "none";
    document.getElementById("textoDesencriptado").rows = "23";

  }

  function desencriptar()
  {
    var parrafo = document.getElementById("textoEncriptado").value.toLowerCase();
   
    var textoEncriptado = parrafo.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("textoEncriptado").value='';
    //document.getElementById("textoEncriptado").select();

  }

  function copiar()
  {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    //document.getElementById("textoEncriptado").value="Ingrese texto aquí";
    //document.getElementById("textoEncriptado").select();
  }