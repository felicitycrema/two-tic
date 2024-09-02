import React from 'react';
import { Container } from './Home.styled';
import { Title } from "../../styles/General.styled";
import Header from "../../components/Header/Header";
function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Title>TicTacToe</Title>
      </Container>
    </div>
  )
}

export default Home