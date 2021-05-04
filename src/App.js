import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validaCPF, validaSenha } from "./models/cadastro";
import "fontsource-roboto";
import ValidacoesCadastro from "./contexts/validacoesCadastro";

function handleSubmit(data) {
  console.log(data);
}

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validaCPF, senha: validaSenha }}
        >
          <FormularioCadastro handleSubmit={handleSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

export default App;
