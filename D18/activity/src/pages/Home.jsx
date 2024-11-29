import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => (
    <div className="text-center mt-5">
        <h1>Welcome to Product Finder</h1>
        <p>Search and discover your favorite products!</p>
        <Link to="/products">
            <Button>
                <h2>Start Shopping</h2>
            </Button>
        </Link>
    </div>
);

export default Home;
