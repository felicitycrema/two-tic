import React, { useContext } from "react";
import { Title, Subtitle } from "../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "./Modal.styled";
import Button from "../Button/Button";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";

function RoundOverModal() {
  const { resetBoard, game} = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <Title primary>{game.roundWinner.name} Wins Round</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched now.</Subtitle>
        <Subtitle primary>{game.player1.name} : {game.player1.score}</Subtitle>
        <Subtitle primary>{game.player2.name} : {game.player2.score}</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#C69774"
          onClick={() => {
            handleModal();
            resetBoard()
            
          }}
        >
          Continue
        </Button>
        <Button color="#F8D8D4">Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;




// import React, { useContext } from "react";
// import { Title, Subtitle } from "../../styles/General.styled";
// import { ModalHeader, ModalBody, ModalFooter } from "./Modal.styled";
// import Button from "../Button/Button";
// import { GameContext } from "../../context/GameContext";
// import { ModalContext } from "../../context/ModalContext";

// function RoundOverModal() {
//   const { resetBoard } = useContext(GameContext);
//   const { handleModal } = useContext(ModalContext);
//   return (
//     <>
//       <ModalHeader>
//         <Title primary>Kuli Wins Round</Title>
//       </ModalHeader>
//       <ModalBody>
//         <Subtitle primary>Choices will be switched now.</Subtitle>
//         <Subtitle primary>Kuli: ❎</Subtitle>
//         <Subtitle primary>Nonty: 💝</Subtitle>
//       </ModalBody>
//       <ModalFooter>
//         <Button
//           color="#C69774"
//           onClick={() => {
//             handleModal();
//             resetBoard();
//           }}
//         >
//           Continue
//         </Button>
//         <Button color="#F8D8D4">Restart</Button>
//       </ModalFooter>
//     </>
//   );
// }
// export default RoundOverModal;
