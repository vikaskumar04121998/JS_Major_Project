function swapit()
{
	var from=document.getElementById("Fromconverter");
	var to=document.getElementById("Toconverter");
	var temp;
	temp=from.value;
	from.value=to.value;
	to.value=temp;

    var inp=document.getElementById("convfrom");
	var out=document.getElementById("convto");
	var temp;
	temp=inp.value;
	inp.value=out.value;
	out.value=temp;
}
function convert(){
    var from=document.getElementById("Fromconverter").value;
	var to=document.getElementById("Toconverter").value;
    let inp=document.getElementById("convfrom").value;
    let out=document.getElementById("convto");
    let Base=0;
    console.log(inp);
    if( from === "Binary"){
        Base= 2;
    }
    else if (from === "Hexadecimal") {
        Base = 16;
    } else if (from ==="Octal") {
        Base = 8;
    }
    let decimal=Number.parseInt(inp,Base);
    if( to === "Binary"){
        out.value= Number(decimal).toString(2).toUpperCase();
    }
    else if (to ==="Octal") {
        out.value= Number(decimal).toString(8).toUpperCase();
    }
    else if (to ==="Decimal") {
        out.value= decimal;
    }
    else if (to === "Hexadecimal") {
        out.value= Number(decimal).toString(16).toUpperCase();
    }
}