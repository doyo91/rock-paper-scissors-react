import React from "react";
import styled from "styled-components";

import { Chip } from "components/Chip";

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 130px);
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;

  & div:nth-of-type(3) {
    grid-column: span 2;
  }

  .line {
    height: 14px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 60px;
    top: 58px;
    right: 60px;

    &::before {
      content: "";
      height: 14px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(55deg);
      transform-origin: left top;
    }
    &::after {
      content: "";
      height: 14px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-55deg);
      transform-origin: right top;
    }
  }
`;

export const Table = () => {
  return (
    <TableStyled>
      <span className="line"></span>
      <Chip name="paper" />
      <Chip name="scissors" />
      <Chip name="rock" />
    </TableStyled>
  );
};
