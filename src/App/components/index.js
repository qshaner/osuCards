import logo from '../logo.svg';
import '../App.css';
import React, {Component} from "react"

class App extends Component{

  componentDidMount(){
    this.props.readEndpoint('https://contenttest.osu.edu/v2/events')
  }

  render() {
    console.log("THIS: ", this.props.data)

    let events = ""
if(this.props.data.json){
  console.log("HI ",this.props.data.json.data)
  events = this.props.data.json.data.events.map((event)=>{
    return (
    <div className="card">
      <div className="header">
      <div className="headerContent">
          <h3 style={{color: '#bb0000'}}>{event.title}</h3>
          <h4>{event.description}  |  {event.label}</h4>
          <p className = "tags"> {event.tags.join(", ")}</p>
        </div>
      </div>
      <p className="cardContent">{event.content}</p>
      <a className="more" href={event.link}>More Details Here</a>
    </div>
  )})
}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        {events}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
