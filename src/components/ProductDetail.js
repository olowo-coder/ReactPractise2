import React, { useState } from 'react';
import { Button, Modal, Row, Col } from "react-bootstrap";
import logo from "../../src/images/birds.jpg"
// import logo from "https://picsum.photos/id/237/200/300"
import "./ProductDetail.css";

function ProductDetail() {
    const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);
  const rel = {
      display: "inlineBlock",
      width: "100%",
      height: "100%",
       
  }
  const rels =  {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}
  return (
    <div>
        <button onClick={handleModal}>Click to show </button>
       

        <Modal
            show={show}
            onHide={handleModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="px-4" closeButton>
              <Modal.Title>
                <div>
                    <h1>Product Name</h1>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col>
                <div style={rels}>
                    <div>Product description</div>
                    <div>
                        <div><Button variant="primary" className="w-100 my-3">Add to Cart</Button></div>
                        <div><button className="btn btn-primary w-100 my-1"> Buy Now </button></div>
                    </div>
                </div>
                </Col>
                <Col ><img style={rel} src={logo} alt="logo" /></Col>
            </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
    </div>
  )
}

export default ProductDetail;