import React from 'react'
import './App.css'
import TimeAgo from 'react-timeago'

import Header from './components/Header'
import Content from './components/Content'
import Message from './components/Message'
import UserInput from './components/UserInput'

class App extends React.Component {
  state = {
    messages: [
      // {
      //   from: 'Good bot',
      //   text: "Hey, it'is me..",
      //   time: new Date(),
      // },
      {
        from: 'Good bot',
        text:
          'If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe.',
        time: new Date(),
      },
      {
        from: 'User',
        text:
          'If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe.',
        time: new Date(),
      },
    ],
    todoList: [
      {
        text: 'Clean my room',
        completed: false,
      },
      {
        text: 'Play Super Mario',
        completed: true,
      },
    ],
  }

  addUserMessage = (text) => {
    this.setState((state) => {
      return {
        messages: [
          ...state.messages,
          {
            from: 'User',
            text: text,
            time: new Date(),
          },
        ],
      }
    })
  }
  addBotMessage = (text) => {
    this.setState((state) => {
      return {
        messages: [
          ...state.messages,
          {
            from: 'Good bot',
            text: text,
            time: new Date(),
          },
        ],
      }
    })
  }

  handleProcessMessage = (value) => {
    const words = value.split(' ')

    if (value === 'clear') {
      this.setState({ messages: [] })
      return
    }

    // Add new message to state
    this.addUserMessage(value)

    // Mark TODO as complete
    // Value: complete 3
    if (value.includes('complete')) {
      const itemIndex = Number(words[1]) - 1
      const newTodoList = this.state.todoList.slice() // copy to new array

      return
    }

    // Add new task to TODO list
    // User: "add: clean the dishes"
    if (value.includes('add')) {
      const indexOfAdd = words.indexOf('add') + 1
      const todoText = words.slice(indexOfAdd).join(' ')

      this.setState((state) => ({
        todoList: [
          ...state.todoList,
          {
            text: todoText,
            completed: false,
          },
        ],
      }))

      this.addBotMessage('I added ' + todoText + ' to your list')

      return
    }

    // Show TODO list
    if (value.includes('show') && value.includes('list')) {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            from: 'Good bot',
            text: this.renderTodoList(),
          },
        ],
      })
      return
    }
  }

  renderTodoList = () => {
    const todoItems = this.state.todoList.map((obj) => {
      if (obj.completed) {
        return (
          <li>
            <strike>{obj.text}</strike>
          </li>
        )
      } else {
        return <li>{obj.text}</li>
      }
    })
    return <ol>{todoItems}</ol>
  }

  render() {
    const listItems = this.state.messages.map((obj) => (
      <Message from={obj.from} time={obj.time}>
        {obj.text}
        {/* <div className="time">
          <TimeAgo date={obj.time} />
        </div> */}
      </Message>
    ))

    const time = new Date()

    return (
      <>
        <div className="App">
          <Header />
          <Content>{listItems}</Content>
          <div className="StickyFooter">
            <UserInput onSubmit={this.handleProcessMessage} />
          </div>
        </div>
      </>
    )
  }
}

export default App
