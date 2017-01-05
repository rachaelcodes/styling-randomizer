function getColor(){
	return '#' + Math.random().toString(16).slice(2, 8);

}

function setBackground() {
	var bgColor = getColor();
	document.body.style.background = bgColor;
}

function setFocus() {
	var focusColor = getColor();
	document.getElementById("example").style.background = focusColor;
}

function setHeading() {
	var headingColor = getColor();
	document.getElementById("heading").style.color = headingColor;
}

document.body.onkeyup = function(x) {
if (x.keyCode==66) {setBackground();}
if (x.keyCode==70) {setFocus();}
if (x.keyCode==72) {setHeading();}
}