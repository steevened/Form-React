import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import About from './components/About'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [name, setName] = useState('')
  const [text, setText] = useState(name)

  const handleInput = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    setText(name)
    setName('')
  }

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Form
                  handleInput={handleInput}
                  handleSubmit={handleSubmit}
                  name={name}
                  text={text}
                />
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <About />
      </div>
    </Router>
  )
}

export default App
