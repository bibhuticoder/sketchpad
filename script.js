var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

var iX,
    iY,
    fX,
    fY,
    mousedown = false, // initially set mousedown to false
    tool = 'brush';

canvas.onmousedown = function (e) {
    // on mousedown set initial positions
    iX = e.pageX;
    iY = e.pageY;
    mousedown = true;
}

canvas.onmouseup = function (e) {
    // on mouse up set 'mousedown' to false
    mousedown = false;
}

canvas.onmousemove = function (e) {

    // draw if mouse is pressed
    if (mousedown) {

        //set fX & fY to final position of cursor
        fX = e.pageX;
        fY = e.pageY;

        // check if its brush or eraser
        if (tool === 'brush') ctx.strokeStyle = 'black';
        else ctx.strokeStyle = 'white';

        // draw line from (iX,iY) to (fX, fY)
        ctx.beginPath();
        ctx.moveTo(iX, iY);
        ctx.lineTo(fX, fY);
        ctx.stroke();
        ctx.closePath();

        //set initial positions to final positions
        iX = fX;
        iY = fY;
    }


}

document.getElementById('size').onkeyup = function (e) {
    //set linewidth of ctx to the value of textbox
    ctx.lineWidth = parseInt(document.getElementById('size').value);
}

document.getElementById('toggle').onclick = function () {
    //toggle tool
    if (tool === 'brush') tool = 'eraser';
    else tool = 'brush';
}