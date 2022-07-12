import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

test('quando o input está vazio novos usuarios não podem ser adicionados', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>)
  //find input no DOM
  const input = screen.getByPlaceholderText('Nome do participante')
  // find botao
  const botao = screen.getByRole('button')
  // garantir o input no doc
  expect(input).toBeInTheDocument()
  // garantir botao desabilitado
  expect(botao).toBeDisabled()
})

test('adicionar um participante quando um nome for preenchido', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>)
  //find input no DOM
  const input = screen.getByPlaceholderText('Nome do participante')
  // find botao
  const botao = screen.getByRole('button')

  //inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  // clicar no botao submeter
  fireEvent.click(botao)

  // input com foco ativo
  expect(input).toHaveFocus()
  // input limpo
  expect(input).toHaveValue("")
})

test('nomes únicos na lista', () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>)
  //find input no DOM
  const input = screen.getByPlaceholderText('Nome do participante')
  // find botao
  const botao = screen.getByRole('button')

  //inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  // clicar no botao submeter
  fireEvent.click(botao)

  //inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  // clicar no botao submeter
  fireEvent.click(botao)

  const mensagemDeErro = screen.getByRole('alert')

  expect(mensagemDeErro.textContent).toBe('Nomes não podem ser duplicados')
})