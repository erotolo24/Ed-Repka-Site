document.getElementById("edLifeContent").style.display = "none";
document.getElementById("edWorksContent").style.display = "none";
document.getElementById("edExtraContent").style.display = "none";

function hidePanels(){
    document.getElementById("edLifeContent").style.display = "none";
    document.getElementById("edLifePanel").className = "accordionPanelTab";
    document.getElementById("edWorksContent").style.display = "none";
    document.getElementById("edWorksPanel").className = "accordionPanelTab";
    document.getElementById("edExtraContent").style.display = "none";
    document.getElementById("edExtraPanel").className = "accordionPanelTab";
}

function showEdLifeContent(){
    hidePanels();
    document.getElementById("edLifeContent").style.display = "block";
    document.getElementById("edLifePanel").className = "accordionPanelTab highlight";
}

function showEdWorksContent(){
    hidePanels();
    document.getElementById("edWorksContent").style.display = "block";
    document.getElementById("edWorksPanel").className = "accordionPanelTab highlight";
}

function showEdExtraContent(){
    hidePanels();
    document.getElementById("edExtraContent").style.display = "block";
    document.getElementById("edExtraPanel").className = "accordionPanelTab highlight";
}