let campoDeTexto = document.getElementById("campo-de-texto")
let teclas = document.querySelectorAll(".tecla");
const tituloPrincipal = "El texto que escriba aparecerá aquí."
const teclaMayuscula = document.getElementById("mayuscula");

teclas.forEach(tecla=>(
    tecla.addEventListener("click", ()=>{
        if (campoDeTexto.textContent === tituloPrincipal) {
            campoDeTexto.textContent = " ";
        }
        if (tecla.value === "←") {
            let cadenaConLetraBorrada = campoDeTexto.textContent.slice(0,-1)
            campoDeTexto.textContent = cadenaConLetraBorrada
        }else{

            if (tecla.value === "Mayús.") {
                console.log(estanEnMinusculas())
                if (estanEnMinusculas()) {
                    console.log("convirtiendo a mayusculas")
                    convertirAMayusculas();
                }else{
                    console.log("convirtiendo a minusculas")
                    convertirAMinusculas()
                }
            }else{
                campoDeTexto.textContent += tecla.value
            }
        }
    })
));

teclaMayuscula.addEventListener("click", ()=>{
    if (teclaMayuscula.classList.contains("tecla-mayuscula")) {
        teclaMayuscula.classList.remove("tecla-mayuscula");
        console.log("saque la clase")
    }else{
        teclaMayuscula.classList.add("tecla-mayuscula")
        console.log("puse la clase")
    }
})
function estanEnMinusculas(){
    return teclas[0].value === "q"
}

function convertirAMayusculas(){
    teclas.forEach(tecla=>{
        if (tecla.value != "Mayús.") {
            tecla.value = tecla.value.toUpperCase()
        }
    })
}
function convertirAMinusculas(){
    teclas.forEach(tecla=>{
        if (tecla.value != "Mayús.") {
            tecla.value = tecla.value.toLowerCase()
        }
    })
}

