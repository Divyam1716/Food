function session(){
    alert("Welcome to edureka");
}
//

var myVar = "Global";

function check() {
    var myVar = " Local";
    document.write(myVar);
}
document.write(myVar);
check();