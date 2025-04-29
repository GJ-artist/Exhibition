let activeDiv = null;

function toggleVisibility(id) {
    if (activeDiv) {
        activeDiv.style.display = "none";
    }
    
    const newDiv = document.getElementById(id);
    if (newDiv !== activeDiv) {
        newDiv.style.display = "block";
        activeDiv = newDiv;
    } else {
        activeDiv = null;
    }
}