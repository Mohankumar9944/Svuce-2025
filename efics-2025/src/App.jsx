
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from "./Home"
import Contact from "./Contact"
import Navbar from "./Navbar"
import ConferenceTheme from "./ConferenceTheme"
import Schedule from './Schedule'
import Calls from './Calls'

function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/ConferenceTheme" element={<ConferenceTheme/>}/>
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/Calls" element={<Calls/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
