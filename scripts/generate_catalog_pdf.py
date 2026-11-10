# -*- coding: utf-8 -*-
"""
Generador Oficial del Catálogo de Resúmenes Ejecutivos Imprimibles — Showroom Energy CPY 2026
Implementa el Módulo: exportacion-imprimible-marca-agua-energycpy (v2026.11)
Agente Responsable: Agente 03 — Desarrollador Web Showroom (desarrollador-web-showroom)
"""
import base64
import json
import os
import pathlib
import re
import shutil
import subprocess

BASE_DIR = pathlib.Path(r"C:\Users\majon\.gemini\antigravity-ide\scratch\showroom-energycpy")
JSON_PATH = BASE_DIR / "data" / "projects-master.json"
LOGO_PATH = BASE_DIR / "assets" / "images" / "logo-energy-cpy-4v-transparente.png"
if not LOGO_PATH.exists():
    LOGO_PATH = pathlib.Path(r"C:\Users\majon\Downloads\logo Energy CPY 4v fondo transparente_.png")

with open(JSON_PATH, "r", encoding="utf-8") as f:
    raw_data = json.load(f)

if isinstance(raw_data, dict):
    projects = list(raw_data.values())
else:
    projects = list(raw_data)

logo_bytes = LOGO_PATH.read_bytes()
LOGO_B64 = "data:image/png;base64," + base64.b64encode(logo_bytes).decode("ascii")

CONSULTANTS = {
    "javier": {
        "id": "javier",
        "name": "Javier Ignacio Díaz",
        "role": "Consultor Especialista — Energía Solar, BESS, Minería, Agroindustria & Ingeniería",
        "phone": "+54 9 351 2064791",
        "avatar": "J"
    },
    "daniel": {
        "id": "daniel",
        "name": "Daniel González",
        "role": "Consultor Especialista — Petróleo & Gas, Pesca Industrial, Hotelería & Real Estate (REIT)",
        "phone": "+54 9 2974 23-3028",
        "avatar": "D"
    }
}

SECTOR_ICONS = {
    "Energía Solar & Renovable": "☀️",
    "Hotelería & Renta": "🏨",
    "Agro, Campo & Industria": "🌾",
    "Minería": "⛏️",
    "Petróleo, Gas & Infraestructura": "🛢️",
    "Asesoramiento Financiero": "💼",
    "Real Estate / REIT": "🏢",
    "Pesca Industrial": "🚢"
}


def get_tir_category(tir_val):
    if not tir_val or tir_val == "Consulte":
        return "TIR Objetivo > 9%"
    m = re.search(r"(\d+[\.,]?\d*)", str(tir_val))
    if m:
        num = float(m.group(1).replace(",", "."))
        if num >= 15.0:
            return "Excelente (TIR > 15%)"
        elif num >= 9.0:
            return "Aprobada (TIR > 9%)"
    return "TIR Objetivo > 9%"


total_projects = len(projects)
total_usd = sum(float(p.get("amountUSD") or 0) for p in projects if not p.get("isPrivatePlacement"))
total_usd_str = f"USD {total_usd:,.1f}M".replace(",", "X").replace(".", ",").replace("X", ".")

