import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import AtributosService from '../../services/rpg/AtributosService';
import atributosValidator from '../../validators/atributosValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask'

const Atributos = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const atributos = AtributosService.get(params.id)

      for (let campo in atributos) {
        setValue(campo, atributos[campo])
      }
    }
  }, [])

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  function salvar(dados) {

    if (params.id) {
        AtributosService.update(params.id, dados)
        navigate('/fichasfinais')
    } else {
        AtributosService.create(dados)
        navigate('/proficienciaseidiomas/create')
    }
  }

  return (
    <div>
      <h1>Atributos</h1>

      <Form >
        <Form.Group className="mb-3" controlId="forca">
          <Form.Label>Força: </Form.Label>
          <Form.Control isInvalid={errors.forca} type="text" {...register("forca", atributosValidator.forca)} 
           mask="99" onChange={handleChange}/>
          {errors.forca && <span>{errors.forca.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="destreza">
          <Form.Label>Destreza: </Form.Label>
          <Form.Control isInvalid={errors.destreza} type="text" {...register("destreza", atributosValidator.destreza)} 
           mask="99" onChange={handleChange}/>
          {errors.destreza && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="constituicaoa">
          <Form.Label>Costituição: </Form.Label>
          <Form.Control isInvalid={errors.constituicaoa} type="text" {...register("constituicaoa", atributosValidator.constituicaoa)} 
           mask="99" onChange={handleChange}/>
          {errors.constituicaoa && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="inteligencia">
          <Form.Label>Inteligência: </Form.Label>
          <Form.Control isInvalid={errors.inteligencia} type="text" {...register("inteligencia", atributosValidator.inteligencia)} 
           mask="99" onChange={handleChange}/>
          {errors.inteligencia && <span>Campo Obrigatório</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="sabedoria">
          <Form.Label>Sabedoria: </Form.Label>
          <Form.Control isInvalid={errors.sabedoria} type="text" {...register("sabedoria", atributosValidator.sabedoria)} 
           mask="99" onChange={handleChange}/>
          {errors.sabedoria && <span>Campo Obrigatório</span>}
        </Form.Group>


        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default Atributos