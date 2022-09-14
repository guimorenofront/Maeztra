import {
    Routes,
    Route
} from 'react-router-dom'
import DesafioDeLayout from './Pages/DesafioDeLayout'
import Home from './Pages/Home'
import QuestaoF from './Pages/Questao1'
import QuestaoS from './Pages/Questao2'
import QuestaoT from './Pages/Questao3'
import QuestaoFour from './Pages/Questao4'
import QuestaoFive from './Pages/Questao5'


export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Exe1' element={<QuestaoF />}></Route>
            <Route path='/Exe2' element={<QuestaoS />}></Route>
            <Route path='/Exe3' element={<QuestaoT />}></Route>
            <Route path='/Exe4' element={<QuestaoFour />}></Route>
            <Route path='/Exe5' element={<QuestaoFive />}></Route>
            <Route path='/layout' element={<DesafioDeLayout />}></Route>
        </Routes>
    )
}