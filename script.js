// Main function to initialize the logic
function main() {
  // Select elements from the DOM
  const startButton = document.getElementById('start-button');
  const block1 = document.getElementById('block1');
  const block2 = document.getElementById('block2');
  const terminal = document.getElementById('terminal'); // Terminal for loading messages
  const undoButton = document.getElementById('undoButton');

  const loadingMessages = [
      "🚀 Initiating launch sequence to reach the Tech Universe!",
      "🛸 I'm off to the Tech Universe to fetch the answers for you!",
      "🤔 Asking the all-knowing Code Wizards for the answer to your burning question...",
      "📦 Wrapping it up in a slick JSON package for optimal transport.",
      "🛸 Racing back to you faster than your console.log can print!",
      "🎉 Ta-da! Here you go: the answer you've been waiting for!"
  ];

  // Add event listener to the start button
  startButton.addEventListener('click', function() {
      block1.style.display = 'none'; // Hide block1
      block2.style.display = 'block'; // Show block2
      block2.scrollIntoView({ behavior: 'smooth' }); // Scroll to block2
  });

  // Add event listener to the ask button
  document.getElementById('askAwayButton').addEventListener('click', function() {
      simulateLoading(); // Start loading simulation
  });

  // Function to simulate loading process
  function simulateLoading() {
      terminal.style.display = 'block'; // Show the terminal
      terminal.scrollIntoView({ behavior: 'smooth', block: 'start' });

      let index = 0;
      const interval = setInterval(() => {
          if (index < loadingMessages.length) {
              terminal.innerHTML = `<p>${loadingMessages[index]}</p>`; // Update terminal content
              index++;
          } else {
              clearInterval(interval);
              // Transition to block3 after loading
              block3.style.display = 'block'; // Show block3
              block3.scrollIntoView({ behavior: 'smooth' });
              displayAnswer(); // Call to display the answer
          }
      }, 1000); // Change every second
  }

  // Function to display the answer
  function displayAnswer() {
      const answers = ["Yes!", "No!", "It’s not in my scope to answer!"];
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      const answerElement = document.getElementById('answer');

      let countdown = 3; // Start the countdown from 3 seconds
      answerElement.innerText = `Answer in ${countdown}...`;

      const countdownInterval = setInterval(() => {
          countdown--;
          if (countdown > 0) {
              answerElement.innerText = `Answer in ${countdown}...`;
          } else {
              clearInterval(countdownInterval); // Stop the countdown
              answerElement.innerText = randomAnswer; // Show the answer after countdown
          }
      }, 1000); // 1000 milliseconds = 1 second
  }

  // Undo button to restart the process
  undoButton.addEventListener('click', function() {
      location.reload(); // Reload the page to restart everything
  });
}

// Call the main function on page load
window.onload = main;
