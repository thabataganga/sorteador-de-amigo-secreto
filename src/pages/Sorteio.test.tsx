import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from "./Sorteio";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

jest.mock("../state/hook/useListaDeParticipante", () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

jest.mock("../state/hook/useResultadoSorteio", () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe("Sorteio", () => {
  const participantes = [
    'Ana',
    'Catarina',
    'Sheila'
  ]

  const resultado = new Map([
    ["Ana", "Sheila"],
    ["Sheila", "Catarina"],
    ["Catarina", "Ana"]
  ])

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)

  })

  test("todos exibem o amg secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length)
  })

  test("exibe o nome sorteado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText("Selecione o seu nome")

    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')

    expect(amigoSecreto).toBeInTheDocument()
  })
})