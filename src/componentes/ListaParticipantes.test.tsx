import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"
import ListaParticipantes from "./ListaParticipantes"

jest.mock("../state/hook/useListaDeParticipante", () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

describe("lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })
  test("renderiza sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(0)
  })
})

describe("lista preenchida de participantes", () => {
  const participantes = ["Ana", "Catarina"]
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })
  test("renderiza com elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    const itens = screen.queryAllByRole('listitem')
    expect(itens).toHaveLength(participantes.length)
  })
})