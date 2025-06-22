import styles from "./CardCarrinho.module.css";
import { useCarrinho } from "@/contexts/CarrinhoContext";

export default function CardCarrinho({ titulo, imagem, valor, qtd, incrementar, decrementar, excluirProduto }) {
    const valorDaQuantidade = valor * qtd;
    const { conversorMoeda } = useCarrinho();
    return (
        <>
            <hr className={styles.hr}/>
            <div className="text-black d-flex flex-row py-2 align-items-center justify-content-around">
                <img className={`me-4 ${styles.img_produto}`} src={imagem} alt="Imagem produto" />
                <p className="fw-bold fs-5 m-0">{titulo}</p>
                <div className={styles.quantidade}>
                    <button onClick={decrementar} className={`col ${styles.quantidade_button}`}> - </button>
                    <input type="number" className={styles.quantidade_input} readOnly={true} value={`${qtd}`} />
                    <button onClick={incrementar} className={`col ${styles.quantidade_button}`}> + </button>
                </div>
                <p className="fw-bold fs-5 m-0">{conversorMoeda(valorDaQuantidade)}</p>
                <button className={styles.closeBtn} onClick={excluirProduto}>X</button>
            </div>
        </>
        
    )
}