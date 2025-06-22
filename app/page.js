"use client"
import Card from "@/components/Card/Card.js";
import { useState, useEffect } from "react";
import { useCarrinho } from "@/contexts/CarrinhoContext";

export default function Home() {

  const [dados,setDados] = useState([]);

  const listaDeProdutos = [{
            "id": 1,
            "titulo": "Camisa Roxa",
            "imagem": "https://acdn-us.mitiendanube.com/stores/002/241/196/products/teens-roxa-nova-0495680b7371aca30c17153612659762-1024-1024.jpg",
            "preco": 29.90
        },

        {
            "id": 2,
            "titulo": "Tênis preto e branco",
            "imagem": "https://cdnv2.moovin.com.br/valuti/imagens/produtos/det/tenis-vanscy-v1865-8b72b19d5c506f7e175438c398b77d1c.jpg",
            "preco": 59.90
        }];

        useEffect(() => {
            setDados(listaDeProdutos);
          },[])
        

  const {conversorMoeda} = useCarrinho();

  return (
    <>
      <h1 className="h1 text-center">Bem vindo a nossa loja</h1>
      <h3 className="text-black-50 text-center">Fique a vontade!</h3>
      <div className="container border border-secundary">
        <h1>Produtos</h1>
        <div className="d-flex flex-row gap-3">
          {dados.map((produto) => (
            <Card
              key={produto.id}
              imagem={produto.imagem}
              titulo={produto.titulo}
              preco={conversorMoeda(produto.preco)}
              elemento={produto}
            />
          ))}
        </div>
      </div>
    </>
  );
}
