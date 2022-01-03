var isClicked = false;
function myFunction(){
	if(!isClicked){
		document.getElementById("head").innerHTML="&copy;Powered by wootou";
		document.getElementById("fire").src="images/on.png";
		isClicked = true;
	} else {
		document.getElementById("head").innerHTML="PIXEL&nbsp;&nbsp;HERO英雄表";
		document.getElementById("fire").src="images/off.png";
		isClicked = false;
	}
}
