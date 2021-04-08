var view = $("#project-container");
var move = "100px";
var sliderLimit = -750;


//New JS test on 'About Me'
let section1 = document.getElementById('about-me');
let colorChange = function() {
    section1.style.backgroundColor = 'green';
};
section1.onkeydown = colorChange;

//Button color change test
let btn = document.getElementById('button');

let hoverChange = () => {
    btn.style.backgroundColor = 'red';
};
btn.onmouseover = hoverChange;

$("#right-arrow").click(function(){

    var currentPosition = parseInt(view.css("left"));
    if( currentPosition >= sliderLimit) view.stop(false, true).animate({left:"-="+move},{duration: 400});

})

$("#left-arrow").click(function(){

    var currentPosition = parseInt(view.css("left"));
    if( currentPosition < 0) view.stop(false, true).animate({left:"+="+move},{duration: 400});
    $("#left-arrow").css('background-color', 'red');
    
})