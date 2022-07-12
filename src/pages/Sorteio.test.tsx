import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from "./Sorteio";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"

jest.mock("../state/hook/useListaDeParticipante", () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

describe("Sorteio", () => {
  const participantes = [
    'Ana',
    'Catarina',
    'Sheila'
  ]
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
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
})