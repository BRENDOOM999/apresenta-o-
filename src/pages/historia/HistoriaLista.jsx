import React, { useEffect, useState } from 'react'
import { Table,Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HistoriaService from '../../services/rpg/HistoriaService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const HistoriaLista = () => {

  const [historia, sethistoria] = useState([])

  useEffect(() => {

    sethistoria(HistoriaService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        HistoriaService.delete(id)
        sethistoria(HistoriaService.getAll())
    }
  }

console.log(historia);

  return (
    <div>
      <Card border="danger" className="mb-3">
        <Col >
      <h1>Historias</h1>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Historia do personaguem</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {historia.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.historiaaa}</td>
              <td>
                <Link to={'/historia/' + i}><BsPencilFill /></Link>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col>
    </Card>



    </div>
  )
}

export default HistoriaLista