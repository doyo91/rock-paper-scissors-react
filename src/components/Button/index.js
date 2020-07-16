import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  display: inline-flex;
  border: 1px solid white;
  border-radius: .5em;
  min-width: 128px;
  padding: .7em;
  justify-content:center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px;

`;


export const Button = ({...props}) => {
  return (
    <ButtonStyled  {...props}>
      Rules
    </ButtonStyled>
  );
};
