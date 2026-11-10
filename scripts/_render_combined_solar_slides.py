# -*- coding: utf-8 -*-
"""
Generador de Diapositivas HD (1920x1080) combinando la oferta
"Plantas Solares Llave en Mano con Financiamiento Asegurado" (Diapositivas 1 a 6)
con toda la información de "Presentacion_Servicios_Energia_Renovable_Llave_en_Mano_y_Equipos" (Diapositivas 7 a 14).
"""
import base64
import pathlib
import subprocess

BASE_DIR = pathlib.Path(r"C:\Users\majon\.gemini\antigravity-ide\scratch\showroom-energycpy")
SLIDES_DIR = BASE_DIR / "assets" / "slides"
LOGO_PATH = BASE_DIR / "assets" / "images" / "logo-energy-cpy-4v-transparente.png"
if not LOGO_PATH.exists():
    LOGO_PATH = pathlib.Path(r"C:\Users\majon\Downloads\logo Energy CPY 4v fondo transparente_.png")

LOGO_B64 = "data:image/png;base64," + base64.b64encode(LOGO_PATH.read_bytes()).decode("ascii")

COMMON_CSS = """
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: radial-gradient(circle at 85% 15%, #162238 0%, #0b1120 65%, #070b14 100%);
    color: #f8fafc;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 46px 64px 36px 64px;
}
.watermark {
    position: absolute;
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
.watermark img {
    width: 88%;
    height: 84%;
    object-fit: contain;
    opacity: 0.22;
}
.slide-top {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid rgba(56, 189, 248, 0.28);
    padding-bottom: 16px;
    margin-bottom: 20px;
}
.step-tag {
    color: #38bdf8;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 6px;
    display: block;
}
.slide-title {
    font-size: 38px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.18;
}
.slide-title span.gold {
    color: #fbbf24;
}
.slide-title span.cyan {
    color: #38bdf8;
}
.slide-title span.emerald {
    color: #34d399;
}
.brand-box {
    display: flex;
    align-items: center;
    gap: 14px;
    background: rgba(15, 23, 42, 0.78);
    border: 1px solid rgba(251, 191, 36, 0.45);
    padding: 10px 18px;
    border-radius: 14px;
    flex-shrink: 0;
}
.brand-box img {
    height: 54px;
    width: auto;
}
.brand-text-main {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 0.8px;
    color: #ffffff;
}
.brand-text-main span {
    color: #38bdf8;
}
.brand-text-sub {
    font-size: 12px;
    font-weight: 700;
    color: #fbbf24;
    text-transform: uppercase;
    letter-spacing: 0.6px;
}
.slide-body {
    position: relative;
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
}
.lead {
    font-size: 20px;
    color: #cbd5e1;
    line-height: 1.45;
}
.lead strong {
    color: #ffffff;
}
.grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}
.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}
.card {
    background: rgba(15, 23, 42, 0.76);
    border: 1.5px solid rgba(71, 85, 105, 0.65);
    border-top: 4px solid #38bdf8;
    border-radius: 16px;
    padding: 22px 24px;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
}
.card-gold {
    border-top-color: #fbbf24;
    border-color: rgba(245, 158, 11, 0.5);
    background: linear-gradient(145deg, rgba(120, 53, 15, 0.25), rgba(15, 23, 42, 0.80));
}
.card-emerald {
    border-top-color: #10b981;
    border-color: rgba(16, 185, 129, 0.5);
    background: linear-gradient(145deg, rgba(6, 78, 59, 0.28), rgba(15, 23, 42, 0.80));
}
.card h3 {
    font-size: 23px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.kpi-val {
    font-size: 38px;
    font-weight: 900;
    color: #34d399;
    line-height: 1.1;
    margin-bottom: 6px;
}
.kpi-val.gold { color: #fbbf24; }
.kpi-val.cyan { color: #38bdf8; }
.kpi-val.purple { color: #c084fc; }
.kpi-lbl {
    font-size: 18px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 6px;
}
.kpi-desc {
    font-size: 15.5px;
    color: #cbd5e1;
    line-height: 1.38;
}
ul.checks {
    list-style: none;
}
ul.checks li {
    position: relative;
    padding-left: 26px;
    margin-bottom: 10px;
    font-size: 17.5px;
    line-height: 1.4;
    color: #e2e8f0;
}
ul.checks li::before {
    content: "✔";
    position: absolute;
    left: 0;
    top: 0;
    color: #34d399;
    font-weight: 900;
}
ul.checks li strong {
    color: #fbbf24;
}
table.exec-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(15, 23, 42, 0.84);
    border-radius: 12px;
    overflow: hidden;
    border: 1.5px solid #475569;
}
table.exec-table th {
    background: rgba(30, 41, 59, 0.95);
    color: #38bdf8;
    font-size: 15.5px;
    font-weight: 800;
    text-align: left;
    padding: 11px 14px;
    border-bottom: 2px solid #475569;
}
table.exec-table td {
    padding: 10px 14px;
    font-size: 15.5px;
    color: #f1f5f9;
    border-bottom: 1px solid rgba(71, 85, 105, 0.55);
    line-height: 1.3;
}
table.exec-table tr.hl td {
    background: rgba(16, 185, 129, 0.14);
}
table.exec-table tr.total-row td {
    background: rgba(245, 158, 11, 0.22);
    color: #ffffff;
    font-weight: 800;
    border-top: 2px solid #fbbf24;
}
.slide-footer {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(148, 163, 184, 0.25);
    padding-top: 12px;
    font-size: 15px;
    color: #94a3b8;
    font-weight: 600;
}
.slide-footer .page-num {
    color: #fbbf24;
    font-weight: 800;
    font-size: 17px;
}
"""

