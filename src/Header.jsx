import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/tictactoc">Tic Tac Toc</Link>
    </div>
  )
}

export default Header
