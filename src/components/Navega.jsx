import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navega = () => {
  const usuarioNome = localStorage.getItem("userName");

  return (
    <div>
      <Navbar expand="lg" className="bg-dark-subtle" data-bs-theme="light">
        <Container>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "40px", color: "white" }}
          >
            database_upload
          </span>
          <Navbar.Brand href="/home">Prototipo</Navbar.Brand>
          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            {/* paginas */}
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">
                Produtos
              </Nav.Link>
              <Nav.Link href="/produto/cadastrar">Cadastro</Nav.Link>
            </Nav>
            {/* sair */}
            <Nav className="justify-content-end">
              <Navbar.Text style={{ color: "black" }}>
                [{usuarioNome}]
              </Navbar.Text>
              <Nav.Link href="/login">
                <span class="material-symbols-outlined">logout</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navega;
