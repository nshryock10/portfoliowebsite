let elem = document.getElementById("button");
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let projA = document.getElementById("a");
let projB = document.getElementById("b");
let projC = document.getElementById("c");
let projADisplay = getComputedStyle(projA).display;
let projBDisplay = getComputedStyle(projB).display;
let projCDisplay = getComputedStyle(projC).display;
let btn = document.getElementById("button");
let formBtn = document.getElementById("form-btn")


function changeColor() {
    event.target.style.backgroundColor =  'rgba(128, 128, 128, 0.55)';
}

function changeBack() {
    event.target.style.backgroundColor =  'rgba(128, 128, 128, 0.034)';
}
function toggleRight() {
    let projADisplay = getComputedStyle(projA).display;
    let projBDisplay = getComputedStyle(projB).display;
    let projCDisplay = getComputedStyle(projC).display;
    if(projADisplay === "flex"){
        projA.style.display = 'none';
        projB.style.display = 'flex';
    }else if(projBDisplay === "flex"){
        projB.style.display = 'none';
        projC.style.display = 'flex';
    }else if(projCDisplay === "flex"){
        projC.style.display = 'none';
        projA.style.display = 'flex';
    }
}
function toggleLeft() {
    let projADisplay = getComputedStyle(projA).display;
    let projBDisplay = getComputedStyle(projB).display;
    let projCDisplay = getComputedStyle(projC).display;
    if(projADisplay === "flex"){
        projA.style.display = 'none';
        projC.style.display = 'flex';
    }else if(projCDisplay === "flex"){
        projC.style.display = 'none';
        projB.style.display = 'flex';
    }else if(projBDisplay === "flex"){
        projB.style.display = 'none';
        projA.style.display = 'flex';
    }
}
function btnHover() {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
    event.target.style.border = 'border: 3px solid gray';
}
function btnBack() {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
    event.target.style.border = '3px solid rgba(0, 0, 0, 0.808);';
}

btn.onmouseover = btnHover;
btn.onmouseleave = btnBack;
formBtn.onmouseover = btnHover;
formBtn.onmouseleave = btnBack;
leftArrow.onmouseover = changeColor;
leftArrow.onmouseleave = changeBack;
rightArrow.onmouseover = changeColor;
rightArrow.onmouseleave = changeBack;
rightArrow.onclick = toggleRight;
leftArrow.onclick = toggleLeft;