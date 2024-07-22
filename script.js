let dragEle = null;

function started(event) {
	dragEle = event.target;
}

function allowDrag(event){
	event.preventDefault();
}

function ending(event) {
	event.preventDefault();
	let containerEle = event.target;
	
	// Get the background images of the source and target divs
	let sourceImage = window.getComputedStyle(dragEle).backgroundImage;
	let targetImage = window.getComputedStyle(containerEle).backgroundImage;

	dragEle.style.backgroundImage = targetImage;
	containerEle.style.backgroundImage = sourceImage;
	
	dragEle = null;
}