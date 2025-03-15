import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping } from "react-icons/fa6";
import './index.css'

export default function index({total}) {

  console.log(total);

  return (
    <Card className="bg-dark text-white m-2 p-2" >
      <Card.Title>Quantidade de Produtos</Card.Title>
      <div className='d-flex justify-content-between'>
      <Card.Text><FaCartShopping /></Card.Text>
      <Card.Text>
        {total}
      </Card.Text>
      </div>
    
  </Card>

  )
}
