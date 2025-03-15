import React from 'react'
import Menu from '../../components/navbar'
import FormularioAtualizacao  from '../../components/formularioAtualizacao/index'
import './index.css'

export default function index() {
  return (
    <div className='container-update'>
       <Menu />

       <FormularioAtualizacao />
    </div>
  )
}
