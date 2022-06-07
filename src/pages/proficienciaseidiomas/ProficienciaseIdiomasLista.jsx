import React, { useEffect, useState } from 'react'
import { Table,Card,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProficienciaseIdiomasService from '../../services/rpg/ProficienciaseIdiomasService';
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'


const ProficienciaseIdiomasLista = () => {

  const [proficienciaseidiomas, setproficienciaseidiomas] = useState([])

  useEffect(() => {

    setproficienciaseidiomas(ProficienciaseIdiomasService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
        ProficienciaseIdiomasService.delete(id)
        setproficienciaseidiomas(ProficienciaseIdiomasService.getAll())
    }
  }

console.log(proficienciaseidiomas);

  return (
    <div>
  <Card border="danger" className="mb-3">
    <Col >
      <h1>Proficiencias e Idiomas</h1>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Idiomas</th>
            <th>Kits</th>
            <th>Instrumentos Musicais</th>
            <th>Armaduras</th>
            <th>Armas</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {proficienciaseidiomas.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{item.idiomas}</td>
              <td>{item.kits}</td>
              <td>{item.instrumentosmusicais}</td>
              <td>{item.armaduras}</td>
              <td>{item.armas}</td>
              <td>
                <Link to={'/proficienciaseidiomas/' + i}><BsPencilFill /></Link>{' '}
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

export default ProficienciaseIdiomasLista