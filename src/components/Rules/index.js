import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "components/Button";

const RulesStyled = styled.div`
  text-align: center;

  &::before {
    content: '';
    display: ${({ visible }) => visible ? 'block' : 'none'};
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.6);
    }

  .close-btn {
    padding: 1em;
    margin-top: 2em;
    cursor: pointer;
  }

  .rules-modal {
    background: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 4em 0;

    h2 {
      color: #3b4262;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: --2px;
      margin-bottom: 1em;
    }

    
  }

  @media screen and (min-width: 768px) {
    .button {
      position: fixed;
      right: 2em;
      bottom: 2em;
    }

    .rules-modal {
      width: 400px;
      margin: auto;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      padding: 2em;
      border-radius: 10px;

      h2 {
        align-self: flex-start;
        font-size: 32px;
        margin: 0 0 1.2em 0;
      }
    }

    .close-btn {
      position: absolute;
      right: 2em;
      top: 0.8em;
    }
  }
`;

export const Rules = () => {
  const [visible, setVisible] = useState(false);

  function handleToggleClick() {
    setVisible(!visible);
  }
  return (
    <RulesStyled visible={visible}>
      {visible && (
        <div className="rules-modal">
          <h2>Rules</h2>
          <img src="./images/image-rules.svg" alt="Game rules" />
          <img
            className="close-btn"
            onClick={handleToggleClick}
            src="./images/icon-close.svg"
            alt="Close the game rules"
          />
        </div>
      )}
      <Button className="button" onClick={handleToggleClick}>
        Rules
      </Button>
    </RulesStyled>
  );
};
