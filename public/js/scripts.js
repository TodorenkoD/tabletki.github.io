"use strict";function dropdown(){document.getElementById("dropdown").classList.toggle("show")}window.onclick=function(t){if(!t.target.matches(".dropbtn")){var o,n=document.getElementsByClassName("dropdown-content");for(o=0;o<n.length;o++){var s=n[o];s.classList.contains("show")&&s.classList.remove("show")}}};