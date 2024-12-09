var LeftArrow = window.document.getElementById("LeftArrow");
var Video1 = window.document.getElementById("Video1");
var Video2 = window.document.getElementById("Video2");
var Video3 = window.document.getElementById("Video3");
var RightArrow = window.document.getElementById("RightArrow");


function GoRight(){
    Video1.style="display:none;"
    Video2.style="display:flex;"
    Video3.style="display:flex;"
    LeftArrow.style="display:flex;"
    RightArrow.style="display:none"
}

function GoLeft(){
    Video1.style="display:flex;"
    Video2.style="display:flex;"
    Video3.style="display:none;"
    LeftArrow.style="display:none;"
    RightArrow.style="display:flex"
}