const resetBtnId = "reset-btn";
const gridContainerId = "etch-grid-container";

populateGrid(16,16,gridContainerId);

initResetButton(resetBtnId,gridContainerId);


// functions
function populateGrid(width,height,containerId) {
	const container = document.getElementById(containerId);
	const divCount = width * height;

	// Make new grid-items and add them to the grid
	for (var i = 0; i <= divCount - 1; i++) {
		container.appendChild(makeGridItem(i + 1));
	}
}

function makeGridItem(id) {
	let newDiv = document.createElement("div");

	newDiv.className = "grid-item";
	newDiv.id = id;

	newDiv.addEventListener("mouseover", (e) => appendToClassName(e.target,"hover"));
	//newDiv.addEventListener("mouseout", (e) => removeFromClassName(e.target,"hover"));

	return newDiv;
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

function resetExistingGridItems(containerId) {
	const gridItemsToClear = document.getElementsByClassName("grid-item hover");

	do {
		removeFromClassName(gridItemsToClear[0],"hover");
	} while (gridItemsToClear.length > 0);
}

function initResetButton(elementId, containerId) {
	let resetBtn = document.getElementById(elementId);
	let gridContainer = document.getElementById(containerId);
	resetBtn.addEventListener("click", (e) => {
		resetExistingGridItems(gridContainer);
	})
}
