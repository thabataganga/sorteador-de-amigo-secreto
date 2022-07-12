import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe("Formulario.tsx", () => {
  test('botao inativo com input vazio', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>)
    //find input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    // find botao
    const botao = screen.getByRole('button')
    // garantir o input no doc
    expect(input).toBeInTheDocument()
    // garantir botao desabilitado
    expect(botao).toBeDisabled()
  })

  test('botao ativo com input preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>)
    //find input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
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

  test('nomes unicos na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>)
    //find input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
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

  test('mensagem de erro some apos o timer', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>)
    //find input no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
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

    let mensagemDeErro = screen.queryByRole('alert')

    expect(mensagemDeErro).toBeInTheDocument()

    act(() => {
      /// Esperar N segundos
      jest.runAllTimers()
    })

    mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeNull()
  })
})

