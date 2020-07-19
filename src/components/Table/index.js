import React, { useState, useContext } from "react";
import styled from "styled-components";

import { Chip } from "components/Chip";
import { WhiteButton } from "components/Button";
import { ScoreContext } from "context/ScoreContext";

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

  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .results {
    text-align: center;

    h2 {
      text-transform: uppercase;
      font-size: 56px;
      margin: 10px;
    }
  }

  .line {
    display: ${({ playing }) => (!playing ? "block" : "none")};
    height: 14px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 220px;
    top: 58px;

    &::before {
      content: "";
      height: 14px;
      background: rgba(0, 0, 0, 0.2);
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
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-55deg);
      transform-origin: right top;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 300px 300px;
    ${({ playing, results }) =>
      (playing && results) && "grid-template-columns: 300px 110px 110px 300px;"}

    & div:nth-of-type(3) {
      ${({ playing, results }) =>
        (playing && results) && "grid-column: 2 / 4; grid-row: 1;"}
    }
    .line {
      width: 300px;
    }
    .results {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .in-game {
      font-size: 1.2em;
      display: flex;
      flex-direction: column;
      > div {
        order: 2;
      }
      > p {
        order: 1;
        margin-bottom: 2em;
      }
    }
  }
`;

const elements = ["paper", "scissors", "rock"];

export const Table = () => {
  const [housePick, setHousePick] = useState("default");
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState("");
  const [results, setResults] = useState("");
  const { score, setScore } = useContext(ScoreContext);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        setHousePick(pick);
      }, 75);

      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    });
  }

  async function onClick(name) {
    setPlaying(true);
    setPick(name);

    const house = await launchHousePick();
    const results = playResults(name, house);
    setResults(results);
    if (results === "win") {
      setScore(score + 1);
    }
  }

  function playResults(pick, housePick) {
    if (housePick === pick) {
      return "draw";
    }

    if (pick === "paper") {
      if (housePick === "scissors") {
        return "lose";
      }
      if (housePick === "rock") {
        return "win";
      }
    }

    if (pick === "scissors") {
      if (housePick === "paper") {
        return "win";
      }

      if (housePick === "rock") {
        return "lose";
      }
    }

    if (pick === "rock") {
      if (housePick === "paper") {
        return "lose";
      }
      if (housePick === "scissors") {
        return "win";
      }
    }
  }

  function handleTryAgainClick() {
    setPlaying(false);
    setResults("");
  }

  return (
    <TableStyled playing={playing} results={(results !== "") ? 1 : undefined}>
      <span className="line"></span>
      {!playing ? (
        <>
          <Chip name="paper" onClick={onClick} />
          <Chip name="scissors" onClick={onClick} />
          <Chip name="rock" onClick={onClick} />
        </>
      ) : (
        <>
          <div className="in-game">
            <Chip
              playing={playing}
              name={pick}
              isShadowAnimated={results === "win"}
            />
            <p>You Picked</p>
          </div>
          <div className="in-game">
            <Chip
              playing={playing}
              name={housePick}
              isShadowAnimated={results === "lose"}
            />
            <p>The house Picked</p>
          </div>
          <div className="results">
            {results && (
              <>
                <h2>You {results}</h2>
                <WhiteButton onClick={handleTryAgainClick}>
                  Try Again
                </WhiteButton>
              </>
            )}
          </div>
        </>
      )}
    </TableStyled>
  );
};
