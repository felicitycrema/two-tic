import styled from "styled-components";

export const ModalBackdrop = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div `
  position: relative;
  top: -40vh;
  min-width: 400px;
  /* margin: 0 auto; */
  margin: 0 -980px 350px 0;
  padding: 40px 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};

  ${(props) => props.theme.media.mobile} {
    /* min-width: 100px;
  
    position: relative;
    top: 50px;
    align-items: center;
    justify-content: space-between; */

    position: relative;
    top: 11vh;
    min-width: 50px;
    margin: 0 auto;
    padding: 20px 10px;
    align-items: center;
    justify-content: space-between;
`;

export const ModalHeader = styled.div `
  display: flex;
  justify-content: center;
  /* background-color: #f5f5f5;
  padding: 16px;
  text-align: center;
  text-align: center;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background-color: ${(props) => props.theme.colors.text}; */
`;

export const ModalBody = styled.div `
  background-color: #fff;
  padding: 24px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.text};
`;

export const ModalFooter = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 16px;
  /* background-color: #f5f5f5; */
  align-items: center;
  border-radius: 4px;
`;

export const Title = styled.h1 `
  font-size: 24px;
  color: #333;
`;

export const Subtitle = styled.h2 `
  font-size: 18px;
  color: #666;
`;