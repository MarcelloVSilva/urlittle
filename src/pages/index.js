import React from "react"

export default () => {
  const submit = event => {
    event.preventDefault()
  }
  return (
    <div className="container">
      <div>
        <h1>Encurte rápidamente sua url e compartilhe!</h1>
        <div className="inputs">
          <form onSubmit={submit}>
            <input required placeholder="url para encurtar"></input>
            <button>Encurtar</button>
          </form>
          <input contentEditable={false} placeholder="url gerada"></input>
          <button className="copy">Copiar</button>
        </div>
      </div>
    </div>
  )
}
