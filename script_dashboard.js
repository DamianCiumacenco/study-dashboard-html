// =============================================
// Part 1 - Welcome Message
// =============================================
const yourName = "Your Name"; // 👈 Change this to your name
const welcomeElement = document.getElementById('welcome-message');

if (welcomeElement) {
    welcomeElement.textContent = `Welcome, ${yourName}!`;
}

// =============================================
// Part 2 - Study Session Counter
// =============================================
let count = 0;

const sessionCountElement = document.getElementById('sessionCount');
const addButton = document.getElementById('addSession');
const resetButton = document.getElementById('resetSession');

// Updates the session count displayed on the page
function updateSessionDisplay() {
    if (sessionCountElement) {
        sessionCountElement.textContent = count;
    }
}

// Increase count when Add Session is clicked
if (addButton) {
    addButton.addEventListener('click', function () {
        count++;
        updateSessionDisplay();

        // Log progress message based on session count
        if (count >= 3) {
            console.log("Good progress");
        } else {
            console.log("You should study more");
        }
    });
}

// Reset count to 0 when Reset is clicked
if (resetButton) {
    resetButton.addEventListener('click', function () {
        count = 0;
        updateSessionDisplay();
    });
}

// =============================================
// Part 3 - Weekly Goal Checker
// =============================================
const goals = ["Read notes", "Finish lab", "Practice JavaScript", "Review lectures" // 👈 Update these goals];

// Print all goals to the console using a loop
console.log('Weekly Goals:');
goals.forEach((goal, index) => {
    console.log(`${index + 1}. ${goal}`);
});

const showGoalsBtn = document.getElementById('showGoalsBtn');
const goalsDisplay = document.getElementById('goalsDisplay');

// When Show Goals is clicked, display the goals in a <ul> on the page
if (showGoalsBtn) {
    showGoalsBtn.addEventListener('click', function () {
        const goalsList = document.createElement('ul');

        goals.forEach(goal => {
            const listItem = document.createElement('li');
            listItem.textContent = goal;
            goalsList.appendChild(listItem);
        });

        goalsDisplay.innerHTML = '';
        goalsDisplay.appendChild(goalsList);
    });
}

// =============================================
// Part 4 - Simple Decision (hours studied)
// =============================================
const hoursStudied = 3;

if (hoursStudied >= 3) {
    console.log("Good progress");
} else {
    console.log("You should study more");
}