import React from 'react';
import { Link } from 'react-router-dom';
import mcitylogo from '../../Resources/images/logos/mancityLogo.png';
 

export const CityLogo = (props) =>{
  console.log(`${mcitylogo}`)
  const template = <div
  className='img_cover'
  style={{
    width: props.width,
    height:props.height,
    background:`url(${mcitylogo}) no-repeat`
  }}
  ></div>
  if(props.link){
      return(
        <Link to={props.linkTo} className="link_logo">
        {template}
        </Link>
      )
  } else {
    return template
  }


}