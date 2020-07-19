import React from "react";
import styled from "styled-components";
import { Score } from "components/Score";

const HeaderStyled = styled.div`
  color: white;
  padding: 12px 12px 12px 23px;
  border-radius: .5em;
  border: 1px solid rgba(255, 255, 255, 0.29);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
      font-size: 20px;
      text-transform: uppercase;
      line-height: 16px;
      font-weight: 700;
      font-size: 21px;
      margin: 0;
  }

  @media screen and (min-width: 768px) {
      padding: 24px;

    h1 {
      font-size: 36px;
      line-height: .9;
    }
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
