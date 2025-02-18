import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Routes/Home'
import Hollywood from '../Routes/Hollywood'
import Bollywood from '../Routes/Bollywood'
import Technology from '../Routes/Technology'
import Food from '../Routes/Food'
import Fitness from '../Routes/Fitness'
import StoreCompo from '../Store/StoreCompo'
import ReadBlogCompo from '../Routes/ReadBlogCompo'
import Footer from './Footer'
import NavBar from './NavBar'

export default function RouteCompo() {
    return (
        <div>
    
            <NavBar /> <br/>
            <StoreCompo>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/bollywood' element={<Bollywood />} />
                    <Route path='/technology' element={<Technology />} />
                    <Route path='/hollywood' element={<Hollywood />} />
                    <Route path='/fitness' element={<Fitness />} />
                    <Route path='/food' element={<Food />} />
                    <Route path='/blog/:id' element={<ReadBlogCompo />} />
                </Routes>
            </StoreCompo>
            <Footer />
        </div>
    )
}
