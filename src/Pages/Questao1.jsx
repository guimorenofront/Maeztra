import React, { useState } from 'react';
import Background from '../components/Background/background';
import './index.global.scss'
// import { Container } from './styles';

function QuestaoF() {
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState("Insira um valor")
    const Values = 564141561563


    function Order(value) {
        console.log("testee")
        let myFunc = num => Number(num);
        let ascending = 0
        let descending = 0
        let desorder = 0
        var intArr = Array.from(String(value), myFunc);
        if (value != 0) {
            intArr.map((e, i) => {
                if (i == 0) {
                    console.log("teste")
                } else {
                    if (intArr[i - 1] == e || e == intArr[i - 1] + 1) {
                        ascending++
                    } else if (intArr[i - 1] == e || e == intArr[i - 1] - 1) {
                        descending++
                    } else {
                        desorder++
                    }
                }
            })
            if (desorder > 0) {
                setMessage("Desordenado")
            } else if (ascending < descending) {
                setMessage("Ordenado")
            } else if (ascending > descending) {
                setMessage("Ordenado")
            }
            ascending = 0
            descending = 0
            desorder = 0
        } else {
            alert("Um valor")
        }
    }
    const handleChange = event => {
        setValue(event.target.value);
        if(event.target.value == 0 || null) {
            setMessage("Insira um valor")
        }
        console.log('value is:', event.target.value);
    };
    return (
        <div>
            <Background />
            <div className='Questao'>
                <h1>Questão 1</h1>
                <div className='InputBox'>
                    <input type="text" value={value} onChange={handleChange} />
                    <button onClick={() => Order(value)}>Validar</button>
                </div>
                <h3>{message}</h3>
            </div>
        </div>
    );
}

export default QuestaoF;