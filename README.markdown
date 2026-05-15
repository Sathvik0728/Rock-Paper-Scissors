# Rock, Paper, Scissors Game

## Overview
This is a simple command-line Rock, Paper, Scissors game implemented in Python. The user competes against the computer by selecting one of three options: Rock, Paper, or Scissors. The game displays ASCII art for each choice and determines the winner based on standard rules:
- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper

## Prerequisites
- Python 3.x installed on your system
- No additional libraries are required beyond the standard `random` module

## How to Run
1. Save the game code in a file named `rock_paper_scissors.py`.
2. Open a terminal or command prompt.
3. Navigate to the directory containing the game file.
4. Run the game using the command:
   ```bash
   python rock_paper_scissors.py
   ```
5. Follow the prompt to enter your choice:
   - Type `0` for Rock
   - Type `1` for Paper
   - Type `2` for Scissors

## Game Flow
- The user inputs a number (0, 1, or 2) to select their choice.
- If an invalid number is entered (less than 0 or greater than 2), the game displays an error message and declares the user the loser.
- The computer randomly selects its choice.
- ASCII art representations of both the user's and computer's choices are displayed.
- The game determines the outcome:
  - If both choices are the same, it's a draw.
  - Otherwise, the winner is determined based on the rules (e.g., Rock beats Scissors).
- The result is printed to the console ("You win," "You lose," or "It's a draw").

## Code Structure
- **ASCII Art**: Stored in string variables (`rock`, `paper`, `scissors`) and displayed using a list (`game_images`).
- **User Input**: Collected via `input()` and validated to ensure it's within the valid range (0–2).
- **Computer Choice**: Generated using `random.randint(0, 2)`.
- **Game Logic**: Uses conditional statements to determine the winner based on the choices.

## Example Output
```
Enter your choice: Type 0 for Rock, 1 for Paper, 2 for Scissors.
0

       -------
--- '     ____)
          (_____)
          (_____)
           (____)
--- , __(___)

computer choice

         -------
--- '       ____)____
                    ______)
                    _______)
                  _______)
--- , __________)

you lose.
```

## Limitations
- The game is single-round; it exits after one play.
- Input is not robustly validated for non-numeric entries (e.g., letters), which may cause errors.
- The game runs in the console and relies on text-based input/output.

## Potential Improvements
- Add a loop to allow multiple rounds.
- Include error handling for non-numeric inputs.
- Add a score tracker to keep track of wins, losses, and draws.
- Enhance the UI with a graphical interface using a library like Pygame or Tkinter.

## License
This project is unlicensed and free to use or modify.