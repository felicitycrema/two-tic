import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ModalContext } from "../../context/ModalContext";
import RoundOverModal from "../Modals/RoundOverModal/RoundOverModal";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";
import { SfxContext } from "../../context/SfxContext";

function GameCell({ cellItem, index, isWInningCell }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { hoverSfx, clickSfx, winSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    // if (checkForWinner(game.board)){
    //  handleModal(<RoundOverModal />)
    // }

    const result = checkForWinner(game.board);
    console.log(result);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winSfx();
      }
      setTimeout(() => {
        handleModal(<RoundOverModal />);
      }, 2000);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle isWInningCell={isWInningCell ?? false}>
        <IconX className="markedItem" />;
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWInningCell={isWInningCell ?? false}>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <XIconOutline className="outlineIcon" />
      ) : (
        <OIconOutline className="outlineIcon" />
      )}
      {/* {cellItem} */}
    </CellStyle>
  );
}

export default GameCell;
