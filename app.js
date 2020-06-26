function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function allClear() {
    var result = document.getElementById("result");
    result.value = ""
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
}
function sin() {
    var result = document.getElementById("result");
    result.value = Math.sin(result.value);
}
function tan() {
    var result = document.getElementById("result");
    result.value = Math.tan(result.value);
}
function cos() {
    var result = document.getElementById("result");
    result.value = Math.cos(result.value);
}
function log() {
    var result = document.getElementById("result");
    result.value = Math.log(result.value);
}
function cubeRoot() {
    var result = document.getElementById("result");
    result.value = Math.cbrt(result.value);
}
function sqRoot() {
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}
function expnt() {
    var result = document.getElementById("result");
    result.value = Math.exp(result.value);
}
function pi() {
    var result = document.getElementById("result");
    result.value = Math.PI(result.value);
}
