import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import ArrayCards from './ArrayCards'
import Hero from './Hero'
import dataActivity from '.././data'


class Home extends Component {
  constructor(){
    super()
    this.state = {
      activities: [],
      input: ""
    }
  }

  componentDidMount(){
    this.setState({
      activities: dataActivity
    })
  }

  onInputChange = (e) => {
    this.setState({input:e.target.value})
  }

  render(){

    const filterActivities = this.state.activities.filter((activity) => {
      return activity.name.toLowerCase().includes(this.state.input.toLowerCase())
    })

    return (
      <div>
        <Hero onInputChange={this.onInputChange}/>
        <p>Activities</p>
        <ArrayCards dataActivity={filterActivities} />
        
      </div>
);
  }
  
}

export default Home;