slides_data = [
    # SLIDE 7
    {
        "num": 7,
        "step": "OFERTA COMBINADA ENERGY CPY • ACUERDO RIGI LEY 27.742 + FINANCIACIÓN 50% CAPEX",
        "title": "Plantas Solares <span class='gold'>Llave en Mano con Financiamiento Asegurado</span>, BESS, Electromovilidad y Equipos",
        "footer_left": "PORTAFOLIO INTEGRAL COMBINADO: PLANTAS SOLARES LLAVE EN MANO + BESS + ELECTROGASOLINERAS + LICITACIÓN DE EQUIPOS",
        "body": """
        <p class="lead">
            Estructuración técnica, regulatoria y financiera integral para <strong>Entes Públicos y Empresas Privadas</strong> en Cuyo, NOA, Centro y Patagonia. Combinamos estabilidad fiscal y cambiaria <strong>RIGI por 30 años (Ley N.º 27.742)</strong>, <strong>financiación directa asegurada del 50% del CAPEX a través de nuestro Socio Industrial Fotovoltaico Líder en Turquía</strong>, contratos PPA en USD (15 a 20 años MATER/CAMMESA), potencia firme BESS, electrogasolineras, arquitectura <strong>H2V-Ready</strong> y provisión de equipos por lotes.
        </p>
        <div class="grid-4">
            <div class="card card-emerald">
                <div class="kpi-val">50% CAPEX</div>
                <div class="kpi-lbl">Financiación Directa de Fábrica (Turquía)</div>
                <div class="kpi-desc">Plazo de hasta 12 años al 7,20%–7,80% anual All-In en USD (base CIRR 5,80% + seguro ECA), tanto para obra llave en mano EPC como para compra de lotes de equipos.</div>
            </div>
            <div class="card card-gold">
                <div class="kpi-val gold">4,65 a 7,66 Años</div>
                <div class="kpi-lbl">Payback Equity (Base P50 vs. Peor Caso P90)</div>
                <div class="kpi-desc">Payback de Proyecto de 6,11 años en Caso Base P50 (TIR Equity 20,09%–26,40%) y 8,52 años en Peor Caso Admisible P90 con margen neto mínimo garantizado &ge; 19,2%.</div>
            </div>
            <div class="card">
                <div class="kpi-val cyan">100% Flexible</div>
                <div class="kpi-lbl">Entes Públicos, Privados y Licitaciones Parciales</div>
                <div class="kpi-desc">Nos presentamos a licitaciones de obra integral (EPC) o a licitaciones parciales de provisión de paneles, inversores, trackers, baterías BESS y cargadores EV.</div>
            </div>
            <div class="card">
                <div class="kpi-val purple">H2V-Ready</div>
                <div class="kpi-lbl">Sistemas Preparados para Hidrógeno Verde</div>
                <div class="kpi-desc">Arquitectura con barraje en Corriente Continua (1500 Vdc DC-Coupled) lista para insertar electrolizadores de H2V y Amoníaco Verde con 0% retenciones RIGI.</div>
            </div>
        </div>
        """
    },
    # SLIDE 8
    {
        "num": 8,
        "step": "RESPALDO INDUSTRIAL Y FINANCIERO INTERNACIONAL • BLIND TEASER PROTEGIDO BAJO NCNDA",
        "title": "Alianza con <span class='gold'>Fabricante Fotovoltaico Líder de Turquía</span> (Capacidad 1 GW/año)",
        "footer_left": "RESPALDO TECNOLÓGICO TIER-1, CENTRO DE I+D ACREDITADO Y CRÉDITO DE PROVEEDOR DEL 50%",
        "body": """
        <p class="lead">
            Turquía se ha consolidado como el mayor polo de manufactura solar de Europa y Medio Oriente (&gt;13,2 GW/año). Nuestra organización actúa en alianza con uno de los grupos industriales eléctricos y fotovoltaicos más avanzados de dicho país, poniendo a disposición de proyectos públicos y privados en Argentina y Latinoamérica su capacidad fabril y financiera:
        </p>
        <div class="grid-3">
            <div class="card">
                <h3>🏭 Planta Robotizada de 100.000 m² con IA</h3>
                <ul class="checks">
                    <li><strong>Capacidad de Producción de 1 GW anual (1.000 MWp/año)</strong> en líneas 100% automatizadas.</li>
                    <li>Control de calidad por <strong>Inteligencia Artificial (Electroluminiscencia EL y AOI)</strong> en cada celda.</li>
                    <li>Tecnología de soldadura de alta densidad <strong>Micro-Gap</strong> y corte láser térmico no destructivo (<strong>NDC</strong>).</li>
                    <li><strong>38 años de trayectoria industrial</strong> en ingeniería eléctrica y automatización (fundada en 1988).</li>
                </ul>
            </div>
            <div class="card">
                <h3>🔬 Centro de I+D Oficial y Tecnología TOPCon</h3>
                <ul class="checks">
                    <li><strong>Centro Corporativo de I+D acreditado oficialmente</strong> por el Ministerio de Industria y Tecnología de Turquía (Ley N.º 5746).</li>
                    <li>Proyectos de innovación ejecutados junto al Consejo Nacional de Investigación Científica (<strong>TÜBİTAK</strong>).</li>
                    <li>Módulos <strong>N-Type TOPCon Bifaciales (550 Wp a 720 Wp+)</strong> y arquitecturas <strong>SMBB (Super Multi-Busbar)</strong>.</li>
                    <li>Certificaciones internacionales completas (<strong>IEC 61215, IEC 61730, CE, ISO 9001/14001/45001</strong>) libres de restricciones arancelarias geopolíticas.</li>
                </ul>
            </div>
            <div class="card card-emerald">
                <h3>🏦 Financiación del 50% + Acuerdo RIGI</h3>
                <ul class="checks">
                    <li><strong>Financiación de hasta el 50% del CAPEX</strong> mediante esquema <em>Vendor Finance / Buyer's Credit</em> con respaldo de agencia de exportación (<strong>ECA</strong>).</li>
                    <li>Tasa <em>All-In</em> del <strong>7,20% anual en USD en Caso Base P50 (7,80% en Peor Caso P90) a 12 años</strong> (base CIRR 5,80% + prima ECA).</li>
                    <li>Ingreso al país con <strong>0% de Derechos de Importación y 0% de Tasa de Estadística</strong> bajo nuestro paraguas de Acuerdo RIGI (Ley 27.742).</li>
                    <li>Seguro de Garantía de Rendimiento Lineal a 25–30 años respaldado por reaseguradoras internacionales AAA.</li>
                </ul>
            </div>
        </div>
        """
    },
    # SLIDE 9
    {
        "num": 9,
        "step": "ARTICULACIÓN PÚBLICO-PRIVADA • MODALIDAD DUAL B2G & B2B",
        "title": "Soluciones a Medida para <span class='cyan'>Entes Públicos</span> y <span class='gold'>Empresas Privadas</span>",
        "footer_left": "LICITACIONES PÚBLICAS NACIONALES/PROVINCIALES, DISTRIBUIDORAS, CAMMESA Y GRANDES USUARIOS MATER",
        "body": """
        <div class="grid-2">
            <div class="card">
                <h3>🏛️ Sector Público (Nacional, Provincial, Municipal y Distribuidoras)</h3>
                <ul class="checks">
                    <li><strong>Empresas Provinciales de Energía y Distribuidoras (EPEC, EPSE, EPE, EDEMSA, Edenor, Edesur y Cooperativas)</strong>: Parques solares y bancos BESS para sostener tensión en colas de línea y cumplir con el <strong>75% de contratación en el Mercado a Término (Decreto 450/2025 y Res. SE 400/2025)</strong>.</li>
                    <li><strong>Licitaciones CAMMESA y Secretaría de Energía (AlmaSADI / AlmaGBA)</strong>: Provisión llave en mano o suministro de baterías BESS de 4 horas bajo esquema oficial (Potencia Firme USD 9.200–10.500/MW-mes + PES USD 10/MWh).</li>
                    <li><strong>Gobiernos Provinciales y Fideicomisos Mineros</strong>: Centrales solares híbridas comunitarias con arranque en negro (<em>Black-Start</em>) y electrificación de parques industriales.</li>
                    <li><strong>Municipios y Vialidad Nacional/Provincial</strong>: Pabellones de carga para buses eléctricos urbanos, flotas municipales y parques de Generación Distribuida Comunitaria (Ley 27.424).</li>
                </ul>
            </div>
            <div class="card card-gold">
                <h3>🏭 Sector Privado (Industrias, Minería, Agro y Desarrolladores)</h3>
                <ul class="checks">
                    <li><strong>Grandes Usuarios del MEM (GUDIs, GUMEs, GUMAs)</strong>: Contratos PPA en el <strong>MATER Pleno / Referencial A</strong> (USD 50–58/MWh) o construcción del parque propio llave en mano con financiación del 50%.</li>
                    <li><strong>Minería de Litio, Cobre, Oro y Oil &amp; Gas</strong>: Sistemas híbridos <strong>Solar + BESS 24/7 en alta montaña (&gt;3.500 msnm)</strong> operando en isla o interconectados, desplazando generación diésel de más de USD 220/MWh.</li>
                    <li><strong>Empresas Constructoras (EPCistas) y Desarrolladores Renovables</strong>: Venta y financiación parcial de lotes de equipos (paneles, trackers, inversores y BESS) directos de fábrica para sus propios proyectos.</li>
                    <li><strong>Operadores Logísticos, Estaciones de Servicio y Centros Comerciales</strong>: Instalación de Pabellones de Electrogasolineras ultra-rápidas con retorno de capital de 3,84 años en Caso Base P50 (y 6,05 años en Peor Caso P90).</li>
                </ul>
            </div>
        </div>
        """
    },
    # SLIDE 10
    {
        "num": 10,
        "step": "SUMINISTRO MODULAR POR LOTES • PROVISIÓN DIRECTA DE FÁBRICA + FINANCIACIÓN 50%",
        "title": "Presentación a <span class='gold'>Licitaciones Parciales de Equipos</span> y Subsistemas",
        "footer_left": "SUMINISTRO POR LOTES DESDE USD 1,5M A USD 50M+ CON MARGEN MÍNIMO DEL 12% P90 (18% P50) Y AHORRO 14%–22%",
        "body": """
        <p class="lead" style="font-size:18px;">
            Además de construir proyectos completos "Llave en Mano", <strong>nos presentamos de manera independiente a licitaciones parciales de provisión de equipamiento</strong> (públicas o privadas), cotizando lotes individuales con precios directos de fábrica, financiación del 50% a 12 años y un margen neto mínimo del 12% sobre CIF en Peor Caso P90 (18% en Caso Base P50):
        </p>
        <div class="grid-3">
            <div class="card card-gold" style="padding:16px 20px;">
                <h3 style="font-size:20px;">☀️ Lote 1: Paneles Fotovoltaicos</h3>
                <ul class="checks" style="font-size:15.5px;">
                    <li style="font-size:15.5px; margin-bottom:6px;"><strong>Módulos N-Type TOPCon Bifaciales</strong> de 550 Wp a 720 Wp+ (doble vidrio templado).</li>
                    <li style="font-size:15.5px; margin-bottom:6px;">Tecnología <strong>SMBB</strong> y corte láser no destructivo (<strong>NDC</strong>) sin microfisuras.</li>
                    <li style="font-size:15.5px; margin-bottom:0;"><strong>Paneles Especiales</strong>: Vidrio-vidrio para <em>Carports</em>, agro-FV y garantía 25–30 años.</li>
                </ul>
            </div>
            <div class="card card-emerald" style="padding:16px 20px;">
                <h3 style="font-size:20px;">🔌 Lote 2: Inversores y Centros STS</h3>
                <ul class="checks">
                    <li style="font-size:15.5px; margin-bottom:6px;"><strong>Inversores String 1.500 Vdc (100 a 350 kW)</strong> con múltiples MPPT y curvas I-V.</li>
                    <li style="font-size:15.5px; margin-bottom:6px;"><strong>Inversores PCS Grid-Forming (IEEE 2800)</strong> para BESS e inercia sintética.</li>
                    <li style="font-size:15.5px; margin-bottom:0;"><strong>Estaciones Transformadoras (STS 3.000 a 9.000 kVA)</strong> en 13,2 kV o 33 kV.</li>
                </ul>
            </div>
            <div class="card" style="padding:16px 20px;">
                <h3 style="font-size:20px;">⚙️ Lote 3: Trackers y Estructuras</h3>
                <ul class="checks">
                    <li style="font-size:15.5px; margin-bottom:6px;"><strong>Seguidores Solares 1 Eje (1P y 2P)</strong> en acero Magnelis / Galvanizado HDG.</li>
                    <li style="font-size:15.5px; margin-bottom:6px;">Controlador con <strong>Backtracking Astronómico 3D</strong> para terrenos con desnivel.</li>
                    <li style="font-size:15.5px; margin-bottom:0;">Defensa contra ráfagas de viento certificada bajo <strong>Reglamento CIRSOC 102</strong>.</li>
                </ul>
            </div>
            <div class="card" style="padding:16px 20px;">
                <h3 style="font-size:20px;">🔋 Lote 4: Baterías BESS LiFePO4</h3>
                <ul class="checks">
                    <li style="font-size:15.5px; margin-bottom:6px;"><strong>Contenedores All-in-One LFP (1 a 5 MWh)</strong> con eficiencia de ciclo &ge; 88–90%.</li>
                    <li style="font-size:15.5px; margin-bottom:6px;"><strong>Refrigeración líquida</strong> que extiende la vida útil a 7.000–8.000 ciclos.</li>
                    <li style="font-size:15.5px; margin-bottom:0;">Seguridad contra incendios certificada bajo normas <strong>NFPA 855 y UL 9540A</strong>.</li>
                </ul>
            </div>
            <div class="card" style="padding:16px 20px;">
                <h3 style="font-size:20px;">🎛️ Lote 5: Tableros, Celdas MT y SMEC</h3>
                <ul class="checks">
                    <li style="font-size:15.5px; margin-bottom:6px;">Respaldo de <strong>38 años en fabricación de tableros de potencia y automatización</strong>.</li>
                    <li style="font-size:15.5px; margin-bottom:6px;">Celdas primarias y secundarias GIS/AIS en 13,2 kV y 33 kV.</li>
                    <li style="font-size:15.5px; margin-bottom:0;"><strong>Medición Comercial SMEC Clase 0.2S</strong>, SOTR y SCADA homologados CAMMESA.</li>
                </ul>
            </div>
            <div class="card card-gold" style="padding:16px 20px;">
                <h3 style="font-size:20px;">🚗 Lote 6: Cargadores Eléctricos EV</h3>
                <ul class="checks">
                    <li style="font-size:15.5px; margin-bottom:6px;"><strong>Surtidores DC Ultra-Rápidos de 60, 180 y 360 kW</strong> (CCS2 y NACS, 10–80% en 15 min).</li>
                    <li style="font-size:15.5px; margin-bottom:6px;">Cargadores AC de 7,4 kW a 22 kW para flotas corporativas y municipios.</li>
                    <li style="font-size:15.5px; margin-bottom:0;">Software de gestión y cobro interoperable <strong>OCPP 2.0.1 (AEA 90364-7-722)</strong>.</li>
                </ul>
            </div>
        </div>
        """
    },
    # SLIDE 11
    {
        "num": 11,
        "step": "INGENIERÍA ELÉCTRICA Y ESTRUCTURA CONTRACTUAL CAMMESA • PLIEGOS ALMAGBA / ALMASADI",
        "title": "Subsanación de Líneas con <span class='emerald'>BESS</span> y Venta de <span class='gold'>Generación + Potencia Firme</span>",
        "footer_left": "INGENIERÍA FINANCIERA SIN DOBLE CÓMPUTO: PPA SOLAR MATER + POTENCIA FIRME BESS (RES. SE 67/2025 & 50/2026)",
        "body": """
        <div class="grid-2">
            <div class="card">
                <h3>🛠️ Cómo Subsanamos Irregularidades en las Líneas de Transmisión</h3>
                <ul class="checks">
                    <li><strong>Compensación del Límite de Impedancia Característica (SIL = Vn²/Zc) y Efecto Ferranti</strong>: Los inversores PCS <em>Grid-Forming</em> (norma IEEE 2800) actúan como un compensador sincrónico estático (STATCOM) las 24 hs, inyectando o absorbiendo reactiva Q(V) para mantener la tensión en 1,00 &plusmn; 0,03 p.u.</li>
                    <li><strong>Aporte de Inercia Sintética (H &ge; 4 s) y Fortaleza de Red</strong>: Permite conectar parques solares en nodos débiles del interior sin provocar oscilaciones de tensión ni disparos por derivada de frecuencia (RoCoF).</li>
                    <li><strong>Mitigación del Recorte (Curtailment) en MATER Referencial A</strong>: La energía solar de mediodía que excede la capacidad de transporte se almacena en el BESS y se despacha en el pico nocturno (18:00 a 23:00 hs).</li>
                </ul>
            </div>
            <div class="card card-emerald">
                <h3>💰 Precios Actuales Auditados: Generación vs. Generación + Potencia</h3>
                <ul class="checks">
                    <li><strong>1. Venta de Generación Solar en MATER Pleno (USD 50,0 a 58,0/MWh)</strong>: Contratos PPA a 10–20 años con grandes usuarios (netos de factor de nodo FNk = 0,97 y pérdidas/curtailment: <strong>USD 54,88/MWh en Caso Base P50 y USD 50,00/MWh en Peor Caso P90</strong>).</li>
                    <li><strong>2. Pago por Potencia Firme BESS 4h (USD 9.000 a 10.500/MW-mes)</strong>: Basado en los precios adjudicados en <strong>AlmaGBA (Res. SE 67/2025: USD 10.161–12.591/MW-mes) y AlmaSADI (Res. SE 50/2026: promedio USD 10.500/MW-mes)</strong>. Aporta entre <strong>USD 10,80M y USD 12,36M/año fijos</strong> por cada 100 MW firmes.</li>
                    <li><strong>3. Energía Variable Despachada por BESS (PES = USD 10,0/MWh)</strong>: Conforme a los pliegos oficiales de CAMMESA, la energía descargada por la batería percibe el cargo variable <code>PES</code> de <strong>USD 10,0/MWh</strong> (sin duplicar artificialmente un PPA de energía pico sobre el pago de potencia).</li>
                </ul>
            </div>
        </div>
        """
    },
    # SLIDE 12
    {
        "num": 12,
        "step": "MOVILIDAD ELÉCTRICA Y FUTURO HIDRÓGENO VERDE • ESCALABILIDAD EN ARGENTINA Y LATAM",
        "title": "Pabellones de <span class='gold'>Electrogasolineras Viales</span> y Sistemas Flexibles <span class='cyan'>\"H2V-Ready\"</span>",
        "footer_left": "REVALORIZACIÓN MINORISTA SOLAR-TO-WHEEL (USD 320–340/MWh) Y ACOPLAMIENTO DC 1500 VDC PARA HIDRÓGENO VERDE",
        "body": """
        <div class="grid-2">
            <div class="card card-gold">
                <h3>🚗 Pabellones de Electrogasolineras ("Solar-to-Wheel")</h3>
                <ul class="checks">
                    <li><strong>Revalorización Minorista del MWh Propio</strong>: El proyecto genera energía solar a un costo nivelado (LCOE) de <strong>USD 29–34/MWh</strong> y la comercializa en sus Pabellones de Carga Ultra-Rápida a <strong>USD 320–340/MWh (USD 0,32–0,34/kWh)</strong>.</li>
                    <li><strong>Precio Imbatible para Incentivar el Vehículo Eléctrico</strong>: Nuestra tarifa es un <strong>30% a 45% más económica que las redes públicas actuales</strong> (ej. YPF Punto Eléctrico a ~ARS 580–798/kWh) y representa un <strong>ahorro del 55% por kilómetro frente al gasoil o la nafta</strong>.</li>
                    <li><strong>Curva de Adopción Auditada (P90 vs. P50)</strong>: Modelado con un factor de utilización inicial conservador del <strong>6,0% en el Año 1 para el Peor Caso P90</strong> (y <strong>12,0% en el Caso Base P50</strong>), incluyendo un BESS Buffer de 1 MWh por estación para evitar penalidades de potencia en media tensión.</li>
                </ul>
            </div>
            <div class="card">
                <h3>🧪 Arquitectura Flexible "H2V-Ready" (Hidrógeno Verde en Argentina y LATAM)</h3>
                <ul class="checks">
                    <li><strong>Barraje Colector en Corriente Continua (1.500 Vdc DC-Coupled)</strong>: Pre-instalado desde el Día 1 para conectar directamente electrolizadores <strong>PEM o Alcalinos</strong> mediante convertidores DC/DC sin pasar por alterna.</li>
                    <li><strong>Eficiencia Superior y Menor CAPEX</strong>: Ahorra un <strong>5,5% de pérdidas eléctricas de conversión</strong> y reduce un <strong>18% el CAPEX eléctrico</strong> de la futura planta de electrólisis.</li>
                    <li><strong>Operación Basal Nocturna gracias al BESS</strong>: El banco de baterías mantiene el piso mínimo operativo del 10–15% requerido por los electrolizadores durante la noche.</li>
                    <li><strong>Competitividad Exportadora bajo RIGI (0% Retenciones desde el Año 3)</strong>: Permite producir en Fase II (100 MW) <strong>12.500 ton/año de H2V (LCOH ~USD 2,15–2,45/kg)</strong> o <strong>70.000 ton/año de Amoníaco Verde (NH3)</strong> para acero verde (DRI sin arancel europeo CBAM) y exportación marítima.</li>
                </ul>
            </div>
        </div>
        """
    },
    # SLIDE 13
    {
        "num": 13,
        "step": "INGENIERÍA FINANCIERA VALIDADA CON ENTES OFICIALES (CAMMESA • SECRETARÍA DE ENERGÍA • LEY RIGI 27.742)",
        "title": "Matriz Auditada de Rentabilidad: <span class='emerald'>Caso Base (P50)</span> vs. <span class='gold'>Peor Caso Admisible (P90)</span>",
        "footer_left": "SIN DOBLE CÓMPUTO • CAPEX ALL-IN • TASA ECA TURQUÍA 7,2%–8,2% ANUAL USD • MARGEN MÍNIMO GARANTIZADO",
        "body": """
        <table class="exec-table">
            <thead>
                <tr>
                    <th>Línea de Servicio / Licitación Objetivo</th>
                    <th>CAPEX All-In<br><small>Base P50 / Peor P90</small></th>
                    <th>EBITDA Año 1<br><small>Base P50 / Peor P90</small></th>
                    <th>Margen Neto Mín.<br><small>Año 1 P90 / P50</small></th>
                    <th>Payback Proyecto<br><small>Base P50 / Peor P90</small></th>
                    <th>Payback Equity<br><small>Base P50 / Peor P90</small></th>
                    <th>TIR Proyecto (USD)<br><small>Base P50 / Peor P90</small></th>
                    <th>TIR Equity (USD)<br><small>Base P50 / Peor P90</small></th>
                </tr>
            </thead>
            <tbody>
                <tr class="hl">
                    <td><strong>1. Hub VPU RIGI Integral Llave en Mano</strong><br><small>Solar 250 MWac + BESS 100 MW/400 MWh + 10 Electrogasolineras + Bus H2V-Ready</small></td>
                    <td>USD 265,0M<br><small>/ USD 275,0M</small></td>
                    <td><strong>USD 43,52M</strong><br><small>/ USD 31,70M</small></td>
                    <td><strong>19,20%</strong><br><small>/ 31,61%</small></td>
                    <td><strong>6,11 años</strong><br><small>/ 8,52 años</small></td>
                    <td><strong>4,65 años</strong><br><small>/ 7,66 años</small></td>
                    <td><strong>14,03%</strong><br><small>/ 9,16%</small></td>
                    <td><strong>20,09%</strong><br><small>/ 12,01%</small></td>
                </tr>
                <tr>
                    <td><strong>2. Licitación Nacional BESS + Solar (AlmaSADI / AlmaGBA)</strong><br><small>BESS Grid-Forming 50 MW/200 MWh (4h) + Solar 100 MWac (PDG + PES USD 10/MWh)</small></td>
                    <td>USD 112,0M<br><small>/ USD 118,0M</small></td>
                    <td><strong>USD 17,90M</strong><br><small>/ USD 13,60M</small></td>
                    <td><strong>18,10%</strong><br><small>/ 29,80%</small></td>
                    <td><strong>6,26 años</strong><br><small>/ 8,45 años</small></td>
                    <td><strong>4,82 años</strong><br><small>/ 7,58 años</small></td>
                    <td><strong>13,65%</strong><br><small>/ 9,28%</small></td>
                    <td><strong>19,40%</strong><br><small>/ 12,25%</small></td>
                </tr>
                <tr class="hl">
                    <td><strong>3. Central Híbrida Minera 24/7 con Black-Start</strong><br><small>Solar 150 MWac Alta Montaña + BESS 80 MW/320 MWh (Desplazamiento Diésel)</small></td>
                    <td>USD 168,0M<br><small>/ USD 176,0M</small></td>
                    <td><strong>USD 29,40M</strong><br><small>/ USD 22,50M</small></td>
                    <td><strong>21,40%</strong><br><small>/ 33,50%</small></td>
                    <td><strong>5,71 años</strong><br><small>/ 7,82 años</small></td>
                    <td><strong>4,30 años</strong><br><small>/ 6,85 años</small></td>
                    <td><strong>15,40%</strong><br><small>/ 10,45%</small></td>
                    <td><strong>22,30%</strong><br><small>/ 14,10%</small></td>
                </tr>
                <tr>
                    <td><strong>4. Parque Regional para Distribuidoras y Cooperativas</strong><br><small>Cumplimiento 75% Mercado a Término (Res. SE 400/2025): Solar 60 MWac + BESS 80 MWh</small></td>
                    <td>USD 58,0M<br><small>/ USD 62,0M</small></td>
                    <td><strong>USD 9,20M</strong><br><small>/ USD 7,25M</small></td>
                    <td><strong>17,85%</strong><br><small>/ 29,10%</small></td>
                    <td><strong>6,30 años</strong><br><small>/ 8,55 años</small></td>
                    <td><strong>4,88 años</strong><br><small>/ 7,70 años</small></td>
                    <td><strong>13,50%</strong><br><small>/ 9,10%</small></td>
                    <td><strong>19,15%</strong><br><small>/ 11,95%</small></td>
                </tr>
                <tr class="hl">
                    <td><strong>5. Red de 20 Pabellones de Electrogasolineras Viales</strong><br><small>120 Cargadores DC (180–360 kW) + Marquesinas FV (10 MWp) + BESS Buffer (20 MWh)</small></td>
                    <td>USD 33,0M<br><small>/ USD 35,0M</small></td>
                    <td><strong>USD 6,45M</strong><br><small>/ USD 5,15M</small></td>
                    <td><strong>22,10%</strong><br><small>/ 34,20%</small></td>
                    <td><strong>5,12 años</strong><br><small>/ 6,80 años</small></td>
                    <td><strong>3,84 años</strong><br><small>/ 6,05 años</small></td>
                    <td><strong>17,80%</strong><br><small>/ 12,40%</small></td>
                    <td><strong>26,40%</strong><br><small>/ 17,20%</small></td>
                </tr>
                <tr>
                    <td><strong>6. Planta Modular Hidrógeno Verde (H2V 100 MW) y NH3</strong><br><small>Acoplamiento DC-Coupled para Siderurgia Verde (DRI) y Exportación 0% Retenciones RIGI</small></td>
                    <td>USD 235,0M<br><small>/ USD 248,0M</small></td>
                    <td><strong>USD 36,80M</strong><br><small>/ USD 29,20M</small></td>
                    <td><strong>18,40%</strong><br><small>/ 30,20%</small></td>
                    <td><strong>6,39 años</strong><br><small>/ 8,49 años</small></td>
                    <td><strong>4,95 años</strong><br><small>/ 7,62 años</small></td>
                    <td><strong>13,30%</strong><br><small>/ 9,20%</small></td>
                    <td><strong>18,85%</strong><br><small>/ 12,10%</small></td>
                </tr>
                <tr class="total-row">
                    <td><strong>7. Licitación Parcial de Equipos (Supply-Only / Por Lotes)</strong><br><small>Provisión de Paneles TOPCon, Inversores, Trackers, BESS, STS o Cargadores EV</small></td>
                    <td>Desde USD 1,5M<br><small>a USD 50M+</small></td>
                    <td colspan="6"><strong>50% Financiado a 12 años (7,20%–7,80% All-In USD)</strong> · <strong>Margen Neto Comercial Mínimo Garantizado del 12,0% sobre CIF en Peor Caso P90 (18,0% en Caso Base P50)</strong> · Payback: 1,35a (TIR 32,5%) / 2,15a (TIR 21,6%) y ahorro del 14% al 22% para el comprador.</td>
                </tr>
            </tbody>
        </table>
        """
    },
    # SLIDE 14
    {
        "num": 14,
        "step": "CONSOLIDADO DEL PORTAFOLIO (OFERTAS 1 A 7) Y PRÓXIMOS PASOS EJECUTIVOS",
        "title": "Tabla Resumen Comparativa de <span class='gold'>Totales del Portafolio</span> y Contacto Oficial",
        "footer_left": "ENERGY CPY — ÁREA DESARROLLO SOSTENIBLE • CONSULTOR ASIGNADO: JAVIER IGNACIO DÍAZ (+54 9 351 2064791)",
        "body": """
        <table class="exec-table">
            <thead>
                <tr>
                    <th>Oferta / Línea de Servicio Auditada</th>
                    <th>CAPEX All-In<br><small>(Base P50 / Peor P90)</small></th>
                    <th>Financiación 50% Turquía<br><small>(Base P50 / Peor P90)</small></th>
                    <th>EBITDA Operativo Año 1<br><small>(Base P50 / Peor P90)</small></th>
                    <th>Margen Neto Año 1<br><small>(Peor P90 / Base P50)</small></th>
                    <th>Payback y TIR Equity<br><small>(Base P50 vs. Peor P90)</small></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>1. Hub VPU RIGI Integral (250 MWac + BESS + EV)</strong></td>
                    <td>USD 265,0M / 275,0M</td>
                    <td>USD 132,5M / 137,5M</td>
                    <td>USD 43,52M / 31,70M</td>
                    <td><strong>19,20%</strong> / 31,61%</td>
                    <td><strong>4,65a (20,1%)</strong> / 7,66a (12,0%)</td>
                </tr>
                <tr class="hl">
                    <td><strong>2. Licitación BESS + Solar (AlmaSADI / AlmaGBA)</strong></td>
                    <td>USD 112,0M / 118,0M</td>
                    <td>USD 56,0M / 59,0M</td>
                    <td>USD 17,90M / 13,60M</td>
                    <td><strong>18,10%</strong> / 29,80%</td>
                    <td><strong>4,82a (19,4%)</strong> / 7,58a (12,3%)</td>
                </tr>
                <tr>
                    <td><strong>3. Central Híbrida Minera 24/7 (Black-Start)</strong></td>
                    <td>USD 168,0M / 176,0M</td>
                    <td>USD 84,0M / 88,0M</td>
                    <td>USD 29,40M / 22,50M</td>
                    <td><strong>21,40%</strong> / 33,50%</td>
                    <td><strong>4,30a (22,3%)</strong> / 6,85a (14,1%)</td>
                </tr>
                <tr class="hl">
                    <td><strong>4. Parque Regional Distribuidoras y Cooperativas</strong></td>
                    <td>USD 58,0M / 62,0M</td>
                    <td>USD 29,0M / 31,0M</td>
                    <td>USD 9,20M / 7,25M</td>
                    <td><strong>17,85%</strong> / 29,10%</td>
                    <td><strong>4,88a (19,2%)</strong> / 7,70a (12,0%)</td>
                </tr>
                <tr>
                    <td><strong>5. Red de 20 Pabellones de Electrogasolineras</strong></td>
                    <td>USD 33,0M / 35,0M</td>
                    <td>USD 16,5M / 17,5M</td>
                    <td>USD 6,45M / 5,15M</td>
                    <td><strong>22,10%</strong> / 34,20%</td>
                    <td><strong>3,84a (26,4%)</strong> / 6,05a (17,2%)</td>
                </tr>
                <tr class="hl">
                    <td><strong>6. Planta Modular Hidrógeno Verde (H2V) y NH3</strong></td>
                    <td>USD 235,0M / 248,0M</td>
                    <td>USD 117,5M / 124,0M</td>
                    <td>USD 36,80M / 29,20M</td>
                    <td><strong>18,40%</strong> / 30,20%</td>
                    <td><strong>4,95a (18,9%)</strong> / 7,62a (12,1%)</td>
                </tr>
                <tr>
                    <td><strong>7. Licitación Parcial de Equipos (Lote Tipo)</strong></td>
                    <td>USD 16,0M / 17,0M</td>
                    <td>USD 8,0M / 8,5M</td>
                    <td>USD 2,88M / 2,04M</td>
                    <td><strong>12,00%</strong> / 18,00%</td>
                    <td><strong>1,35a (32,5%)</strong> / 2,15a (21,6%)</td>
                </tr>
                <tr class="total-row">
                    <td><strong>TOTALES / PROMEDIOS PONDERADOS PORTAFOLIO (1–7)</strong></td>
                    <td><strong>USD 887,0M / 931,0M</strong></td>
                    <td><strong>USD 443,5M / 465,5M</strong></td>
                    <td><strong>USD 146,15M / 111,44M</strong></td>
                    <td><strong>19,21% Mín. / 31,08%</strong></td>
                    <td><strong>4,58a (20,6%) / 7,32a (12,8%)</strong></td>
                </tr>
            </tbody>
        </table>
        <div class="card card-gold" style="padding:14px 22px;">
            <p style="font-size:17px; line-height:1.4; color:#fef3c7;">
                <strong>📌 Próximo Paso para Entes Públicos y Empresas Privadas:</strong> Solicite sin cargo el <strong>Diagnóstico Técnico-Financiero en 72 horas</strong> (con simulación dual Caso Base P50 y Estrés P90) para su licitación de obra completa o cotización parcial de lotes de equipamiento, junto con el modelo de <strong>Acuerdo de Confidencialidad (NCNDA)</strong> para habilitar la carpeta técnica oficial de fábrica y el <em>Term Sheet</em> de financiación del 50%. <strong>Contacto Directo WhatsApp: Javier Ignacio Díaz (+54 9 351 2064791) | Daniel González (+54 9 2974 23-3028)</strong>.
            </p>
        </div>
        """
    }
]

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
total_slides = 14

