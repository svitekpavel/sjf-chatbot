import React from 'react'
import './App.css'

import Message from './components/Message'
import UserInput from './components/UserInput'

class App extends React.Component {
  state = {}

  handleProcessMessage = (value) => {
    alert('User wrote:' + value)
  }

  render() {
    return (
      <div className="App">
        <Message from="Good bot" text="Hey, it's me.." />
        <Message from="Good bot" text="Ask me about any of these topics:" />
        <Message from="User" text="Okay, tell me about <this>" />
        {/* Task: Refactor Message to support following syntax */}
        {/* <Message from="Good bot">
          Ask me about any of of these topics:
          <ul>
            <li>Shedule an appointment</li>
            <li>Book a room</li>
            <li>Help</li>
          </ul>
        </Message> */}
        {/* Task: Add a property to Message to support  */}
        {/* Task: Create a new component <MessageFrom /> with following syntax */}
        {/* <Message>
          <MessageFrom>Good bot</MessageFrom>
          Hey, it's me..
        </Message> */}

        <UserInput onSubmit={this.handleProcessMessage} />
      </div>
    )
  }
}

export default App
