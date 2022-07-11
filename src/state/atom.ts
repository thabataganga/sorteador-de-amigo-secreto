import { atom } from "recoil";

export const listaParticipantesState = atom<String[]>({
  key: "listaParticipantesState",
  default: [],
});
