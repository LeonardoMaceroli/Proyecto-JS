const piedra = 1;
const papel = 2;
const tijeras = 3;
let victorias = 0;
let derrotas = 0;
let empates = 0;
let partidasJugadas = 0;
let jugarDeNuevo = 'si';


alert('Bienbenido al clasico juego de piedra, papel o tijeras. Juega tanto como desees')

do {
    if (jugarDeNuevo === 'si') {
        function aleatorio() {
            return Math.floor(Math.random() * 3) + 1;
        }

        usuario = Number(prompt('Elija: \n' + '1- PIEDRA\n' + '2- PAPEL\n' + '3- TIJERAS\n' + 'Ingresa 0 para salir'));
        cpu = aleatorio();

        while (usuario !== 0 && usuario !== 1 && usuario !== 2 && usuario !== 3) {
            usuario = Number(prompt('Entrada no válida. Elija con numeros: \n' +
            '1- PIEDRA\n' +
            '2- PAPEL\n' +
            '3- TIJERAS\n' +
            'Ingresa 0 para salir'));
        }

        if(usuario === 0) {
            break;
        }

        //muestra las elecciones del jugador y la CPU
        function mostrarEleccion(eleccion, Jugador) {
            let tipo;

            if (Jugador) {
                tipo = ' Elegiste';
            } else {
                tipo = ' La CPU eligio';
            }

            switch (eleccion) {
                case piedra:
                    alert(tipo + ' PIEDRA');
                    break;
                case papel:
                    alert(tipo + ' PAPEL');
                    break;
                case tijeras:
                    alert(tipo + ' TIJERAS');
                    break;
                default:
                    alert(tipo + ' opcion no valida');
            }
        }

        mostrarEleccion(usuario, true);
        mostrarEleccion(cpu, false);

        //muestra los resultados
        if (usuario === cpu) {
            alert('Fue un empate');
            empates++
            partidasJugadas++
        } else if (
            (usuario === piedra && cpu === tijeras) ||
            (usuario === papel && cpu === piedra) ||
            (usuario === tijeras && cpu === papel)
        ) {
            alert('Felicidades ¡Ganaste!');
            victorias++
            partidasJugadas++
        } else {
            alert('Perdiste. Mejor suerte para la proxima');
            derrotas++
            partidasJugadas++
        }
    }

} while (confirm('¿volver a jugar?'));

alert('Gracias por jugar. Hasta la proxmia');

alert('Estadisticas: \nPartidas jugadas: ' + partidasJugadas + '\nVictorias: ' + victorias + '\nDerrotas: ' + derrotas + '\nEmpates: ' + empates);