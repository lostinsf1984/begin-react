import React from 'react';
import IsEqual from 'react-fast-compare';
import Hello from './Hello';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  return (
    <Wrapper>
      <Hello name={"이봉주"} color={"red"}/>
      <Hello color={"blue"}/>
      <Hello isSpecial={true}/>
      <Counter />
      <InputSample/>
      <UserList/>
    </Wrapper>
  );
}

export default React.memo(App,IsEqual);
