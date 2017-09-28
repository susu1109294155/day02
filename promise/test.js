var p1 = new Promise(function (resolve, reject) {
	console.log('p1 start');
	setTimeout(function () {
		resolve('p1 resolved');
	}, 2000);
});
p1.then(function (v) {
	console.log('1: ', v);
	return v + ' 2';
}).then(function (v) {
	console.log('2: ', v);
	return v + '3';
}).then(function (v) {
	console.log('3: ', v);

});