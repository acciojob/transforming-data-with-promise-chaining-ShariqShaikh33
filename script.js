//your JS code here. If required.
let btn = document.getElementById("btn");

function printoutput(input){
	let output = document.getElementById("output");
	output.innerHTML = "Result: "+input;
	return input;
}

function printfinaloutput(input){
	let output = document.getElementById("output");
	output.innerHTML = "Final Result: "+input;
	return input;
}


btn.addEventListener('click', function(){
	let input = document.getElementById("ip").value;
	new Promise((resolve,reject) =>{
		setTimeout(() => resolve(printoutput(input)),2000);
	}).then(multiply => {
		new Promise((resolve,reject) => {
			let input = multiply * 2;
			setTimeout(() => resolve(printoutput(input)), 1000)
		}).then(substract => {
		new Promise((resolve,reject) => {
			let input = substract - 3;
			setTimeout(() => resolve(printoutput(input)), 1000);
		}).then(divide => {
		new Promise((resolve,reject) => {
			let input = divide / 2;
			setTimeout(() => resolve(printoutput(input)), 1000);
		}).then(add => {
		new Promise((resolve,reject) => {
			let input = add + 10;
			setTimeout(() => resolve(printoutput(input)), 1000);
		}).then(finaloutput => {
		new Promise((resolve,reject) => {
			let input = finaloutput;
			setTimeout(() => resolve(printfinaloutput(input)), 1000);
		})	
	})
	})
	})
	})
		
	})
});
