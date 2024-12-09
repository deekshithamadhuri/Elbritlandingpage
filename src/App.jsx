import { useState } from 'react'
import Heading from './Components/Heading'
import './App.css'
import Herosection from './Components/Herosection'
import Features from './Components/Features'
import Ingredients from './Components/Ingredients'
import Latestnews from './Components/Latestnews'
import { Footer } from './Components/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Heading/>
     <Herosection />
     <Features />
     <Ingredients />
     <Latestnews />
     <Footer/>
    </>
  )
}

export default App
