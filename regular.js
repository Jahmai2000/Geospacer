function changeText(){
	
	var parent =document.getElementById('main');
	var child=parent.firstElementChild;
	child.style.color = "blue";
	
}

 function newParagraph(){
	
	//document.getElementById("Image").src="Right.jpg";
	//var firstParaText= paragraph[0].innerHTML;
	//var secondParaText= paragraph[1].innerHTML;
	//var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;
	
	/*var elemntH = document.createElement("h2")
	var main = document.getElementById("main");
	main.appendChild(elementH);
	var textH = document.createTextNode("The Sad Truth");
	elementH.appendChild(textH);*/
	
	var element= document.createElement("p");
	var main = document.getElementById("main");
	main.appendChild(element);
	var text = document.createTextNode(" Rooster is just a way of life");
	element.appendChild(text);
	
	var pAttribute = document.createAttribute("id");
	pAttribute.value = "test";
	element.setAttributeNode(pAttribute);
	
}

function removeHeader(){
	
	var elementP= document.getElementsByTagName("p")[4];
	var parent = elementP.parentNode;
	parent.removeChild(elementP);
}