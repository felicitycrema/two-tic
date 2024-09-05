// import React, { useContext } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import Details from "./Pages/Details/Details";
// import Game from "./Pages/Game/Game";
// import Header from "./components/Header/Header";
// import { ModalContext } from "./context/ModalContext";

// // Test component that triggers the modal
// export const Test = ({ handleModal }) => {
//   return (
//     <div>
//       <button onClick={() => handleModal(<Modal handleModal={handleModal} />)}>
//         Show Modal
//       </button>
//     </div>
//   );
// };

// // Modal component, with the option to add more content or behavior
// export const Modal = ({ handleModal }) => {
//   return (
//     <div>
//       savshdfvshjfadhgfjhde
//       {/* Optionally add a close button or more content */}
//       <button onClick={() => handleModal(null)}>Close</button>
//     </div>
//   );
// };

// // Main Router component
// function Router() {
//   const { handleModal } = useContext(ModalContext);  // Extract handleModal from context

//   return (
//     <BrowserRouter>
//       <Test handleModal={handleModal} />
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/details" element={<Details />} />
//         <Route path="/game-on" element={<Game />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Router;


import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Game from "./Pages/Game/Game";
import Header from "./components/Header/Header";
import { ModalContext } from "./context/ModalContext";

export const Test = ({ handleModal }) => {
  return (
    <div>
      <button onClick={() => handleModal(<Modal handleModal={handleModal} />)}>
      Show Modal
      </button>
    </div>
  );
};
export const Modal = ({ handleModal }) => {
  return (
    <div>
      savshdfvshjfadhgfjhde
    </div>
  );
};

function Router(){
  const { handleModal } = useContext(ModalContext);

  return (
    <BrowserRouter>
    <Test handleModal={handleModal} />
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/game-on" element={<Game />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
