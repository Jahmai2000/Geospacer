function newParagraph(){
	
	//document.getElementById("Image").src="Right.jpg";
	//var firstParaText= paragraph[0].innerHTML;
	//var secondParaText= paragraph[1].innerHTML;
	//var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;
	
	var element= document.createElement("p");
	
	var main = document.getElementById("main");
	
	main.appendChild(element);
	
	var text = document.createTextNode("The Roosters will live on in agony or be lucky enough to taste good);
	
	element.appendChild(text);
	
}

function oldPicture(){

    document.getElementById("image").src="Wrong.png";
}