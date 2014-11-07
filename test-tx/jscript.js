function clean() {
	var btns = document.links;
	for(var i = 0; i < btns.length; i++) {
		switch(btns[i].className) {
			case "short":
				btns[i].style.backgroundImage = 'url("images/btnShort.gif")';
				break;
			case "middle":
				btns[i].style.backgroundImage = 'url("images/btnMiddle.gif")';
				break;
			case "long":
				btns[i].style.backgroundImage = 'url("images/btnLong.gif")';
				break;
		}
		if(btns[i].src != null) {
			if(btns[i].src.indexOf("Home") != -1) {
					btns[i].src = "images/btnHome.gif";
			}
			else if(btns[i].src.indexOf("Back") != -1) {
					btns[i].src = "images/btnBack.gif";
			}
		}
	}
}
