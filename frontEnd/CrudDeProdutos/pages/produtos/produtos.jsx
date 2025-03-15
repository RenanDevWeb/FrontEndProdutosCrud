import React, { useState,useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Menu from '../../components/navbar/index'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaFilePen, FaRegEye ,FaTrash} from "react-icons/fa6";
import './produtos.css'
import { Link } from 'react-router-dom'

export default function produtos() {
  const [produtos,setProdutos] = useState([])
  const MySwal = withReactContent(Swal)

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });



   useEffect(() => {
     getProdutos()
   }, [])


   async function getProdutos  () {
    try {
        const response = await axios.get('http://localhost:3000/produtos')
        setProdutos(response.data)
        
    } catch (error) {
        console.log(error);
    }
   }

   async function handleDelete(id){
    const url = `http://localhost:3000/produtos/${id}`
    
    try {
      await axios.delete(url)

 // deletando mesmo sem confirmar
      swalWithBootstrapButtons.fire({
        title: <h2>Tem Certeza que deseja Deletar ?</h2>,
        text: "Tem Certeza que deseja deletar o produto ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Deletar",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deletado!",
            text: "Produto deletado com sucesso",
            icon: "success"
          }).then(() => {
            window.location.reload()
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            icon: "error"
          });
        }
      });



     
      
    } catch (error) {
      console.log(error);
    }
  
   }

  
  return (
    <div className='container-produtos '>

        <Menu />


     
     <div className="container-fluid m-5">

    <Link to="/add_new"><Button className='m-1' variant="primary"><FaFilePen /> Inserir Novo</Button></Link>
    
   <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Codigo do Produto</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {console.log(produtos)}
      {produtos.map(item => (
        
        <tr>
            <td>{item.codigoProduto}</td>
            <td>{item.nome}</td>
            <td>{item.descrisao}</td>
            <td>{`R$ ${item.preco.toFixed(2)}`}</td>
            <td className='button-actions'>
            <Link className='link' to={`/visualizar/${item.codigoProduto}`}><Button className='m-1' variant="info"><FaRegEye /> Ver </Button></Link>
            <Link className='link' to={`/update/${item.codigoProduto}`} ><Button variant="warning m-1"><FaFilePen/> Editar</Button></Link>
            <Button variant="danger m-1" 
            onClick={() => handleDelete(item.codigoProduto)}
            ><FaTrash  /> Deletar</Button>

            </td>
        </tr>

        
    ))}





      </tbody>
    </Table>
    </div>


    

    </div>
  )
}
