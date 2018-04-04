const resetBtnId = "reset-btn";
const gridContainerId = "etch-grid-container";
const gridSizeBtnId = "gridSize-btn";
const defaultGridSize = 16;

populateGrid(defaultGridSize,defaultGridSize,gridContainerId);
initResetButton(resetBtnId,gridContainerId);
initGridSizeButton(gridSizeBtnId,gridContainerId);

// functions
function populateGrid(width,height,containerId) {
	const container = document.getElementById(containerId);
	const divCount = width * height;

	// Make sure we're starting with an empty grid-container
	clearGridContainer(containerId);

	// set the grid's column count
	document.getElementById(containerId).style.gridTemplateColumns = "repeat(" + width + ", auto)";

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

function clearGridContainer(containerId) {
	let myElement = document.getElementById(containerId);
	while (myElement.firstChild) {
		myElement.removeChild(myElement.firstChild);
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

function resetExistingGridItems(containerId) {
	const gridItemsToClear = document.getElementsByClassName("grid-item hover");

	do {
		removeFromClassName(gridItemsToClear[0],"hover");
	} while (gridItemsToClear.length > 0);
}

function changeGridSize(containerId) {
	let newGridSize = prompt("What size grid would you like?", defaultGridSize);
	if (newGridSize > 0) {
		populateGrid(newGridSize, newGridSize, containerId);
	}
}

function initResetButton(elementId, containerId) {
	let resetBtn = document.getElementById(elementId);
	let gridContainer = document.getElementById(containerId);
	resetBtn.addEventListener("click", (e) => {
		resetExistingGridItems(gridContainer);
	})
}

function initGridSizeButton(elementId, containerId) {
	let gridSizeBtn = document.getElementById(elementId);
	gridSizeBtn.addEventListener("click", (e) => {
		changeGridSize(containerId);
	})
}
