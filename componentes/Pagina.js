import React from 'react'
import { Cabecalho } from './Cabecalho'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Rodape from './Rodape';

export const Pagina = (props) => {
  return (
    <>
    <Cabecalho />
        <div className='py-3 text-center mb-5 bg-secondary text-white'>
            <h1>{props.titulo}</h1>
        </div>
    <Container className='mb-5'>
        {props.children}
    </Container>
    <Rodape />   
    </>
  )
}
