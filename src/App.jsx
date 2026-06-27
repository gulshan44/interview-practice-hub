import React from 'react'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import BackGroundChange from './component/BackGroundChange'
import ToggleText from './component/ToggleText'
import InputMirror from './component/InputMirror'
import Testimonial from './component/Testimonial/Testimonial'
import Weather from './component/Weather/Weather'
import ToDOList from './component/ToDOList'
import SearchFilter from './component/SearchFilter'
import PasswordGenerator from './component/PasswordGenerator'
import StopWatch from './component/StopWatch'
import Accordion from './component/Accordion'
import QuizApp from './component/QuizApp'
import QRGenerator from './component/QRGenerator'
import ExpenseTracker from './component/ExpenseTracker'
import Projects from './component/pages/Projects'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/todolist' element={<ToDOList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/backgroundchanger' element={<BackGroundChange />} />
          <Route path='/toggletext' element={<ToggleText />} />
          <Route path='/inputmirror' element={<InputMirror />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/searchfilter' element={<SearchFilter />} />
          <Route path='/passwordgenerator' element={<PasswordGenerator />} />
          <Route path='/stopwatch' element={<StopWatch />} />
          <Route path='/accordion' element={<Accordion />} />
          <Route path='/quizapp' element={<QuizApp />} />
          <Route path='/qrgenerator' element={<QRGenerator />} />
          <Route path='/expensetracker' element={<ExpenseTracker />} />
          <Route path='/projects' element={<Projects />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App