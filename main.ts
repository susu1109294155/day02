
function c() {

  const a: string = (document.getElementById("jia") as HTMLInputElement).value;
  const b: string = (document.getElementById("beijia") as HTMLInputElement).value;
  const suanfa: string = (document.getElementById("suanfa") as HTMLInputElement).value;
  let value: number = 0;
  if (suanfa == "+") {

    value = parseFloat(a) + parseFloat(b);
  }
  else if (suanfa == "-") { value = parseFloat(a) - parseFloat(b); }
  else if (suanfa == "*") { value = parseFloat(a) * parseFloat(b); }
  else { value = parseFloat(a) / parseFloat(b); }
  (document.getElementById("dengyu") as HTMLInputElement).value = "" + value;
}