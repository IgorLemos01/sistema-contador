import express from "express";

const app = express();
const PORTA = 300;

app.get("/", (req, res) => {
    res.send("Sistema contador funcionando");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

