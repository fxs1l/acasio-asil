import team from "../team-data/team";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TeamDetailsPage() {
    const { id } = useParams();
    const member = team[parseInt(id) - 1];

    if (!id || !member) {
        return <h1>Member not found!</h1>;
    }

    return (
        <Container
            fluid
            className="vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
            <Card className="p-5">
                {!id || !member ? (
                    <Card.Title>
                        <h1>Member not found!</h1>
                    </Card.Title>
                ) : (
                    <>
                        <Card.Title>
                            <h1>{member.name}</h1>
                        </Card.Title>
                        <Card.Subtitle>
                            <h2>{member.role}</h2>
                        </Card.Subtitle>
                        <Card.Text>{member.email}</Card.Text>
                        <Link to="/team">{"<"} Back to Members</Link>
                    </>
                )}
            </Card>
        </Container>
    );
}
