import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>

      <Navbar  className='btn' bg="danger" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'yellow' }}>D&D</Navbar.Brand>
          <Nav className="me-auto" >
          <Link className="nav-link" style={{ color: 'black' }} to="/telainicial"><h4>Faça sua ficha Aqui</h4></Link>
            <Link className="nav-link" style={{ color: 'black' }} to="/nomeReC">Raça e Classe</Link>
            <Link className="nav-link" style={{ color: 'black' }} to="/atributos">Atributos</Link>
            <Link className="nav-link" style={{ color: 'black' }} to="/proficienciaseidiomas">Proficiencias e Idiomas</Link>
            <Link className="nav-link" style={{ color: 'black' }} to="/equipamento">Equipamento</Link>
            <Link className="nav-link" style={{ color: 'black' }} to="/caracteristicas">Caracteristicas</Link>
            <Link className="nav-link" style={{ color: 'black' }} to="/historia">Historia</Link>
            <Link className="nav-link" style={{ color: 'black' }} to="/fichasfinais"><h5>Fichas Finais</h5></Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu