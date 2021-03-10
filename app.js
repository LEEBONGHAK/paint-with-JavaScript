const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// context의 default 설정 (검정색, 선넓이 = 2.5)
ctx.strokeStyle = "#2c2c2c"; 
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;


function stopPainting() {
    painting = false;
}


function startPainting() {
    painting = true;
}


// 마우스를 움직이면 발생하는 이벤트를 수행
function onMouseMove(event) {
    // 윈도우 전체 범위가 아닌 canvas내 좌표를 사용하기 위해 offset 사용
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}


function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}


function handleModeClick(event) {
    if (filling === true) {
        filling = false;
        mode.innerText = "FILL";
    } else {
        filling = true;
        mode.innerText = "PAINT";
    }
}



// canvas가 존재하는지 확인
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}


// Array.from(object name) : object로부터 array를 만듬s
Array.from(colors).forEach(
    color => color.addEventListener("click", handleColorClick)
    );


if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}