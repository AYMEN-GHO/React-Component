import React, { Component } from 'react';
import Desert from './Desert.jpg';

class ProfilPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <img src={Desert} alt="imageInSrc" height={200} />
      </div>
     );
  }
}
 
export default ProfilPhoto;