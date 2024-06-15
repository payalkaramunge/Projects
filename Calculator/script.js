document.addEventListener("keydown", function(event) {
    event.preventDefault();
});
// This block of code adds an event listener to the entire document for the "keydown" event.
//  When any key is pressed, the function specified will be executed. In this case, 
// the function prevents the default behavior associated with key presses, 
// which helps to prevent unexpected interactions with the page.

// Event listeners for calculator buttons
let buttons = document.querySelectorAll('button');
// This line selects all HTML button elements on the page and stores them in a NodeList in the buttons variable.

let input = document.getElementById('inputBox');
// This line selects an HTML element with the id "inputBox" and stores it in the variable input. 
// It is likely that this element is an input box or a textarea where the calculator's input and output will be displayed.

let string = "";
// This line initializes a variable string and sets it to an empty string. 
// This variable will be used to store the current input string for the calculator.

buttons.forEach(button => {
    // This line starts a loop over all the buttons selected earlier using querySelectorAll. 
    // The forEach function is used to iterate over each button.
   
    button.addEventListener('click', (e) => {
        // For each button, this line adds a click event listener. When a button is clicked, 
        // the specified function will be executed. The event object e is passed to the function, representing the click event.

        let buttonText = e.target.innerText;
    //    This line extracts the text content of the clicked button and stores it in the variable buttonText.

        switch (buttonText) {
            case '=':
                // Evaluate the expression
                debugger;
                string = eval(string);
                break;
                // This block checks if the clicked button is "=", indicating the user wants to evaluate the expression. 
                // The eval function is used to evaluate the current string as a JavaScript expression, 
                // and the result is stored in the string variable.

            case 'AC':
                // Clear the input
                string ="";
                break;
                // If the clicked button is "AC" (clear), the string variable is set to an empty string, effectively clearing the input.

            case 'DEL':
                // Delete the last character
                string = string.slice(0, -1);
                break;
                // If the clicked button is "DEL" (delete), the last character of the string is removed using the slice method.

            default:
                // Append the clicked button's text to the input string
                string += buttonText;
                break;
                // If none of the specific cases match, the default case is executed, 
                // which appends the text of the clicked button to the string variable.
        }
        // Update the input box with the new string
        input.value = string;
        // fter processing the button click, the input box's value is updated with the current content of the string variable, 
        // reflecting the changes made by the user.
    });
});