import React, { useState } from 'react';
import Background from '../components/Background/background';
import './index.global.scss'
// import { Container } from './styles';

function QuestaoS() {
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState([])
    const handleChange = event => {
        setValue(event.target.value);
        if (event.target.value == 0 || null) {
        }
        console.log('value is:', event.target.value);
    };

    const Valid = (value) => {
        const arr = []
        value.split(',').map((e)=>{
            arr.push(parseInt(e))
        })
        const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
        const duplicatas = findDuplicates(arr)
        setMessage(duplicatas)
    }
    return (
        <div>
            <Background />
            <div className='Questao QuestaoS'>
                <h1>Questão 2</h1>
                <div className='InputBox'>
                    <input type="text" value={value} onChange={handleChange} />
                    <button onClick={()=>Valid(value)}>Validar</button>
                </div>
                <h3>[{message.map((e, i)=> {
                    return `${e},`
                })}]</h3>
                <p>Separe os Numeros com Virgulas</p>
            </div>
        </div>
    );
}

export default QuestaoS;