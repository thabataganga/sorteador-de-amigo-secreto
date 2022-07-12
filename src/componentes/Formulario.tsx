import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante"

export default function Formulario() {

  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()

  function adicionarParticipante(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <label htmlFor="nome" />
      <input
        id="nome"
        onChange={evento => setNome(evento.target.value)}
        placeholder="Nome do participante"
        type="text"
        value={nome}
        ref={inputRef}
      />
      <button disabled={!nome}>Enviar</button>
    </form>
  )
};
