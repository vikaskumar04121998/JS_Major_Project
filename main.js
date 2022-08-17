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
        let rem,bin=0,i=1;
        while(decimal != 0){
            rem=decimal%2;
            decimal=parseInt(decimal/2);
            bin=bin+rem*i;
            i=i*10;
        }
        out.value= bin;
    }
    else if (to ==="Octal") {
        let rem,octa=0,i=1;
        while(decimal != 0){
            rem=decimal%8;
            decimal=parseInt(decimal/8);
            octa=octa+rem*i;
            i=i*10;
        }
        out.value= octa;
    }
    else if (to ==="Decimal") {
        out.value= decimal;
    }
    else if (to === "Hexadecimal") {
        let rem,hexa="";
        while(decimal != 0){
            rem=decimal%16;
            decimal=parseInt(decimal/16);
            hexa=rem.toString(16).toUpperCase()+hexa;
        }
        out.value= hexa;
    }
}