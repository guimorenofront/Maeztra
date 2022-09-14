import React from 'react';
import Background from '../components/Background/background';
import { Link } from 'react-router-dom'
// import { Container } from './styles';

function Home() {
    return (
        <div>
            <Background/>
            <div className='App'>
                <ul>
                    <li><Link to={"/Exe1"}>Questão 1</Link></li>
                    <li><Link to={"/Exe2"}>Questão 2</Link></li>
                    <li><Link to={"/Exe3"}>Questão 3</Link></li>
                    <li><Link to={"/Exe4"}>Questão 4</Link></li>
                    <li><Link to={"/Exe5"}>Questão 5</Link></li>
                </ul>
                <div>
                    <Link to={"/layout"}>Desafio de Layout</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;