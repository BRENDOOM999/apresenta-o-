import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import HistoriaService from '../../services/rpg/HistoriaService';
import equipamentoValidator from '../../validators/equipamentoValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask'
import Swal from 'sweetalert2'

const Historia = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  useEffect(() => {
    if (params.id) {
      const historia = HistoriaService.get(params.id)

      for (let campo in historia) {
        setValue(campo, historia[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
        HistoriaService.update(params.id, dados)
        navigate('/fichasfinais')
    } else {
        HistoriaService.create(dados)
        navigate('/fichasfinais')
    }
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.historiaaa, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Historia</h1>

      <Form >
        <Form.Group className="mb-3" controlId="historiaaa">
          <Form.Label >Historia do personagem: </Form.Label>
          <Form.Control isInvalid={errors.historiaaa} type="text" {...register("historiaaa", equipamentoValidator.historiaaa)} 
           mask="Aaaaaaaaaa" onChange={handleChange}
          />
          {errors.historiaaa && <span>{errors.historiaaa.message}</span>}
        </Form.Group>


        
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
        </div>
      </Form>

    </div>
  )
}

export default Historia