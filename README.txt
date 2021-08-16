Jacob Ouellet
Jacob_ouellet@student.uml.edu
HW5

url: https://jacobouellet1.github.io/HW5/
repo: https://github.com/JacobOuellet1/HW5

Features that fully work:

1. Score system is displayed and fully works with double word score and double letter score spaces which are both on the board.

2. Word is displayed once submitted and errors are displayed if the word is less than two tiles or contains a space.

3. There is a "tiles left" counter to show the number of tiles that have yet to be pulled out.

4. There is a re-pick tiles button that will take the words in your hand, add them back to the data structure and redraw the same amount of
  tiles randomly.
  
5. There is a restart button that allows you to restart the game at any point.

6. The tiles will bounce back to their last successful drop position if they are not placed in a drop box that lies on the shelf or the game board.

7. The tiles are allowed to be replaced back onto the rack after being placed onto the gameboard.

8. Dragging and dropping fully works for the tiles.

9. Words can be read from the tiles placed onto the gameboard. 

10. Letters are selected at random from a data structure that contains the correct number of tiles throughout gameplay. Tiles will be random until more tiles are needed than are
  available e.g., the tiles run out and we need more than there are available. 
  
11. Only the tiles a user plays will be replaced with new tiles if new tiles remain.

12. The board is cleared after a user plays their words.

13. The user can continue to play until they run out of letters, or they restart the game. 

Features that partially work:

1. It is attempted to stop tiles from being dropped over one another. It works most of the time, but there are two situations where it doesn't work.

  The first is when the game pieces are generated. The tiles on the shelf can be dragged onto one another within the shelf.
  The second is if a tile is dragged unsuccessfully and bounced back to its position. It triggers the "out" in the droppable and a tile can be placed over
  the tile that was just bounced back.
