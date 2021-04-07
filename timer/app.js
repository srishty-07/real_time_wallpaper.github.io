

function randombg(){
    var random= Math.floor(Math.random() * 6) + 0;
    var bigSize = ["url('https://images.unsplash.com/photo-1504280539878-538b933c05b7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1551655510-0d9379924e92?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbG9yZnVsJTIwbmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1580118797216-d66b913c432b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG9yZnVsJTIwbmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1541706910413-8f5b91425509?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbG9yZnVsJTIwbmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1559533077-482dafc66e20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzh8fGNvbG9yZnVsJTIwbmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1611335022699-e4a692aeefdb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1516663235285-845fac339ca7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGRhcmslMjBuYXR1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1517582082532-16a092d47074?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGRhcmslMjBuYXR1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1492112007959-c35ae067c37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGRhcmslMjBuYXR1cmV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGRhcmslMjBuYXR1cmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1542127306-0c218c711733?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA1fHxkYXJrJTIwbmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1513348473391-9d3c356ef76f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUyfHxkYXJrJTIwbmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1507980062492-714282f31ee0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')",
    "url('https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",]; 
    document.getElementById("bg").style.backgroundImage=bigSize[random];
}
// window.onload=changeImg;
function currentDate(){

    var todaydate=document.getElementById('todaydate');
    var days=new Array('sunday','monday','tuesday','wednesday','thursday','friday','saturday');
    var month=new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
   
    var now = new Date();
    todaydate.innerHTML= days[now.getDay()] + ", " + now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear() + " ";
}
currentDate();

var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

