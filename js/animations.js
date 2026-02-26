document.addEventListener("DOMContentLoaded", function () {

    const emojis = ["🐱","🐾","😺","🐈","💕","😽"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.animationDuration = (6 + Math.random() * 6) + "s";
        emoji.style.fontSize = (20 + Math.random() * 25) + "px";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 12000);
    }

    setInterval(createEmoji, 600);
});