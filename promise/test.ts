
function A() {
	var promise = new Promise(function (resolve, reject) {
		console.log("start 1");
	});
	return promise;
}
function B() {
	console.log("start 2");

};
function C() {
	console.log("start 3");

}