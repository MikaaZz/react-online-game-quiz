import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import CollectInfos from './pages/CollectInfos'
import IntroMap from './pages/IntroMap'
import Questions from './pages/Questions'
import FinalConquest from './pages/Conquest/FinalConquest'
import NormalConquest from './pages/Conquest/NormalConquest'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/registro' element={<CollectInfos />}></Route>
      <Route path='/mapa' element={<IntroMap />}></Route>
      <Route path='/questions/:questionNumber' element={<Questions />} />
      <Route path='/conquistas' element={<NormalConquest/>}></Route>
      <Route path='/conquistasfinais' element={<FinalConquest/>}></Route>
    </Routes>
  )
}
