
function c() {

  var a = (document.getElementById("jia") as HTMLInputElement).value;
  var b = (document.getElementById("beijia") as HTMLInputElement).value;
  var suanfa = (document.getElementById("suanfa") as HTMLInputElement).value;
  var value = 0;
  if (suanfa == "+") {

    value = parseFloat(a) + parseFloat(b);
  }
  else if (suanfa == "-") { value = parseFloat(a) - parseFloat(b); }
  else if (suanfa == "*") { value = parseFloat(a) * parseFloat(b); }
  else { value = parseFloat(a) / parseFloat(b); }
  (document.getElementById("dengyu") as HTMLInputElement).value = "" + value;
}