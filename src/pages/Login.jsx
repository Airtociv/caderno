import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

import { useState } from "react";


const Login = () => {
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")

const [alertClass, setAlertClass] = useState("mb-3 d-none")
const [alertMensagem,setAlertMensagem] = useState("")
const [alertVariant, setAlertVariant] = useState("danger")

  return (
    <div
      style={{ background: "LemonChiffon", height: "100vh" }}
      className="justify-content-center align-content-center"
    >
      <Container>
        <span
          style={{ fontSize: "200px", color: "blueviolet" }}
          className="material-symbols-outlined"
        >
          login
        </span>
        
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Senha">
          <Form.Control type="password" placeholder="Password" value={senha} onChange={(e)=>{setSenha(e.target.value)}} />
        </FloatingLabel>

        <Alert variant= {alertVariant} className= {alertClass} >
                  {alertMensagem}
            </Alert>

        <Button variant="secondary" className="mt-4" size="lg" href="/home">
          Entrar
        </Button>
      </Container>
    </div>
  );
};

export default Login;
