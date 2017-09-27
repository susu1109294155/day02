function c() {
    var a = document.getElementById("jia").value;
    var b = document.getElementById("beijia").value;
    var suanfa = document.getElementById("suanfa").value;
    var value = 0;
    if (suanfa == "+") {
        value = parseFloat(a) + parseFloat(b);
    }
    else if (suanfa == "-") {
        value = parseFloat(a) - parseFloat(b);
    }
    else if (suanfa == "*") {
        value = parseFloat(a) * parseFloat(b);
    }
    else {
        value = parseFloat(a) / parseFloat(b);
    }
    document.getElementById("dengyu").value = "" + value;
}
