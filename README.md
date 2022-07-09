# elements-battle
An game where you have to try and defeat the computer using the provided elements. Each element are strong/weak against other certain elements. 

This project utilises HTML, CSS, vanilla JS and basic DOM manipulation. 

9/07/2022 - Basic HTML boiler plate, CSS file, and JS file created. Creation of the logic with JavaScript was first made. 

There are two types of solutions to this project as I wanted to practice going at the problem from different approaches.

Solution 1:
In order to create the elements such as the element buttons and the display to show the choice that the computer and the player makes, document.createElement() was mainly used, along with append() and appendChild(). 

A function for the computer to generate the random element choices was made, as well as a function that decides the winning and losing conditions, and displaying the results of those matches. These are then later added to the for loop statement.

Then, a for loop statement was used to create the 4 element button, which shows the computer and player choice, as well as the results of the match is also displayed in this loop.


Solution 2: 
In this solution, instead of using document.createElement() with the append() methods, I created the elements and buttons beforehand and used querySelector().

In order to layout the basic steps of the code, I first wrote every single event listener for each single element button and then refactored it to a for loop statement to make the code compact. The function for the computer making random choices, as well as deciding the win/lose conditions are similar to the ones stated in Solution 1. 


Next step: 
Create a function for the counter element, so that everytime the player wins, the counter goes up by one, or if the computer wins, the computer counter goes up by one. Then, a round limit can be set. Once the player or computer reaches the amount of wins needed, the game stops. (Can add colour when the rounds reach it's maximum)