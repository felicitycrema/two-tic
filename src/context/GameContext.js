import { useState, createContext } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "x",
      name: "Nonty",
      score: 0,
    },
    player2: {
      choice: "o",
      name: "Kuli",
      score: 0,
    },
    turn: "x",
    roundWinner: ""
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x", // Switch player turn
    });
  };

  const resetBoard = () => {
    setGame({
     ...game,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      turn: "x",
    });
  };

  const toggleChoice = (choice) => (choice === "x" ? "0" : "x");

  const switchTurn = () => {
    setGame(prevGame => ({
        ...prevGame,
        player1: {
            ...prevGame.player1,
            choice: toggleChoice(prevGame.player1.choice)
       },
       player2: {
        ...prevGame.player2,
            choice: toggleChoice(prevGame.player2.choice)
       },
       turn: "x"
    }))
  }
  

  const updateScore = (winner) => {
    // winner player1, player2, draw
    console.log(winner);
     setGame(prevGame => ({
       ...prevGame,
        [winner]: {
         ...prevGame[winner],
         score: prevGame[winner].score + 1,
         },
         
         roundWinner: prevGame[winner].roundWinner
  
     }));
      };
    
  const roundComplete =() => {
     if (game.turn === game.player1.choice) {        
        updateScore("player1")    
    }else if (game.turn === game.player2.choice) {
       updateScore("player2")    
    } else {
        console.log("IT'S A TIE");
    }
    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        roundComplete,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
