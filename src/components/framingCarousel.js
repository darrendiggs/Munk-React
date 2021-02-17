

import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import frame1 from '../Data/imgs/frame1.jpg'
import frame2 from '../Data/imgs/frame2.jpg' 
import frame3 from '../Data/imgs/frame3.jpg' 
import frame4 from '../Data/imgs/frame4.jpg' 
import frame5 from '../Data/imgs/frame5.jpg'  

const items = [
  {
    src: frame1,
    key: '1'
  },
  {
    src: frame2,
    key: '2'
  },
  {
    src: frame3,
    key: '3'
  },
  {
    src: frame4,
    key: '4'
  },
  {
    src: frame5,
    key: '5'
  }
];

function FrameCarousel(props){
  return(
    <UncontrolledCarousel items={items} />
  )
}

export default FrameCarousel;