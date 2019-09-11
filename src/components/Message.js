import React from 'react'
import TimeAgo from 'react-timeago'
import './Message.css'

export default function Message(props) {
  const isUser = props.from === 'User'
  const messageClasses = isUser ? 'message right' : 'message bot'
  const boxClassess = isUser ? 'box box-right' : 'box box-left'

  return (
    <div className={messageClasses}>
      <div className={boxClassess}>
        {/* <div style={{ color: 'red' }}>
          <strong>{props.from}</strong>
        </div> */}
        {props.children}
        <div className="time">
          <TimeAgo date={props.time} />
        </div>
      </div>
    </div>
  )
}
