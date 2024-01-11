import React from 'react'
import flag from "../images/flag.jpeg"

export default function Header() {
  return (
    <header>
        <img src={flag} alt="Football Cliches Flag" />
        <h1>Happy Hunting Grounds Solver</h1>
    </header>
  )
}
