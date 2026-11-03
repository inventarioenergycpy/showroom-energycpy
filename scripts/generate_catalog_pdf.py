# -*- coding: utf-8 -*-
import json
import os
import subprocess
import re

json_path = r"C:\Users\majon\.gemini\antigravity-ide\scratch\showroom-energycpy\data\projects-master.json"
with open(json_path, "r", encoding="utf-8") as f:
    projects = json.load(f)

CONSULTANTS = {
    "javier": {
        "id": "javier",
        "name": "Javier Ignacio Díaz",
        "role": "Consultor Capital Introducer & Finder",
        "specialties": "Minería, Energía Renovable, Proyectos de Ingeniería & Cross-Border Deals",
        "phone": "+54 9 351 2064791",
        "email": "areasostenible.consultorespyme@gmail.com",
        "avatar": "J"
    },
    "daniel": {
        "id": "daniel",
        "name": "Daniel González",
        "role": "Consultor Capital Introducer & Finder",
        "specialties": "Hotelería, Pesca, Petróleo & Gas, TRUST Real Estate, REIT & Finanzas",
        "phone": "+54 9 2974 23-3028",
        "email": "gonzalezmarcelo2105ypf@gmail.com",
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

# Build CSS
css = """
@page {
    size: A4 portrait;
    margin: 0;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #080c16;
    color: #e2e8f0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}

.page {
    width: 210mm;
    height: 297mm;
    max-height: 297mm;
    padding: 10mm 13mm 8mm 13mm;
    position: relative;
    overflow: hidden;
    page-break-after: always;
    break-after: page;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: radial-gradient(circle at 85% 12%, rgba(56, 189, 248, 0.04), transparent 45%),
                radial-gradient(circle at 12% 88%, rgba(245, 208, 97, 0.04), transparent 45%),
                #0b0f19;
}

/* Front Cover */
.cover-page {
    width: 210mm;
    height: 297mm;
    padding: 18mm 18mm 14mm 18mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-after: always;
    break-after: page;
    position: relative;
    overflow: hidden;
    background: linear-gradient(145deg, #060911 0%, #0c1322 40%, #080e1b 100%);
    border: 1px solid rgba(245, 208, 97, 0.3);
}
.cover-border-inner {
    position: absolute;
    top: 8mm;
    left: 8mm;
    right: 8mm;
    bottom: 8mm;
    border: 1px solid rgba(245, 208, 97, 0.2);
    pointer-events: none;
}
.cover-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.cover-brand-title {
    font-size: 28pt;
    font-weight: 900;
    letter-spacing: 4px;
    color: #f5d061;
}
.cover-brand-sub {
    font-size: 9pt;
    color: #94a3b8;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 4px;
}
.cover-badge {
    background: rgba(245, 208, 97, 0.12);
    border: 1px solid rgba(245, 208, 97, 0.4);
    color: #f5d061;
    padding: 5px 12px;
    border-radius: 4px;
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.cover-hero {
    margin: 20px 0;
}
.cover-hero-tag {
    color: #38bdf8;
    font-size: 11pt;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
}
.cover-title {
    font-size: 32pt;
    font-weight: 900;
    line-height: 1.15;
    color: #ffffff;
    margin-bottom: 12px;
}
.cover-title span {
    color: #f5d061;
}
.cover-desc {
    font-size: 11pt;
    line-height: 1.5;
    color: #cbd5e1;
    max-width: 90%;
}
.cover-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 20px 0;
}
.cover-stat-box {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(245, 208, 97, 0.25);
    border-radius: 8px;
    padding: 12px 14px;
    text-align: center;
}
.cover-stat-val {
    font-size: 17pt;
    font-weight: 900;
    color: #f5d061;
}
.cover-stat-lbl {
    font-size: 7.5pt;
    color: #94a3b8;
    text-transform: uppercase;
    margin-top: 3px;
    font-weight: 600;
}
.cover-sectors-list {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 14px 18px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 16px;
}
.cover-sector-item {
    font-size: 8.5pt;
    color: #e2e8f0;
    display: flex;
    align-items: center;
    gap: 8px;
}
.cover-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 14px;
    border-top: 1px solid rgba(245, 208, 97, 0.3);
}
.cover-consultants {
    display: flex;
    gap: 24px;
}
.cover-c-col {
    font-size: 8pt;
}
.cover-c-name {
    font-weight: 800;
    color: #ffffff;
}
.cover-c-role {
    color: #94a3b8;
    font-size: 7pt;
}
.cover-c-spec {
    color: #f5d061;
    font-size: 6.8pt;
    margin-top: 2px;
}
.cover-legal-notice {
    font-size: 7pt;
    color: #64748b;
    text-align: right;
    max-width: 200px;
    line-height: 1.3;
}

/* Table of Contents */
.toc-page {
    width: 210mm;
    height: 297mm;
    padding: 12mm 14mm 10mm 14mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-after: always;
    break-after: page;
    background: #0b0f19;
}
.toc-title {
    font-size: 18pt;
    font-weight: 900;
    color: #f5d061;
    letter-spacing: 1px;
}
.toc-sub {
    font-size: 8pt;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 2px;
    margin-bottom: 10px;
}
.toc-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7pt;
}
.toc-table th {
    background: rgba(15, 23, 42, 0.9);
    color: #f5d061;
    text-transform: uppercase;
    font-weight: 800;
    padding: 5px 6px;
    border-bottom: 1.5px solid rgba(245, 208, 97, 0.4);
    text-align: left;
}
.toc-table td {
    padding: 4px 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
}
.toc-table tr:hover {{
    background: rgba(255, 255, 255, 0.02);
}}
.toc-ref {
    color: #38bdf8;
    font-weight: 700;
    font-family: monospace;
}
.toc-pname {
    font-weight: 700;
    color: #ffffff;
}
.toc-val {
    font-weight: 800;
    color: #f5d061;
}
.toc-tir {
    font-weight: 700;
    color: #10b981;
}
.toc-pag {
    font-weight: 800;
    color: #38bdf8;
    text-align: right;
}

/* One-Pager Page Elements */
.op-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 6px;
    border-bottom: 1.5px solid rgba(245, 208, 97, 0.35);
}
.op-brand-title {
    font-size: 15pt;
    font-weight: 900;
    letter-spacing: 2px;
    color: #f5d061;
    line-height: 1;
}
.op-brand-sub {
    font-size: 6.8pt;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-top: 2px;
}
.op-ref-code {
    font-size: 8.5pt;
    font-weight: 800;
    color: #38bdf8;
    text-align: right;
    letter-spacing: 0.5px;
}
.op-badge {
    display: inline-block;
    padding: 2px 7px;
    background: rgba(244, 63, 94, 0.15);
    border: 1px solid rgba(244, 63, 94, 0.4);
    color: #fb7185;
    border-radius: 4px;
    font-size: 6.2pt;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 2px;
}
.op-title-section {
    margin-top: 6px;
}
.op-tag {
    display: inline-block;
    padding: 2px 7px;
    background: rgba(245, 208, 97, 0.12);
    border: 1px solid rgba(245, 208, 97, 0.35);
    color: #f5d061;
    border-radius: 10px;
    font-size: 6.5pt;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 3px;
}
.op-title {
    font-size: 13pt;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.2;
}
.op-loc {
    font-size: 7.5pt;
    color: #94a3b8;
    margin-top: 2px;
}

.op-deal-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(245, 208, 97, 0.25);
    border-radius: 6px;
    padding: 6px 10px;
    margin-top: 6px;
}
.op-deal-lbl {
    font-size: 6pt;
    color: #94a3b8;
    text-transform: uppercase;
    font-weight: 600;
}
.op-deal-val {
    font-size: 9pt;
    font-weight: 800;
    color: #f5d061;
    margin-top: 1px;
}
.text-green { color: #10b981 !important; }
.text-cyan { color: #38bdf8 !important; }
.text-gold { color: #f5d061 !important; }

.op-body-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: 8px;
    margin-top: 6px;
}
.op-card {
    background: rgba(15, 23, 42, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 8px 10px;
}
.op-card-title {
    font-size: 7.5pt;
    font-weight: 800;
    color: #f5d061;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 3px;
}
.op-desc {
    font-size: 6.8pt;
    line-height: 1.34;
    color: #cbd5e1;
    text-align: justify;
}
.op-thesis {
    margin-top: 5px;
    padding: 5px 7px;
    background: rgba(56, 189, 248, 0.07);
    border-left: 2px solid #38bdf8;
    border-radius: 0 4px 4px 0;
    font-size: 6.6pt;
    line-height: 1.32;
    color: #e2e8f0;
}
.op-highlights {
    list-style: none;
}
.op-highlights li {
    font-size: 6.5pt;
    line-height: 1.3;
    color: #cbd5e1;
    margin-bottom: 3px;
    display: flex;
    align-items: flex-start;
    gap: 5px;
}
.op-check {
    color: #10b981;
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 1px;
    font-size: 7pt;
}

.op-proto-box {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(245, 208, 97, 0.22);
    border-radius: 6px;
    padding: 6px 10px;
    margin-top: 6px;
}
.op-proto-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-top: 3px;
}
.op-proto-item {
    display: flex;
    flex-direction: column;
}
.op-proto-lbl {
    font-size: 5.8pt;
    color: #94a3b8;
    text-transform: uppercase;
}
.op-proto-val {
    font-size: 7.6pt;
    font-weight: 700;
    color: #ffffff;
    margin-top: 1px;
}
.op-proto-note {
    margin-top: 4px;
    padding-top: 3px;
    border-top: 1px dashed rgba(255, 255, 255, 0.08);
    font-size: 6.2pt;
    line-height: 1.25;
    color: #94a3b8;
}
.op-proto-note strong { color: #cbd5e1; }

.op-market-box {
    margin-top: 6px;
    background: rgba(15, 23, 42, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 6px 10px;
}
.op-market-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 3px;
}
.op-market-col {
    padding: 5px 7px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.25);
}
.op-market-tag {
    font-size: 6pt;
    font-weight: 700;
    text-transform: uppercase;
    color: #38bdf8;
    margin-bottom: 2px;
}
.op-market-text {
    font-size: 6.4pt;
    line-height: 1.28;
    color: #cbd5e1;
}

.op-metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-top: 6px;
}
.op-metric-card {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 5px 7px;
    text-align: center;
}
.op-metric-val {
    font-size: 9pt;
    font-weight: 900;
}
.op-metric-lbl {
    font-size: 5.8pt;
    color: #94a3b8;
    text-transform: uppercase;
    margin-top: 1px;
}

.op-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 6px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 6px;
}
.op-consultant {
    display: flex;
    align-items: center;
    gap: 7px;
}
.op-avatar {
    width: 22px;
    height: 22px;
    background: linear-gradient(135deg, #f5d061, #eab308);
    color: #0b0f19;
    font-weight: 900;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7.5pt;
}
.op-cname {
    font-size: 7.2pt;
    font-weight: 800;
    color: #ffffff;
}
.op-crole {
    font-size: 5.8pt;
    color: #94a3b8;
}
.op-contact {
    font-size: 6.4pt;
    color: #cbd5e1;
    text-align: right;
}
.op-contact span {
    color: #f5d061;
    font-weight: 700;
}

/* Back Cover */
.back-cover-page {
    width: 210mm;
    height: 297mm;
    padding: 16mm 18mm 14mm 18mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-after: always;
    break-after: page;
    position: relative;
    overflow: hidden;
    background: linear-gradient(145deg, #0c1322 0%, #060911 50%, #080e1b 100%);
    border: 1px solid rgba(245, 208, 97, 0.3);
}
.back-title {
    font-size: 20pt;
    font-weight: 900;
    color: #f5d061;
    margin-bottom: 8px;
}
.back-sub {
    font-size: 9pt;
    color: #cbd5e1;
    line-height: 1.4;
    margin-bottom: 20px;
}
.back-card {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 14px 18px;
    margin-bottom: 14px;
}
.back-card-title {
    font-size: 9.5pt;
    font-weight: 800;
    color: #f5d061;
    text-transform: uppercase;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.back-card-text {
    font-size: 7.8pt;
    line-height: 1.45;
    color: #cbd5e1;
}
.back-card-text ul {
    margin-left: 16px;
    margin-top: 6px;
}
.back-card-text li {
    margin-bottom: 4px;
}
"""

print("Building HTML...")
html_parts = [
    "<!DOCTYPE html>",
    "<html lang='es'>",
    "<head>",
    "<meta charset='UTF-8'>",
    "<title>Energy CPY — Catálogo de Resúmenes Ejecutivos 2026</title>",
    f"<style>{css}</style>",
    "</head>",
    "<body>"
]

# 1. FRONT COVER
cover_html = f"""
<div class="cover-page">
    <div class="cover-border-inner"></div>
    <div class="cover-header">
        <div>
            <div class="cover-brand-title">ENERGY CPY</div>
            <div class="cover-brand-sub">ASESORAMIENTO PRIVADO DE INVERSIONES — ARGENTINA</div>
        </div>
        <div class="cover-badge">CARTERA EJECUTIVA 2026</div>
    </div>

    <div class="cover-hero">
        <div class="cover-hero-tag">DOSSIER CONSOLIDADO DE INVERSIONES</div>
        <div class="cover-title">Catálogo Oficial de <span>Resúmenes Ejecutivos</span></div>
        <div class="cover-desc">
            Compendio exhaustivo de One-Pagers y fichas de inversión publicadas en el Showroom de Inversiones de Energy CPY. 
            Activos de clase mundial con estructuración financiera (DCF), mitigación legal en tres capas y elegibilidad plena 
            bajo el Régimen de Incentivo para Grandes Inversiones (RIGI - Ley 27.742).
        </div>
    </div>

    <div class="cover-stats-grid">
        <div class="cover-stat-box">
            <div class="cover-stat-val">25</div>
            <div class="cover-stat-lbl">Proyectos Activos</div>
        </div>
        <div class="cover-stat-box">
            <div class="cover-stat-val">&gt; USD 7.5B</div>
            <div class="cover-stat-lbl">Volumen Cartera</div>
        </div>
        <div class="cover-stat-box">
            <div class="cover-stat-val">8</div>
            <div class="cover-stat-lbl">Sectores Clave</div>
        </div>
        <div class="cover-stat-box">
            <div class="cover-stat-val">&gt; 15%</div>
            <div class="cover-stat-lbl">TIR Promedio Ponderada</div>
        </div>
    </div>

    <div class="cover-sectors-list">
        <div class="cover-sector-item">☀️ <strong>Energía Solar & Renovable</strong> (Sol de los Cuatro Vientos, Vaca Muerta, Llave en Mano)</div>
        <div class="cover-sector-item">⛏️ <strong>Minería & Metales Críticos</strong> (Oro San Antonio USD 3.5B, San Juan, Diente Oro Verde, Litio, Mármol)</div>
        <div class="cover-sector-item">🛢️ <strong>Petróleo, Gas & Infraestructura</strong> (Refipampa, REFINOR, 3 Refinerías VM, 15 Concesiones, Pozo Salta)</div>
        <div class="cover-sector-item">🏨 <strong>Hotelería, Casinos & Renta</strong> (Hotel 3★ & 5★ Mendoza, Hoteles de Lujo Bariloche y Córdoba)</div>
        <div class="cover-sector-item">🌾 <strong>Agro, Campo & Industria</strong> (Estancia 17.000 ha con Riego)</div>
        <div class="cover-sector-item">🏢 <strong>Real Estate & Fondos</strong> (Fondo Inmobiliario REIT Energy CPY USD 30M)</div>
        <div class="cover-sector-item">🚢 <strong>Pesca Industrial de Gran Escala</strong> (Pesca de Altura en Patagonia, Ecosistema Integrado)</div>
        <div class="cover-sector-item">💼 <strong>Asesoramiento Financiero</strong> (Inbound Funds, Gobiernos & PPP, Real Estate)</div>
    </div>

    <div class="cover-footer">
        <div class="cover-consultants">
            <div class="cover-c-col">
                <div class="cover-c-name">Javier Ignacio Díaz</div>
                <div class="cover-c-role">Consultor Capital Introducer & Finder</div>
                <div class="cover-c-spec">Minería, Energía Renovable, Proyectos de Ingeniería</div>
                <div style="color: #cbd5e1; font-size: 6.8pt; margin-top: 2px;">+54 9 351 2064791</div>
            </div>
            <div class="cover-c-col">
                <div class="cover-c-name">Daniel González</div>
                <div class="cover-c-role">Consultor Capital Introducer & Finder</div>
                <div class="cover-c-spec">Hotelería, Pesca, Petróleo, REIT, Real Estate & Finanzas</div>
                <div style="color: #cbd5e1; font-size: 6.8pt; margin-top: 2px;">+54 9 2974 23-3028</div>
            </div>
        </div>
        <div class="cover-legal-notice">
            CONFIDENCIAL & PRIVADO<br>
            Material destinado exclusivamente a inversores calificados y contrapartes autorizadas bajo NDA.
        </div>
    </div>
</div>
"""
html_parts.append(cover_html)

# 2. TABLE OF CONTENTS
toc_rows = []
for i, p in enumerate(projects):
    es = p.get("es", {})
    title = es.get("title", p.get("title"))
    page_num = i + 3  # Cover = 1, TOC = 2, First Project = 3
    amt = p.get("amountDisplay", "N/A")
    mod = p.get("dealType", p.get("modality", "N/A"))
    tir = p.get("tir", ">9%")
    sec_icon = SECTOR_ICONS.get(p.get("sector"), "📌")
    
    toc_rows.append(f"""
    <tr>
        <td class="toc-ref">ECPY-{p['id'].upper()[:16]}</td>
        <td>{sec_icon} {p.get('sector', '')}</td>
        <td class="toc-pname">{title}</td>
        <td class="toc-val">{amt}</td>
        <td>{mod}</td>
        <td class="toc-tir">{tir}</td>
        <td class="toc-pag">Pág. {page_num}</td>
    </tr>
    """)

toc_html = f"""
<div class="toc-page">
    <div>
        <div class="op-header" style="margin-bottom: 8px;">
            <div>
                <div class="op-brand-title">ENERGY CPY</div>
                <div class="op-brand-sub">CARTERA EJECUTIVA — ÍNDICE MAESTRO DE PROYECTOS</div>
            </div>
            <div style="text-align: right;">
                <div class="op-ref-code">SHOWROOM 2026</div>
                <div class="op-badge">25 ACTIVOS SINDICADOS</div>
            </div>
        </div>

        <div class="toc-title">Índice General de Resúmenes Ejecutivos</div>
        <div class="toc-sub">Relación ordenada de proyectos por sector y parámetros clave de inversión</div>

        <table class="toc-table">
            <thead>
                <tr>
                    <th>Ref. Código</th>
                    <th>Sector</th>
                    <th>Proyecto / Activo</th>
                    <th>Ticket Inversión</th>
                    <th>Modalidad</th>
                    <th>TIR Proy.</th>
                    <th style="text-align: right;">Ubicación</th>
                </tr>
            </thead>
            <tbody>
                {''.join(toc_rows)}
            </tbody>
        </table>
    </div>

    <div class="op-footer" style="margin-top: 10px;">
        <div style="font-size: 7pt; color: #94a3b8;">
            * Todos los proyectos cuentan con Memoria Financiera DCF y Data Room estructurado en Google Drive.
        </div>
        <div style="font-size: 7pt; color: #f5d061; font-weight: 700;">
            Página 2 de 28
        </div>
    </div>
</div>
"""
html_parts.append(toc_html)

# 3. 25 ONE-PAGERS
for i, p in enumerate(projects):
    es = p.get("es", {})
    page_num = i + 3
    consultant = CONSULTANTS.get(p.get("assignedAgent"), CONSULTANTS["daniel"])
    
    amount_label = "A Invitación Exclusiva (Private Placement)" if p.get("isPrivatePlacement") else p.get("amountDisplay")
    deal_type = p.get("dealType", p.get("modality", "Venta / Socio Inversor"))
    roi_label = p.get("roi", "N/A")
    tir_val = p.get("tir", ">9%")
    tir_category = get_tir_category(tir_val)
    
    highlights_html = "".join(f'<li><span class="op-check">✓</span><span>{h}</span></li>' for h in es.get("highlights", []))
    metrics_html = "".join(f'''
        <div class="op-metric-card">
            <div class="op-metric-val {m.get("color", "text-gold")}">{m.get("val")}</div>
            <div class="op-metric-lbl">{m.get("label")}</div>
        </div>
    ''' for m in es.get("metrics", []))
    
    fin_note = p.get("financialNote_es", "Cálculo de TIR proyectado mediante Flujo de Fondos Descontados (DCF) con horizonte de vida útil del activo, superando la Tasa de Corte de referencia (TIR objetivo >9% anual en USD).")
    local_trend = es.get("marketTrend", {}).get("local", es.get("thesis", ""))
    intl_trend = es.get("marketTrend", {}).get("intl", "Demanda global sostenida de commodities y flujos de capital institucional hacia activos estratégicos.")
    
    sec_icon = SECTOR_ICONS.get(p.get("sector"), "📌")

    op_html = f"""
    <div class="page">
        <div>
            <!-- Header -->
            <div class="op-header">
                <div>
                    <div class="op-brand-title">ENERGY CPY</div>
                    <div class="op-brand-sub">ASESORAMIENTO PRIVADO DE INVERSIONES — ARGENTINA</div>
                </div>
                <div style="text-align: right;">
                    <div class="op-ref-code">REF: ECPY-{p['id'].upper()}</div>
                    <div class="op-badge">CONFIDENCIAL / GRADO DE INVERSIÓN</div>
                </div>
            </div>

            <!-- Title & Location -->
            <div class="op-title-section">
                <span class="op-tag">{sec_icon} {es.get('categoryTag', p.get('sector'))}</span>
                <h1 class="op-title">{es.get('title')}</h1>
                <div class="op-loc">📍 {es.get('location')} • Marco Regulatorio: {p.get('regulatoryRegime', 'Vigente')}</div>
            </div>

            <!-- Deal Bar -->
            <div class="op-deal-bar">
                <div class="op-deal-col">
                    <span class="op-deal-lbl">Monto Inversión</span>
                    <span class="op-deal-val">{amount_label}</span>
                </div>
                <div class="op-deal-col">
                    <span class="op-deal-lbl">Tipo de Oferta</span>
                    <span class="op-deal-val">{deal_type}</span>
                </div>
                <div class="op-deal-col">
                    <span class="op-deal-lbl" style="color: #10b981;">{tir_category}</span>
                    <span class="op-deal-val text-green">{tir_val}</span>
                </div>
                <div class="op-deal-col">
                    <span class="op-deal-lbl">Retorno / Payback</span>
                    <span class="op-deal-val">{roi_label}</span>
                </div>
            </div>

            <!-- Body Grid -->
            <div class="op-body-grid">
                <div class="op-card">
                    <div class="op-card-title">💼 Resumen Ejecutivo del Activo</div>
                    <p class="op-desc">{es.get('description')}</p>
                    {f'<div class="op-thesis"><strong>Tesis Financiera: </strong>{es.get("thesis")}</div>' if es.get("thesis") else ''}
                </div>
                <div class="op-card">
                    <div class="op-card-title">⭐ Factores Críticos de Valor & Aspectos Clave</div>
                    <ul class="op-highlights">
                        {highlights_html}
                    </ul>
                </div>
            </div>

            <!-- Financial Protocol -->
            <div class="op-proto-box">
                <div class="op-card-title" style="margin-bottom: 3px; padding-bottom: 2px;">
                    🧮 Protocolo Analista Financiero: Métricas Clave & Tasa de Corte
                </div>
                <div class="op-proto-grid">
                    <div class="op-proto-item">
                        <span class="op-proto-lbl">Calificación de Retorno:</span>
                        <span class="op-proto-val text-green">{tir_category}</span>
                    </div>
                    <div class="op-proto-item">
                        <span class="op-proto-lbl">TIR Modelada Activo:</span>
                        <span class="op-proto-val text-gold">{tir_val}</span>
                    </div>
                    <div class="op-proto-item">
                        <span class="op-proto-lbl">EBITDA Anual / Régimen:</span>
                        <span class="op-proto-val text-cyan">{p.get('ebitda', 'Auditado')}</span>
                    </div>
                    <div class="op-proto-item">
                        <span class="op-proto-lbl">Estructura & Marco:</span>
                        <span class="op-proto-val">{p.get('regulatoryRegime', 'Vigente')}</span>
                    </div>
                </div>
                <div class="op-proto-note">
                    <strong>Memoria de Cálculo: </strong>{fin_note}
                </div>
            </div>

            <!-- Market Trends -->
            <div class="op-market-box">
                <div class="op-card-title" style="margin-bottom: 3px; padding-bottom: 2px;">
                    🌐 Perspectiva & Tendencias de Mercado
                </div>
                <div class="op-market-grid">
                    <div class="op-market-col">
                        <div class="op-market-tag">🇦🇷 Mercado Local (Argentina)</div>
                        <p class="op-market-text">{local_trend}</p>
                    </div>
                    <div class="op-market-col">
                        <div class="op-market-tag">🌎 Demanda Global / Internacional</div>
                        <p class="op-market-text">{intl_trend}</p>
                    </div>
                </div>
            </div>

            <!-- Metrics Grid -->
            <div class="op-metrics-grid">
                {metrics_html}
            </div>
        </div>

        <!-- Footer -->
        <div class="op-footer">
            <div class="op-consultant">
                <div class="op-avatar">{consultant['avatar']}</div>
                <div>
                    <div class="op-cname">{consultant['name']}</div>
                    <div class="op-crole">{consultant['role']} • Energy CPY</div>
                </div>
            </div>
            <div class="op-contact">
                Email: <span>{consultant['email']}</span> • Tel/WA: <span>{consultant['phone']}</span> • <strong>Pág. {page_num} de 28</strong>
            </div>
        </div>
    </div>
    """
    html_parts.append(op_html)

# 4. BACK COVER / INSTITUTIONAL NOTICE
back_cover_html = """
<div class="back-cover-page">
    <div class="cover-border-inner"></div>
    <div>
        <div class="op-header" style="border-bottom-color: rgba(245, 208, 97, 0.4);">
            <div>
                <div class="cover-brand-title" style="font-size: 22pt;">ENERGY CPY</div>
                <div class="cover-brand-sub">INSTITUTIONAL INVESTMENT ADVISORY</div>
            </div>
            <div class="cover-badge">MARCO REGULATORIO & DUE DILIGENCE</div>
        </div>

        <div style="margin-top: 18px;">
            <div class="back-title">Garantías Legales, Estabilidad & Protocolo de Acceso</div>
            <div class="back-sub">
                Cada uno de los 25 proyectos sintetizados en este catálogo se encuentra formalizado bajo estrictos protocolos 
                de sindicación, confidencialidad y gobernanza corporativa internacional.
            </div>
        </div>

        <div class="back-card">
            <div class="back-card-title">⚖️ 1. Marco Regulatorio, Cambiario & Estabilidad Fiscal (RIGI)</div>
            <div class="back-card-text">
                Los activos calificados de gran escala son plenamente elegibles bajo el <strong>Régimen de Incentivo para Grandes Inversiones (RIGI - Ley 27.742)</strong>, 
                garantizando por 30 años:
                <ul>
                    <li><strong>Estabilidad Impositiva & Tributaria:</strong> Tasa reducida de Impuesto a las Ganancias al 25%, amortización acelerada y devolución anticipada de IVA.</li>
                    <li><strong>Libre Disponibilidad Cambiaria:</strong> Libre acceso al Mercado Libre de Cambios (MLC) y disponibilidad progresiva de divisas del 100% de exportaciones.</li>
                    <li><strong>Inmunidad Regulatoria & Arbitraje Internacional:</strong> Cláusula de protección bilateral de inversiones y solución de controversias ante tribunales arbitrales internacionales (CIADI / UNCITRAL).</li>
                </ul>
            </div>
        </div>

        <div class="back-card">
            <div class="back-card-title">🔒 2. Matriz de Protección Legal en Tres Capas (Triple Shield)</div>
            <div class="back-card-text">
                <ul>
                    <li><strong>Capa 1 (Acuerdo NDA & Exclusividad):</strong> Non-Disclosure Agreement bilateral obligatorio previo a la apertura de información técnica confidencial o financiera granular.</li>
                    <li><strong>Capa 2 (Contratos de Mandato & Finders Fee):</strong> Protección de intermediación institucional registrada bajo normativa del Código Civil y Comercial de la Nación (Art. 1345 y conc.).</li>
                    <li><strong>Capa 3 (Vehículos Fiduciarios & Escrow):</strong> Cierre de operaciones y canalización de fondos mediante Fideicomisos de Garantía (CCCN Art. 1666) y cuentas escrow en entidades bancarias de primera línea.</li>
                </ul>
            </div>
        </div>

        <div class="back-card">
            <div class="back-card-title">📁 3. Protocolo de Apertura de Data Room & Memorándum Financiero</div>
            <div class="back-card-text">
                Para solicitar el Memorándum de Inversión Completo (IM), el modelo financiero editable (.xlsx) y la documentación de respaldo técnico-legal de cualquiera de los proyectos:
                <ul>
                    <li>1. Indicar el código de referencia oficial del activo (Ej: <code>REF: ECPY-MINERIA-ORO-SAN-ANTONIO-SAN-JUAN</code>).</li>
                    <li>2. Solicitar el modelo estándar de NDA institucional a la casilla oficial de contacto.</li>
                    <li>3. Concluido el registro, el equipo de Energy CPY habilitará el acceso seguro vía Google Drive al Data Room del activo seleccionado.</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="cover-footer">
        <div>
            <div style="font-size: 8.5pt; font-weight: 800; color: #ffffff;">ENERGY CPY — PRIVATE INVESTMENT SHOWROOM 2026</div>
            <div style="font-size: 7.2pt; color: #94a3b8;">Contacto Oficial: inventario.energycpy@gmail.com • WhatsApp Red: +54 9 351 2064791 / +54 9 2974 23-3028</div>
            <div style="font-size: 6.8pt; color: #64748b; margin-top: 2px;">Bóveda Digital: https://github.com/inventarioenergycpy • Showroom: https://inventarioenergycpy.github.io/showroom-energycpy/</div>
        </div>
        <div style="font-size: 8pt; font-weight: 800; color: #f5d061;">
            Página 28 de 28
        </div>
    </div>
</div>
"""
html_parts.append(back_cover_html)

html_parts.append("</body></html>")

full_html = "\n".join(html_parts)

temp_html_path = r"C:\Users\majon\.gemini\antigravity\brain\25b183d1-d0a1-4bc0-a8cc-e6989cd9f44d\scratch\catalogo_completo.html"
with open(temp_html_path, "w", encoding="utf-8") as f:
    f.write(full_html)

print(f"Generated HTML at {temp_html_path} ({len(full_html)} bytes)")

output_pdf = r"C:\Users\majon\Downloads\Energy_CPY_Catalogo_Resumenes_Ejecutivos_Showroom_2026.pdf"
chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
cmd = [chrome, "--headless", "--disable-gpu", f"--print-to-pdf={output_pdf}", "--no-pdf-header-footer", temp_html_path]
print("Running Headless Chrome to compile PDF...")
subprocess.run(cmd, check=True)

print(f"SUCCESS! Output PDF generated at: {output_pdf}")
print(f"File size: {os.path.getsize(output_pdf)} bytes")
