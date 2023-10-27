import { Routes, Route } from 'react-router-dom';
import BasicLayout from "./layouts";
import * as Pages from './pages'
import './assets/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Pages.HomePage/>}/>
          <Route path="/heroes" element={<Pages.HeroesList />}/>
          <Route path="/heroes/:id" element={<Pages.HeroPage />}/>
          <Route path="/fight" element={<Pages.FightPage/>}/>
          <Route path='*' element={<Pages.PageNotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
