import { Routes, Route } from 'react-router'
import Nav from "./Nav"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Card from "./Card"
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Nav />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
export default App