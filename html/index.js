const { Domain } = require("domain");

header("Access-Control-Allow-Origin: *");

const data = document.getElementById("data");
var ok = (x)=>{
    var para = document.createElement("p");
    para.innerHTML = x.title;
    data.appendChild(para);
}
fetch("http://192.168.0.3:3000/data", crossD)
.then(response => response.json())
.then((json) =>{
    ok(json);
});

