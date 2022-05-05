import React from 'react'
import { Modal } from 'react-bootstrap'

export default function Fullscreen({img,show,handleClose}) {
  return (
    <Modal show={show} handleClose={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>BRUh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={img} alt="bruh"/>
        </Modal.Body>       
    </Modal>
  )
}
