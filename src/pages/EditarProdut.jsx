import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Navega from "../components/Navega";


const urlcates = "http://localhost:5000/categorias";


const EditarProdut = () => {
 const [cates,setCates] = useState([]);
      
        const linkImagem = "https://marsangomateriais.com.br/wp-content/uploads/2020/11/fundo-sem-imagem.png"
      
        useEffect(()=>{
          async function fetchData() {
            try{
              const req = await fetch(urlcates)
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

        const [alertClass, setAlertClass] = useState("mb-3 d-none");
        const [alertMensagem, setAlertMensagem] = useState("");
        const [alertVariant, setAlertVariant] = useState("danger");

        const [nome, setNome] = useState("");
        const [descricao, setDescricao] = useState("");
        const [categoria, setCategoria] = useState("Eletrônicos");
        const [preco, setPreco] = useState("");
        const [imagemUrl, setImagemUrl] = useState("");


         const navigate = useNavigate();

        const params = window.location.pathname.split("/")

        const idProd = params[params.length-1]

        useEffect (()=>{
          async function fetchData() {
            try{
              const req = await fetch(`http://localhost:5000/produtos/${idProd}`)
              const prod = await req.json()
              console.log(prod);
              setNome(prod.nome)
              setDescricao(prod.descricao)
              setCategoria(prod.categoria)
              setPreco(prod.preco)
              setImagemUrl(prod.imagemUrl == "" ? "":prod.imagemUrl)
            }
            catch(error){
              console.log(error.message);
              
            }
          }
          fetchData()
        },[])


        const handleSubmit = async (e) => {
          e.preventDefault();
      
          if (nome != "") {
            if (descricao != "") {
              if (preco != "") {
                 
                const produto = { nome, descricao, categoria, preco, imagemUrl };
                console.log(produto);
                try {
                  
                  const req = await fetch(`http://localhost:5000/produtos/${idProd}`,{
                    method: "PUT",
                    headers:{"Content-type": "application/json"},
                    body: JSON.stringify(produto) 
                  })
      
                  const res = req.json()
                  console.log(res);
                  setAlertClass("mb-3 mt-2");
                  setAlertVariant("success");
                  setAlertMensagem("Produto editado com sucesso");
                  alert("Produto editado com sucesso");
                  navigate("/home")
                  
                } catch (error) {
                  console.log(error);
                  
                }
               
                
              } else {
                setAlertClass("mb-3 mt-2");
                setAlertMensagem("O campo preço não pode ficar vazio");
              }
            } else {
              setAlertClass("mb-3 mt-2");
              setAlertMensagem("O campo descrição não pode ficar vazio");
            }
          } else {
            setAlertClass("mb-3 mt-2");
            setAlertMensagem("O campo nome não pode ficar vazio");
          }
        };

  return (
    <div>
      <Navega />
      <Container>
        <h1>Editar Produtos</h1>
        <form className="mt-3" onSubmit={handleSubmit}>
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
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
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
                  value={descricao}
                  onChange={(e) => {
                    setDescricao(e.target.value);
                  }}
                />
              </FloatingLabel>

              <Form.Group controlId="formGridTipo" className="mb-3">
                <Form.Label>Setor</Form.Label>
                <Form.Select
                  value={categoria}
                  onChange=
                  {(e) => {
                    setCategoria(e.target.value);
                  }}>
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
                  value={preco}
                  onChange={(e) => {
                    setPreco(e.target.value);
                  }}
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
                    value={imagemUrl}
                    onChange={(e) => {
                      setImagemUrl(e.target.value);
                    }}
                  />
                </FloatingLabel>

                <Image
                  src={imagemUrl == "" ? linkImagem : imagemUrl}
                  rounded
                  width={300}
                  height={300}
                />
              </Form.Group>
            </Col>
          </Row>

          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          <Button variant="success" size="lg" type="submit">
            salvar alteração
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default EditarProdut
