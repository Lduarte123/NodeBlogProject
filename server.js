import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const _dirName = path.resolve();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirName, 'public')));

function carregarUsuarios() {
    const caminhoDados = path.join(_dirName, 'data', 'usuarios.json');
    if (fs.existsSync(caminhoDados)) {
        const dadosArquivo = fs.readFileSync(caminhoDados);
        return JSON.parse(dadosArquivo);
    }
    return [];
}

function salvarUsuarios(usuarios) {
    const caminhoDados = path.join(_dirName, 'data', 'usuarios.json');
    fs.writeFileSync(caminhoDados, JSON.stringify(usuarios, null, 2));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirName, 'views', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(_dirName, 'views', 'login.html'));
});

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    const usuarios = carregarUsuarios();
    const usuarioEncontrado = usuarios.find(user => user.usuario === usuario && user.senha === senha);

    if (usuarioEncontrado) {
        res.send('Login bem-sucedido!');
    } else {
        res.send('Usuário ou senha incorretos!');
    }
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(_dirName, 'views', 'register.html'));
});

app.post('/register', (req, res) => {
    const { usuario, senha } = req.body;
    const usuarios = carregarUsuarios();
    
    if (usuarios.find(user => user.usuario === usuario)) {
        return res.send('Usuário já existe!');
    }

    const novoUsuario = { usuario, senha };
    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);

    res.send('Usuário registrado com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
