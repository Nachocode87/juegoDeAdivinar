/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

const random = ()=>{
    let numRandom = Math.floor(Math.random()*(20 - 1)+1)
    console.log(numRandom)
    const buttonSend = document.getElementById('buttonSend');
    
    buttonSend.addEventListener('click', ()=>{
        //console.log(numRandom)
        const num = parseInt(document.getElementById('numeroInput').value);
        if(num === numRandom) {
            alert('felicidades adivinaste')
            location.reload()
        } else if(num > numRandom) {
            alert('el numero es menor, sigue intentando')
        } else {
            alert('el numero es mayor, sigue intentando')
        }
    })
    
}


