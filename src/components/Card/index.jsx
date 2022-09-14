import React from 'react';
import './index.global.scss'
// import { Container } from './styles';

function Card({img, Title, text}) {
  return (
    <div className='Card'>
        <div className='CardContent'>
            <img src={img} alt="Icon" />
            <div className='Text'>
                <h5>{Title}</h5>
                <p>{text}</p>
            </div>
        </div>
    </div>
  );
}

export default Card;