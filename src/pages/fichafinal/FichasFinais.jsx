import React, { useEffect, useState } from 'react'
import { Table, Col, Card, Row, Body } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FichaFinalService from '../../services/rpg/FichaFinalService'
import NomeReCService from '../../services/rpg/NomeReCService';
import AtributosService from '../../services/rpg/AtributosService';
import ProficienciaseIdiomasService from '../../services/rpg/ProficienciaseIdiomasService';
import EquipamentoService from '../../services/rpg/EquipamentoService';
import CaracteristicasService from '../../services/rpg/CaracteristicasService';
import HistoriaService from '../../services/rpg/HistoriaService';
import  "../../index.css";
import { BsPencilFill, BsTrash } from 'react-icons/bs'



const FichasFinais = () => {

  const [fichafinal, setFichaFinal] = useState([])
  const [nomeReC, setnomeReC] = useState([])
  const [atributos, setatributos] = useState([])
  const [proficienciaseidiomas, setproficienciaseidiomas] = useState([])
  const [equipamento, setequipamento] = useState([])
  const [caracteristicas, setcaracteristicas] = useState([])
  const [historia, sethistoria] = useState([])

  useEffect(() => {

    setFichaFinal(FichaFinalService.getAll())
    setnomeReC(NomeReCService.getAll())
    setatributos(AtributosService.getAll())
    setproficienciaseidiomas(ProficienciaseIdiomasService.getAll())
    setequipamento(EquipamentoService.getAll())
    setcaracteristicas(CaracteristicasService.getAll())
    sethistoria(HistoriaService.getAll())

    
  }, [])
  
  console.log(fichafinal)
  console.log(nomeReC)
  console.log(atributos)
  console.log(proficienciaseidiomas)
  console.log(equipamento)
  console.log(caracteristicas)
  console.log(historia)


  function apagar1(id) {
      NomeReCService.delete(id)
      setnomeReC(NomeReCService.getAll())
  }

  function apagar2(id) {
      AtributosService.delete(id)
      setatributos(AtributosService.getAll())
  }

  function apagar3(id) {
      ProficienciaseIdiomasService.delete(id)
      setproficienciaseidiomas(ProficienciaseIdiomasService.getAll())
  }

  function apagar4(id) {
      EquipamentoService.delete(id)
      setequipamento(EquipamentoService.getAll())
  }

  function apagar5(id) {
      CaracteristicasService.delete(id)
      setcaracteristicas(CaracteristicasService.getAll())
  }

  function apagar6(id) {
      HistoriaService.delete(id)
      sethistoria(HistoriaService.getAll())
  }

    function apagar(id) {
    if (window.confirm('Deseja realmente excluir essa ficha de RPG?')) {
      apagar1(id)
      apagar2(id)
      apagar3(id)
      apagar4(id)
      apagar5(id)
      apagar6(id)

    }
  }



  console.log(fichafinal);

  return (
    <div >

  <Card className='btn  bg-danger'>
       <Col border="danger">
    
      <h1><p class='text-center'>Fichas Finais</p></h1>




      {nomeReC.map((item, i) => (
        <Row key={i}>
          <Col md={12}>
            <Card border="danger" className="mb-3">
              <Card.Header className='btn  bg-danger'><Card.Title>Ficha {i}</Card.Title></Card.Header>
              <Card.Body >

                <Row key={i}>
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                      <Card.Header className='btn  bg-danger w-100'><Card.Title>Raça e Classes </Card.Title></Card.Header>
                        <Card.Text><b>Identificador de Combatente: </b>{i}</Card.Text>

                        <Card.Text><b>Nome: </b>{item.nome}</Card.Text>
                        <Card.Text><b>Raça: </b>{item.raça}</Card.Text>
                        <Card.Text><b>Classe: </b>{item.classe}</Card.Text>
                        <Card.Text><b>Nivel: </b>{item.nivel}</Card.Text>
                        <Card.Text><b>Alimento: </b>{item.alinhamento}</Card.Text>

                        <Link to={'/nomeReC/' + i}><BsPencilFill /></Link>{' '}

                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={6}>
                    <Card key={i}>
                      <Card.Body>
                        <Card.Header className='btn  bg-danger w-100'><Card.Title>Atributos</Card.Title></Card.Header>
                        <Card.Text><b>Identificador de Combatente: </b>{i}</Card.Text>

                        <Card.Text><b>Forca: </b>{atributos[i]?.forca}</Card.Text>
                        <Card.Text><b>Destreza: </b>{atributos[i]?.destreza}</Card.Text>
                        <Card.Text><b>Constituicaoa: </b>{atributos[i]?.constituicaoa}</Card.Text>
                        <Card.Text><b>Inteligencia: </b>{atributos[i]?.inteligencia}</Card.Text>
                        <Card.Text><b>Sabedoria: </b>{atributos[i]?.sabedoria}</Card.Text>

                        <Link to={'/atributos/' + i}><BsPencilFill /></Link>{' '}

                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4}>
                    <Card key={i}>
                      <Card.Body>
                        <Card.Header className='btn  bg-danger w-100'><Card.Title>Proficiencias e Idiomas</Card.Title></Card.Header>
                        <Card.Text><b>Identificador de Combatente: </b>{i}</Card.Text>

                        <Card.Text><b>Idiomas: </b>{proficienciaseidiomas[i]?.idiomas}</Card.Text>
                        <Card.Text><b>Kits: </b>{proficienciaseidiomas[i]?.kits}</Card.Text>
                        <Card.Text><b>Instrumentos Musicais: </b>{proficienciaseidiomas[i]?.instrumentosmusicais}</Card.Text>
                        <Card.Text><b>Armaduras: </b>{proficienciaseidiomas[i]?.armaduras}</Card.Text>
                        <Card.Text><b>Armas: </b>{proficienciaseidiomas[i]?.armas}</Card.Text>

                        <Link to={'/proficienciaseidiomas/' + i}><BsPencilFill /></Link>{' '}

                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4}>
                  <Card key={i}>
                      <Card.Body>
                        <Card.Header className='btn  bg-danger w-100'><Card.Title>Equipamento</Card.Title></Card.Header>
                        <Card.Text><b>Identificador de Combatente: </b>{i}</Card.Text>
                        <Card.Text>
                          <b>Todos os Itens: </b>{equipamento[i]?.item}
                        </Card.Text>
                        <Link to={'/equipamento/' + i}><BsPencilFill /></Link>{' '}

                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4}>
                  <Card key={i}>
                      <Card.Body>
                        <Card.Header className='btn  bg-danger w-100'><Card.Title>Caracteristicas</Card.Title></Card.Header>
                        <Card.Text><b>Identificador de Combatente: </b>{i}</Card.Text>

                        <Card.Text><b>Traços do Personagem: </b>{caracteristicas.traçospersonagem}</Card.Text>
                        <Card.Text><b>Ideais: </b>{caracteristicas[i]?.ideais}</Card.Text>
                        <Card.Text><b>Vinculos: </b>{caracteristicas[i]?.vinculos}</Card.Text>
                        <Card.Text><b>Fraquezas: </b>{caracteristicas[i]?.fraquezas}</Card.Text>
                        <Card.Text><b>Talentos: </b>{caracteristicas[i]?.talentos}</Card.Text>

                        <Link to={'/caracteristicas/' + i}><BsPencilFill /></Link>{' '}

                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={12}>
                  <Card key={i}>
                      <Card.Body>
                        <Card.Header className='btn  bg-danger w-100'><Card.Title>Historia</Card.Title></Card.Header>
                        <Card.Text><b>Identificador de Combatente: </b>{i}</Card.Text>
                        <Card.Text>
                          <b>Historia do Personaguem: </b>{historia[i]?.historiaaa}
                        </Card.Text>
                        <Link to={'/historia/' + i}><BsPencilFill /></Link>{' '}
                      </Card.Body>
                    </Card>
                  </Col>
                  <BsTrash onClick={() => apagar(i)} className='text-danger'/>

                </Row>
              </Card.Body>
            </Card>

          </Col>

        </Row>
      ))}
      </Col>
    </Card>


    </div>
  )
}

export default FichasFinais