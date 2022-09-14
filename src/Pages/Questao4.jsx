import React, { useState } from 'react';
import Background from '../components/Background/background';
import './index.global.scss'
// import { Container } from './styles';

function QuestaoFour() {
    const [message, setMessage] = useState("")
    const data = [[1960, 2005], [1945, 2008], [1938, 1999]]


    const CalcularAnosDeTabalho = (array) => {
        var TotalDeAnosTrabalhados = []
        var respData = []

        for (var i = 0; i < array.length; i++) {
            var data = array[i]
            TotalDeAnosTrabalhados.push((data[0] - data[1]) * -1)
            respData.push(`No período ${array[i]} o colaborador teve ${TotalDeAnosTrabalhados[i]} anos trabalhados. 
          `)
        }

        setMessage(`${String(respData)}`)
    }

    return (
        <div>
            <Background />
            <div className='Questao QuestaoFour'>
                <h1>Questão 4</h1>
                <div className='InputBox'>
                    <p>A Matrix de dados Ultilizada foi: {data.map((e) => {
                        return ` |${e}| `
                    })}</p>
                    <button onClick={() => CalcularAnosDeTabalho(data)}>Gerar</button>
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default QuestaoFour;