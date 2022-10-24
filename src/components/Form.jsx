import Card from './Card'

function Form({ handleInput, handleSubmit, name, text }) {
  return (
    <Card>
      <h1>{text ? `Welcome ${text}.` : ` Enter your Name:`}</h1>
      <input
        type='text'
        onChange={handleInput}
        value={name}
        placeholder='Enter your name'
      />
      <button className='btn' onClick={handleSubmit}>
        Send
      </button>
    </Card>
  )
}

export default Form
