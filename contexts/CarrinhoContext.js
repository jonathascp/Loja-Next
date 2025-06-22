"use client";
import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({children}) => {
    const [carrinho,setCarrinho] = useState([]);

    const adicionarCarrinho = (item) => {
        setCarrinho(prev => [...prev,item]);
    }

    const removerCarrinho = (id) => {
        const novoCarrinho = carrinho.filter(produto => produto.id !== id);
        setCarrinho(novoCarrinho);
    }

    const conversorMoeda = (valor) => {
        const valorConvertido = valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
        return valorConvertido;
    }

    return (
    <CarrinhoContext.Provider value={{carrinho,adicionarCarrinho,removerCarrinho,setCarrinho,conversorMoeda}}>
        {children}
    </CarrinhoContext.Provider>
    )
}

export const useCarrinho = () => {
    return useContext(CarrinhoContext);

}