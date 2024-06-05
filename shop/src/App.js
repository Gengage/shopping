import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
     
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#Home">ABCD-MART</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
            <Nav.Link href="#Review">Review</Nav.Link>
            <Nav.Link href="#Product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <div>
      <Row>
        <Col>
        <img src="https://kream-phinf.pstatic.net/MjAyNDA1MjRfMzkg/MDAxNzE2NTMyODQzNTgy.ECw3Xikv8w6R1-zs-OcQyVY-SMAN1tSInutYzMkUmNkg.cI4OQfPajMr34SNzLX32WaNQopL02vNol6_yWMQyl8gg.PNG/a_0a36d3746db04595871a75bcc6798e02.png" width="100%" ></img>
        <h4>상품명 : </h4>
        <p>상품정보:</p>
        </Col>
        <Col>
        <img src="https://images.footlocker.com/is/image/FLEU/314108507204_01?wid=581&hei=581&fmt=png-alpha" width="70%" ></img>
        <h4>상품명 : 나이키 덩크 로우 </h4>
        <p>상품정보:</p>
        </Col>
        <Col>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" ></img>
        <h4>상품명 : </h4>
        <p>상품정보:</p>
        </Col>
        </Row>
      </div>

    </div>
  );
}

export default App;
