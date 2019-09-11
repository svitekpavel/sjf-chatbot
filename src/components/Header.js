import React from 'react'
import BotImage from './bot-big.svg'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <img src={BotImage} width="96" height="71" />
      My to-do list bot
    </div>
  )
}
