
import React from 'react'
import Home from '../components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from '../components/Cadastro'
import Header from '../components/Header'
import Notebook from '../components/Notebook'
import Gabinete from '../components/Gabinete'
import Monitores from '../components/Monitores'
import Setups from '../components/Setups'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Cadastro' element={<Cadastro/>}/>
                <Route path='/produtos/notebook' element={<Notebook/>}/>
                <Route path='/produtos/gabinete' element={<Gabinete/>}/>
                <Route path='/produtos/setups' element={<Setups/>}/>
                <Route path='/produtos/monitores' element={<Monitores/>}/>
                <Route path='/Header' element={<Header/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

