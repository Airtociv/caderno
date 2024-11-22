import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

import { useState } from "react";

import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  const susus = [
    { id: 1, nome: "Tiara", email: "arait@placeholder.net", senha: "25" },
    { id: 2, nome: "Marcelo", email: "olecram@placeholder.net", senha: "83" },
  ];

const navigate = useNavigate()

const gravarLocalStorage = (usuario)=>{
  localStorage.setItem("userName", usuario.nome)
  localStorage.setItem("email", usuario.email)
}

  const handleLogin = async (e) => {
    e.preventDefault();

    const userToFind = susus.find((user) => user.email == email);

    if (email != "") {
      if (senha != "") {
        if (userToFind != undefined && userToFind.senha == senha) {
          gravarLocalStorage(userToFind)
          setAlertClass("mb-3 mt-2");
          setAlertVariant("success");
          setAlertMensagem("login efetuado com sucesso");
          alert("login efetuado com sucesso");
          navigate("/home")
        } else {
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("usuario ou senha inválidos");
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O campo senha não pode ficar vazio");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O campo email não pode ficar vazio");
    }
  };

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

        <Form style={{ width: "75%", margin: "auto" }} onSubmit={handleLogin}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Senha">
            <Form.Control
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>

          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          <Button variant="secondary" type="submit" className="mt-4" size="lg">
            Entrar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
