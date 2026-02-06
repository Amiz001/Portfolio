import { useState } from 'react'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Main from './pages/index4'

//import Test from './pages/index'
//import Hero from './pages/index2'
//import Test2 from './pages/index3'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        
        {/*<Route path='/test' element={<Hero />} />
        <Route path='/test1' element={<Test2 />} />
        <Route path='/test2' element={<Test />} />*/}

      </Routes>
    </Router>
  )
}

export default App
