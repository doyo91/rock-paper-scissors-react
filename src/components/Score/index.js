import React, {useContext} from "react";
import styled from "styled-components";
import {ScoreContext} from 'context/ScoreContext'

const ScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 80px;
  small {
    color: #2a45c2;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    letter-spacing: -5px;
    position: relative;
    left: -2.5px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    small {
      font-size:16px;
    }

    p {
      font-size: 60px;
      
    }
  }
`;

export const Score = () => {
  const { score } = useContext(ScoreContext);

  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  );
};