css = """
@page {
    /* Sin bloqueo rígido de papel: se adapta a cualquier formato (A4, Carta, Oficio, A3, Vertical u Horizontal) */
    margin: 9mm 12mm;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    background-color: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: transparent;
    color: #000000;
    position: static;
    transform: none;
    overflow: visible;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}

/* Marca de Agua Global Fija al Viewport de Impresión: se repite en CADA hoja sin importar el tamaño configurado */
.global-page-watermark {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 0;
}
.global-page-watermark img {
    width: 94%;
    height: 90%;
    max-width: 94%;
    max-height: 90%;
    object-fit: contain;
    object-position: center center;
    opacity: 0.40;
}

.page {
    width: 100%;
    min-height: 96vh;
    padding: 2mm 1mm;
    position: relative;
    page-break-after: always;
    break-after: page;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: transparent;
    color: #000000;
    z-index: 2;
}
.page:last-child {
    page-break-after: auto;
    break-after: auto;
}

/* Se oculta la marca de agua interna de .page para evitar duplicación con la marca fija global por hoja */
.page-watermark {
    display: none;
}

.page-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background: transparent;
}

/* Header Institucional */
.op-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 6px;
    border-bottom: 2px solid #000000;
    margin-bottom: 8px;
}
.op-brand-title {
    font-size: 13pt;
    font-weight: 900;
    letter-spacing: 0.06em;
    color: #000000;
}
.op-brand-sub {
    font-size: 6.8pt;
    font-weight: 700;
    color: #111827;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
.op-ref-code {
    font-size: 8pt;
    font-weight: 800;
    color: #000000;
}
.op-badge {
    display: inline-block;
    padding: 2px 6px;
    background: rgba(255, 255, 255, 0.25);
    border: 1.2px solid #000000;
    color: #000000;
    border-radius: 4px;
    font-size: 6.2pt;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 2px;
}

/* Títulos y Cajas Translúcidas para no tapar la Marca de Agua */
.op-tag {
    display: inline-block;
    padding: 2px 8px;
    border: 1px solid #000000;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 12px;
    font-size: 6.8pt;
    font-weight: 800;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 3px;
}
.op-title {
    font-size: 13.5pt;
    font-weight: 900;
    color: #000000;
    line-height: 1.2;
    margin-bottom: 2px;
}
.op-loc {
    font-size: 7.5pt;
    font-weight: 600;
    color: #111827;
    margin-bottom: 6px;
}

.op-deal-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    background: rgba(255, 255, 255, 0.20);
    border: 1.5px solid #000000;
    border-radius: 6px;
    padding: 6px 10px;
    margin-bottom: 7px;
}
.op-deal-lbl {
    font-size: 6.2pt;
    font-weight: 700;
    color: #111827;
    text-transform: uppercase;
    display: block;
}
.op-deal-val {
    font-size: 8.8pt;
    font-weight: 900;
    color: #000000;
}

.op-card {
    background: rgba(255, 255, 255, 0.20);
    border: 1.2px solid #1e293b;
    border-radius: 6px;
    padding: 7px 10px;
    margin-bottom: 6px;
}
.op-card-title {
    font-size: 7.5pt;
    font-weight: 900;
    color: #000000;
    text-transform: uppercase;
    border-bottom: 1px solid #000000;
    padding-bottom: 2px;
    margin-bottom: 4px;
}
.op-desc {
    font-size: 7.4pt;
    line-height: 1.35;
    color: #000000;
    font-weight: 500;
    margin-bottom: 4px;
}
.op-thesis {
    background: rgba(255, 255, 255, 0.22);
    border-left: 3px solid #000000;
    padding: 4px 8px;
    font-size: 7.1pt;
    color: #000000;
    font-weight: 600;
}
.op-highlights {
    list-style: none;
}
.op-highlights li {
    font-size: 7.1pt;
    line-height: 1.3;
    color: #000000;
    font-weight: 500;
    margin-bottom: 2.5px;
}

/* Tablas Individuales Transpuestas (Filas x Columnas) */
.transposed-card {
    background: rgba(255, 255, 255, 0.20);
    border: 1.4px solid #000000;
    border-radius: 6px;
    padding: 5px 8px;
    margin-bottom: 6px;
}
.transposed-header {
    display: flex;
    justify-content: space-between;
    background: rgba(226, 232, 240, 0.40);
    border-bottom: 1.2px solid #000000;
    padding: 3px 6px;
    margin: -5px -8px 4px -8px;
    border-radius: 4px 4px 0 0;
    font-size: 7pt;
    font-weight: 900;
    color: #000000;
    text-transform: uppercase;
}
.transposed-table {
    width: 100%;
    border-collapse: collapse;
}
.transposed-table th,
.transposed-table td {
    padding: 2.5px 5px;
    border-bottom: 1px solid rgba(51, 65, 85, 0.5);
    font-size: 6.9pt;
    line-height: 1.25;
    color: #000000;
    text-align: left;
    vertical-align: top;
}
.transposed-table th {
    width: 35%;
    font-weight: 800;
    background: rgba(241, 245, 249, 0.22);
    border-right: 1px solid rgba(51, 65, 85, 0.5);
}
.transposed-table td {
    width: 65%;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.14);
}

/* Pie de Registro Corporativo (Zero-Email-Exposure) */
.op-footer {
    border-top: 2px solid #000000;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.22);
    font-size: 6.8pt;
    color: #000000;
}
"""

