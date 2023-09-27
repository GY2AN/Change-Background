let textOfColor = document.getElementById("selectedColorHexCode");

function grey(){
    document.getElementById("colorPickerContainer").style.backgroundColor = "#e0e0e0";
    textOfColor.textContent = "#e0e0e0";
    textOfColor.style.color = "#e0e0e0";
}

function green(){
    document.getElementById("colorPickerContainer").style.backgroundColor = "#6fcf97";
    textOfColor.textContent = "#6fcf97";
    textOfColor.style.color = "#6fcf97";
}

function blue(){
    document.getElementById("colorPickerContainer").style.backgroundColor = "#56ccf2";
    textOfColor.textContent = "#56ccf2";
    textOfColor.style.color = "#56ccf2";
}

function purple(){
    document.getElementById("colorPickerContainer").style.backgroundColor = "#bb6bd9";
    textOfColor.textContent = "#bb6bd9";
    textOfColor.style.color = "#bb6bd9";
}