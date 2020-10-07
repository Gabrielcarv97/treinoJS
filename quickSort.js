function quickSort(segArray) {
	if (segArray.length <= 1) { 
		return segArray;
	} else {

		let esqrd = [];
		let dir = [];
		let array1 = [];
		let pivot = segArray.pop();

		for (let i = 0; i < segArray.length; i++) {
			if (segArray[i] <= pivot) {
				esqrd.push(segArray[i]);
			} else {
				dir.push(segArray[i]);
			}
		}
		return array1.concat(quickSort(esqrd), pivot, quickSort(dir));
	}
}
let valores = [3,84,09,39,01,12,14,5];
console.log("Array inserido: " + valores);
let resultArray = quickSort(valores);
console.log("Array ordenado: " + resultArray);