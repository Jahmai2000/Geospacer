function changeText(){
	
	var parent =document.getElementById('main');
	var child=parent.lastElementChild;
	child.style.color = "blue";
	
}

/*=function newParagraph(){
	
	//document.getElementById("Image").src="Right.jpg";
	//var firstParaText= paragraph[0].innerHTML;
	//var secondParaText= paragraph[1].innerHTML;
	//var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;
	
	//var elemntH = document.createElement("h2")
	var main = document.getElementById("main");
	main.appendChild(elementH);
	var textH = document.createTextNode(" Rick Astley - (Never Gonna Give you up) ");
	elementH.appendChild(textH);
	
	var element= document.createElement("p");
	
	main.appendChild(element);
	
	var text = document.createTextNode("We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of .You wouldn't get this from any other guy. I just wanna tell you how I'm feeling. Gotta make you understand. Never gonna give you up .Never gonna let you down .Never gonna run around and desert you .Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you. We've known each other for so long. Your heart's been aching but. You're too shy to say");

	element.appendChild(text);
	
	var pAttribute = document.createAttribute("id");
	pAttribute.value = "test";
	element.setAttributeNode(pAttribute);
	
}

//function removeHeader(){
	
	var elementH= document.getElementsByTagName("h2")[1];
	var parent = elementH.parentNode;
	parent.removeChild(elementH);
	
	var elementP= document.getElementsByTagName("p")[3];
	parent.removeChild(elementP);
}*/