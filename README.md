# Calculadora
Projeto de LI, calculadora simples

Here is an aesthetic and detailed README.md file crafted specifically for your project, based on our conversation and the technologies used.

This file is written in Markdown. You can copy the text below and paste it directly into a new file named README.md in your "Calculadora" project folder.

🧮 Calculadora Web
A clean, modern, and responsive web-based calculator built with vanilla JavaScript, HTML, and styled with the Bootstrap framework. This project provides a user-friendly interface for performing standard arithmetic operations with robust error handling.

📸 Screenshot
(Suggestion: Replace the link below with a real screenshot of your project!)

✨ Features
Standard Arithmetic: Perform addition (+), subtraction (-), multiplication (*), and division (/).

On-Screen Display: All numbers and operations are clearly shown on the display.

Input Protection: The main display is set to readonly to prevent invalid keyboard input, ensuring all entries are made via the on-screen buttons.

Error Handling: The calculator uses try...catch blocks to safely handle invalid expressions (e.g., 5 * / 3) and provides user-friendly alerts.

Clear Functionality: A "C" button is included to clear the display and reset the calculation.

Responsive Design: Built with Bootstrap, the layout adapts smoothly to both desktop and mobile screens.

🛠️ Tech Stack
This project was built using fundamental web technologies:

HTML5: Provides the core structure and elements of the calculator.

Bootstrap 5: A powerful CSS framework used for styling buttons, the display, and creating a responsive grid layout.

Vanilla JavaScript (ES6+): Powers all the client-side logic, including:

Appending values to the display (addVal()).

Handling operator input (operation()).

Processing the final calculation (calculate()).

💡 Code Highlight: Core Logic
The heart of the calculator is the calculate() function, which uses eval() inside a try...catch block to safely compute the final result.

JavaScript

/*
  This function is called when the user presses the '=' button.
*/
function calculate() {
  let display = document.getElementById('resultados');
  
  try {
    // First, check if the display is empty
    if (display.value != '') {
      
      // Use eval() to compute the string expression
      let result = eval(display.value);
      
      // Check for invalid results like NaN or Infinity
      if (isNaN(result) || !isFinite(result)) {
        alert("Please enter a valid expression to calculate.");
        display.value = '';
      } else {
        // Update display with the valid result
        display.value = result;
      }
      
    } else {
      alert("Please enter an expression to calculate.");
    }
  } catch (error) {
    // Catch any SyntaxErrors from eval()
    alert("Please enter a valid expression to calculate.");
    display.value = '';
  }
}
🚀 How to Use
To run this project locally, simply follow these steps:

Clone the repository:

Bash

git clone https://github.com/DavidMarquesSousa/Calculadora.git
Navigate to the project directory:

Bash

cd Calculadora
Open the index.html file: You can do this by double-clicking the index.html file in your file explorer, or by using a live server extension in your code editor (like VS Code Live Server).

📄 License
This project is open-source and available under the MIT License.

Project by DavidMarquesSousa
