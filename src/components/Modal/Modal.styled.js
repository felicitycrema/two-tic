import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 20px;
    background: white;   
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;  
    background-color: ${(props) => props.theme.colors.secondary};  
`;

export const ModalHeader = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  text-align: center;
  text-align: center;
  border-top-right-radius: 4px;
  border-top-right-radius: 4px;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  padding: 24px;
  text-align: center;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
  align-items: center;
  border-radius: 24px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
`;




// export const ModalHeader = styled.div`
//     display: flex;
//     justify-content: Center;    
// `;
// export const ModalBody = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: Center; 
//     margin: 1rem;   
// `;
// export const ModalFooter = styled.div`
//     display: flex;
//     justify-content: Center;    
// `;

// Styled components for the modal
