const express = require('express')
const app = express();

const porta = 3000;

app.get('/texto', (req, res) => {
    res.send("Olá mundo!")
})

app.get('/html', (req, res) => {
    res.send("<h1 style= 'color:blue'>Keylla</h1>")
})

app.get('/json', (req, res) => {
    res.json(
        {
            mensagem: "Exemplo de json!"
        }
    )
})

app.get('/idade/:anos', (req, res) => {
    const idade = req.params.anos;

    if(idade >= 18) {
        res.send("Acesso Liberado!")
    }else{
        res.send("Proibido para menores!")
    }
})

//  '/categoria/:idade' -> < 12 = Categoria infantil
// 12 >= EEEEE <= 17 Categoria Juvenil
// 18 >= Categoria Adulto!

app.get('/categoria/:idade', (req, res) => {
    const idade = req.params.idade;

    if (idade < 12) {
        res.send("Categoria Infantil");

    } else if (idade >= 12 && idade <= 17) {
        res.send("Categoria Juvenil");

    } else {
        res.send("Categoria Adulto");
    }
})

app.use(express.json())

app.post('', (req. res) => {
    const body = req.body;

    if(body.senha === "123") {
        res.send("LOGIN EFETUADO COM SUCESSO!")
    } else {
        res.send("Senha incorreta!")
    }
})

app.listen(porta, () => {
    console.log("Servidor rodando na porta: " + porta)
})