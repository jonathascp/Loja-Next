import { useEffect } from "react";
import styles from "./Card.module.css";
import { useCarrinho } from "@/contexts/CarrinhoContext";
export default function Card({ elemento, titulo, imagem, preco }) {
    const { carrinho,adicionarCarrinho } = useCarrinho();



    return (
        <div className={styles.card_produto}>
            <img className={styles.card_produto_image} src={imagem} alt="descricao produto" />
            <div className={`${styles.card_produto_descricao}`}>
                <p className={styles.card_produto_titulo}>{titulo}</p>
                <p className={`text-black-50 ${styles.card_produto_preco}`}>{preco}</p>
                <button type="button"
                    onClick={() => {
                        
                            const produtoEncontrado = carrinho.find(element => element.titulo === titulo);

                            if (produtoEncontrado) {
                                produtoEncontrado.quantidade += 1;
                            }
                            else {
                                adicionarCarrinho({...elemento,id:Math.round(Math.random() * 1000),quantidade: 1})
                            }
                        }
                    }
                    className={`bg-secondary-subtle ${styles.card_produto_botao}`}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}