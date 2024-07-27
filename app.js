//Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
        numeroUsuario = prompt(`Adivina un número del 1 al ${numeroMaximoPosible}`);

    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto) {
        //Acertamos el número
        alert(`¡Bien hecho! el número es: ${numeroUsuario}. Lo lograste en ${intentos} ${palabraVeces}.`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert("Bajale un tantito");
        }else {
                alert ("Súbele un tantito");
            }
    
        //lo usamos para contar intentos
        intentos = intentos + 1;
        palabraVeces = "veces";
        if(intentos > 3) {
            alert("Perdiste amiguito, presiona F5");
            break;
        } 
        }
    }