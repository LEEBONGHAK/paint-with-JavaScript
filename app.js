const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// context의 default 설정 (검정색, 선넓이 = 2.5)
ctx.strokeStyle = "#2c2c2c"; 
ctx.lineWidth = 2.5;

let painting = false;


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


// canvas가 존재하는지 확인
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}