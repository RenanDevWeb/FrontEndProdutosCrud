import React from 'react'
import Menu from '../../components/navbar/index'
import FormularioCadastro from '../../components/formularioCadastro/index'
import './index.css'

export default function addProduto() {
  return (
    <div className='container_cadastro'>
        <Menu />
        
        <FormularioCadastro />
    </div>
  )
}
