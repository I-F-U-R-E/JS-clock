setInterval(setTime, 1000);

const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('#minute-hand');
const secondHand = document.querySelector("#second-hand");


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}


function setTime() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60 ;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60 ;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}
