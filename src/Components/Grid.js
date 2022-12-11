import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const Grid = () => {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <Image
            src="https://dummyimage.com/900x400x/dee2e6/6c757d.jpg"
            fluid
            className=""
          />
        </Col>
        <Col sm={5}>
          <h1 class="font-weight-light">Tagline</h1>
          <p class="mt-100">Fast and super efficient</p>
          <p class="text-primary">.text-primary</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
