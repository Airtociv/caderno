import { CardLink, CardText } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProduto = (props) => {
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
          <CardLink href="/">
            <Button variant="warning">editar</Button>
          </CardLink>
          <CardLink href="/">
            <Button variant="danger">apagar</Button>
          </CardLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
