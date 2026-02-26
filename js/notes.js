const notes = ["🎵", "🎶", "♪", "♫"];

document.addEventListener("click", function(e) {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerText = notes[Math.floor(Math.random() * notes.length)];

    note.style.left = e.pageX + "px";
    note.style.top = e.pageY + "px";

    document.body.appendChild(note);

    setTimeout(() => {
        note.remove();
    }, 1500);
});