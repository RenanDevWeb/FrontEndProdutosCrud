import React,{useEffect, useState} from 'react'
import { useLocation,Link } from 'react-router-dom';
import { FaFilePen, FaBook} from "react-icons/fa6";
import './index.css'
import Menu from '../../components/navbar/index'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from 'axios'


export default function index() {
   const [produto,setProduto] = useState([])
   const location = useLocation()
   const idDoProduto = location.pathname.split("/")[2]
        

   useEffect(() => {
          getProdutos()
   },[])


  async function getProdutos(){
    try {
        const response = await axios.get(`http://localhost:3000/produtos/${idDoProduto}`)
        setProduto(response.data)
        
    } catch (error) {
        console.log(error);
    }
   

  }


  return (
    <div className='container-Visualizar'>
           <Menu />
          


           <div className="card-Produto container">

           {produto.map(item => (

                <Card className='m-5'>
                <Card.Header className="display-4">{item.nome}</Card.Header>
                <Card.Body>
                <Card.Title>{item.descrisao}</Card.Title>
                <Card.Text>
                {`R$ ${item.preco.toFixed(2)}`}
                </Card.Text>
               <Link to="/produtos"><Button variant="primary"> <FaBook /> Produtos</Button></Link>
               <Link className='link' to={`/update/${item.codigoProduto}`} ><Button variant="warning m-1"><FaFilePen/> Editar</Button></Link>
                </Card.Body>
                </Card>
           ))}



          
  </div>
          
           
            
    </div>
  )
}
