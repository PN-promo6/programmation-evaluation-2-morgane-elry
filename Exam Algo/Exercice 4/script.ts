let j:string="tata";

function oddEven(array:string[]) {
  let i:number = 0;
  let currentElement:string;
  while (i < (array.length)) {
	let currentElement = array[i];
	if (currentElement == j) {
  	console.log("True");
	} else {
  	console.log("False");
	}
	i++;
  }
}

let test:string[] = ["tata","titi","toto","tutu"];
oddEven(test);
