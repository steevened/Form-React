import { useState } from 'react'
import './App.css'
import Form from './components/Form'

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
    <div className='App'>
      <Form
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        name={name}
        text={text}
      />
    </div>
  )
}

export default App
