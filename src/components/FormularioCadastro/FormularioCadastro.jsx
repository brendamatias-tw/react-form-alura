import { StepLabel, Stepper, Step, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ handleSubmit }) {
  const [etapa, setEtapa] = useState(0);
  const [dados, setDados] = useState({});

  const formularios = [
    <DadosUsuario handleSubmit={coletaDados} />,
    <DadosPessoais handleSubmit={coletaDados} />,
    <DadosEntrega handleSubmit={coletaDados} />,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>,
  ];

  useEffect(() => {
    if (etapa === formularios.length - 1) {
      handleSubmit(dados);
    }
  });

  function coletaDados(currentDados) {
    setDados({ ...dados, ...currentDados });
    proximaEtapa();
  }

  function proximaEtapa() {
    setEtapa(etapa + 1);
  }

  return (
    <>
      <Stepper activeStep={etapa}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapa]}
    </>
  );
}

export default FormularioCadastro;
