function getColor(){
	return '#' + Math.random().toString(16).slice(2, 8);

}

function setBackground() {
	var bgColor = getColor();
	document.body.style.background = bgColor;
	document.getElementById("bgcolor").textContent = bgColor;
}

function setFocus() {
	var focusColor = getColor();
	document.getElementById("example").style.background = focusColor;
	document.getElementById("fcolor").textContent = focusColor;
}

function setHeading() {
	var headingColor = getColor();
	document.getElementById("heading").style.color = headingColor;
	document.getElementById("hcolor").textContent = headingColor;
}

function setSubheading() {
	var subheadingColor = getColor();
	document.getElementById("subheading").style.color = subheadingColor;
	document.getElementById("scolor").textContent = subheadingColor;
}

function setText() {
	var textColor = getColor();
	document.getElementById("text").style.color = textColor;
	document.getElementById("tcolor").textContent = textColor;
}

document.body.onkeyup = function(x) {
if (x.keyCode==66) {setBackground();}
if (x.keyCode==70) {setFocus();}
if (x.keyCode==72) {setHeading();}
if (x.keyCode==83) {setSubheading();}
if (x.keyCode==84) {setText();}
}