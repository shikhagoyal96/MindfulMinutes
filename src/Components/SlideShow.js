import React from "react";
//import { Spring} from "react-spring/renderprops";
import {Transition, animated} from 'react-spring/renderprops';
const defaultStyles = {
  width: '100%',
  color: '2e364b',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3em',
  //textTransform: 'uppercase',
}

export default class TransitionsExample extends React.PureComponent {
  state = { items: [] }

  async componentDidMount() {
    this.t1 && clearTimeout(this.t1)
    this.t2 && clearTimeout(this.t2)
    this.t3 && clearTimeout(this.t3)

    this.setState({ items: ['An idea to enhance personal development... '] })
    this.t1 = setTimeout(
      () => this.setState({ items: ['An idea to enhance personal development... '] }),
      1500
    )
    this.t2 = setTimeout(
      () => this.setState({ items: ['with the help of group accountability...'] }),
      3500
    )
    this.t3 = setTimeout(() => this.setState({ items: ['Mindful Minutes presents the first initiative...'] }), 5500)
  }

  render() {
    return (
      <div className={"section"}>
      <div className="section-content" id="slideshow1">
      <div className='centered'>    
      <div
        style={{
          cursor: 'pointer',
          margin: 0,
          padding: 0,
        }}
        onClick={() => this.componentDidMount()}>
        <Transition
          items={this.state.items}
          //initial={null}
          from={{  height: 0, opacity: 0 }}
          enter={{ height: 50, opacity: 1 }}
          leave={{ height: 0, opacity: 0 }}
          update={{ }}
          trail={200}>
          {item => styles => (
            <animated.div style={{ ...defaultStyles, ...styles }}>
              {item}
            </animated.div>
          )}
        </Transition>
      </div>
      </div>
      </div>
    </div>
    )
  }
}