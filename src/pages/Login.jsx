import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
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
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Senha">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="secondary" className="mt-4" size="lg" href="/home">
          Entrar
        </Button>
      </Container>
    </div>
  );
};

export default Login;
