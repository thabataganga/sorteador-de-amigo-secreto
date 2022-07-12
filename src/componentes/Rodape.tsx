import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"

export default function Rodape() {
  const participantes = useListaDeParticipantes()
  //const navegarPara = useNavigate()
  return (
    <footer>
      <button disabled={participantes.length < 3}>RODAR</button>
    </footer>
  )
};
