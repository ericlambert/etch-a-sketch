makeGrid(16,16,"etch-grid-container");

function makeGrid(width,height,containerId) {
	const container = document.getElementById(containerId);
	const divCount = width * height;

	for (var i = 0; i <= divCount - 1; i++) {
		var newDiv = document.createElement("div");
		newDiv.className = "grid-item";
		newDiv.id = i + 1;
		var newP = document.createElement("p");
		newP.innerHTML = newDiv.id;
		newDiv.appendChild(newP);
		container.appendChild(newDiv);
	}
}