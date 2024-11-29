import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/team");
    };
    return (
        <Container
            fluid
            className="vh-100 d-flex justify-content-center align-items-center"
        >
            <Card className="text-center p-5 shadow-md">
                <Card.Title>
                    <h1>Welcome to the Team Directory</h1>
                </Card.Title>
                <Card.Text>
                    <Button
                        variant="primary"
                        size="lg"
                        className="mt-3"
                        onClick={handleButtonClick}
                    >
                        Meet the Team
                    </Button>
                </Card.Text>
            </Card>
        </Container>
    );
}
