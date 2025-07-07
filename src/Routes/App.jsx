
import React from 'react'
import Home from '../components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from '../components/Cadastro'
import Produtos from '../components/Produtos'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Cadastro' element={<Cadastro/>}/>
                <Route path='/Produtos' element={<Produtos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

