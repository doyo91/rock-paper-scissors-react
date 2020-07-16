import React from "react";
import styled from "styled-components";
import { Score } from "../Score";

const HeaderStyled = styled.div`
  color: white;
  padding: 23px;
  border-radius: .5em;
  border: 1px solid rgba(255, 255, 255, 0.29);
  
  h1 {
      font-size: 20px;
      text-transform: uppercase;
      line-height: 16px;
      font-weight: 700;
      font-size: 21px;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>Rock <br/> Paper <br/> Scissors</h1>
      <Score />
    </HeaderStyled>
  );
};
