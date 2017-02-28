import React, { Component } from 'react';
import classNames from 'classnames';
import FlipMove from 'react-flip-move';
import './App.css';


class App extends Component {
constructor(props) {
super(props);
this.state= {1: 6, 2: 6, 3: 6, 4: 6, 5: 6, 6:6};
this.randomState = {1: 3, 2: 1, 3: 6, 4: 6, 5: 2, 6: 1};
}
  render() {
    return (
<div>
<div id="container">
{[0,1,2,3,4,5,6].map(pond => (
<div key={pond} className={classNames('pond',`p${pond}`)}></div>
))}

{[0,1,2,3,4,5,6].map(pond => (
Object.keys(this.state).filter(k => this.state[k] === pond).map(k => (
<p className={classNames(`p${pond}`)} key={k}>{k}</p>
))))}
<button onClick={() => this.setState(this.randomState)}>CLICK</button>
</div>

</div>
    );
  }
}

export default App;
