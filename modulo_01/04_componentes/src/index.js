import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import "./styles.css"

function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      Olá Mundo
      <Button onClick={() => soma(10, 20)} name="ISS" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(40, 20)} name="iss" />
        </ComponentB>
      </ComponentA>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
/*
	Introdução ao ReactJS.
	Noções de como Renderizar elementos.
*/