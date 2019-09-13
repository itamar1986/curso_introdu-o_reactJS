import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
  return a + b
}
//criando a funcao e dando o retorno
function primeiroJSX() {
  return (
    <div className="teste">
      ISS - Introdução ao ReactJS
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}


const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
	  //para executar qualquer javaScrip tem que estar entre chaves sempre
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

	/*
		Introdução ao ReactJS.
		Noções de como configurar o ReactJS.
	*/