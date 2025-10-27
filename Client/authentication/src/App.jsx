import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/"element={<Home />}></Route>

    <Route path="/register"element={<Register />}></Route>

     <Route path="/login"element={<Login />}></Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
