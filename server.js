const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

function getSymbols() {
  const symbols = ['🍒', '🍋', '🔔', '⭐', '🍉'];
  return [symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)]];
}

app.post('/spin', (req, res) => {
  const symbols = getSymbols();
  const id = uuidv4();
  
  let isWinner = symbols.every((s) => s === symbols[0]);

  res.json({ id, symbols, isWinner });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
