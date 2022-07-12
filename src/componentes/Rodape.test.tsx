import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"

describe("participantes insuficientes", () => {
  test("não pode ser iniciado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>)

    const botao = screen.getByRole('button')

    expect(botao).toBeDisabled()
  })
})