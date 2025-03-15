import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {FaCheck} from 'react-icons/fa6'
import axios from 'axios'
import './index.css'

export default function index() {
  const [produto,setProduto] = useState({
   codigoProduto: null,
   nome: "",
   descrisao: "",
   preco: null
  })
 
   const MySwal = withReactContent(Swal)


  const handleClick =async (e) => {
    e.preventDefault()
    try {
      const response =  await axios.post('http://localhost:3000/produtos',produto)  
      MySwal.fire({
        title:<p>Cadastrado com sucesso</p>,
        icon: "success"
      
      }).then(() => {
        window.location.assign("http://localhost:5173/produtos");
      })
      
    } catch (error) {
      console.log(error);
    }
  
  }
  const handleChange = (e) => {
      setProduto((prev) => ({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }

  console.log(produto);

  return (

  <div className='form container'>

      <h3 className='mt-4 mb-4'>Cadastrar Novo Produto</h3>

    <Form className='form'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Codigo Produto</Form.Label>
      <Form.Control type="number" placeholder="Entre com o codigo do produto"
       onChange={handleChange}
      
      name="codigoProduto" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Nome do Produto</Form.Label>
      <Form.Control type="text" placeholder="Nome do produto" 
      onChange={handleChange}
      name="nome" />
    </Form.Group>


    <Form.Group className="mb-3" controlId="descricaoDoProduto">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} 
         onChange={handleChange}
        name="descrisao"/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Preço do Produto</Form.Label>
      <Form.Control type="text" placeholder="Preço do Produto" 
       onChange={handleChange}
      name="preco" />
    </Form.Group>
 
    <Button variant="primary" type="submit"
     onClick={handleClick}
    >
     <FaCheck/> Cadastrar
    </Button>
  </Form>
  </div>
  )
}
