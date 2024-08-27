//--Elementos a usar
const txtOriginal = document.querySelector('.texto_izquierda');
const mensajeFinal = document.querySelector('.texto_derecha');
const btnCopiarTxt = document.querySelector('.copiar_txt');

//--Encriptador

function botonEncriptar() {
    const txtEncriptado = encriptar(txtOriginal.value);
    mensajeFinal.value = txtEncriptado;
    txtOriginal.value = '';
    mensajeFinal.style.backgroundImage = 'none';
}

function encriptar(texto) {
    texto = texto.toLowerCase();
    let mensaje = ""; 
    if (texto === "" ) {
    mensaje = "Por favor escriba el texto que desea encriptar";
    } else {
    texto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mensaje = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    }
    return mensaje; 
}

function botonDesencriptar (){
    const txtDesencriptado = Desencriptar(txtOriginal.value);
    mensajeFinal.value = txtDesencriptado;
    txtOriginal.value = '';
    mensajeFinal.style.backgroundImage = 'none';
}

function Desencriptar (texto){
    texto = texto.toLowerCase();
    let mensaje = ""; 
    if (texto === '' ) {
    mensaje = "Por favor escriba el texto que desea desencriptar";
    } else {
    texto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
        mensaje = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    }
    return mensaje; }

async function Copiartxt() {
        const input = document.querySelector('.texto_derecha');
        input.select();
        document.execCommand('copy');
        btnCopiarTxt.classList.add("active");
        await new Promise(resolve => setTimeout(resolve, 250)); 
        btnCopiarTxt.classList.remove('active');
        alert("Texto Copiado");
}

function Limpiartxt() {
    document.querySelector('.texto_derecha').value = "";

    let elemento = document.querySelector('.texto_derecha');
    elemento.style.backgroundImage = "url('lupa.gif')";
    elemento.style.backgroundRepeat = "no-repeat";
    elemento.style.backgroundSize = "40%";
}