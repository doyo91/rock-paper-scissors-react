import React from "react";
import styled from "styled-components";

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

export const Chip = ({ name = "default", onClick }) => {
  function handleClick() {
    if (onClick) {
      onClick(name);
    }
  }

  const color = colors[name];

  return (
    <ChipStyled color={color} onClick={handleClick} name={name}>
      <div className="box">
        <img src={`./assets/images/icon-${name}.svg`} alt="" />
      </div>
    </ChipStyled>
  );
};
