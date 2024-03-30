let Count=0;

document.getElementById("add").onclick = function()
{
Count = Count+1;
document.getElementById("countview").innerHTML=Count;
document.getElementById("reset").disabled = false;
document.getElementById("sub").disabled = false;
checkOddEven()

}

document.getElementById("reset").onclick = function()
{
Count = 0;
document.getElementById("countview").innerHTML=Count;
document.getElementById("reset").disabled = true;
document.getElementById("sub").disabled = true; 
checkOddEven()
}


document.getElementById("sub").onclick = function()
{
Count = Count-1;
document.getElementById("countview").innerHTML=Count; 
if(Count === 0 ){
    document.getElementById("sub").disabled = true; 
    document.getElementById("reset").disabled = true;
} 
checkOddEven()
}

function checkOddEven(){
    if(Count%2==0){
        document.getElementById("OddEven").innerHTML= "Even"
        }
        else
        document.getElementById("OddEven").innerHTML= "Odd"
}