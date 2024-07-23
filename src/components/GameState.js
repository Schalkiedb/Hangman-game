import React from 'react';
import { Alert, Image } from 'react-bootstrap';
//These objects below specifically for changing the game state
//This would give the message if the user lost or won
const GameState = ({ incorrectGuesses, gameOver, win }) => {
  const getStateMessage = () => {
    if (win) return 'Congratulations! You won!';
    if (gameOver) return 'Game Over! You lost!';
    return `Incorrect Guesses: ${incorrectGuesses}`;
  };
//This would be setting pictures from state 1 to 11
  return (
    <div className="game-state">
      {/* Made changes so that the state image is dynamic by only changing the end of the image name from 1 - 11 */}
      <Image src={`/images/state${incorrectGuesses+1}.GIF`} alt={`Hangman state ${incorrectGuesses}`} fluid />
      <Alert variant={win ? 'success' : 'danger'} className="mt-4">
        {getStateMessage()}
      </Alert>
    </div>
  );
};

export default GameState;
