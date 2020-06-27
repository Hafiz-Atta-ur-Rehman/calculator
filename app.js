function GetNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearscreen(){
    var result = document.getElementById("result");
    result.value = ""
}
function GetResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}