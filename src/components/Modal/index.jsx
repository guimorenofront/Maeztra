import React from 'react';
import './index.global.scss'
import icon from '../../assets/ModalIcon/newsletter-mail-icon.svg'
import submit from '../../assets/ModalIcon/Submit.svg'
import imgDesk from '../../assets/ModalIcon/image 4.png'
// import { Container } from './styles';

function Modal({func, value}) {
    return (
        <div className='ModalBG' style={{display:value}}>
            <img src={imgDesk} alt="img" />
            <div className='ModalContent'>
                <button onClick={() => func("none")} className='Close'>
                    Fechar
                </button>
                <div className='ModalBody'>
                    <div className='ModalLine'>
                        <img src={icon} alt="Icon" />
                        <p>BEM VINDO A MAEZTRA</p>
                    </div>
                    <div className='ModalLine middle'>
                        <p>Receba em Primeira mão</p>
                        <p>desconto e ofertas exclusivas</p>
                    </div>
                    <div className='ModalLine'>
                        <input type="text" placeholder='Digite seu e-mail' />
                        <button>ENVIAR <img src={submit} alt="Submit" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;