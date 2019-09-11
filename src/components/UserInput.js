import React from 'react'
import './UserInput.css'

export default function UserInput({ onSubmit }) {
  let textInput = React.createRef()

  function handleSubmit(event) {
    const inputValue = textInput.current.value
    onSubmit(inputValue)

    // clear text
    textInput.current.value = ''

    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="UserInput">
      <input type="text" ref={textInput} webkit-speech />
      {/* <input type="submit" value="Send" /> */}
    </form>
  )
}
