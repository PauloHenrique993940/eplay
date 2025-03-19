import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Product from './pages/Product/'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorias />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
