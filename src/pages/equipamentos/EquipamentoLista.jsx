import React, { useEffect, useState } from 'react'
import { Table,Card,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EquipamentoService from '../../services/rpg/EquipamentoService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const EquipamentoLista = () => {

  const [equipamento, setequipamento] = useState([])

  useEffect(() => {

    setequipamento(EquipamentoService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        EquipamentoService.delete(id)
        setequipamento(EquipamentoService.getAll())
    }
  }

console.log(equipamento);

  return (
    <div>
  <Card border="danger" className="mb-3">
    <Col >
      <h1>Equipamento</h1>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>todos os itens</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {equipamento.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.item}</td>
              <td>
                <Link to={'/equipamento/' + i}><BsPencilFill /></Link>{' '}
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

export default EquipamentoLista