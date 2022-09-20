
console.log("app");

const video = document.querySelector('.video');

const divx = document.getElementById('coordx');
const divy = document.getElementById('coordy');
const divPressure = document.getElementById('pressure');
const divPointerType = document.getElementById('pointerType');


video.addEventListener('pointerdown', e => {
    console.log(e);
    divx.innerHTML = "x:" + Math.floor(e.pageX);
    divy.innerHTML = "y:" + Math.floor(e.pageY);

    divPressure.innerHTML = "Pressure:" + e.pressure;
    divPointerType.innerHTML = "Type:" + e.pointerType;

    const dot = document.createElement('div');

    divx.classList.add('bgyellow');
});


video.addEventListener('pointerup', e => {
    console.log(e);
    console.log(divx.classList);
    divx.classList.remove('bgyellow');
});

video.addEventListener('pointermove', e => {
    // console.log(e);
});


const w = window.innerWidth;
const h = window.innerHeight;
const loc = window.location;

console.log("window", h, w);
console.log("location:", loc);
