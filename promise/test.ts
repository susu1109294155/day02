
function A() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}
A().then(() => {
	console.log(10);
	return A();
}).then(() => {
	console.log(20);
	return A();
}).then(() => {
	console.log(30);
	return A();

})