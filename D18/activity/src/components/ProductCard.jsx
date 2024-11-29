import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductCard = ({ product, handleViewButton }) => {
    const { image, title, price, rating } = product;
    return (
        <Card
            className="p-2 shadow-md"
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
            <Card.Img
                className="p-0 border border-1"
                variant="top"
                src={image}
                style={{ objectFit: "contain", height: "350px" }}
            />
            <Card.Body
                style={{
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Card.Title className="p-2">
                    <h2>{title}</h2>
                </Card.Title>
                <Card.Subtitle className="px-2">
                    {rating.rate} stars
                    <h3>{`$${price}`}</h3>
                </Card.Subtitle>
                <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => {
                        console.log("View Details pressed");
                        handleViewButton();
                        console.log("View Details done");
                    }}
                >
                    View Details
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
