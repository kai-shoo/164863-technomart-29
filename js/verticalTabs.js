tabcontent = document.getElementsByClassName("services-content-item");
    for (i = 1; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
var i, tabcontent, tablinks;
tablinks = document.getElementsByClassName("toggle__tab");
tabcontent = document.getElementsByClassName("services-content-item");

function openTab(evt, tabName) {
    // Declare all variables

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" enabled", "");
    }
  
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " enabled";
  } 