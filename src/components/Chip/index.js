import React from "react";
import styled from "styled-components";

const ChipStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 16px solid ${(props) => props.color.base};
  border-radius: 50%;
  display: flex;
  background: white;
  box-shadow: 0 5px 0 ${(props) => props.color.base};
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:active {
    transform: scale(0.9);
  }

  .box {
    box-shadow: 0 -4px 0 #babfd4;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    align-self: stretch;
  }
`;

const colors = {
  paper: {
    base: "#516ef4",
    border: "#2543c3",
  },
  rock: {
    base: "#de3a5a",
    border: "#980e31",
  },
  scissors: {
    base: "#eca81e",
    border: "#c76c14",
  },
};

export const Chip = ({ name }) => {
  return (
    <ChipStyled color={colors[name]}>
      <div className="box">
        <img src={`./assets/images/icon-${name}.svg`} alt="" />
      </div>
    </ChipStyled>
  );
};
