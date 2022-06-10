
import './App.css';
import RespostaBackEnd from "./Componentes/RespostaBackEnd/RespostaBackEnd"
import Form from "./Componentes/Form/Form"
import { useState } from 'react';
function App() {

  const [returnBackend, setReturnBackend] = useState("")

  const port = process.env.PORT || 5000

  function handleSubmit(e) {

    e.preventDefault()

    // Cria o Objeto/Json para enviar ao BackEnd
    let json = {
      nome: e.target[0].value,
      cep: e.target[1].value,
      renda: e.target[2].value,
      numeroDependentes: e.target[3].value
    }

    fetch(`http://localhost:${port}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
    })
      .then(resposta => resposta.json())
      .then(resposta => {
        setReturnBackend(resposta)
      })
  }

  return (
    <div className="App">
      <main>
        <h1>Calcule sua renda per capita</h1>
        <Form handleSubmit={handleSubmit} />
        <RespostaBackEnd returnBackend={returnBackend}/>
        
      </main>
    </div>
  );
}

export default App;
