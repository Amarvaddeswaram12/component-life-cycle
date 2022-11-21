import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidMount = () => {
    console.log('component did mount called')
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
