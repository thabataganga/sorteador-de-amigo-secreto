export default function Formulario() {
  return (
    <form>
      <label htmlFor="nome" />
      <input id="nome" placeholder="Nome do participante" type="text" />
      <button disabled={true}>Enviar</button>
    </form>
  )
};
