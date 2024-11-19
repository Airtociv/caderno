import React from "react";
import CardProduto from "../components/CardProduto";
import { Container } from "react-bootstrap";

const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "Shampoo",
      descricao: "shampoo generico e barato",
      preco: 5.55,
      categoria: "higiene",
      imagemUrl:
        "https://th.bing.com/th/id/OIP._ZMa_DQAUWiEIjvCgAwsmAHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      nome: "Arroz",
      descricao: "Arroz Branco popular",
      preco: 12.35,
      categoria: "mercearia",
      imagemUrl:
        "https://th.bing.com/th/id/OIP.WrFqH7szc985H7u9zNel5AHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      nome: "Frango Congelado",
      descricao: "Frango desossado congelado",
      preco: 8.95,
      categoria: "açougue",
      imagemUrl:
        "https://th.bing.com/th/id/OIP.axXqAiyKADlGezfKEfrM8QHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div>
      <h1> Lista de Produtos </h1>
      <Container>
      <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-center flex-wrap">
        {/* <CardProduto
          id="1"
          nome="Shampoo"
          descricao="shampoo generico e barato"
          preco="5,55"
          categoria="higiene"
          imagemUrl="https://th.bing.com/th/id/OIP._ZMa_DQAUWiEIjvCgAwsmAHaHa?rs=1&pid=ImgDetMain"
        /> */}
        {produtos.map((prod) => 
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
          />
        )}
      </div>
      </Container>
    </div>
  );
};

export default Home;
