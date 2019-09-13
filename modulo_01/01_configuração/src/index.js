import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


const App = () => {

  return (
    <div className="App">
      Hello World
    </div>
  )
}
	/*
		Introdução ao ReactJS.
		Noções de como configurar o ReactJS.
	*/

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
