import React from 'react'

function Button(props) {

  const { name, onClick } = props

  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button
/*
	Introdução ao ReactJS.
	Noções de como Renderizar elementos.
*/