import { useEffect, useState, useRef } from 'react';
import './Snake.scss';

const SQUARE_SIZE = 20;
const BOARD_WIDTH = 25;
const BOARD_HEIGHT = 20;

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * BOARD_WIDTH),
  y: Math.floor(Math.random() * BOARD_HEIGHT),
});

export const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomPosition);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyMap = {
        ArrowUp: 'UP',
        ArrowDown: 'DOWN',
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT',
      };
      const newDir = keyMap[e.key];
      if (
        newDir &&
        !(
          (newDir === 'UP' && direction === 'DOWN') ||
          (newDir === 'DOWN' && direction === 'UP') ||
          (newDir === 'LEFT' && direction === 'RIGHT') ||
          (newDir === 'RIGHT' && direction === 'LEFT')
        )
      ) {
        setDirection(newDir);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;
    intervalRef.current = setInterval(() => moveSnake(), 150);
    return () => clearInterval(intervalRef.current);
  }, [snake, direction, gameOver]);

  const moveSnake = () => {
    const head = { ...snake[0] };
    if (direction === 'UP') head.y--;
    if (direction === 'DOWN') head.y++;
    if (direction === 'LEFT') head.x--;
    if (direction === 'RIGHT') head.x++;

    if (
      head.x < 0 || head.x >= BOARD_WIDTH ||
      head.y < 0 || head.y >= BOARD_HEIGHT ||
      snake.some(seg => seg.x === head.x && seg.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake];
    if (head.x === food.x && head.y === food.y) {
      setFood(getRandomPosition());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    setFood(getRandomPosition());
    setGameOver(false);
  };

  return (
    <div className="snake-game">
      <div
        className="board"
        style={{
          width: `${SQUARE_SIZE * BOARD_WIDTH}px`,
          height: `${SQUARE_SIZE * BOARD_HEIGHT}px`,
        }}
      >
        {snake.map((s, idx) => (
          <div
            key={idx}
            className="snake"
            style={{
              left: `${s.x * SQUARE_SIZE}px`,
              top: `${s.y * SQUARE_SIZE}px`,
            }}
          />
        ))}
        <div
          className="food"
          style={{
            left: `${food.x * SQUARE_SIZE}px`,
            top: `${food.y * SQUARE_SIZE}px`,
          }}
        />
        {gameOver && (
          <div className="game-over">
            <div>💀 Game Over</div>
            <button onClick={resetGame}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};
