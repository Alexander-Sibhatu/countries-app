import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Favourites from '../pages/Favourites';

type Props = {}

const Index = (props: Props) => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/> 
                <Route path='/favourites' element={<Favourites />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Index