for s in slides_data:
    num = s["num"]
    html = f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>{COMMON_CSS}</style>
</head>
<body>
    <div class="watermark"><img src="{LOGO_B64}" alt="Energy CPY Watermark" /></div>
    <div class="slide-top">
        <div style="max-width: 1420px;">
            <span class="step-tag">DIAPOSITIVA {num:02d} DE {total_slides:02d} • {s['step']}</span>
            <h1 class="slide-title">{s['title']}</h1>
        </div>
        <div class="brand-box">
            <img src="{LOGO_B64}" alt="Logo Energy CPY" />
            <div>
                <div class="brand-text-main">ENERGY <span>CPY</span></div>
                <div class="brand-text-sub">Área Desarrollo Sostenible</div>
            </div>
        </div>
    </div>
    <div class="slide-body">
        {s['body']}
    </div>
    <div class="slide-footer">
        <div>{s['footer_left']}</div>
        <div class="page-num">{num:02d} / {total_slides:02d}</div>
    </div>
</body>
</html>"""
    temp_html = BASE_DIR / "scripts" / f"_temp_slide_{num}.html"
    out_png = SLIDES_DIR / f"Inversión_en_Plantas_Solares_en_Argentina_2026_page_{num}.png"
    temp_html.write_text(html, encoding="utf-8")
    cmd = [
        chrome,
        "--headless",
        "--disable-gpu",
        "--window-size=1920,1080",
        "--hide-scrollbars",
        f"--screenshot={out_png}",
        str(temp_html)
    ]
    subprocess.run(cmd, check=True)
    temp_html.unlink(missing_ok=True)
    print(f"Rendered {out_png.name} ({out_png.stat().st_size} bytes)")

print("All combined slides 7..14 rendered successfully!")

