import React from 'react'

const Navbar = ({text}) => {
  
  return (
    <div>
         <nav>
            <ul>
                <li><div class="dropdown">
                  <a class="dropbtn">Tutorials</a>
                  <div class="dropdown-content">
                  <a href="#">drm 1</a>
                  <a href="#">drm 2</a>
                  <a href="#">drm 3</a>
                  </div>
                  </div></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>More</a></li>
                <li>{text}</li>
            </ul>
            <div class="search">
                <input type="text" placeholder="search..." id="search_input"/>   
                <div class="mkb0">               
                <a class="mkb1"><img class="profile" src="../public/masum3.jpg"></img></a>
                  <div class="mkb2">
                  <a href="#">Profile</a>
                  <a href="#">Projects</a>
                  <a href="#">Extra</a>
                  </div>    
                  </div>             
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
