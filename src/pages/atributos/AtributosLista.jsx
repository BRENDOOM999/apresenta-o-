import React, { useEffect, useState } from 'react'
import { Table,Card,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AtributosService from '../../services/rpg/AtributosService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const AtributosLista = () => {

  const [atributos, setatributos] = useState([])

  useEffect(() => {

    setatributos(AtributosService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        AtributosService.delete(id)
        setatributos(AtributosService.getAll())
    }
  }

console.log(atributos);

  return (
    <div>
  <Card border="danger" className="mb-3">
    <Col >
      <h1>Atributos</h1>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Força</th>
            <th>Destreza</th>
            <th>Costituição</th>
            <th>Inteligência</th>
            <th>Sabedoria</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {atributos.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.forca}</td>
              <td>{item.destreza}</td>
              <td>{item.constituicaoa}</td>
              <td>{item.inteligencia}</td>
              <td>{item.sabedoria}</td>
              <td>
                <Link to={'/atributos/' + i}><BsPencilFill /></Link>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col >
  </Card>

    </div>
  )
}

export default AtributosLista