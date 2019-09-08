import React from 'react'
import './Message.css'

export default function Message(props) {
  return (
    <div className="Message">
      <b>{props.from}</b>: {props.text}
    </div>
  )
}
