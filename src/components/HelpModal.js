import React from 'react';
import { Modal, Button } from 'react-bootstrap';

//This object is to call the help message box when the user clicks on the button
//Also close the message box when the user is done after clicking on close or the x
const HelpModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Game Rules</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Welcome to the Hangman Game!</p>
        <p>The objective is to guess the word before the hangman is fully drawn.</p>
        <ul>
          <li>Select letters using the on-screen keyboard.</li>
          <li>Each incorrect guess will add a part to the hangman drawing.</li>
          <li>Win by guessing all the letters in the word before the hangman is completed.</li>
        </ul>
        <p>Good luck!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HelpModal;
