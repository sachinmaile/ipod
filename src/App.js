import React from "react";
import MenuPad from "./MenuPad";
import Screen from "./Screen";

class App extends React.Component {
  constructor(){
    super();
    this.state={}
  }
  render(){
    return (
      <div className="App">
        <Screen/>
        <MenuPad/>
      </div>
    );
  }
}

export default App;
