// src/components/Hangman.js
import React, { useState, useEffect } from 'react';
import Word from './Word';
import Keyboard from './Keyboard';
import GameState from './GameState';
import HelpModal from './HelpModal';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hangman.css';
//This is the main components where most of the logic happens

//This sets the main hangman object that gets created
const Hangman = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  //This calls the component/object that fetches a random word from the dictionary file supplied by the course
  useEffect(() => {
    fetchRandomWord();
  }, []);

  //Function that opens up the dictionary.txt splits the words and does a math random to choose number in the array
  //This returns the word based of that index
  //Afterwards the word is set that is part of the hangman object
  const fetchRandomWord = async () => {
    const response = await fetch('/dictionary.txt');
    const text = await response.text();
    const words = text.split('\n');
    const randomWord = words[Math.floor(Math.random() * words.length)].trim();
    setWord(randomWord.toUpperCase());
  };

  //THe following handles the guess from the player
  //Passes in the letter clicked
  const handleGuess = (letter) => {
    //Add the letter to the guessed letters so that its not used again and also display on the page
    if (guessedLetters.includes(letter) || gameOver) return;
    setGuessedLetters([...guessedLetters, letter]);

    //Determines if the letter is included in the word that was randomly selected
    if (word.includes(letter)) {
      const allGuessed = word.split('').every((char) => guessedLetters.includes(char) || char === letter);
      //If all the letters are correctly guessed sets the game to be won
      if (allGuessed) {
        setWin(true);
        setGameOver(true);
      }
      //If more than 11 guess are incorrect set the game to lost
    } else {
      setIncorrectGuesses(incorrectGuesses + 1);
      if (incorrectGuesses + 1 >= 10) {
        setGameOver(true);
      }
    }
  };

  //The following object is to set the states of the game objects back to starting value
  const resetGame = () => {
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameOver(false);
    setWin(false);
    fetchRandomWord();
  };

  //The following Builds the actuall view of the game and calling the relevant components
  return (
    <Container className="hangman">
      <h1>Hangman Game</h1>
      <Row>
        <Col md={6}>
           {/* displays the word as its built */}
          <Word word={word} guessedLetters={guessedLetters} />
           {/* display the keyboard component and passes in the handleguess to disable letters as you go */}
          <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
        </Col>
        <Col md={6}>
         {/* this handles the message box and the picture getting shown */}
          <GameState incorrectGuesses={incorrectGuesses} gameOver={gameOver} win={win} />
          <div className="d-flex justify-content-center mt-4">
            {/* //Creates the resetgame and help button */}
            <Button variant="primary" onClick={resetGame} className="mr-2">Restart Game</Button>
            <Button variant="secondary" onClick={() => setShowHelp(true)}>Help</Button>
          </div>
        </Col>
      </Row>
       {/* this hides the help if clicked outside the frame */}
      <HelpModal show={showHelp} onHide={() => setShowHelp(false)} />
    </Container>
  );
};

export default Hangman;
