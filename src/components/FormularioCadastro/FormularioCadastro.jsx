import React, { useState } from "react";
import { TextField, FormControlLabel, Switch, Button } from "@material-ui/core";

function FormularioCadastro({ handleSubmit, validaCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        onBlur={(e) => {
          const validate = validaCPF(e.target.value);
          setErros({ cpf: validate });
        }}
        error={!erros.cpf.valid}
        helperText={erros.cpf.text}
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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
