import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Word = ({ word, guessedLetters }) => {
  return (
    <Row>
      <Col className="word">
        {word.split('').map((letter, index) => (
          <span key={index} className="letter">
            {guessedLetters.includes(letter) ? letter : '_'}
          </span>
        ))}
      </Col>
    </Row>
  );
};

export default Word;
