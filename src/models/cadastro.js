function validaCPF(CPF) {
  if (CPF.length !== 11) {
    return { valid: false, text: "O CPF deve ter 11 digitos" };
  }

  return { valid: true, text: "" };
}

function validaSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valid: false, text: "Senha deve ter entre 4 e 72 digitos" };
  }

  return { valid: true, text: "" };
}

export { validaCPF, validaSenha };
