import { useState } from "react"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio"

export default function Sorteio() {

  const participantes = useListaDeParticipantes()
  const [participanteDaVez, setParticipanteDaVez] = useState("")
  const [amigoSecreto, setAmigoSecreto] = useState("")
  const resultado = useResultadoSorteio()

  function Sortear(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }

  }

  return (
    <section>
      <form onSubmit={Sortear}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
          {participantes.map(participante =>
            <option key={participante}>{participante}</option>)}
        </select>
        <button>Sortear</button>
      </ form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  )
};
