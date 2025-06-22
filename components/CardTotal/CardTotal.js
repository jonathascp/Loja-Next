import { useCarrinho } from "@/contexts/CarrinhoContext";
import { useEffect, useState } from "react";
import styles from "./CardTotal.module.css";
export default function CardTotal() {
    const { carrinho, conversorMoeda } = useCarrinho();
    const [somaQuantidade, setSomaQuantidade] = useState(0);

    useEffect(() => {
        setSomaQuantidade(carrinho.reduce((acumulador, atual) => acumulador + atual.preco * atual.quantidade, 0))
    }, [carrinho]);

    return (
        <div className={`${styles.div_container} d-flex flex-column justify-content-center align-items-center gap-4`}>
            <h4>Finalize sua compra</h4>
            <div className="row w-75 text-center">
                <p className="fw-bold fs-6 col">Preço Total</p>
                <p className="col fw-bold fs-6">{conversorMoeda(somaQuantidade)}</p>
            </div>
            <button className="btn rounded-0 mt-5 bg-black text-light w-50">Finalizar compra</button>
        </div>
    )
}
