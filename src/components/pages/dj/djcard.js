import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

function DJCard() {
    return (
        <div style={{margin: "100px", display: "flex"}}>
            <br/>
            <Card style={{ width: '18rem', marginRight: "auto" , marginLeft: "auto" }}>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/1909755.jpg" />
                <Card.Body>
                    <Card.Title>DJ #1</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go to DJ's page</Button>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{ width: '18rem', marginRight: "auto" , marginLeft: "auto" }}>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/1909755.jpg" />
                <Card.Body>
                    <Card.Title>DJ #2</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go to DJ's page</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginRight: "auto" , marginLeft: "auto" }}>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/1909755.jpg" />
                <Card.Body>
                    <Card.Title>DJ #3</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go to DJ's page</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginRight: "auto" , marginLeft: "auto" }}>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/1909755.jpg" />
                <Card.Body>
                    <Card.Title>DJ #4</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go to DJ's page</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginRight: "auto" , marginLeft: "auto" }}>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/1909755.jpg" />
                <Card.Body>
                    <Card.Title>DJ #5</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go to DJ's page</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DJCard;