import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validaCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          handleSubmit({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        name="senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        onBlur={validaCampos}
        error={!erros.senha.valid}
        helperText={erros.senha.text}
        required
        label="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
