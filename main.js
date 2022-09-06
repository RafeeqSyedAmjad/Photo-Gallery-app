var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var Allphotos = document.getElementById("Allphotos");
var Architecture = document.getElementById("Architecture");


function openAllphotos(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    Allphotos.style.color = "#FFFFFF";
    Architecture.style.color = "#6F7378";
    content1.style.transitionDelay = "0.3s";
    content2.style.transitionDelay = "0s";



}

function openArchitecture() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    Architecture.style.color = "#FFFFFF";
    Allphotos.style.color = "#6f7378";
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0.3s";

}


