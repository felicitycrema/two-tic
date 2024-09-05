import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";
import  RoundOverModal from "../Modal/RoundOverModal";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);
  const { handleModal} = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    if(checkForWinner(game.board)) {
      handleModal(<RoundOverModal />)
    } // Check for winning condition after each move.
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem" />;
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem"/>
      </CellStyle>
    );
  }

  return (
    <CellStyle
      onClick={cellClickHandler}>
        {game.turn === "x" ? (
         <XIconOutline className="outlineIcon"/> 
        ) : ( 
         <OIconOutline className="outlineIcon"/>
         )}    
       {/* {cellItem} */}
    </CellStyle>
  );
}

export default GameCell;
