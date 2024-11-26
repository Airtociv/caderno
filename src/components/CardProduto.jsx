import { CardLink, CardText } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (props) => {

const handleDelete = async(e)=>{

  const req = await fetch(`http://localhost:5000/produtos/${props.id}`,
    {
      method:"DELETE"
    }
  );
  const res = await req.json()
  console.log(res);
  alert(`Produto ${res.nome} removido`)
  

}

  return (
    <div>
      <Card style={{ width: "16rem", height: "30rem" }}>
        <Card.Img variant="top" src={props.imagemUrl} height="200px" />
       
        <Card.Body>
        
          <Card.Title>{props.nome}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            preço:R$ {props.preco}
          </Card.Subtitle>

          <Card.Text>
            <b>Descrição: </b> <br></br> {props.descricao}
          </Card.Text>

          <CardText>
            <b>Categoria: </b> <br></br> {props.categoria}
          </CardText>

          <CardLink href="/home">
            <Button variant="warning">editar</Button>
          </CardLink>

          <CardLink >
            <Button variant="danger" type="button" onClick={handleDelete}>apagar</Button>
          </CardLink>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
