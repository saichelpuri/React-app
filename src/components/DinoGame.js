// src/App.js
import React, { useState, useEffect, useRef } from "react";

const DinoGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [dinoPosition, setDinoPosition] = useState(0);
  const [cactusPosition, setCactusPosition] = useState(window.innerWidth);
  const dinoRef = useRef();

  useEffect(() => {
    let gameInterval;

    if (!isGameOver) {
      gameInterval = setInterval(() => {
        setCactusPosition((prev) => {
          if (prev < -60) {
            return window.innerWidth;
          }
          return prev - 5;
        });
      }, 20);
    }

    return () => clearInterval(gameInterval);
  }, [isGameOver]);

  useEffect(() => {
    const handleJump = (e) => {
      if (e.key === " " || e.key === "ArrowUp") {
        if (!isJumping) {
          setIsJumping(true);
          let jumpCount = 0;
          const jumpInterval = setInterval(() => {
            setDinoPosition((prev) => {
              if (jumpCount < 15) {
                jumpCount++;
                return prev + 5;
              } else if (jumpCount < 30) {
                jumpCount++;
                return prev - 5;
              } else {
                setIsJumping(false);
                clearInterval(jumpInterval);
                return 0;
              }
            });
          }, 20);
        }
      }
    };

    document.addEventListener("keydown", handleJump);

    return () => document.removeEventListener("keydown", handleJump);
  }, [isJumping]);

  useEffect(() => {
    const dino = dinoRef.current;
    const detectCollision = () => {
      if (cactusPosition >= 0 && cactusPosition <= 60 && dinoPosition === 0) {
        setIsGameOver(true);
      }
    };

    const collisionInterval = setInterval(detectCollision, 10);

    return () => clearInterval(collisionInterval);
  }, [cactusPosition, dinoPosition]);

  const resetGame = () => {
    setIsGameOver(false);
    setDinoPosition(0);
    setCactusPosition(window.innerWidth);
  };

  return (
    <div className="game">
      <div className="game-area">
        <div
          className="dino"
          ref={dinoRef}
          style={{ bottom: `${dinoPosition}px` }}
        ></div>
        <div className="cactus" style={{ right: `${cactusPosition}px` }}></div>
      </div>
      {isGameOver && (
        <div className="game-over">
          <p>Game Over</p>
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default DinoGame;
