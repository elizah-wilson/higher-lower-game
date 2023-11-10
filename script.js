
const attempts= document.getElementById("attempts");
const tracker = document.getElementById("tracker");
const message = document.getElementById("message")
const trackerOutput = [ ]
let answer = Math.floor(Math.random() * 101);
let numberInput;

function guess() {
    numberInput = document.getElementById("numberInput").value; 
    console.log(answer) 
    // how can combine repeating logic into something reusable
    if(numberInput > answer) {
        message.textContent = "Your number is too high!";
        updateTrackers();
    } else if(numberInput < answer) {
        message.textContent = "Your number is too low!";
        updateTrackers();
    } else if(numberInput == answer) {
        message.textContent = "You win!" 
        message.style = "color:green"
    } else if(numberInput < 1 || numberInput > 100) {
        message.textContent = "Enter a number between 1 and 100!"
    }
} 

// for tracker oupput need to display each input
function updateTrackers() {
    trackerOutput.push(numberInput)
    let outputLength = trackerOutput.length ;
    tracker.textContent =` Numbers used: ${trackerOutput.join(", ")}`;
    attempts.textContent = `Number of Guesses: ${outputLength}` 
}







