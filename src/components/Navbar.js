import React from 'react'

function navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" id="nav-main">
     <nav className='nav'>
        < a href ="/" className='site-title'> Pegases </a>
        <ul>
            <li>
                < a href='/home'> Home</a> | 
                < a href='/about'>about</a>
            </li>
        </ul>
     </nav>
</nav>
    
  )
}

export default navbar
