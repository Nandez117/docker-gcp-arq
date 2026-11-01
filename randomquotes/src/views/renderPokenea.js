const typeThemes = {
  Fuego: {
    bg: "linear-gradient(135deg, #ef4444 0%, #7f1d1d 100%)",
    badgeBg: "#fee2e2",
    badgeColor: "#991b1b",
    quoteBorder: "#ef4444",
    containerBg: "#dc2626"
  },
  Agua: {
    bg: "linear-gradient(135deg, #0284c7 0%, #082f49 100%)",
    badgeBg: "#e0f2fe",
    badgeColor: "#0369a1",
    quoteBorder: "#0284c7",
    containerBg: "#0284c7"
  },
  Planta: {
    bg: "linear-gradient(135deg, #10b981 0%, #064e3b 100%)",
    badgeBg: "#d1fae5",
    badgeColor: "#065f46",
    quoteBorder: "#10b981",
    containerBg: "#059669"
  },
  Eléctrico: {
    bg: "linear-gradient(135deg, #eab308 0%, #78350f 100%)",
    badgeBg: "#fef9c3",
    badgeColor: "#854d0e",
    quoteBorder: "#eab308",
    containerBg: "#ca8a04"
  },
  Fantasma: {
    bg: "linear-gradient(135deg, #8b5cf6 0%, #31104b 100%)",
    badgeBg: "#ede9fe",
    badgeColor: "#5b21b6",
    quoteBorder: "#8b5cf6",
    containerBg: "#7c3aed"
  },
  Bicho: {
    bg: "linear-gradient(135deg, #84cc16 0%, #365314 100%)",
    badgeBg: "#ecfccb",
    badgeColor: "#3f6212",
    quoteBorder: "#84cc16",
    containerBg: "#65a30d"
  },
  Normal: {
    bg: "linear-gradient(135deg, #64748b 0%, #1e293b 100%)",
    badgeBg: "#f1f5f9",
    badgeColor: "#334155",
    quoteBorder: "#64748b",
    containerBg: "#475569"
  }
};

function renderPokeneaHTML(pokenea, containerId) {
  const theme = typeThemes[pokenea.tipo] || typeThemes.Normal;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokeneas de Antioquia - ${pokenea.nombre}</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: ${theme.bg};
      color: #334155;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
      transition: background 0.5s ease;
    }
    .card {
      background: #ffffff;
      max-width: 440px;
      width: 100%;
      border-radius: 20px;
      padding: 32px 24px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .badges {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    .badge {
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 999px;
    }
    .badge-paisa {
      background: #f1f5f9;
      color: #475569;
    }
    .badge-tipo {
      background: ${theme.badgeBg};
      color: ${theme.badgeColor};
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
      background: radial-gradient(circle, #f8fafc 60%, transparent 70%);
      border-radius: 50%;
    }
    img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2));
    }
    blockquote {
      background: #f8fafc;
      border-left: 4px solid ${theme.quoteBorder};
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
      background: ${theme.containerBg};
      color: #ffffff;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .container-info code {
      background: rgba(0, 0, 0, 0.25);
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
    <div class="badges">
      <span class="badge badge-paisa">Pokenea Antioqueño</span>
      <span class="badge badge-tipo">${pokenea.tipo}</span>
    </div>
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
