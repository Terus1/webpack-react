import React, { useState } from "react";

import "../styles/Header.css"



function Header(props) {
  let [count, setNewCount] = useState(0)
  const handleClick = () => {
    console.log('I was clicked')
    setNewCount(count + 1)
  }
  return (
    <header>Привет я хедер
      <button className={"some-button"} onClick={ handleClick }>{props.buttonName} clicked: {count} times</button>
    </header>

  )
}





export default Header;


