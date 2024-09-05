import React from "react";

function Player({ player }) {
  return (
    <PlayerWrapper>
      <div>
        {player.name} ({player.choice})
      </div>
      <div>{player.score}</div>
    </PlayerWrapper>
  );
}

export default Player;
