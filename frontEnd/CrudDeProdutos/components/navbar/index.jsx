import React from 'react'

import './index.css'
import { FaHouse,FaBook  } from "react-icons/fa6";
import {Link, NavLink} from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <nav className="nav">
         <ul>
          <li className='logo'>MENU</li>

          <li> <FaHouse /><NavLink to="/" > HOME</NavLink></li>
          <li><FaBook /><NavLink to="/produtos" > Produtos</NavLink></li>
         </ul>
         
      </nav>
    </>
  )
}


