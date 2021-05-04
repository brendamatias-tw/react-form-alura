import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function handleSubmit(data) {
  console.log(data);
}

function validaCPF(CPF) {
  if (CPF.length !== 11) {
    return { valid: false, text: "O CPF deve ter 11 digitos" };
  }

  return { valid: true, text: "" };
}

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro handleSubmit={handleSubmit} validaCPF={validaCPF} />
      </Container>
    );
  }
}

export default App;
