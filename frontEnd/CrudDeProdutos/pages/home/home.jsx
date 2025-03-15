import React, { useEffect, useState } from 'react'
import Menu from '../../components/navbar'
import Card from '../../components/card'
import axios from 'axios'
import './index.css'

export default function home() {
  const [quantidadeDeProdutos, setQuantidadeDeProdutos] =  useState()

   useEffect(() => {
     getTotalProdutos()
   },[])


  async function getTotalProdutos(){
    try {
      const response = await axios.get("http://localhost:3000")
      setQuantidadeDeProdutos(response.data[0].total)
      
    } catch (error) {
      console.log(error);
    } 
    

   }


  return (
    <div className='container-home'>
     <Menu />
  
  <div className='card-content'>
    <Card  total={quantidadeDeProdutos}/>
   
  </div>
     
    </div>
    
  )
}
