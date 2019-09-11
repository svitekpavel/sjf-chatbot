import React from 'react'
import './Content.css'

export default class Content extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }

  componentDidUpdate() {
    this.ref.current.scrollTop = this.ref.current.scrollHeight
  }

  render() {
    return (
      <div ref={this.ref} className="content">
        {this.props.children}
      </div>
    )
  }
}
