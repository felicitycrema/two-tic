import React from "react";
import { PlayerWrapper, AvatarWrapper } from "./Player.styled";
import Avatar, { genConfig } from "react-nice-avatar";
// import { Text } from "../../styles/General.styled";
import { Subtitle } from "../Modal/Modal.styled";
function Player({ player, isPlayerActive }) {
  // const myConfig = genConfig();

  return (
    <PlayerWrapper>
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
    </PlayerWrapper>
  );
}

export default Player;
