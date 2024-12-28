let words = document.querySelectorAll(".word");

// Split each word into letters and wrap them in span elements
words.forEach((word) => {
    let letters = word.textContent.split("");

    word.textContent = ""; // Clear the original text
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0; // Fixed typo: 'curentWordIndex' -> 'currentWordIndex'
let maxWordIndex = words.length - 1;

words[currentWordIndex].style.opacity = "1"; // Show the first word

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate letters of the current word out
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // Make the next word visible
    nextWord.style.opacity = "1";

    // Animate letters of the next word in
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    // Update the current word index
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

    // Hide the current word once the animation is done
    setTimeout(() => {
        currentWord.style.opacity = "0";
    }, nextWord.children.length * 80 + 340);
};

// Trigger the text change function initially and at intervals
changeText();
setInterval(changeText, 3000); // Adjusted interval to 3000ms for a smoother transition
// circle skil------------------------------------------>
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    // Retrieve attributes
    const dots = parseInt(elem.getAttribute("data-dots"), 10) || 0; // Default to 0 if invalid
    const marked = parseInt(elem.getAttribute("data-percent"), 10) || 0;

    // Calculate the number of marked dots
    const percent = Math.floor((dots * marked) / 100);
    let points = "";
    const rotate = 360 / dots; // Rotation for each point

    // Generate the points
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${ rotate}deg"></div>`;
    }

    // Update the element's inner HTML
    elem.innerHTML = points;


    const pointsMarked = elem.querySelectorAll('.points');
    for(let i =0; i<percent ;i++){
        pointsMarked[i].classList.add('marked')
    }
});


