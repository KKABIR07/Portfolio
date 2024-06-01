import Navbar from "./Navbar"
import Footer from "./Footer"
import Card from "./Card"
import VideoBg from "./assets/VideoBg.mp4"
import Map from "./Map"
import "./App.css"
function App() {
  
  let name = 'Masum'
  return (
    <>
      <div class="main">
        <video src={VideoBg} autoPlay loop muted />
        <Navbar text={name}/>
        <Card/>
        <Map/>
        <Footer/>
      </div>
      
     
    </>
  )
}
export default App
