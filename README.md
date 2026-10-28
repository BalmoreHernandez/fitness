# App Fitness para Principiantes

**Master your body, mind and money.** (eslogan de Balmore; se muestra en inglés en ambos idiomas).

App de Balmore Hernandez (@BalmoreHernandez.sv) para principiantes, en español con versión en inglés (botón ES/EN). Pestañas: Inicio, Rutina, Comida, Hoy y Progreso.

- **Rutina:** planes de 3 o 5 días y Exprés de 20–30 min, en gimnasio o en casa, con progresión de 4 semanas.
- **Comida:** calculadora de calorías, porciones con la mano y armador de plato, comida típica salvadoreña con cambios inteligentes, y súper barato en USD.
- **Hoy:** mentalidad diaria, hábitos y racha, y reto de 30 días con insignias e imagen para compartir.
- **Progreso:** tu peso y el Reto con Balmore.

Archivo principal: `index.html`. Es autocontenido y funciona sin internet; la única petición de red es el envío del formulario de leads.

## Dónde editar (todo dentro de `index.html`)
- `CONFIG.LEAD_FORM_URL`: URL del Web App de Google Apps Script. Todos los botones "por correo" llevan a este formulario (captura de correo; si falla el envío muestra un error, no abre otra app).
  - El envío es `fetch(url, {method:'POST', mode:'no-cors', body: URLSearchParams})`.
  - Campos: `nombre`, `email` (obligatorio), `whatsapp` (siempre vacío, se mantiene por compatibilidad con Code.gs), `objetivo`, `idioma` (es/en), `fuente` = `app-plan-4-semanas`.
  - Hay un honeypot `website`: si viene lleno, no se envía nada.
- `CONFIG.VIDEOS`: `{ idEjercicio: "https://..." }`. El botón de video solo aparece cuando hay URL. También sirve `EX[id].videoUrl`.
- `CONFIG.RETO_BALMORE.ENTRIES`: agrega un registro por semana, por ejemplo `{ date: "2026-10-09", weight: 247.5, note: { es: "...", en: "..." } }`.
- `MENSAJES`: los 60 mensajes de mentalidad diaria (uno por día, en ciclo).
- `FOODS`, `GROCERY`, `FAQ`, `RETO30`, `ROUTINE`, `WEEKS`: contenido. Las calorías, la proteína y los precios son estimados.
- Si cambias `index.html` después de publicar, sube la versión de `CACHE` en `sw.js`.
