import React, { useState } from 'react';
import styled from 'styled-components';
import "./game.css"
import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
};

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Tile = styled.div`
  width:50px;
  height: 50px;
  background-color: ${props => {
    if (props.player1Selected) return '#00f';
    if (props.player2Selected) return '#f00';
    return '#ccc';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Game = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null)); // null for unselected, 1 for player 1, 2 for player 2
  const [selectedCountPlayer1, setSelectedCountPlayer1] = useState(0);
  const [selectedCountPlayer2, setSelectedCountPlayer2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Wins, setPlayer1Wins] = useState(false);
  const maxSelections = 4;

  const checkWinCondition = (player) => {
    const winPatterns = [
      [0, 1, 2], // horizontal top
      [3, 4, 5], // horizontal middle
      [6, 7, 8], // horizontal bottom
      [0, 3, 6], // vertical left
      [1, 4, 7], // vertical center
      [2, 5, 8], // vertical right
    ];

    return winPatterns.some(pattern =>
      pattern.every(index => tiles[index] === player)
    );
  };


  const toggleTile = index => {
    if (tiles[index] === null && ((currentPlayer === 1 && selectedCountPlayer1 < maxSelections) || (currentPlayer === 2 && selectedCountPlayer2 < maxSelections))) {
      const newTiles = [...tiles];
      newTiles[index] = currentPlayer;

      if (currentPlayer === 1) {
        setSelectedCountPlayer1(selectedCountPlayer1 + 1);
        if (checkWinCondition(1)) {
          setPlayer1Wins(true);
        }
      } else {
        setSelectedCountPlayer2(selectedCountPlayer2 + 1);
      }

      setTiles(newTiles);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1); // Switch to the other player
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='upper-container my-3' style={containerStyle}>
            <GameContainer className='img'>
              <div className='des'>Level One</div>
              <h4 className='info'>Player {currentPlayer}'s Turn</h4>
              <div>
                <Board>
                  {tiles.map((player, index) => (
                    <Tile className='img'
                      key={index}
                      player1Selected={player === 1}
                      player2Selected={player === 2}
                      onClick={() => toggleTile(index)}
                    >
                      {player === 1 ? '❄️' : player === 2 ? '🔥' : ''}
                    </Tile>
                  ))}
                </Board>
              </div>
              <h6 className='info'>Player 1 Selected: {selectedCountPlayer1} / {maxSelections}</h6>
              <h6 className='info'>Player 2 Selected: {selectedCountPlayer2} / {maxSelections}</h6>

              {player1Wins && (
                <div className='level'>
                  <button className='button1'>
                    <Link to="/game1">Next Level</Link>
                  </button>
                </div>
              )}
            </GameContainer>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 second my-2">
            <h2 className="my-4">How to Play FreezeNova Game?</h2>
            <h6 className="puzzle-game-intro me-5">FreezeNova games are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. FreezeNova come in various forms, with unique content from traditional paper FreezeNova to sophisticated digital games. The FreezeNova guide will walk you through the basic principles of playing different types of FreezeNova games, offering tips and strategies to enhance your experience.</h6>
            <h3 className="mt-4 up">1. Different Types of FreezeNova Games:</h3>
            <h6 className="puzzle-game-intro me-5" >FreezeNova games come in many varieties, each with unique mechanics and objectives.</h6>
            <h3 className="mt-4 up">2. Understand the Rules:</h3>
            <h6 className="puzzle-game-intro me-5">Each FreezeNova game has specific rules and objectives. Read the instructions carefully before starting.</h6>
            <ul className="mar me-5">
              <li>'In this game players have lot of chances'</li>
              <li>'If 4 circle are match horizontal or vertical with same color' </li>
              <li>'Player wins this game' </li>
              <li>'Otherwise, Restart the FreezeNova game again and try to match again 3 circle</li>
            </ul>
            <h3 className="mt-4 up">3. Set up Your Space:</h3>
            <h6 className="puzzle-game-intro me-5">For physical FreezeNova, ensure you have a comfortable and well-lit workspace. For digital FreezeNova, adjust your device's brightness and volume settings to suit your environment and mind.</h6>
            <ul className="mar me-2">
              <h2>Tips for Success</h2>
              <li>Stay Calm: FreezeNova games should be enjoyable; take breaks if you feel frustrated. </li>
              <li>Practice Regularly: The more you play, the better you get.</li>
              <li>Learn from Mistakes: Analyze what went wrong and try different approaches.</li>
              <li>Challenge Yourself: Gradually increase the difficulty level to keep improving your skills and thinking process.</li>
            </ul>
            <h3 className="mt-4 up"> Conclusion:</h3>
            <h6 className="puzzle-game-intro me-5 mb-4">FreezeNova games offer endless opportunities to test your mental acuity, relax, and have fun. By understanding the rules, using effective strategies, and practicing regularly, you can enhance your FreezeNova-game solving skills and enjoy the satisfying feeling of cracking even the toughest FreezeNova game. So, choose your game, set up your space, and dive into the fascinating world of FreezeNova!</h6>
          </div>
          <div className='inner'>
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
            <Link to="/puzzle1">
              <img className='innerimg' src='./images/Puzzle1.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/puzzle2">
              <img className='innerimg' src='./images/Puzzle2.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/puzzle3">
              <img className='innerimg' src='./images/Puzzle3.jpeg' alt='puzzle Logo' />
            </Link>
            <Link to="/puzzle3">
              <img className='innerimg' src='./images/Puzzle5.jpeg' alt='puzzle Logo' />
            </Link>
          </div>
          <div className="col-12 my-3">
            <video className='video' src="./videos/hacks.mp4" controls={true} width="100%" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Game;


