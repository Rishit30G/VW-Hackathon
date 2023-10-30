import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicCardExample({ title, text, link}) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/300/300" />
      <Card.Body>
        <h3>{title}</h3>
        <Card.Text>
            {text}
        </Card.Text>
        <Button variant="primary" href={link}>LinkedIn</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCardExample;