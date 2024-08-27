import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './assets/Pages/Home'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.esm.min.js"
import About from './assets/Pages/About.jsx'
import Gallery from './assets/Pages/Gallery.jsx'
import Plan from './assets/Pages/Plan.jsx'
import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import Builtshow from './Component/Builtshow.jsx'
import Address from './Component/Address.jsx'
import Contact from './assets/Pages/Contact.jsx'
function App() {
  

  return (
    <>



      <BrowserRouter>
   <Header/>
    <Routes>
     <Route path='/' element={<Home/>}>
     
     </Route>
     <Route path='/about' element={<About/>}>
     
     </Route>
     <Route path='/gallery' element={<Gallery/>}>
     
     </Route>
     <Route path='/plan' element={<Plan/>}>
    
     </Route>
     <Route path='/contact' element={<Contact/>}>
    
    </Route>
    
     
    </Routes>
    <Footer/>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
