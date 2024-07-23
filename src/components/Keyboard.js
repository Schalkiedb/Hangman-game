import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

//This module is to display letters of the alphabet as buttons
//If the user has clicked on a letter it should disable it
//Stopping the user from choosing the incorrect letter again
//
const Keyboard = ({ onGuess, guessedLetters }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    //Here a map/array is used build the buttons
    <Row className="keyboard">
      {alphabet.map((letter) => (
        <Col key={letter} xs={3} md={2} className="mb-2">
          <Button
            variant="outline-primary"
            onClick={() => onGuess(letter)}
            //This add the letter to array called guessed letters to disable when this gets called again
            disabled={guessedLetters.includes(letter)}
          >
            {letter}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default Keyboard;
