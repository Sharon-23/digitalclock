function showTime() {
    var date = new Date();
   var hour = date.getHours();
   var min = date.getMinutes();
    var sec = date.getSeconds();
    
     document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
     var i =0;
     var color = [ '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
function changecolor() {
    document.querySelector("body").style.backgroundColor = color[i];
    i++;
     if (i >= color.length){
          i = 0;
}
  }

setInterval(changecolor, 1000);
    

  }
setInterval(showTime,1000);




