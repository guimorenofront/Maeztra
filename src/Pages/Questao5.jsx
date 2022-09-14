import React, { useState } from 'react';
import Background from '../components/Background/background';
import './index.global.scss'
// import { Container } from './styles';

function QuestaoFive() {
    const [message, setMessage] = useState("Calcule o valor clicando no Botão!")
    const data = [1, 2, 3, 4, 5, 6];

    //utilizando reduce parar calcular as possibilidade

    const reducer = (accumulator, currentValue) => accumulator * currentValue

    function possibilityGen (data) {
        setMessage(`Você tem ${data.reduce(reducer)} possibilidades parar tirar foto do grupo.`)
    }
    return (
        <div>
            <Background />
            <div className='Questao QuestaoFour'>
                <h1>Questão 5</h1>
                <div className='InputBox'>
                    <p>A Matrix de dados Ultilizada foi: {data.map((e) => {
                        return ` |${e}|`
                    })}</p>
                    <button onClick={()=> possibilityGen(data)}>Validar</button>
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default QuestaoFive;