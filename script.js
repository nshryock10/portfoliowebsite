let elem = document.getElementById("button");
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let projA = document.getElementById("a");
let projB = document.getElementById("b");
let projC = document.getElementById("c");
let projADisplay = getComputedStyle(projA).display;
let projBDisplay = getComputedStyle(projB).display;
let projCDisplay = getComputedStyle(projC).display;

function clickChange() {

    elem.style.backgroundColor = 'red';
}

function changeColor() {
    event.target.style.backgroundColor =  'rgba(128, 128, 128, 0.55)';
}

function changeBack() {
    event.target.style.backgroundColor =  'rgba(128, 128, 128, 0.034)';
}
function toggleRight() {
    if(projADisplay === "block"){
        projA.style.display = 'none';
        projB.style.display = 'block';
    }else if(projBDisplay === "block"){
        projB.style.display = 'none';
        projC.style.display = 'block';
    }else if(projCDisplay === "block"){
        projC.style.display = 'none';
        projA.style.display = 'block';
    }
}
function toggleLeft() {
    if(projADisplay === "block"){
        projA.style.display = 'none';
        projC.style.display = 'block';
    }else if(projCDisplay === "block"){
        projC.style.display = 'none';
        projB.style.display = 'block';
    }else if(projBDisplay === "block"){
        projB.style.display = 'none';
        projA.style.display = 'block';
    }
}

elem.onclick = clickChange;
leftArrow.onmouseover = changeColor;
leftArrow.onmouseleave = changeBack;
rightArrow.onmouseover = changeColor;
rightArrow.onmouseleave = changeBack;
rightArrow.onclick = toggleRight;
leftArrow.onclick = toggleLeft;