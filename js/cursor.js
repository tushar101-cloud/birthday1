const cursor = document.createElement("div");
cursor.innerHTML = "🐾";
cursor.style.position = "fixed";
cursor.style.fontSize = "30px";
cursor.style.pointerEvents = "none";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});