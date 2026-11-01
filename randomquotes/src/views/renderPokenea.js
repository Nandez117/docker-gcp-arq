function renderPokeneaHTML(pokenea, containerId) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokeneas de Antioquia</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
      color: #334155;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    .card {
      background: #ffffff;
      max-width: 440px;
      width: 100%;
      border-radius: 20px;
      padding: 32px 24px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .badge-paisa {
      display: inline-block;
      background: #fef08a;
      color: #854d0e;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 12px;
    }
    h1 {
      color: #0f172a;
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 8px;
    }
    .img-container {
      width: 220px;
      height: 220px;
      margin: 16px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle, #f1f5f9 60%, transparent 70%);
      border-radius: 50%;
    }
    img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));
    }
    blockquote {
      background: #f8fafc;
      border-left: 4px solid #3b82f6;
      padding: 16px;
      border-radius: 8px;
      font-size: 1.1rem;
      font-style: italic;
      color: #334155;
      line-height: 1.5;
      margin: 20px 0;
    }
    .container-info {
      margin-top: 16px;
      padding: 10px 16px;
      background: #0284c7;
      color: #ffffff;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .container-info code {
      background: rgba(0, 0, 0, 0.2);
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.95rem;
    }
    .refresh-hint {
      display: block;
      margin-top: 16px;
      font-size: 0.78rem;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge-paisa">Pokenea Antioqueño</span>
    <h1>${pokenea.nombre}</h1>
    <div class="img-container">
      <img src="${pokenea.imagen}" alt="${pokenea.nombre}" onerror="this.onerror=null; this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenea.id * 3}.png';" />
    </div>
    <blockquote>"${pokenea.fraseFilosofica}"</blockquote>
    <div class="container-info">
      <span>Contenedor:</span>
      <code>${containerId}</code>
    </div>
    <span class="refresh-hint">Recarga la página para ver otro Pokenea o contenedor</span>
  </div>
</body>
</html>`;
}

module.exports = renderPokeneaHTML;

