import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const app = express();
const port = 3000;

// Obtendo o equivalente de __dirname no ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("sdrtfyguhijkolp");
});

app.get('/views/assinar', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "assinar.html"));
});

app.get('/views/checkout', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "checkout.html"));
});
app.post('/dadosAssinatura', async (req, res) => {
    try {
      const dados = req.body; // Recebe o JSON enviado pelo cliente
      const pastaDestino = path.join(__dirname, 'data'); // Pasta onde o arquivo será salvo
  
      const filePath = path.join(pastaDestino, 'dadosAssinatura.json');
        //Ler Json original e adicionar(push) o novo dado
      // Grava o arquivo JSON com formatação legível
      await writeFile(filePath, JSON.stringify(dados, null, 2));
      res.status(200).json({ message: 'JSON salvo com sucesso!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao salvar o JSON' });
    }
  });

app.listen(port, () => {
    console.log("http://localhost:3000");
});
