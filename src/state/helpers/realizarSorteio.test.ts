import React from "react";
import realizarSorteio from "./realizarSorteio";

describe("Sorteio", () => {
  test("sorteia o proprio nome", () => {
    const participantes = ["Ana", "Catarina", "Sheila", "Maria", "Fatima"];

    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
