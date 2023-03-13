import './App.css'
import Carousel from './components/Carousel';
import {slides} from './data/carouselData.json'

function App() {
 

  return (
    <div className="App">
     <div>

       <Carousel data={slides}/>

     </div>
    </div>
  )
}

export default App
