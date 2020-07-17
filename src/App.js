import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { Table } from "components/Table";
import { Rules } from "components/Rules";
import { ScoreContextProvider } from "context/ScoreContext";

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);

  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
function App() {
  return (
    <ScoreContextProvider>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContextProvider>
  );
}

export default App;
