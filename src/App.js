import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  min-height: 100vh;
  padding: 2em;
  
`;
function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
