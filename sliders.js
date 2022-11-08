let m1Slider = document.getElementById("m1Range");
let m2Slider = document.getElementById("m2Range");
let r1Slider = document.getElementById("r1Range");
let r2Slider = document.getElementById("r2Range");
let gSlider = document.getElementById("gRange");
let trailSwitch = document.getElementById("switch");
let m1SliderValue = 8;
let m2SliderValue = 5;
let r1SliderValue = 1;
let r2SliderValue = 1;
let gSliderValue = 9.8;
let trailSwitchValue = false;

m1Slider.oninput = function () {
    m1SliderValue = Number(m1Slider.value);
    document.getElementById('m1Label').innerHTML = `Mass 1: ${m1SliderValue}Kg`;
}
m2Slider.oninput = function () {
    m2SliderValue = Number(m2Slider.value);
    document.getElementById('m2Label').innerHTML = `Mass 2: ${m2SliderValue}Kg`;
}
r1Slider.oninput = function () {
    r1SliderValue = Number(r1Slider.value) / 10;
    document.getElementById('r1Label').innerHTML = `Length 1: ${r1SliderValue}m`;
}
r2Slider.oninput = function () {
    r2SliderValue = Number(r2Slider.value) / 10;
    document.getElementById('r2Label').innerHTML = `Length 2: ${r2SliderValue}m`;
}
gSlider.oninput = function () {
    gSliderValue = Number(gSlider.value) / 10;
    document.getElementById('gLabel').innerHTML = `Gravity: ${gSliderValue}m/s<sup>2</sup>`;
}
trailSwitch.oninput = function () {
    trailSwitchValue = trailSwitch.checked;
    console.log(trailSwitchValue);
}