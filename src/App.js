import React, { Component } from 'react';
import classNames from 'classnames';
import FlipMove from 'react-flip-move';
import './App.css';

const dieRoll = () => 1 + Math.floor(Math.random() * 6);

class App extends Component {
constructor(props) {
super(props);
this.state= {1: 6, 2: 6, 3: 6, 4: 6, 5: 6, 6:6};
}
  render() {
    return (
<div>
<FlipMove delay={500} duration={5000} easing="ease-out" staggerDurationBy={200}>
{[1,2,3,4,5,6].map(d => (
<Duck key={d} id={d} pond={this.state[d]} pondseq={1} />
))}
</FlipMove>

{[0,1,2,3,4,5,6].map(pond => (
<Pond key={pond} id={pond} />
))}

<button onClick={() => this.setState({[dieRoll()]: dieRoll()})}>CLICK</button>
</div>
    );
  }
}

export default App;

const Pond = ({id}) => (
<div className={classNames('pond',`p${id}`)}></div>
);

// Needs to be not-stateless for FlipMove
class Duck extends Component {
render() {
const {id, pond, pondseq} = this.props;
return (
<div className="duck" style={{zIndex: id, left: `${2+pond*14}vmin`}}>{id}</div>
);
}
};

