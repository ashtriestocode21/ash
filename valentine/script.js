const celebration = document.getElementById("celebration")

const nay = document.getElementById("nay")

const yay = document.getElementById("yay")



yay.addEventListener("click", () => {
    celebration.style.display = "block";
    if (celebration.style.display === "block") {
        yay.style.display = "none";
        nay.style.display = "none";
    }
});


