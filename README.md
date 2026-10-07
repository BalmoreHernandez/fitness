# App Fitness para Principiantes

**Master your body, mind and money.** (eslogan de Balmore; se muestra en inglés en ambos idiomas).

App de Balmore Hernandez (@BalmoreHernandez.sv) para principiantes, en español con versión en inglés (botón ES/EN). Pestañas: Inicio, Rutina, Comida, Hoy y Progreso.

- **Rutina:** planes de 3 o 5 días y Exprés de 20–30 min, en gimnasio o en casa, con progresión de 4 semanas.
- **Comida:** calculadora de calorías, porciones con la mano y armador de plato, comida típica salvadoreña con cambios inteligentes, y súper barato en USD.
- **Hoy:** mentalidad diaria, hábitos y racha, y reto de 30 días con insignias e imagen para compartir.
- **Progreso:** tu peso y el Reto con Balmore.

Archivo principal: `index.html`. Es autocontenido y funciona sin internet; la única petición de red es el envío del formulario de leads.

## Dónde editar (todo dentro de `index.html`)
- `CONFIG.COACHING_URL`: enlace de WhatsApp para coaching.
- `CONFIG.LEAD_FORM_URL`: URL del Web App de Google Apps Script. Si está vacía, el plan sigue disponible y se indica que la solicitud no se envió.
  - El envío es `fetch(url, {method:'POST', mode:'no-cors', body: URLSearchParams})`.
  - Campos: `nombre`, `email`, `whatsapp`, `objetivo`, `idioma` (es/en), `fuente` = `app-plan-4-semanas`, `consentimiento`, `consentimiento_fecha`. Verificar que el script original almacene los campos de consentimiento.
  - Hay un honeypot `website`: si viene lleno, no se envía nada.
- `CONFIG.VIDEOS`: `{ idEjercicio: "https://..." }`. El botón de video solo aparece cuando hay URL. También sirve `EX[id].videoUrl`.
- `CONFIG.RETO_BALMORE.ENTRIES`: agrega un registro por semana, por ejemplo `{ date: "2026-10-09", weight: 247.5, note: { es: "...", en: "..." } }`.
- `MENSAJES`: los 60 mensajes de mentalidad diaria (uno por día, en ciclo).
- `FOODS`, `GROCERY`, `FAQ`, `RETO30`, `ROUTINE`, `WEEKS`: contenido. Las calorías, la proteína y los precios son estimados.
- Si cambias `index.html` después de publicar, sube la versión de `CACHE` en `sw.js`.

## 2026-10-07 — ChatGPT
- Onboarding sin registro; conserva la marca G8b y la historia personal.
- Después de validar nombre/contacto/consentimiento, muestra acceso inmediato a la rutina existente de cuatro semanas. No genera un plan personalizado ni envía un PDF. El envío de contacto ocurre en paralelo; la respuesta opaca NO verifica registro ni email. El plan permanece disponible aunque falle la red.
- Acompañamiento de pago: próximamente, sin precios ni checkout; calificación y mensaje de WhatsApp revisable.
- Revisión semanal privada en almacenamiento local.
- Eventos `fitness:analytics` locales; no proveedor de analítica configurado. Solo evento, idioma y pestaña; nunca contacto, peso o reflexiones. La calificación no se envía a Notion automáticamente.
- Estado real del servicio y registro de operación: Balmore HQ en Notion.
- Cambios locales en rama `improve-free-fitness-journey`; despliegue requiere aprobación.

2026-10-07 — ChatGPT: revisión de las cuatro semanas; progresión condicional, aviso visible en Rutina y calculadora solo para adultos. Despliegue aprobado por Balmore en este chat.
