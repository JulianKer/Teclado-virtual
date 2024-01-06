const caracteresPrincipales = [];
const caracteresEspeciales = ["1","2","3","4","5","6","7","8","9","0","!",'#',"$","%","&","/","(",")","=","?","¿","¡",",",".",";","-","_","+"]
let campoDeTexto = document.getElementById("campo-de-texto")
let teclas = document.querySelectorAll(".tecla");
const tituloPrincipal = "El texto que escriba aparecera aqui..."
const teclaMayuscula = document.getElementById("mayuscula");
const teclaABC = document.getElementById("teclaABC");
let ledMayus = document.getElementById("led-mayus");
let ledAbc = document.getElementById("led-abc");


// ----------------------------------
document.addEventListener("DOMContentLoaded", ()=>{
    teclas.forEach(tecla=>{
        caracteresPrincipales.push(tecla.value);
    })
})
// ----------------------------------

// ----------------------------------
teclas.forEach(tecla=>(
    tecla.addEventListener("click", ()=>{
        if (campoDeTexto.textContent === tituloPrincipal && tecla.value != " " && tecla.value != "Mayús." && tecla.value != "Delete all" && tecla.value != "ABC") {
            campoDeTexto.textContent = "";
        }

        switch (tecla.value) {
            case "←":
                let cadenaConLetraBorrada = campoDeTexto.textContent.slice(0,-1);
                campoDeTexto.textContent = cadenaConLetraBorrada;
                break;

            case "Mayús.":
                if (teclas[0].value === "1") {

                }else{
                    if (estanEnMinusculas()) {
                        console.log("convirtiendo a mayusculas")
                        convertirAMayusculas();
                    }else{
                        console.log("convirtiendo a minusculas")
                        convertirAMinusculas()
                    }
                }
            
                break;

            case "ABC":
                if (teclas[0].value === "q" || teclas[0].value === "Q") {
                    cambiarACaracteresEspeciales();
                }else{
                    cambiarACaracteresPrincipales();
                }
                break;

            case "Delete all":
                campoDeTexto.textContent = "";
                break;

            default:
                campoDeTexto.innerHTML += tecla.value;
                break;
        }
        if (campoDeTexto.textContent === "") {
            campoDeTexto.textContent = tituloPrincipal;
        } 
    })
));
// ----------------------------------



// ----------------------------------
teclaMayuscula.addEventListener("click", ()=>{
    if (!(ledAbc.classList.contains("led-activado"))) { // si quiero activar mayusculas, solo lo puedo hacer si la tecla de abc esta desactivada
        if (teclaMayuscula.classList.contains("tecla-mayuscula")) {
            teclaMayuscula.classList.remove("tecla-mayuscula");
        }else{
            teclaMayuscula.classList.add("tecla-mayuscula")
        }
    }else{
        titilarLedMayuscula();
    }
})
// ----------------------------------

// ----------------------------------
teclaABC.addEventListener("click", ()=>{
    if (teclaABC.classList.contains("tecla-ABC")){
        teclaABC.classList.remove("tecla-ABC")
    }else{
        if (teclaMayuscula.classList.contains("tecla-mayuscula")) {
            convertirAMinusculas()
            teclaMayuscula.classList.remove("tecla-mayuscula");
            titilarLedMayuscula();
        }
        teclaABC.classList.add("tecla-ABC")
    }
})
// ----------------------------------

// ----------------------------------
function estanEnMinusculas(){
    return teclas[0].value === "q"
}
// ----------------------------------

// ----------------------------------
function convertirAMayusculas(){
    teclas.forEach(tecla=>{
        if (tecla.value != "Mayús." && tecla.value != "Delete all" && tecla.value != "ABC") {
            tecla.value = tecla.value.toUpperCase()
        }
    })
    ledMayus.classList.add("led-activado");
}
// ----------------------------------

// ----------------------------------
function convertirAMinusculas(){
    teclas.forEach(tecla=>{
        if (tecla.value != "Mayús." && tecla.value != "Delete all" && tecla.value != "ABC") {
            tecla.value = tecla.value.toLowerCase()
        }
    })
    ledMayus.classList.remove("led-activado");
}
// ----------------------------------

// ----------------------------------
function cambiarACaracteresEspeciales(){
    teclas.forEach((tecla, indice)=>{
        
        if (tecla.value != "←" && tecla.value != "Mayús." && tecla.value != " " && tecla.value != "Delete all" && tecla.value != "ABC") {
            tecla.value = caracteresEspeciales[indice] // cambio
        }
    })
    ledAbc.classList.add("led-activado");
}
// ----------------------------------

// ----------------------------------
function cambiarACaracteresPrincipales(){
    teclas.forEach((tecla, indice)=>{
        if (tecla.value != "←" && tecla.value != "Mayús." && tecla.value != " " && tecla.value != "Delete all" && tecla.value != "ABC") {
            tecla.value = caracteresPrincipales[indice]; //cambio
        }
    })
    ledAbc.classList.remove("led-activado");
}
// ----------------------------------


// ----------------------------------
function titilarLedMayuscula(){
    ledMayus.classList.add("led-error");
        setTimeout(()=>{
            ledMayus.classList.remove("led-error");
        },1500)
}
// ----------------------------------

