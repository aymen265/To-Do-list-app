let liste = document.getElementById("liste");
let inputbox = document.getElementById("text");
let note = JSON.parse(localStorage.getItem("note")) || [];
function addnote() {
    if (inputbox.value === " " ) {
        alert("Write something!");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    liste.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputbox.value = "";
    savedata()
}
liste.addEventListener("click",function (e) {
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
 }
)
function savedata() {
    localStorage.setItem("notes",liste.innerHTML);

}
function showdata() {
    liste.innerHTML = localStorage.getItem("notes");
}
showdata()