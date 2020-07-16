import React, {useState} from "react";
import styled from "styled-components";
import { Button } from "components/Button";

const RulesStyled = styled.div`
  text-align: center;

  .rules-overlay {
      background: white;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      padding: 4em 0;

      h2 {
          color: #3B4262;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: --2px;
          margin-bottom: 1em;
      }
      .close-btn {
          padding: 1em;
          margin-top: 2em;
          cursor: pointer;
      }
  }
`;


export const Rules = () => {
    const [visible, setVisible] = useState(false);

    function handleToggleClick() {
        setVisible(!visible);
    }
  return (
    <RulesStyled >
        {
            (visible) && (

                <div className="rules-overlay">
                    <h2>Rules</h2>
                    <img src="./assets/images/image-rules.svg" alt="Game rules"/>
                    <img className="close-btn" onClick={handleToggleClick} src="./assets/images/icon-close.svg" alt="Close the game rules"/>
                </div>
            )
        }
      <Button onClick={handleToggleClick}/>
    </RulesStyled>
  );
};