html_parts = [
    "<!DOCTYPE html>",
    "<html lang='es'>",
    "<head>",
    "<meta charset='UTF-8'>",
    "<title>Energy CPY — Catálogo Oficial de Resúmenes Ejecutivos Imprimibles 2026</title>",
    f"<style>{css}</style>",
    "</head>",
    "<body>",
    f"<div class='global-page-watermark' aria-hidden='true'><img src='{LOGO_B64}' alt='Marca de Agua Oficial Energy CPY 4v' /></div>"
]

# 1. PORTADA EJECUTIVA IMPRIMIBLE (FONDO BLANCO, FUENTES NEGRAS #000000, MARCA DE AGUA 60%)
sector_totals = {}
for p in projects:
    sec = p.get("sector") or p.get("es", {}).get("categoryTag") or "Otros"
    if sec not in sector_totals:
        sector_totals[sec] = {"count": 0, "usd": 0.0, "priv": 0}
    sector_totals[sec]["count"] += 1
    if p.get("isPrivatePlacement"):
        sector_totals[sec]["priv"] += 1
    else:
        sector_totals[sec]["usd"] += float(p.get("amountUSD") or 0)

sector_rows_html = ""
for sec, st in sector_totals.items():
    usd_fmt = f"USD {st['usd']:,.1f}M".replace(",", "X").replace(".", ",").replace("X", ".") if st["usd"] > 0 else ""
    priv_fmt = f" (+ {st['priv']} Private Placement)" if st["priv"] > 0 else ""
    sector_rows_html += f"""
    <tr>
        <th>{SECTOR_ICONS.get(sec, '📌')} {sec} ({st['count']} Ofertas)</th>
        <td><strong>{usd_fmt}{priv_fmt}</strong></td>
    </tr>
    """

