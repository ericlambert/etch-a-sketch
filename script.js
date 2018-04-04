makeGrid(16,16,"etch-grid-container");

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
	item.addEventListener("mouseover", (e) => appendToClassName(e.target,"hover"));
	//item.addEventListener("mouseout", (e) => removeFromClassName(e.target,"hover"));
})

function makeGrid(width,height,containerId) {
	const container = document.getElementById(containerId);
	const divCount = width * height;

	for (var i = 0; i <= divCount - 1; i++) {
		var newDiv = document.createElement("div");
		newDiv.className = "grid-item";
		newDiv.id = i + 1;
		container.appendChild(newDiv);
	}
}

function appendToClassName(element, text) {
	const origClassName = element.className;
	const appendedText = " " + text;
	if (origClassName.includes(text)) { return; }
	element.className = element.className + appendedText;
}

function removeFromClassName(element, text) {
	const origClassName = element.className;
	const removedText = " " + text;
	if (origClassName.includes(text)) { 
		element.className = element.className.replace(removedText,"");
	}

}

