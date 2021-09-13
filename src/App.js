import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import TopBar from './Components/TopBar'
import News from './Components/News'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
        {/* <TopBar/> */}
      </div>
    )
  }
}