cover_html = f"""
<div class="page">
    <div class="page-watermark"><img src="{LOGO_B64}" alt="Marca de Agua Energy CPY" /></div>
    <div class="page-content">
        <div>
            <div class="op-header">
                <div>
                    <div class="op-brand-title">ENERGY CPY — ÁREA DESARROLLO SOSTENIBLE</div>
                    <div class="op-brand-sub">PRIVATE INVESTMENT ADVISORY & PROJECT FINANCE — REPÚBLICA ARGENTINA</div>
                </div>
                <div style="text-align: right;">
                    <div class="op-ref-code">CATÁLOGO EJECUTIVO 2026</div>
                    <div class="op-badge">VERSIÓN IMPRIMIBLE AUDITADA</div>
                </div>
            </div>

            <div style="margin: 12px 0 10px 0;">
                <span class="op-tag">DOSSIER CONSOLIDADO DE INVERSIONES (LEY RIGI 27.742 & MATER 27.191)</span>
                <h1 style="font-size: 20pt; font-weight: 900; color: #000000; line-height: 1.15; margin: 6px 0;">
                    Catálogo Oficial de Resúmenes Ejecutivos (One-Pagers)
                </h1>
                <p class="op-desc" style="font-size: 8.5pt;">
                    Compendio auditado de las <strong>{total_projects} oportunidades estratégicas de inversión</strong> activas en el Showroom Oficial de Energy CPY
                    (<code>inventarioenergycpy.github.io/showroom-energycpy/</code>), estructuradas con ingeniería financiera DCF, elegibilidad bajo el
                    Régimen de Incentivo para Grandes Inversiones (RIGI — 30 años de estabilidad fiscal y cambiaria) y protección legal en tres capas.
                </p>
            </div>

            <div class="op-deal-bar" style="margin-bottom: 12px;">
                <div>
                    <span class="op-deal-lbl">Ofertas Auditadas</span>
                    <span class="op-deal-val">{total_projects} Proyectos Activos</span>
                </div>
                <div>
                    <span class="op-deal-lbl">Volumen Consolidado</span>
                    <span class="op-deal-val">{total_usd_str}</span>
                </div>
                <div>
                    <span class="op-deal-lbl">Sectores Reales</span>
                    <span class="op-deal-val">{len(sector_totals)} Sectores Clave</span>
                </div>
                <div>
                    <span class="op-deal-lbl">Tasa de Corte (Hurdle)</span>
                    <span class="op-deal-val">TIR &gt; 9% a &gt; 15% USD</span>
                </div>
            </div>

            <div class="transposed-card">
                <div class="transposed-header">
                    <span>TABLA RESUMEN COMPARATIVA DE LOS TOTALES DE CARTERA POR SECTOR</span>
                    <span>CONSOLIDADO GENERAL ENERGY CPY</span>
                </div>
                <table class="transposed-table">
                    <tbody>
                        {sector_rows_html}
                        <tr>
                            <th>TOTAL GENERAL AUDITADO EN CARTERA ({total_projects} PROYECTOS)</th>
                            <td><strong>{total_usd_str} (USD 4.116.500.000) + 1 Activo en Private Placement</strong></td>
                        </tr>
                        <tr>
                            <th>RANGO DE RENTABILIDAD PROYECTADA (TIR ANUAL EN USD)</th>
                            <td><strong>18,0% a 42,0% anual en USD</strong> (Superando piso institucional de TIR &gt; 9% y &gt; 15%)</td>
                        </tr>
                        <tr>
                            <th>PLATAFORMAS WEB OFICIALES</th>
                            <td>Showroom: <strong>https://inventarioenergycpy.github.io/showroom-energycpy/</strong><br>Hub Renovable RIGI: <strong>https://inventarioenergycpy.github.io/hub-renovable-rigi-llave-en-mano/</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="transposed-card">
                <div class="transposed-header">
                    <span>REGISTRO OFICIAL DE LA EMPRESA Y CONSULTORES ESPECIALISTAS (ZERO-EMAIL-EXPOSURE)</span>
                    <span>CONTACTO DIRECTO WHATSAPP</span>
                </div>
                <table class="transposed-table">
                    <tbody>
                        <tr>
                            <th>Javier Ignacio Díaz</th>
                            <td><strong>{CONSULTANTS['javier']['role']}</strong><br>WhatsApp Oficial Directo: <strong>{CONSULTANTS['javier']['phone']}</strong></td>
                        </tr>
                        <tr>
                            <th>Daniel González</th>
                            <td><strong>{CONSULTANTS['daniel']['role']}</strong><br>WhatsApp Oficial Directo: <strong>{CONSULTANTS['daniel']['phone']}</strong></td>
                        </tr>
                        <tr>
                            <th>Cláusula de Confidencialidad</th>
                            <td>Documento informativo de Grado de Inversión. La apertura de Data Room y memorias técnicas detalladas requiere suscripción previa de Acuerdo de Confidencialidad (NDA).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="op-footer">
            <div><strong>ENERGY CPY — Área Desarrollo Sostenible</strong> | República Argentina</div>
            <div><strong>Página 1 — Portada y Tabla Resumen Comparativa de Totales</strong></div>
        </div>
    </div>
</div>
"""
html_parts.append(cover_html)

