import React from "react";
import styled from "styled-components";

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`;

const Sty = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <ProdutosContainer>
      <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
      Ativar
    </Button>
      <Produto>
        <Titulo>
          Notebook <Preco cor="#84e">R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
      <Produto>
        <Titulo>
          Smartphone <Preco cor="#53d956">R$ 2999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
    </ProdutosContainer>
  );
};

export default Sty;
