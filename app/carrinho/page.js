"use client";

import CardCarrinho from "@/components/CardCarrinho/CardCarrinho";
import CardTotal from "@/components/CardTotal/CardTotal";
import { useCarrinho } from "@/contexts/CarrinhoContext";
import styles from "./Carrinho.module.css";
export default function Page() {
    const { carrinho, setCarrinho, removerCarrinho } = useCarrinho();

    const alterarQuantidade = (id, incrementar) => {
        setCarrinho(prev =>
            prev.map(produto =>
                produto.id === id ?
                    { ...produto, quantidade: incrementar ? produto.quantidade + 1 : Math.max(0, produto.quantidade - 1) } : produto
            )
        );
    }

    const excluir = (id) => {
        removerCarrinho(id);
    }

    return (
        <div className={`${styles.div_container} w-75 d-flex flex-row align-items-center justify-content-center m-auto shadow-lg`}>
            <div className="rounded-1 bg-light w-75 p-4">
                <h1 className="mb-4">Seu carrinho</h1>
                {carrinho.length === 0 ?
                    <h3> Seu carrinho está vazio. </h3>
                    :
                    carrinho.map(produto =>
                        <CardCarrinho
                            decrementar={() => alterarQuantidade(produto.id, false)}
                            imagem={produto.imagem}
                            incrementar={() => alterarQuantidade(produto.id, true)}
                            qtd={produto.quantidade}
                            titulo={produto.titulo}
                            valor={produto.preco}
                            key={produto.id}
                            excluirProduto={() => excluir(produto.id)}
                        />
                    )}
            </div>
            {carrinho.length !== 0 && <CardTotal />}
        </div>
    );
}