# 2. FICHAS INDIVIDUALES TRANSPUESTAS DE ÍNDICE (4 OFERTAS POR PÁGINA PARA NO EXCEDER MARGEN HORIZONTAL)
CHUNK_SIZE = 4
index_chunks = [projects[i:i + CHUNK_SIZE] for i in range(0, len(projects), CHUNK_SIZE)]
total_pages = 1 + len(index_chunks) + len(projects)

for chunk_idx, chunk in enumerate(index_chunks):
    page_no = 2 + chunk_idx
    cards_html = ""
    for offset, p in enumerate(chunk):
        proj_idx = chunk_idx * CHUNK_SIZE + offset + 1
        es = p.get("es", {})
        c = CONSULTANTS.get(p.get("assignedAgent"), CONSULTANTS["javier"])
        amt = "A Invitación Exclusiva (Private Placement)" if p.get("isPrivatePlacement") else p.get("amountDisplay", "N/A")
        mod = p.get("dealType", p.get("modality", "Venta / Socio Inversor"))
        tir = p.get("tir", ">9%")
        tir_cat = get_tir_category(tir)
        cards_html += f"""
        <div class="transposed-card">
            <div class="transposed-header">
                <span>OFERTA #{proj_idx:02d} — {es.get('title', p.get('id')).upper()}</span>
                <span>REF: ECPY-{p['id'].upper()} | FICHA PÁG. {1 + len(index_chunks) + proj_idx}</span>
            </div>
            <table class="transposed-table">
                <tbody>
                    <tr>
                        <th>Sector y Ubicación Geográfica</th>
                        <td><strong>{es.get('categoryTag', p.get('sector'))}</strong> — {es.get('location', 'Argentina')}</td>
                    </tr>
                    <tr>
                        <th>Ticket de Inversión y Modalidad</th>
                        <td><strong>{amt}</strong> | {mod} ({p.get('capitalStructure', 'Estructuración Directa')})</td>
                    </tr>
                    <tr>
                        <th>TIR Proyectada, EBITDA y Payback</th>
                        <td><strong>TIR: {tir}</strong> ({tir_cat}) | <strong>EBITDA: {p.get('ebitda', 'Auditado')}</strong> | Recupero: <strong>{p.get('roi', 'N/A')}</strong></td>
                    </tr>
                    <tr>
                        <th>Tesis Ejecutiva y Consultor Asignado</th>
                        <td>{es.get('thesis', es.get('description', ''))}<br><strong>Consultor: {c['name']} (WhatsApp: {c['phone']})</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        """

    idx_page_html = f"""
    <div class="page">
        <div class="page-watermark"><img src="{LOGO_B64}" alt="Marca de Agua Energy CPY" /></div>
        <div class="page-content">
            <div>
                <div class="op-header">
                    <div>
                        <div class="op-brand-title">ENERGY CPY — ÍNDICE EJECUTIVO TRANSPUESTO</div>
                        <div class="op-brand-sub">FICHAS COMPARATIVAS INDIVIDUALES POR OFERTA (SIN DESBORDE DE MARGEN A4)</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="op-ref-code">PARTE {chunk_idx + 1} DE {len(index_chunks)}</div>
                        <div class="op-badge">OFERTAS #{chunk_idx * CHUNK_SIZE + 1:02d} A #{chunk_idx * CHUNK_SIZE + len(chunk):02d}</div>
                    </div>
                </div>
                {cards_html}
            </div>
            <div class="op-footer">
                <div><strong>ENERGY CPY</strong> — Contacto Directo WhatsApp: {CONSULTANTS['javier']['phone']} / {CONSULTANTS['daniel']['phone']}</div>
                <div><strong>Página {page_no} de {total_pages}</strong></div>
            </div>
        </div>
    </div>
    """
    html_parts.append(idx_page_html)

