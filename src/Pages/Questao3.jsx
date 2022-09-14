import React, { useState } from 'react';
import Background from '../components/Background/background';
import './index.global.scss'
// import { Container } from './styles';

function QuestaoT() {
    const [value, setValue] = useState(0)
    const handleChange = event => {
        setValue(event.target.value);
        if (event.target.value === 0 || null) {
        }
        console.log('value is:', event.target.value);
    };
    return (
        <div>
            <Background />
            <div className='Questao QuestaoT'>
                <h1>Questão 3</h1>
                <div className='InputBox'>
                    <input type="text" value={value} onChange={handleChange} />
                    <button>Gerar</button>
                </div>
            </div>
        </div>
    );
}

export default QuestaoT;