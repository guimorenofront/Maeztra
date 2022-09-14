import React from 'react';
import './index.global.scss'
// import { Container } from './styles';

function ProductCard({color1, color2, color3,color4, Price, Name, Desc, img}) {
  return (
    <div className='CardPDP'>
        <img src={img} alt="img" />
        <div className='ColorsGroup'>
            <div style={{width:"27px", height:"27px", backgroundColor:`${color1}`}}></div>
            <div style={{width:"27px", height:"27px", backgroundColor:`${color2}`}}></div>
            <div style={{width:"27px", height:"27px", backgroundColor:`${color3}`}}></div>
            <div style={{width:"27px", height:"27px", backgroundColor:`${color4}`}}></div>
        </div>
        <div className='ProductNameAndPrice'>
            <p className='PDPPrice'>{Price}</p>
            <p className='PDPName'>{Name}</p>
        </div>
        <div>
            <p className='ProductDescri'>
                {Desc}
            </p>
        </div>
        <button>Adicionar</button>
    </div>
  );
}

export default ProductCard;