import React, {useState} from "react";
import "../styles/App.css"

import Header from "./Header"
import Main from "./Main"


function App() {
  const buttonName = "Some button updated"

  return (
      <React.Fragment>
        <Header buttonName={buttonName}/>
        <Main />
      </React.Fragment>
    )

}

export default App
