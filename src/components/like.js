

import { Component } from 'react';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
    }

    addLike = () => {
        this.setState({ likes: (this.state.likes + 1) });
      };

    render() {
      return <p className="btn" onClick={() => this.addLike()}> ♥︎  {this.state.likes}</p>;
    }
  }
  
  export default Like;