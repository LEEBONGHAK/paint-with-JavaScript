// cavnas위에 마우스가 있으면 인식하도록
const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
    painting = flase;
}


// 마우스를 움직이면 발생하는 이벤트를 수행
function onMouseMove(event) {
    // 윈도우 전체 범위가 아닌 canvas내 좌표를 사용하기 위해 offset 사용
    const x = event.offsetX;
    const y = event.offsetY;

}


// 마우스 클릭버튼을 누르거나 유지할 때 발생하는 이벤트를 수행
function onMouseDown(event) {
    painting = true;
}


// 마우스 클릭버튼을 손에서 뗄 때 발생하는 이벤트를 수행
function onMouseUp(event) {
    stopPainting();
}


// canvas가 존재하는지 확인
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}