let intervalId;
let isGenerating = false;
var won;
var spinCount = 0;
spinCount = localStorage.getItem("spins");
if (spinCount == null) {
    document.querySelector("#count").innerHTML = "Total Spins: 0";
}
else {
    document.querySelector("#count").innerHTML = "Total Spins: " + spinCount;
}


document.getElementById('toggleButton').onclick = function () {

    if (!isGenerating) {

        spinCount++;
        localStorage.setItem("spins", spinCount);
        document.querySelector("#count").innerHTML = "Total Spins: " + spinCount;

        isGenerating = true;
        this.innerText = 'Stop';
        document.getElementById("won-img").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "none";
        document.querySelector(".container").style.height = "100vh";

        intervalId = setInterval(generateRandomNumbers, 30);

    }
    else {

        isGenerating = false;
        this.innerText = 'SPIN';

        clearInterval(intervalId);

        if (won == true) {
            document.querySelector("#won-img").setAttribute("src", "./won.png");
            document.getElementById("won-img").style.display = "block";
            document.getElementById("win").style.display = "block";
            document.querySelector(".container").style.height = "115vh";
        }

        else {
            document.querySelector("#won-img").setAttribute("src", "./lose.png");
            document.getElementById("won-img").style.display = "block";
            document.getElementById("lose").style.display = "block";
            document.querySelector(".container").style.height = "115vh";
        }

    }
};

function generateRandomNumbers() {
    let randomNumber1 = Math.floor(Math.random() * 7) + 1;
    let randomNumber2 = Math.floor(Math.random() * 7) + 1;
    let randomNumber3 = Math.floor(Math.random() * 7) + 1;

    document.querySelector("#NUM1").innerHTML = randomNumber1;
    document.querySelector("#NUM2").innerHTML = randomNumber2;
    document.querySelector("#NUM3").innerHTML = randomNumber3;
    if (randomNumber1 == randomNumber2 && randomNumber2 == randomNumber3) {
        won = true;
    }
    else {
        won = false;
    }
}


