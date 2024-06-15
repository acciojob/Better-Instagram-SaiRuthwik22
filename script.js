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
	event.preventDefault()
	let someId = dragEle.id
	let someC = dragEle.textContent
	let containerEle = event.target
	let x = document.getElementById(event.target.id)
	let y = document.getElementById(dragEle.id)
	y.id = containerEle.id
	y.textContent = containerEle.textContent
	x.id= someId
	x.textContent = someC
	dragEle = null
	containerEle=null
	someC=null
	someId=null
}

