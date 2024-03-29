document.getElementById("button").onclick = () => {
    setBackgroundColorById("paragraph", "blue");
}

document.getElementById("alert").onclick = () =>{
    alert(document.getElementById("popup-input").value);
}

document.getElementById("hover-this").onmouseover = ()=>{
    setBackgroundColorById("body", "red");
}

document.getElementById("hover-this").onmouseout = ()=>{
    setBackgroundColorById("body", "#253142");
}

document.getElementById("last-p").onclick = () =>{
    document.getElementById("last-p").style= `background-color: ${document.getElementById("color-input").value}`;
}

const getValueFromId = (id) =>{
    return document.getElementById(id).value;
}

const setBackgroundColorById = (id, color)=>{
    document.getElementById(id).style = "background-color: " + color;
}

const mouseOverFunction = (el) => {
    el.style = "background-color: black";
}

const mouseOutFuntion = (el)=>{
    el.style= "background-color: #253142"
}