import React from "react";

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao,
});

function semValidacao(dados) {
  return { valid: true, text: "" };
}

export default ValidacoesCadastro;
