// Create a main container for the clock
const mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column"; // Stack elements vertically
mainContainer.style.justifyContent = "flex-start"; // Align content closer to the top
mainContainer.style.alignItems = "center"; // Center content horizontally
mainContainer.style.height = "100vh";
mainContainer.style.backgroundColor = "antiquewhite";
mainContainer.style.margin = "0";
mainContainer.style.padding = "20px 0"; // Add small padding at the top
mainContainer.style.boxSizing = "border-box";
document.body.style.margin = "0";
document.body.appendChild(mainContainer);

// Add a title text for the clock
const title = document.createElement("div");
title.textContent = "Digital Clock";
title.style.color = "black";
title.style.textAlign = "center";
title.style.fontSize = "50px";
title.style.marginTop = "45px";
title.style.marginBottom = "10px"; // Adjust spacing below the title
mainContainer.appendChild(title);

//Create a container for clock and stopwatch 
const combineContainer = document.createElement("div");
combineContainer.style.backgroundColor = "azure";
combineContainer.style.border = "5px solid black";
combineContainer.style.padding = "70px";
mainContainer.appendChild(combineContainer);

// Create a container for the clock
const clockContainer = document.createElement("div");
clockContainer.style.fontSize = "4rem";
clockContainer.style.fontWeight = "bold";
clockContainer.style.color = "#4B0082";
clockContainer.style.backgroundColor = "#fff";
clockContainer.style.border = "4px solid black";
clockContainer.style.borderRadius = "15px";
clockContainer.style.backgroundColor = "darkseagreen";
clockContainer.style.marginTop = "20px";
clockContainer.style.padding = "36px 65px";
clockContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
clockContainer.style.textAlign = "center";
combineContainer.appendChild(clockContainer);

// Create a container for the stopwatch
const stopwatchContainer = document.createElement("div");
stopwatchContainer.style.fontSize = "3rem";
stopwatchContainer.style.border = "4px solid black";
stopwatchContainer.style.color = "#333";
stopwatchContainer.style.justifyItems = "center";
stopwatchContainer.style.backgroundColor = "darkgrey";
stopwatchContainer.style.marginTop = "50px";
stopwatchContainer.style.padding = "20px";
combineContainer.appendChild(stopwatchContainer);

// Initialize stopwatch variables
let stopwatchTime = 0; // Time in seconds
let stopwatchInterval = null;

// Stopwatch display
const stopwatchDisplay = document.createElement("div");
stopwatchDisplay.textContent = "00:00:00"; // Initial display
stopwatchContainer.appendChild(stopwatchDisplay);

// Buttons for stopwatch
const buttonContainer = document.createElement("div");
buttonContainer.style.marginTop = "20px";
buttonContainer.style.display = "flex";
buttonContainer.style.gap = "10px";
stopwatchContainer.appendChild(buttonContainer);

// Start button
const startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.style.padding = "10px 20px";
startButton.style.backgroundColor = "#4caf50";
startButton.style.color = "#fff";
startButton.style.border = "none";
startButton.style.borderRadius = "5px";
startButton.style.cursor = "pointer";
startButton.addEventListener("click", () => {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
  }
});
buttonContainer.appendChild(startButton);

// Stop button
const stopButton = document.createElement("button");
stopButton.textContent = "Stop";
stopButton.style.padding = "10px 20px";
stopButton.style.backgroundColor = "#f44336";
stopButton.style.color = "#fff";
stopButton.style.border = "none";
stopButton.style.borderRadius = "5px";
stopButton.style.cursor = "pointer";
stopButton.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
});
buttonContainer.appendChild(stopButton);

// Reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.style.padding = "10px 20px";
resetButton.style.backgroundColor = "#2196f3";
resetButton.style.color = "#fff";
resetButton.style.border = "none";
resetButton.style.borderRadius = "5px";
resetButton.style.cursor = "pointer";
resetButton.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  updateStopwatchDisplay();
});
buttonContainer.appendChild(resetButton);

// Function to update the stopwatch display
function updateStopwatchDisplay() {
  const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, "0");
  const seconds = String(stopwatchTime % 60).padStart(2, "0");
  stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Function to update the clock
function updateClock() {
  const now = new Date();

  // Get current time
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Get current date
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = now.getFullYear();

  // Format time and date
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  const dateString = `${month}-${day}-${year}`;

  // Display date and time in the container
  clockContainer.innerHTML = `${dateString}<br>${timeString}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
