import React, { Component } from 'react'
import hello from './index.module.css'

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h2 className={hello.title}>Hello</h2>
      </div>
    )
  }
}
