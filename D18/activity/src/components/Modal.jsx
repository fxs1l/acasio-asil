import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function ProductModal({ selectedProduct, onHideCallback }) {
    const { image, title, price, category, description } = selectedProduct;
    return (
        <Modal
            show
            onHide={() => {
                onHideCallback();
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={image} alt={title} className="img-fluid" />
                <p>
                    <strong>Price:</strong> ${price}
                </p>
                <p>
                    <strong>Category:</strong>{" "}
                    <Badge>{category.toUpperCase()}</Badge>
                </p>
                <p>{description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        onHideCallback(null);
                    }}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
