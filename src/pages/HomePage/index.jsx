import React from 'react'
import gif from '../../assets/img/wywkm.gif'
import { Link } from 'react-router-dom'

function index() {
  
  return (
    <>
      <h1>Why You Wanna Kill Me???</h1>
      <img
        className="mainGif"
        src={gif}
      />
      <ul className="linkBlocks">
        <Link to="/heroes"><li>Find your Hero</li></Link>
        <Link to="/fight"><li>Fight!</li></Link>
      </ul>
    </>
  )
}

export default index
