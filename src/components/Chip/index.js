import React from "react";
import styled, { keyframes } from "styled-components";

const shadow = keyframes`
  to {
    box-shadow: 0 0 0 40px rgba(255,255,255, .04), 0 0 0 80px rgba(255,255,255, .03), 0 0 0 120px rgba(255,255,255, .02);
    transform: rotateZ(360deg) scale(1.1);
  }
`

const ChipStyled = styled.div`
  width: 130px;
  height: 125px;
  /* padding: ${({ name }) => (name === "default" ? "16px" : "0")}; */
  border: 16px solid ${({ color }) => color.base};
  border-radius: 50%;
  display: flex;
  box-shadow: 0 5px 0 ${({ color }) => color.base};
  cursor: pointer;
  position: relative;
  z-index: 2;

  ${({isShadowAnimated}) => isShadowAnimated && 'box-shadow: 0 0 0 0px rgba(255,255,255, .04), 0 0 0 0px rgba(255,255,255, .03), 0 0 0 0px rgba(255,255,255, .02);' }
  
  animation: 1s ${({isShadowAnimated}) => isShadowAnimated ? shadow : ''} forwards;
  /*  infinte animation */
  &:active {
    transform: scale(0.9);
  }



  .box {
    background: ${({ name }) => (name === "default" ? "#122343" : "white")};
    box-shadow: 0 -4px 0 ${({ name }) =>
      name === "default" ? "transparent" : "#babfd4"};
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    align-self: stretch;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 195px;
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
  default: {
    base: "transparent",
    border: "transparent",
  },
};

export const Chip = ({ name = "default", onClick, isShadowAnimated }) => {
  function handleClick() {
    if (onClick) {
      onClick(name);
    }
  }

  const color = colors[name];

  return (
    <ChipStyled color={color} onClick={handleClick} name={name} isShadowAnimated={isShadowAnimated} >
      <div className="box">
        <img src={`./assets/images/icon-${name}.svg`} alt="" />
      </div>
    </ChipStyled>
  );
};
