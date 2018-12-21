function select_city(){
    var city = document.getElementById("city_list").value;
    var url = "";
    if(city == 1){
        url = "mahula.txt";
    }
    if(city == 2){
        url = "../assuit.html";
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("area_list").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}