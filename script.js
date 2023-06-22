//your JS code here. If required.
// let colorSelect = document.getElementById("colorSelect");
// let removeColor = document.getElementByTagName('input');
// removeColor.addEventListener("click" , function () {
// 	let selectedColor= colorSelect.value;
	
// 	let selectedOption = colorSelect.querySelector('option[value"'= + selectedColor +'"]');
//   if (selectedOption) {
//     selectedOption.remove();
//   }
// });

function remove() {
	const drop = document.querySelector('#colorSelect');
	drop.remove(drop.selectedIndex);
	
}