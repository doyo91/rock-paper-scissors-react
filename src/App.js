import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { Table } from "components/Table";
import { Rules } from "components/Rules";

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
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
