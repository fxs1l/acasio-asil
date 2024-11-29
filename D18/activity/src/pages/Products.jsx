import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import {
    fetchCategories,
    fetchProducts,
    fetchProductsByCategory,
} from "../api/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/Modal";

const Products = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); //for modal
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true); //for spinner
    const allProducts = useRef([]); //ref to store all products

    useEffect(() => {
        setLoading(true);
        fetchCategories().then((data) => setCategoryList(data));
        fetchProducts().then((data) => {
            setProducts(data);
            allProducts.current = data;
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!selectedCategory) {
            setProducts(allProducts.current);
        } else {
            setLoading(true);
            fetchProductsByCategory(selectedCategory)
                .then((data) => {
                    setProducts(data);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        }
    }, [selectedCategory]);

    useEffect(() => {
        console.log("Products updated", selectedProduct);
    }, [selectedProduct]);

    const handleSearch = async (e) => {
        e.preventDefault();
    };
    const handleClearFilter = () => setSelectedCategory(null);
    const handleCategorySelect = (category) => setSelectedCategory(category);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <Container
            fluid
            className="bg-dark flex-grow-1"
            style={{ height: "100%" }}
        >
            <Row className="bg-dark p-2 border border-2 border-primary rounded mx-2 mb-2">
                <div className="d-flex flex-row gap-1 justify-content-between">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            {selectedCategory
                                ? `${selectedCategory.toUpperCase()}`
                                : "Filter by category"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {categoryList.map((category, index) => (
                                <Dropdown.Item
                                    key={index + category}
                                    onClick={() =>
                                        handleCategorySelect(category)
                                    }
                                >
                                    {category.toUpperCase()}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form onSubmit={handleSearch}>
                        <Row className="gx-2">
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search for a product"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </Col>
                            <Col xs="auto" className="gap-0">
                                <Button type="submit">Search</Button>
                            </Col>
                            <Col xs="auto" className="gap-0">
                                <Button
                                    variant="secondary"
                                    onClick={handleClearFilter}
                                >
                                    Clear filters
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Row>
            <Row className="">
                {loading ? (
                    <Col>
                        <Spinner
                            style={{
                                height: "500px",
                                width: "500px",
                            }}
                            animation="grow"
                            variant="primary"
                        />
                    </Col>
                ) : (
                    <>
                        {filteredProducts.map((product) => (
                            <Col
                                key={product.id}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                className="mb-4"
                            >
                                <ProductCard
                                    product={product}
                                    handleViewButton={() =>
                                        setSelectedProduct(product)
                                    }
                                />
                            </Col>
                        ))}
                    </>
                )}
                <Col>1 of 1</Col>
            </Row>
            {selectedProduct && (
                <ProductModal
                    selectedProduct={selectedProduct}
                    onHideCallback={setSelectedProduct}
                />
            )}
        </Container>
    );
};

export default Products;
