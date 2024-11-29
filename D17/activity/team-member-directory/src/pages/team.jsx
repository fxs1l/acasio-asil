import team from "../team-data/team";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function TeamPage() {
    return (
        <Container
            fluid
            className="vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
            <h1 className="m-2 p-2" style={{ borderRight: "5px solid " }}>
                Team Members
            </h1>
            <Card className="p-5">
                <ListGroup variant="flush">
                    {team.map((item) => (
                        <ListGroup.Item key={item.id}>
                            <Link
                                to={`/team/${item.id}`}
                                className="text-decoration-none"
                            >
                                <h1>{item.name}</h1>
                            </Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </Container>
    );
}
