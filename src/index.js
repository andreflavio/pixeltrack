const fs = require('fs').promises;
const express = require('express');
const client = require('prom-client'); // Importa prom-client
const app = express();

// Configura o prom-client para coletar métricas padrão
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

// Cria um histograma para rastrear a latência das requisições
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duração das requisições HTTP em segundos',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 1, 3, 5]
});

// Endpoint para expor métricas
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.get('/', async (req, res) => {
  const end = httpRequestDuration.startTimer(); // Inicia o timer para a métrica
  const logMessage = `Acesso: ${new Date().toISOString()}\n`;
  try {
    await fs.appendFile('/app/logs/app.log', logMessage);
    console.log(logMessage);
    res.send('PixelTrack - Painel de eSports');
    end({ method: req.method, route: '/', code: res.statusCode }); // Finaliza o timer
  } catch (err) {
    console.error('Erro ao escrever log:', err);
    res.status(500).send('Erro interno');
    end({ method: req.method, route: '/', code: res.statusCode });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});