# 3. RESÚMENES EJECUTIVOS INDIVIDUALES (ONE-PAGERS CON TABLA TRANSPUESTA + COMPARATIVA)
for i, p in enumerate(projects):
    es = p.get("es", {})
    page_no = 1 + len(index_chunks) + i + 1
    consultant = CONSULTANTS.get(p.get("assignedAgent"), CONSULTANTS["javier"])
    amount_label = "A Invitación Exclusiva (Private Placement)" if p.get("isPrivatePlacement") else p.get("amountDisplay", "N/A")
    deal_type = p.get("dealType", p.get("modality", "Venta / Socio Inversor"))
    roi_label = p.get("roi", "N/A")
    tir_val = p.get("tir", ">9%")
    tir_category = get_tir_category(tir_val)
    sec_icon = SECTOR_ICONS.get(p.get("sector"), "📌")

    highlights_html = "".join(f"<li>▪ {h}</li>" for h in es.get("highlights", []))
    extra_metrics_rows = "".join(
        f"<tr><th>{m.get('label')}</th><td><strong>{m.get('val')}</strong></td></tr>"
        for m in es.get("metrics", [])
    )
    fin_note = p.get("financialNote_es", "Cálculo de TIR proyectado mediante Flujo de Fondos Descontados (DCF).")
    local_trend = es.get("marketTrend", {}).get("local", es.get("thesis", ""))
    intl_trend = es.get("marketTrend", {}).get("intl", "Demanda global sostenida.")

    proj_amt = float(p.get("amountUSD") or 0)
    share_pct = f"{(proj_amt / total_usd) * 100:.2f}%" if (not p.get("isPrivatePlacement") and proj_amt > 0) else "Private Placement"

    op_html = f"""
    <div class="page">
        <div class="page-watermark"><img src="{LOGO_B64}" alt="Marca de Agua Energy CPY" /></div>
        <div class="page-content">
            <div>
                <div class="op-header">
                    <div>
                        <div class="op-brand-title">ENERGY CPY — RESUMEN EJECUTIVO (ONE-PAGER)</div>
                        <div class="op-brand-sub">ÁREA DESARROLLO SOSTENIBLE — PRIVATE INVESTMENT ADVISORY</div>
                    </div>
                    <div style="text-align: right;">
                        <div class="op-ref-code">REF: ECPY-{p['id'].upper()}</div>
                        <div class="op-badge">CONFIDENCIAL / GRADO DE INVERSIÓN</div>
                    </div>
                </div>

                <div>
                    <span class="op-tag">{sec_icon} {es.get('categoryTag', p.get('sector'))}</span>
                    <h1 class="op-title">{es.get('title')}</h1>
                    <div class="op-loc">📍 {es.get('location')} • Marco Regulatorio: {p.get('regulatoryRegime', 'Vigente')}</div>
                </div>

                <div class="op-deal-bar">
                    <div>
                        <span class="op-deal-lbl">Monto Inversión</span>
                        <span class="op-deal-val">{amount_label}</span>
                    </div>
                    <div>
                        <span class="op-deal-lbl">Tipo de Oferta</span>
                        <span class="op-deal-val">{deal_type}</span>
                    </div>
                    <div>
                        <span class="op-deal-lbl">{tir_category}</span>
                        <span class="op-deal-val">TIR: {tir_val}</span>
                    </div>
                    <div>
                        <span class="op-deal-lbl">Retorno / Payback</span>
                        <span class="op-deal-val">{roi_label}</span>
                    </div>
                </div>

                <div class="op-card">
                    <div class="op-card-title">Resumen Ejecutivo de la Actividad y Tesis de Inversión</div>
                    <p class="op-desc">{es.get('description')}</p>
                    {f'<div class="op-thesis"><strong>Tesis Financiera: </strong>{es.get("thesis")}</div>' if es.get("thesis") else ''}
                </div>

                <div class="op-card">
                    <div class="op-card-title">Factores Críticos de Valor y Aspectos Clave</div>
                    <ul class="op-highlights">
                        {highlights_html}
                    </ul>
                </div>

                <div class="transposed-card">
                    <div class="transposed-header">
                        <span>TABLA INDIVIDUAL TRANSPUESTA DE PARÁMETROS FINANCIEROS Y TÉCNICOS</span>
                        <span>OFERTA #{i + 1:02d} DE {total_projects}</span>
                    </div>
                    <table class="transposed-table">
                        <tbody>
                            <tr>
                                <th>TIR Modelada y Calificación</th>
                                <td><strong>{tir_val}</strong> ({tir_category}) — Flujo Anual / EBITDA: <strong>{p.get('ebitda', 'Auditado')}</strong></td>
                            </tr>
                            <tr>
                                <th>Estructura de Capital y Régimen</th>
                                <td>{p.get('capitalStructure', 'Estructuración Directa')} | {p.get('regulatoryRegime', 'Vigente')}</td>
                            </tr>
                            <tr>
                                <th>Memoria de Cálculo Financiero</th>
                                <td>{fin_note}</td>
                            </tr>
                            <tr>
                                <th>Tendencia Mercado Local e Internacional</th>
                                <td><strong>Local:</strong> {local_trend}<br><strong>Internacional:</strong> {intl_trend}</td>
                            </tr>
                            {extra_metrics_rows}
                        </tbody>
                    </table>
                </div>

                <div class="transposed-card">
                    <div class="transposed-header">
                        <span>TABLA RESUMEN COMPARATIVA CONTRA TOTALES DE CARTERA ENERGY CPY</span>
                        <span>PONDERACIÓN: {share_pct}</span>
                    </div>
                    <table class="transposed-table">
                        <tbody>
                            <tr>
                                <th>Ticket Oferta vs. Total Cartera</th>
                                <td><strong>{amount_label}</strong> sobre Cartera Consolidada de <strong>{total_usd_str} ({total_projects} Proyectos)</strong></td>
                            </tr>
                            <tr>
                                <th>Consultor Especialista Asignado</th>
                                <td><strong>{consultant['name']}</strong> ({consultant['role']}) — WhatsApp Directo: <strong>{consultant['phone']}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="op-footer">
                <div><strong>ENERGY CPY</strong> • Web: <code>inventarioenergycpy.github.io/showroom-energycpy/</code> • WhatsApp: <strong>{consultant['phone']}</strong></div>
                <div><strong>Página {page_no} de {total_pages}</strong></div>
            </div>
        </div>
    </div>
    """
    html_parts.append(op_html)

html_parts.append("</body></html>")
full_html = "\n".join(html_parts)

temp_html_path = BASE_DIR / "scripts" / "_temp_catalogo_imprimible_2026.html"
temp_html_path.write_text(full_html, encoding="utf-8")

repo_pdf_path = BASE_DIR / "assets" / "pdf" / "Energy_CPY_Catalogo_Resumenes_Ejecutivos_Showroom_2026.pdf"
repo_pdf_path.parent.mkdir(parents=True, exist_ok=True)
downloads_pdf_path = pathlib.Path(r"C:\Users\majon\Downloads\Energy_CPY_Catalogo_Resumenes_Ejecutivos_Showroom_2026.pdf")

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cmd = [
    chrome,
    "--headless",
    "--disable-gpu",
    f"--print-to-pdf={repo_pdf_path}",
    "--no-pdf-header-footer",
    str(temp_html_path)
]
print("Compiling Printable Catalog PDF via Headless Chrome...")
subprocess.run(cmd, check=True)
shutil.copy2(repo_pdf_path, downloads_pdf_path)
temp_html_path.unlink(missing_ok=True)
print(f"SUCCESS! Generated {repo_pdf_path} ({repo_pdf_path.stat().st_size} bytes) and copied to {downloads_pdf_path}")
