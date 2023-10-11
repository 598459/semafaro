const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatc();
    turnOn[event.target.id]();

}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++color : 0;

const chargeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex ];
    nextIndex();
}

const stopAutomatc = () => {
    clearInterval ( intervalId );

}

const turnOn = {
    'red':   () => img.src = './img/vermelho.png' ,
    'yellow' : () => img.src = './img/amarelo.png' ,
    'green' : () => img.src = './img/verde.png' ,
    'automatc': () => intervalId = setInterval(chargeColor, 1000 )

}

buttons.addEventListener('click', trafficLight );