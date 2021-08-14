import React, { useRef } from 'react'
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }
  

  return (
    <Container className="align-items-center d-flex" style={{height: '100vh'}}>
      <Row className='w-100'>
        <Col md={6}>
          <Image src='/bg.jpg'/>
        </Col>
        <Col md={6} style={{paddingTop:'100px'}}>
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group>
              <Form.Label>Enter Your Id</Form.Label>
              <Form.Control type="text" ref={idRef} required />
            </Form.Group>   
            <Button type="submit" className="mr-2">Login</Button>
            <Button onClick={createNewId} variant="secondary">Create A New Id</Button>
          </Form>
      </Col>
      </Row>
    </Container>
  )
}
