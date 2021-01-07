//PESQUISAR
function search(){
    var pesquisar = document.getElementById('pesquisar').value;
    document.write("Você pesquisou por: " + pesquisar);
    console.log(pesquisar);
}

//API
var url = "https://rafaelcintralopes.github.io/jshackers/api/users/";

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);

xhttp.onreadystatechange = function(){
    if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
        console.log(xhttp.responseText);
    }
}

xhttp.send();

//USERS
function auth(){
    var users = [{
        user: "admin",
        tokenKey: "b0Jvbml0bw=="
    },
    {
        user: "rafael",
        tokenKey: "cmFmaW5oYV9laF9ib25pdG8="
    }]
}

//POST MESSAGE
var postMessageHandler = function(msg) {
    var content = msg.data;
    var msgObj = eval(content);
  
    if (msgObj.isActive) {
      document.write("PostMessage arrived!");
    }
}
  
window.addEventListener('message', postMessageHandler, false);
