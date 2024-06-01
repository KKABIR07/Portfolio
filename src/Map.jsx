import React from 'react'

const Map = () => {
    let skill=["HTML","CSS","JS","EJS","NODE.JS","EXPRESS JS","MONGODB","REACT JS"];
  return (
    <div class="map2">
        <h1 >Skills:</h1>
        <ul className='map'>
            {skill.map((item)=>(
                <li class="map1">{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Map
