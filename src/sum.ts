
function jia() {
	const a: number = parseInt(document.getElementById("aid").innerHTML);
	const b: number = parseInt(document.getElementById("bid").innerHTML);
	const c: string = a + b + "";
	document.getElementById("sumid").innerHTML = c;
}
