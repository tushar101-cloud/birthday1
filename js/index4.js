const catContainer = document.querySelector(".cat-container");
const confettiContainer = document.querySelector(".confetti-container");
const giantCat = document.getElementById("giantCat");
const meow = document.getElementById("meowSound");

let spawnRate = 600;
let chaosLevel = 1;

// Unlock audio
document.addEventListener("click", () => {
    meow.play().then(() => {
        meow.pause();
        meow.currentTime = 0;
    }).catch(()=>{});
}, { once: true });

function spawnCat() {
    const cat = document.createElement("img");
    cat.src = "assets/animations/gifs/cat2.gif";
    cat.classList.add("cat");

    cat.style.left = Math.random() * window.innerWidth + "px";
    cat.style.animationDuration = (3 + Math.random() * 4) + "s";

    cat.addEventListener("click", (e) => {
        e.stopPropagation();
        chaosLevel++;
        for (let i = 0; i < 3; i++) spawnCat();
        meow.currentTime = 0;
        meow.play().catch(()=>{});
    });

    catContainer.appendChild(cat);

    setTimeout(() => cat.remove(), 10000);
}

function chaosSpawner() {
    spawnCat();
    setTimeout(chaosSpawner, spawnRate);
}

chaosSpawner();

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor =
        `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = (2 + Math.random() * 3) + "s";

    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

setInterval(createConfetti, 100);

// Click anywhere = more chaos
document.addEventListener("click", () => {
    spawnRate = Math.max(100, spawnRate - 50);
    document.body.style.transform =
        `rotate(${Math.random()*2-1}deg)`;
});

// Giant cat takeover
setTimeout(() => {
    giantCat.style.display = "flex";
}, 10000);