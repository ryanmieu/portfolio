// Get all elements with the class "faxli"
const faxliElements = document.querySelectorAll(".faxli");

// Define the range of movement for the floating effect
const rangeX = 10; // Adjust the horizontal range (in pixels) as desired
const rangeY = 10; // Adjust the vertical range (in pixels) as desired

// Function to generate a random floating position
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Apply the floating effect to each "faxli" element
faxliElements.forEach(faxliElement => {
    // Set the initial position of the element
    const initialX = faxliElement.offsetLeft;
    const initialY = faxliElement.offsetTop;

    // Generate a random target position within the range
    const targetX = initialX + getRandomFloat(-rangeX, rangeX);
    const targetY = initialY + getRandomFloat(-rangeY, rangeY);

    // Calculate the distance between initial and target positions
    const distanceX = targetX - initialX;
    const distanceY = targetY - initialY;

    // Apply the target position using CSS animation and transform
    faxliElement.style.animation = `floating 3s ease-in-out infinite`;
    faxliElement.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
});

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
    "Hey",
    "Christine :)",
    "Congratulations",
    "I'm",
    "So",
    "Proud",
    "of",
    "You",
    "<3",
    "Don't",
    "Be",
    "Stressed",
    "Smile :)"
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
    // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

// Start the animation.
animate();