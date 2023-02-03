import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { CreatePost } from "./pages/create-post/create-post"
import Home from "./pages/main/Home"
import Login from "./pages/Login"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
