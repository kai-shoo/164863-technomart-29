function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("services-content-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("toggle__tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" enabled", "");
    }
  
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " enabled";
  } 