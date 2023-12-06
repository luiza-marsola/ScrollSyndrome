// https://css-tricks.com/building-a-simple-quiz/ 
//https://github.com/search?q=quiz+app+javascript&type=repositories
//https://stackoverflow.com/questions/6510477/how-can-i-list-only-the-folders-in-zip-archive-in-python/6510636#6510636
//https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

//nav
document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split("/").pop();

    var navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

//quiz scores
function calculateScore() {
    const form = document.getElementById("quizForm");
    const inputs = form.querySelectorAll("input[type=radio]:checked");
    
    if (inputs.length === 10) {
        let score = 0;

        inputs.forEach(input => {
            score += parseInt(input.value);
        });

        // result in a popup
        displayPopupResult(score);
    } else {
        alert("Please answer all questions before submitting.");
    }
}

//quiz result popup
function displayPopupResult(score) {
    let resultMessage = "";

    if (score >= 10 && score <= 15) {
        resultMessage = "Congratulations! Your digital habits seem to have a minimal impact on your attention span. Keep up the mindful approach.";
    } else if (score >= 16 && score <= 25) {
        resultMessage = "You're showing some signs of digital distraction affecting your focus. Consider implementing strategies to balance your screen time.";
    } else if (score >= 26 && score <= 35) {
        resultMessage = "Digital distractions may be significantly impacting your attention span. It's time to evaluate and make conscious efforts to regain focus.";
    } else if (score >= 36 && score <= 40) {
        resultMessage = "Your digital habits might be seriously affecting your attention span. It's essential to reevaluate and establish boundaries for a healthier relationship with technology.";
    }

    //popup
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = resultMessage;

    document.body.appendChild(popup);

    //close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", function () {
        document.body.removeChild(popup);
    });

    popup.appendChild(closeButton);
}

//GIF popups
const gifNames = [
    "distraction1.gif",
    "distraction2.gif",
    "distraction3.gif",
    "distraction4.gif",
    "distraction5.gif",
    "distraction6.gif",
    "distraction7.gif",
    "distraction8.gif",
    "distraction9.gif",
    "distraction10.gif",
    "distraction11.gif",
    "distraction12.gif",
    "distraction13.gif",
    "distraction14.gif",
    "distraction15.gif"
];


//position
function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

//create a GIF pop-up
function createGifPopup(gifName) {
    const gif = document.createElement("div");
    gif.classList.add("gif-popup");

    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", () => {
        gif.remove();
    });

    const img = document.createElement("img");
    img.src = gifName;
    img.style.width = "100%";
    img.style.height = "100%";

    gif.appendChild(closeButton);
    gif.appendChild(img);

    const position = getRandomPosition();
    gif.style.left = `${position.x}px`;
    gif.style.top = `${position.y}px`;

    document.getElementById("gifContainer").appendChild(gif);
}

//show a random GIF
function showRandomGif() {
    const randomGifName = gifNames[Math.floor(Math.random() * gifNames.length)];
    createGifPopup(randomGifName);
}

//10 second interview
setInterval(showRandomGif, 10000);



