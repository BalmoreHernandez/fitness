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

## Revisión del plan — publicación aprobada el 7 de octubre de 2026
- Cuerpo completo A/B/C: 3 días no consecutivos, 5 ejercicios. Exprés: A/B/C de 4 ejercicios, en 2–3 días no consecutivos, sin circuito ni obligación de terminar en 30 minutos.
- 5 días de actividad: fuerza A, caminata, fuerza B, caminata, fuerza C. Las caminatas no marcan el hábito de entrenar fuerza.
- 2 series de trabajo iniciales; selector explícito de 3 series cuando la técnica y recuperación lo permiten. La fecha nunca aumenta volumen. Se puede parar tras 1 serie al retomar.
- Semanas: técnica, constancia, progresión por preparación y revisión. Alcanzar el extremo alto del rango con técnica en dos sesiones antes de probar el menor aumento de carga; dejar 2–3 repeticiones posibles.
- Registro por ejercicio de carga/unidad y repeticiones reales de cada serie. Guarda historial por modalidad y ejercicio en este navegador; actualiza el registro del mismo día, sin envío externo.
- Claves de series routine-v2 con número de series para evitar que marcas anteriores cuenten como ejercicios distintos o volumen distinto. Conserva registros previos.
- Ilustraciones de inicio/fin, tres pasos y consejo. No se añadieron videos. Esquemas orientativos, no una evaluación individual de técnica.
- Referencia: https://acsm.org/resistance-training-guidelines-update-2026/ — adultos sanos, grupos principales al menos dos días semanales, 2–3 series para fuerza con cargas mayores y aproximadamente 10 series/grupo/semana para priorizar hipertrofia. Este es un punto de inicio general; no promete resultados ni prescribe pruebas de 1RM.

### Cierre del ciclo y seguimiento
- En S4 hay enlace al cierre del ciclo; también disponible en Progreso. El usuario declara si terminó o aún quiere revisar. Seleccionar S4 o la fecha no se consideran prueba de completar el plan.
- Resumen: días marcados Entrené desde planStart, sin peso, cargas, repeticiones ni reflexiones. Es un conteo de registros en el navegador, no de sesiones verificadas.
- Formulario solicita nombre/contacto, etapa, objetivo, interés gratuito o información sobre continuidad de pago, con consentimiento específico.
- Usa el Google Apps Script original. fuente sigue app-plan-4-semanas para compatibilidad; objetivo incluye el prefijo Seguimiento 4 semanas y resumen; añade tipo_solicitud, interes y estado_ciclo. Confirmar que el script original almacene esos campos adicionales.
- Respuesta no-cors opaca se registra como unverified; fallo de red como failed. Ambos conservan el mensaje listo para WhatsApp. Abrir WhatsApp es distinto de enviar o recibir un mensaje.
- Estado local por ciclo, sin contacto persistido: requested/pending, unverified/failed y whatsappOpened. Eventos locales: cycle_review_opened, followup_requested, followup_unverified/failed, followup_whatsapp_opened.
- Balmore confirma oferta/precio/alcance antes de compra; sin checkout, cobranza ni suscripción. Las herramientas gratuitas pueden repetirse. Notion no se sincroniza automáticamente.
