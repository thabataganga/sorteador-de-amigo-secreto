import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"


jest.mock("../state/hook/useListaDeParticipante", () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

const mockNavegacao = jest.fn()

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

describe("participantes insuficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })
  test("não pode ser iniciado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>)

    const botao = screen.getByRole('button')

    expect(botao).toBeDisabled()
  })
})

describe("participantes suficientes", () => {
  const participantes = ["Ana", "Catarina", "Sheila"]
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  test("pode ser iniciado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>)

    const botao = screen.getByRole('button')

    expect(botao).not.toBeDisabled()
  })

  test("inicia sorteio", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>)

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio")

  })
})