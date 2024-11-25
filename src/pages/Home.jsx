import React from "react";
import CardProduto from "../components/CardProduto";
import { Container } from "react-bootstrap";
import Navega from "../components/Navega";

import { useState, useEffect } from "react";


const url = "http://localhost:5000/produtos"

const Home = () => {
  const [produtos,setProdutos] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try{
        const req = await fetch(url)
        const prods = await req.json()
        console.log(prods)
        setProdutos(prods)
        
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
