import React from 'react'



class Windowsize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth,
       windowHeight: window.innerHeight
      };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth, 
      windowHeight: window.innerHeight 
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }


  render() {
    const { windowHeight } = this.state;
    const { windowWidth } = this.state;

    return (
   <div>
      <div>Current window Height: {windowHeight} </div>
      <div>Current window Width: {windowWidth} </div>
    </div>
    );
  }
}



export default Windowsize
