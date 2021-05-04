import React, { useState, useContext } from "react";
import { TextField, FormControlLabel, Switch, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ handleSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validaCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          handleSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        id="nome"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        name="sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
        required
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        name="cpf"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        onBlur={validaCampos}
        error={!erros.cpf.valid}
        helperText={erros.cpf.text}
        required
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(e) => setPromocoes(e.target.checked)}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(e) => setNovidades(e.target.checked)}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
