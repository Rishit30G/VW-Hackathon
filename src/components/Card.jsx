import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicCardExample({ title, text, imgPath, link}) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={imgPath} height="290px"/>
      <Card.Body>
        <h4>{title}</h4>
        <h6 className='text-muted'>
            {text}
        </h6>
        <Container className="d-flex justify-content-end">
        <Button variant="outline-primary mt-3" href={link}>LinkedIn</Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default BasicCardExample;