import {Button,Card,Col} from 'react-bootstrap';
function Cards({title,price,imageUrl}) {
  return (
    <Col size={12} sm={6} md={4} >
    <Card style={{ width: '18rem',padding:'10px',margin:'15px'}}>
      <Card.Img variant="top" src={imageUrl}/>
      <Card.Body>
      <Card.Text>
          {title}
        </Card.Text>
        <Card.Title>{price}</Card.Title>

        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Cards;