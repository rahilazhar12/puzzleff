import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './puzzle.css';
import Card from '../../data/Card';
import { Link } from 'react-router-dom';

const containerStyle1 = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
};

const Board1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
`;

const initialCards = [
  { id: 1, value: 'A' }, { id: 2, value: 'A' },
  { id: 3, value: 'A' }, { id: 4, value: 'A' },
  { id: 5, value: 'A' }, { id: 6, value: 'A' },
  { id: 7, value: 'D' }, { id: 8, value: 'A' },
  { id: 9, value: 'E' },
];

const Puzzle2 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(2);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle([...initialCards]));
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
    setMessage('Attempts left: 3');
  }, []);

  useEffect(() => {
    initializeGame();
  }, [level, initializeGame]);

  const handleCardClick = (id, value) => {
    if (flippedCards.length < 3 && !flippedCards.some(card => card.id === id)) {
      setFlippedCards(prev => [...prev, { id, value }]);

      if (flippedCards.length === 2) {
        setAttempts(prev => prev + 1);

        const [firstCard, secondCard] = flippedCards;

        if (firstCard.value === value && secondCard.value === value) {
          setMatchedCards(prev => [...prev, firstCard.id, secondCard.id, id]);
          setFlippedCards([]);
          if (matchedCards.length + 3 === initialCards.length) {
            setMessage('You won this game!');
            setTimeout(() => {
              setLevel(prev => prev + 1);
            }, 1000);
          }
        } else {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }

        if (attempts >= 2) {
          setTimeout(() => {
            setMessage('Game over! Restarting...');
            setTimeout(initializeGame, 2000);
          }, 1000);
        } else {
          setMessage(`Attempts left: ${2 - attempts}`);
        }
      }
    }
  };

  const hasMatchedThree = () => {
    const valueCount = matchedCards.reduce((count, cardId) => {
      const card = cards.find(card => card.id === cardId);
      if (card) {
        count[card.value] = (count[card.value] || 0) + 1;
      }
      return count;
    }, {});
    return Object.values(valueCount).some(count => count === 3);
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className="upper-container my-3" style={containerStyle1}>
            <div className="game-container">
              <h3>Match The Pairs Level {level}</h3>
              <div>
                <Board1 className='game-board'>
                  {cards.map(card => (
                    <Card
                      key={card.id}
                      id={card.id}
                      value={card.value}
                      isFlipped={flippedCards.some(flippedCard => flippedCard.id === card.id) || matchedCards.includes(card.id)}
                      handleClick={handleCardClick}
                    />
                  ))}
                </Board1>
              </div>
              <div className="message">{message}</div>
              <button className="button" onClick={initializeGame}>Restart Game</button>
              {hasMatchedThree() && (
                <Link to="/puzzle3">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-12 second my-2">
            <h2 className="my-4">How to Play Puzzle Game?</h2>
            <h6 className="puzzle-game-intro me-5">Puzzle games are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Puzzles come in various forms, with unique content from traditional paper puzzles to sophisticated digital games. The puzzle guide will walk you through the basic principles of playing different types of puzzle games, offering tips and strategies to enhance your experience.</h6>
            <h3 className="mt-4 up">1. Different Types of Puzzle Games:</h3>
            <h6 className="puzzle-game-intro me-5" >Puzzle games come in many varieties, each with unique mechanics and objectives.</h6>
            <h3 className="mt-4 up">2. Understand the Rules:</h3>
            <h6 className="puzzle-game-intro me-5">Each puzzle game has specific rules and objectives. Read the instructions carefully before starting.</h6>
            <ul className="mar me-5">
              <li>'In this game players have 3 chances'</li>
              <li>'If 3 puzzle game cards are matched to each other' </li>
              <li>'Player wins this game' </li>
              <li>'Otherwise, Restart the puzzle game again and try to match again 3cards </li>
            </ul>
            <h3 className="mt-4 up">3. Set up Your Space:</h3>
            <h6 className="puzzle-game-intro me-5">For physical puzzles, ensure you have a comfortable and well-lit workspace. For digital puzzles, adjust your device's brightness and volume settings to suit your environment and mind.</h6>
            <ul className="mar me-2">
              <h2>Tips for Success</h2>
              <li>Stay Calm: Puzzle games should be enjoyable; take breaks if you feel frustrated. </li>
              <li>Practice Regularly: The more you play, the better you get.</li>
              <li>Learn from Mistakes: Analyze what went wrong and try different approaches.</li>
              <li>Challenge Yourself: Gradually increase the difficulty level to keep improving your skills and thinking process.</li>
            </ul>
            <h3 className="mt-4 up"> Conclusion:</h3>
            <h6 className="puzzle-game-intro me-5 mb-4">Puzzle games offer endless opportunities to test your mental acuity, relax, and have fun. By understanding the rules, using effective strategies, and practicing regularly, you can enhance your puzzle-solving skills and enjoy the satisfying feeling of cracking even the toughest puzzles. So, choose your game, set up your space, and dive into the fascinating world of puzzles!</h6>
          </div>
          <div className='inner'>
            <Link to="/puzzle1">
              <img className='innerimg' src='./images/Puzzle1.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/puzzle2">
              <img className='innerimg' src='./images/Puzzle2.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/puzzle3">
              <img className='innerimg' src='./images/Puzzle3.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/puzzle1">
              <img className='innerimg' src='./images/Puzzle5.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/freezenova">
              <img className='innerimg' src='./images/Freezenova1.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/game1">
              <img className='innerimg' src='./images/Freezenova2.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/game2">
              <img className='innerimg' src='./images/Freezenova3.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/game3">
              <img className='innerimg' src='./images/Freezenova4.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/game4">
              <img className='innerimg' src='./images/Freezenova5.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/game5">
              <img className='innerimg' src='./images/Freezenova6.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/game6">
              <img className='innerimg' src='./images/Freezenova7.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/game7">
              <img className='innerimg' src='./images/Freezenova8.jpeg' alt='puzzle Logo' />
            </Link>
          </div>
          <div className="col-12 my-3">
            <video  className='video' src="./videos/hacks.mp4" controls={true} width="100%" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Puzzle2;