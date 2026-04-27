# Portafolio — Miguel Vera

Portafolio profesional de diseño UX/Product. Sitio estático construido con HTML, CSS y JavaScript vanilla.

## Cómo abrir el proyecto localmente

No requiere instalación ni servidor. Abre directamente en el navegador:

1. Navega a la carpeta del proyecto en tu explorador de archivos.
2. Haz doble clic en `index.html`.
3. Se abrirá en tu navegador predeterminado.

O desde la terminal:
```bash
# Windows
start index.html

# macOS
open index.html
```

Para una experiencia más fiel (fuentes, rutas relativas sin restricciones):
```bash
# Opción recomendada: servidor local simple con Python
python -m http.server 8000
# Luego abre: http://localhost:8000
```

## Páginas disponibles

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Home principal del portafolio |
| `case-rewards-mtr.html` | Case study: Rewards / Nuevo MTR |
| `case-pickup.html` | Case study: Pick Up |
| `case-nueva-home.html` | Case study: Nueva Home |
| `case-ds-multimarca.html` | Case study: DS Multimarca |
| `case-research-2024.html` | Case study: Investigación estratégica 2024 |
| `case-reporte-html.html` | Case study: Reporte HTML |
| `case-research-2023.html` | Case study: Research Partners 2023 (base con placeholders) |
| `case-research-2025-mtr.html` | Case study: Investigación 2025 MTR (base con placeholders) |
| `starbucks-casestudy.html` | Case study de referencia (Starbucks Rewards) |

## Stack

- HTML5 semántico
- CSS (styles.css) — tokens, componentes, responsive
- JavaScript vanilla (script.js) — animaciones, menú móvil, año en footer
- Sin frameworks, sin bundlers, sin dependencias externas
- Fuente: Open Sans (Google Fonts)

## Estructura de archivos

```
/
├── index.html
├── case-*.html              ← Case studies
├── starbucks-casestudy.html ← Referencia (no editar)
├── styles.css               ← Estilos globales
├── script.js                ← JavaScript
│
├── assets/
│   ├── projects/            ← Covers de proyectos (11 disponibles)
│   ├── screenshots/         ← Capturas por proyecto
│   ├── profile/             ← Foto de perfil
│   ├── logo/                ← Logos
│   └── favicon/             ← (pendiente)
│
├── content/                 ← Documentación en Markdown
│   ├── profile.md
│   ├── portfolio-brief.md
│   ├── career-milestones.md
│   ├── case-study-template.md
│   ├── tone-and-style.md
│   └── reports-brief.md
│
├── data/                    ← Datos estructurados en JSON
│   ├── case-studies.json
│   ├── timeline.json
│   ├── weekly-report-sample.json
│   └── assets-manifest.json
│
└── reports/                 ← Reportes exportados
```

## Configuración manual requerida

### WhatsApp — botón "Hablemos"
En `index.html`, sección Sobre mí, el botón "Hablemos" apunta a:
```
https://wa.me/51999999999
```
Reemplazar `51999999999` por el número real con prefijo de país (ej. `51` para Perú seguido del número sin ceros).

### CV — botón "Descargar CV"
El botón en el header apunta a `assets/resume/CV-Miguel-Vera.pdf`.
Colocar el archivo PDF del CV con ese nombre exacto en:
```
assets/resume/CV-Miguel-Vera.pdf
```
Si el nombre del archivo es diferente, actualizar el atributo `href` en el `<a>` del header en `index.html` y en cada página de case study.

---

## Pendientes antes de publicar

- [ ] Colocar CV en `assets/resume/CV-Miguel-Vera.pdf`
- [ ] Reemplazar número WhatsApp `51999999999` en `index.html` sección Sobre mí
- [ ] Rellenar placeholders `[Agregar ...]` en `case-research-2023.html`
- [ ] Rellenar placeholders `[Agregar ...]` en `case-research-2025-mtr.html`
- [ ] Agregar screenshots a `assets/screenshots/` para Research 2023 y 2025
- [ ] Agregar cover para Amigo Secreto → `assets/projects/amigo-secreto-cover.png`
- [ ] Agregar screenshots para DS Starbucks y DS Multimarca
- [ ] Llenar placeholders `[Agregar ...]` en todos los case studies
- [ ] Agregar año correcto en reportes HTML (`13 - 19 Abril.html`)
- [ ] Agregar favicon → `assets/favicon/favicon.ico`
- [ ] Reemplazar `[TU-LINKEDIN]` con URL real de LinkedIn
- [ ] Reemplazar `[TU-DOMINIO]` en meta og:url con dominio real
- [ ] Rellenar `content/profile.md` con información actualizada
- [ ] Rellenar `content/career-milestones.md` con fechas y empresas reales
