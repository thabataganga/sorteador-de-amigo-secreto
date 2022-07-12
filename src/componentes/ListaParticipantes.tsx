import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"

export default function ListaParticipantes() {
  const participantes: string[] = useListaDeParticipantes()

  return (
    <ul>
      {participantes.map(participante =>
        <li key={participante}>
          {participante}
        </li>)}
    </ul>

  )
};
