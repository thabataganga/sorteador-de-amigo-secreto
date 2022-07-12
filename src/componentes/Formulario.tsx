import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante"
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro"

export default function Formulario() {

  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()

  const mensagemDeErro = useMensagemDeErro()

  function adicionarParticipante(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>

      <input
        id="nome"
        onChange={evento => setNome(evento.target.value)}
        placeholder="Nome do participante"
        type="text"
        value={nome}
        ref={inputRef}
      />
      <button disabled={!nome}>Enviar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  )
};
