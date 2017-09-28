function A() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 1000);
    });
}
A().then(function () {
    console.log(10);
    return A();
}).then(function () {
    console.log(20);
    return A();
}).then(function () {
    console.log(30);
    return A();
});
