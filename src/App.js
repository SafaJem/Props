
import {Nav,Navbar, FormControl,Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component2 from './profile/profile2'
import './App.css';
import Component from './profile/Profilecomponent';
function App() {
 const handleName = (name) => alert(`Hi I am  ${name}`);

  return (
    <div >
 <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#fullName">fullName</Nav.Link>
      <Nav.Link href="#bio">bio</Nav.Link>
      <Nav.Link href="#profession">profession</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</>
<div className="App">
     <Component
      fullName="Safa Jemaiel" 
      bio="I'am a FullStack Js student in Go My Code : "
      profession=" Développeur FullStack JS" 
      handleName={handleName}>
        <div>
          <img src="./devp.jpg" alt="profil" style={{width:300 , height:200}}/>
        </div> 
        <Component2/>    
</Component>
  </div>
  </div>
  );
}


export default App;
