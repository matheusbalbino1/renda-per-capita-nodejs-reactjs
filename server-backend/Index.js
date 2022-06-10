const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000

// Rotas

// Avisar ao express que vamos receber um Json
app.use(express.json())

// Cors  libera todas as rotas
app.use(cors())
app.post("/", (requisicao, resposta) => {
    const body = requisicao.body;

    // Asyncrono para requisitar API
    (async () => {

        // Objeto para retornar ao Front-END
        let objectReturn = {};

        //Calcular Renda Per Capita
        const rendaPerCapita = Number(body.renda) / (Number(body.numeroDependentes) + 1);

        // Requisitar API do ViaCep
        const response = await axios.get(`https://viacep.com.br/ws/${body.cep}/json/`);

        // Se der erro na requisição adicione ao ObjetoReturn apenas a Renda Por Capita e se possível o Nome
        if (response.data.erro == "true") {
            objectReturn.rendaPerCapita = rendaPerCapita
            if (body.nome) {
                objectReturn.nome = body.nome
            }
            resposta.json(objectReturn);

        } else {
            objectReturn = response.data

            if (body.nome) {
                objectReturn.nome = body.nome
            }
            objectReturn.rendaPerCapita = rendaPerCapita
            resposta.json(objectReturn);
        }
    })();
})
app.listen(port, () => {
    console.log("BACKEND / SERVIDOR RODANDO")
})