import React, { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criaEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validaCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let erro in erros) {
      if (!erros[erro].valid) {
        return false;
      }
    }

    return true;
  }

  return [erros, validaCampos, possoEnviar];
}

function criaEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valid: true, text: "" };
  }

  return estadoInicial;
}

export default useErros;
