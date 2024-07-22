//your code here
let dragEle = null;
let containerEle=null;
function started(event) {
	dragEle = event.target
}
function allowDrag(event){
	event.preventDefault()
}
function ending(event) {
    event.preventDefault();
    let containerEle = event.target;
    let sourceImage = window.getComputedStyle(dragEle).backgroundImage;
    let targetImage = window.getComputedStyle(containerEle).backgroundImage;
    dragEle.style.backgroundImage = targetImage;
    containerEle.style.backgroundImage = sourceImage;
    dragEle = null;
}

