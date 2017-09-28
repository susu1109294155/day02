
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
var sleep = function (time) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve();
		}, time);
	})
};

var start = async function () {

	console.log('start');
	await sleep(5000);
	console.log('end');
};

start();