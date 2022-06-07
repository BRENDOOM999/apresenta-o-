import React, { useEffect, useState } from 'react'
import { Table,Card,Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NomeReCService from '../../services/rpg/NomeReCService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const TelaInicial = () => {



  return (
    <div>

      <Col class='center' >
        <h1><p class='text-center'> Ficha de RPG </p></h1>

          <div className="d-grid gap-2">

          <Link className='btn btn-danger mb-3' variant="primary" size="lg" to={'/nomeReC/create'}><FaPlus />Nova Ficha</Link>

          </div>

      
      </Col>

    
    </div>
  )
}

export default TelaInicial