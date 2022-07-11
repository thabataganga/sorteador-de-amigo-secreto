import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

// JEST

test('quando o input está vazio novos usuarios não podem ser adicionados', () => {

  render(<Formulario />)
  //find input no DOM
  const input = screen.getByPlaceholderText('Nome do participante')

  // find botao
  const botao = screen.getByRole('button')

  // garantir o input no doc
  expect(input).toBeInTheDocument()

  // garantir botao desabilitado
  expect(botao).toBeDisabled()
})