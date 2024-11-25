import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import { useState, useEffect } from "react";

import Navega from "../components/Navega";


const url ="http://localhost:5000/categorias";

const EditarProdut = () => {
 const [cates,setCates] = useState([]);
      
        const linkImagem = "https://marsangomateriais.com.br/wp-content/uploads/2020/11/fundo-sem-imagem.png"
      
        useEffect(()=>{
          async function fetchData() {
            try{
              const req = await fetch(url)
              const categos = await req.json()
              console.log(categos)
              setCates(categos)
              
            }
            catch(erro){
              console.log(erro.message);
              
            }
          }
          fetchData()
        },[])


  return (
    <div>
      <Navega />
      <Container>
        <h1>Editar Produtos</h1>
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
            <Col xs={6}>

            <Form.Group controlId="formFileLg" className="mb-3">
            <FloatingLabel
                controlId="floatingInputImagem"
                label="envie um link de imagem para o produto"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="envie um link de imagem para o produto"
                />
              </FloatingLabel>
              
              <Image src={linkImagem} rounded width={300} height={300}/>
              </Form.Group>

            </Col>
          </Row>

            <Alert variant="danger" >
                  pagina com erro
            </Alert>
          
                  <Button variant="success" size="lg" type="submit">
                  editar
                  </Button>

          
        </form>
      </Container>
    </div>
  )
}

export default EditarProdut
