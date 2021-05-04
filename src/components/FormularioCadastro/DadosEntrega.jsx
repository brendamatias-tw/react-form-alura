import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ handleSubmit }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="cep"
        name="cep"
        type="number"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        label="CEP"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereco"
        name="endereco"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        name="numero"
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        label="Número"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="estado"
        name="estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        label="Estado"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        name="cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        label="Cidade"
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
