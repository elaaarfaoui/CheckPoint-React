import { Form, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Form className="FormDiv">
        <div className="title"> 
      <Form.Label>Contact</Form.Label>
      </div>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Your name" />
          <Form.Label>LastName</Form.Label>
          <Form.Control type="Lastname" placeholder="Your Lastname" />
          <div className="gender"> 
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
          </div>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Text className="text-muted">
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <div className="btnsubmit">  
        <Button variant="primary" type="submit"> Submit</Button>
        </div>
      </Form>



    </div>
  );
}

export default App;
