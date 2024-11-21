import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Navega from "../components/Navega";

const CadastroProdut = () => {
  const cates = [
    { id: 1, nome: "Eletrônicos" },
    { id: 2, nome: "Moda e Vestuario" },
    { id: 3, nome: "Alimentos e Bebidas" },
    { id: 4, nome: "Saude e Beleza" },
    { id: 5, nome: "Esportes e Lazer" },
    { id: 6, nome: "Brinquedos e Jogos" },
    { id: 7, nome: "Livros e Papelaria" },
  ];

  return (
    <div>
      <Navega />
      <Container>
        <h1>Registro de Produtos</h1>
        <form className="mt-3">
          <Row>
            <Col xs={6}>
              <FloatingLabel
                controlId="floatingInputNome"
                label="Nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="digite o nome do produto "
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputDescreve"
                label="Descrição"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="digite a descrição do produto"
                />
              </FloatingLabel>

              <Form.Group controlId="formGridTipo" className="mb-3">
                <Form.Label>Setor</Form.Label>
                <Form.Select>
                  {cates.map((cate) => (
                    <option key={cate.id} value={cate.nome}>
                      {cate.nome}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <FloatingLabel
                controlId="floatingInputPreco"
                label="Preço"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="digite o preço do produto"
                />
              </FloatingLabel>

            </Col>
            <Col xs={6}></Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default CadastroProdut;
