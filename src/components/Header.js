import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <ul>
  <li><a href="#navbar">Navbar</a></li>
  
  <li style={{float:"right"}}><a class="active" href="#about">About</a></li>
     </ul>

    </div>
  )
}

export default Header
