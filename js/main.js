/* ==========================================================================
   Main JavaScript Logic — Energy CPY Investment Showroom 2026
   ========================================================================== */

// Official Consultant Data (Internal Emails & WhatsApp Direct)
const CONSULTANTS = {
    javier: {
        id: "javier",
        name: "Javier Ignacio Diaz",
        role_es: "Consultor Capital Introducer & Finder",
        role_en: "Capital Introducer & Finder Consultant",
        specialties_es: "Minería, Energía Renovable, Proyectos de Ingeniería y Proyectos en Inglés",
        specialties_en: "Mining, Renewable Energy, Engineering Projects & English Language Deals",
        phone: "+54 9 351 2064791",
        phoneClean: "5493512064791",
        whatsappLink: "https://wa.me/5493512064791",
        internalEmail: "areasostenible.consultorespyme@gmail.com"
    },
    daniel: {
        id: "daniel",
        name: "Daniel Gonzalez",
        role_es: "Consultor Capital Introducer & Finder",
        role_en: "Capital Introducer & Finder Consultant",
        specialties_es: "Hotelería, Pesca, Petróleo, TRUST Real Estate, REIT, Renta Corporativa y Asesoramiento Financiero",
        specialties_en: "Hospitality, Fisheries, Oil & Gas, TRUST Real Estate, REIT, Corporate Yield & Financial Advisory",
        phone: "+54 9 2974 23-3028",
        phoneClean: "5492974233028",
        whatsappLink: "https://wa.me/5492974233028",
        internalEmail: "gonzalezmarcelo2105ypf@gmail.com"
    }
};

// Authorized Consultant Emails for Admin Access
const AUTHORIZED_ADMIN_EMAILS = [
    "areasostenible.consultorespyme@gmail.com",
    "gonzalezmarcelo2105ypf@gmail.com",
    "inventario.energycpy@gmail.com"
];

// Project Master Database
const PROJECTS_DATA = {
    "solar": {
        id: "solar",
        category: "energia",
        assignedAgent: "javier",
        amountUSD: 50.0, // Millions USD
        amountDisplay: "USD 50M (50% Pre-Financiado)",
        defaultStatus: "activo",
        pdfPath: "assets/docs/plantas_solares_2026.pdf",
        totalSlides: 13,
        slidePrefix: "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_",
        coverImage: "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_1.png",
        es: {
            categoryTag: "Energía Solar Fotovoltaica",
            title: "Plantas Solares Llave en Mano con Financiamiento Asegurado",
            location: "Cuyo y NOA, Argentina",
            statusLabel: "Co-Financiado 50% CAPEX",
            description: "Desarrollo estratégico de parques fotovoltaicos llave en mano con el 50% del CAPEX pre-financiado por fabricante líder global de paneles e inversores. Contratos PPA a 15-20 años indexados al USD en mercado MATER / CAMMESA.",
            highlights: [
                "50% del CAPEX pre-financiado directamente por el fabricante global de paneles e inversores.",
                "Contratos PPA indexados al Dólar estadounidense a 15-20 años de plazo.",
                "Recurso solar excepcional en Cuyo y NOA con factor de capacidad líder mundial.",
                "Contrato EPC llave en mano con cronogramas y costos cerrados y garantizados.",
                "Garantía de rendimiento y mantenimiento preventivo bajo contratos de O&M."
            ],
            metrics: [
                { label: "Co-Financiamiento", val: "50% CAPEX", color: "text-gold" },
                { label: "Plazo PPA", val: "15 - 20 Años USD", color: "text-cyan" },
                { label: "Mercado", val: "MATER / CAMMESA", color: "text-green" },
                { label: "Modalidad", val: "EPC Llave en Mano", color: "text-gold" }
            ]
        },
        en: {
            categoryTag: "Photovoltaic Solar Energy",
            title: "Turnkey Solar Plants with Secured Co-Financing",
            location: "Cuyo & NOA Regions, Argentina",
            statusLabel: "50% Co-Financed CAPEX",
            description: "Strategic turnkey solar park developments with 50% of CAPEX pre-financed by a world-leading PV manufacturer. Long-term PPA contracts (15 to 20 years) indexed to USD under the MATER / CAMMESA framework.",
            highlights: [
                "50% of CAPEX pre-financed directly by top-tier global module/inverter manufacturers.",
                "USD-indexed PPA contracts with 15 to 20 years duration.",
                "Exceptional solar irradiance in Cuyo & NOA with world-class capacity factors.",
                "Turnkey EPC agreement with guaranteed fixed cost and delivery schedules.",
                "Guaranteed performance metrics and preventative O&M contracts."
            ],
            metrics: [
                { label: "Co-Financing", val: "50% CAPEX", color: "text-gold" },
                { label: "PPA Term", val: "15 - 20 Yrs USD", color: "text-cyan" },
                { label: "Target Market", val: "MATER / CAMMESA", color: "text-green" },
                { label: "Delivery", val: "Turnkey EPC", color: "text-gold" }
            ]
        }
    },

    "pesca-gran-escala": {
        id: "pesca-gran-escala",
        category: "pesca",
        assignedAgent: "daniel",
        amountUSD: 260.0,
        amountDisplay: "USD 260M CAPEX",
        defaultStatus: "activo",
        pdfPath: "assets/docs/pesca_industrial_2026.pdf",
        totalSlides: 13,
        slidePrefix: "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_",
        coverImage: "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_2.png",
        es: {
            categoryTag: "Pesca Industrial Gran Escala",
            title: "Proyecto 6.6 — Pesca Industrial de Gran Escala en Patagonia",
            location: "Zona Económica Exclusiva (ZEE) Argentina",
            statusLabel: "USD 260M CAPEX",
            description: "Modelo consolidado de alta rentabilidad para captura y exportación de especies marinas premium (Merluza Hubbsi y Langostino Rojo) con flota activa de 16 buques de gran calado y planta de congelado propia.",
            highlights: [
                "USD 260 Millones en CAPEX requerido para operación de gran escala.",
                "USD 600 Millones/año en ingresos brutos proyectados por capturas de alto valor.",
                "Flota activa de 16 buques altamente equipados para aguas patagónicas.",
                "Planta terrestre propia de procesado, empaque y congelado rápido.",
                "Track record comprobado con más de 25 años de operabilidad exitosa."
            ],
            metrics: [
                { label: "CAPEX Requerido", val: "USD 260M", color: "text-gold" },
                { label: "Ganancia Anual", val: "USD 600M/año", color: "text-green" },
                { label: "Flota Activa", val: "16 Buques", color: "text-cyan" },
                { label: "Track Record", val: "+25 Años", color: "text-gold" }
            ]
        },
        en: {
            categoryTag: "Large-Scale Industrial Fisheries",
            title: "Project 6.6 — Large-Scale Industrial Fishing in Patagonia",
            location: "Exclusive Economic Zone (EEZ), Argentina",
            statusLabel: "USD 260M CAPEX",
            description: "Robust high-yield business model for catching and exporting premium marine species (Hubbsi Hake and Red Shrimp) featuring an active fleet of 16 deep-sea vessels and dedicated land-based processing facilities.",
            highlights: [
                "USD 260 Million in required CAPEX for full-scale commercial operations.",
                "USD 600 Million/year in projected annual gross revenue from high-value catch.",
                "Active operational fleet of 16 specialized deep-sea fishing vessels.",
                "Onshore processing, flash-freezing and cold-storage infrastructure.",
                "Proven operational track record spanning more than 25 years."
            ],
            metrics: [
                { label: "Required CAPEX", val: "USD 260M", color: "text-gold" },
                { label: "Annual Revenue", val: "USD 600M/yr", color: "text-green" },
                { label: "Active Fleet", val: "16 Vessels", color: "text-cyan" },
                { label: "Track Record", val: "+25 Years", color: "text-gold" }
            ]
        }
    },

    "pesca-integrado": {
        id: "pesca-integrado",
        category: "pesca",
        assignedAgent: "daniel",
        amountUSD: 5.5,
        amountDisplay: "USD 5.5M CAPEX",
        defaultStatus: "activo",
        pdfPath: "assets/docs/pesca_industrial_2026.pdf",
        totalSlides: 13,
        slidePrefix: "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_",
        coverImage: "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_4.png",
        es: {
            categoryTag: "Cadena de Valor Pesquera",
            title: "Proyecto 6.7 — Ecosistema Pesquero Integrado Patagonia",
            location: "Puerto Madryn / Puerto Deseado / Mar del Plata",
            statusLabel: "USD 5.5M CAPEX",
            description: "Estructura ágil de inversión en la cadena de valor pesquera con rápida recuperación de capital (ROI). Integra flota extractiva, procesado rápido en plantas terrestres patagónicas, frío exportable y certificación global MSC Certified.",
            highlights: [
                "CAPEX total optimizado de USD 5.5M con retorno anual proyectado de USD 4.5M.",
                "Asignación: Flota (USD 1.8M), Planta (USD 1.6M), Frío (USD 1.7M), Certificación (USD 0.4M).",
                "Operaciones reguladas bajo el estándar global de sustentabilidad MSC Certified.",
                "Demanda inelástica y exportación 100% dolarizada hacia Asia, Europa y Norteamérica.",
                "Acceso directo a infraestructura portuaria en Chubut, Santa Cruz y Buenos Aires."
            ],
            metrics: [
                { label: "CAPEX Total", val: "USD 5.5M", color: "text-gold" },
                { label: "Retorno Anual", val: "USD 4.5M/año", color: "text-green" },
                { label: "Certificación", val: "MSC Certified", color: "text-cyan" },
                { label: "Mercados", val: "Asia & Europa USD", color: "text-gold" }
            ]
        },
        en: {
            categoryTag: "Fisheries Value Chain",
            title: "Project 6.7 — Integrated Patagonian Fisheries Ecosystem",
            location: "Puerto Madryn / Puerto Deseado / Mar del Plata",
            statusLabel: "USD 5.5M CAPEX",
            description: "Agile investment vehicle across the fisheries value chain with rapid capital payback (ROI). Combines harvesting vessels, rapid onshore processing, certified cold chain and MSC global sustainability compliance.",
            highlights: [
                "Optimized total CAPEX of USD 5.5M yielding an estimated USD 4.5M annual return.",
                "Allocation: Fleet (USD 1.8M), Plant (USD 1.6M), Cold Storage (USD 1.7M), Certification (USD 0.4M).",
                "Certified fisheries operating under the rigorous MSC Global Standard.",
                "Inelastic demand with 100% USD-denominated export contracts to Asia & Europe.",
                "Direct berthing access in Chubut, Santa Cruz, and Buenos Aires ports."
            ],
            metrics: [
                { label: "Total CAPEX", val: "USD 5.5M", color: "text-gold" },
                { label: "Annual Return", val: "USD 4.5M/yr", color: "text-green" },
                { label: "Standard", val: "MSC Certified", color: "text-cyan" },
                { label: "Export Markets", val: "Asia & Europe USD", color: "text-gold" }
            ]
        }
    },

    "pozo-salta": {
        id: "pozo-salta",
        category: "petroleo",
        assignedAgent: "daniel",
        amountUSD: 15.0,
        amountDisplay: "USD 15M CAPEX",
        defaultStatus: "activo",
        pdfPath: "assets/docs/pozo_salta_2026.pdf",
        totalSlides: 25,
        slidePrefix: "assets/slides/Proyecto_Pozo_Salta___Argentina__2026_page_",
        coverImage: "assets/slides/Proyecto_Pozo_Salta___Argentina__2026_page_1.png",
        es: {
            categoryTag: "Servicios Petroleros & Infraestructura",
            title: "Proyecto Pozo Salta — Infraestructura & Secado de Cuttings",
            location: "Provincia de Salta, Cuenca NOA",
            statusLabel: "Infraestructura Crítica",
            description: "Proyecto técnico especializado en servicios petroleros y gasíferos para la Cuenca Noroeste. Incluye tratamiento ambiental avanzado, secado de cuttings, servicios de locación seca e industrialización de lodos de perforación.",
            highlights: [
                "Dossier técnico exhaustivo de 25 diapositivas con ingeniería de procesos y diagramas.",
                "Operatividad estratégica en yacimientos hidrocarburíferos de Salta y Jujuy.",
                "Tecnología de última generación para secado de cuttings y mitigación ambiental.",
                "Flujo de ingresos en USD garantizado por contratos de servicios a operadoras principales.",
                "Plataforma modular con alta capacidad de expansión en campos maduros y no convencionales."
            ],
            metrics: [
                { label: "Ubicación", val: "Salta (Cuenca NOA)", color: "text-cyan" },
                { label: "Dossier Técnico", val: "25 Slides", color: "text-gold" },
                { label: "Servicios", val: "Secado de Cuttings", color: "text-green" },
                { label: "Contratos", val: "Oil & Gas USD", color: "text-gold" }
            ]
        },
        en: {
            categoryTag: "Oil & Gas Services & Infrastructure",
            title: "Pozo Salta Project — Infrastructure & Cuttings Drying Facilities",
            location: "Salta Province, NW Basin, Argentina",
            statusLabel: "Critical Infrastructure",
            description: "Specialized industrial services and environmental engineering facility for the Northwest Hydrocarbon Basin. Features drill cuttings thermal drying, closed-loop zero-discharge mud recovery and technical oilfield logistics.",
            highlights: [
                "Comprehensive 25-slide technical engineering and environmental dossier.",
                "Strategic operating location in key oil & gas fields of Salta and Jujuy.",
                "Cutting-edge cuttings drying technology ensuring strict environmental compliance.",
                "USD revenue stream secured via long-term service agreements with Tier-1 operators.",
                "Modular infrastructure designed for rapid scalability."
            ],
            metrics: [
                { label: "Location", val: "Salta (NW Basin)", color: "text-cyan" },
                { label: "Technical Dossier", val: "25 Slides", color: "text-gold" },
                { label: "Core Service", val: "Cuttings Drying", color: "text-green" },
                { label: "Contracts", val: "Oil & Gas USD", color: "text-gold" }
            ]
        }
    },

    "reit-strategy": {
        id: "reit-strategy",
        category: "reit",
        assignedAgent: "daniel",
        amountUSD: 30.0,
        amountDisplay: "USD 30M Fondo",
        defaultStatus: "activo",
        pdfPath: "assets/docs/reit_strategy_2026.pdf",
        totalSlides: 11,
        slidePrefix: "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        coverImage: "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_1.png",
        es: {
            categoryTag: "Fondo Inmobiliario & TRUST REIT",
            title: "ENERGY CPY Argentina REIT Investment Strategy 2026",
            location: "Argentina 2026 (Nacional)",
            statusLabel: "Renta Corporativa USD",
            description: "Vehículo REIT (Real Estate Investment Trust) y fideicomisos financieros para la adquisición y explotación de activos corporativos, parques industriales y centros logísticos vinculados al sector energético y minero.",
            highlights: [
                "Portafolio diversificado de renta corporativa dolarizada con contratos triple net (NNN).",
                "Estructuración de fideicomisos financieros respaldados 100% por activos inmobiliarios tangibles.",
                "Rendimiento de doble dígito en USD con distribución semestral de utilidades.",
                "Gobernanza corporativa transparente con auditoría externa internacional.",
                "Mitigación activa de riesgo cambiario e inflacionario mediante contratos a largo plazo."
            ],
            metrics: [
                { label: "Vehículo", val: "REIT Fund 2026", color: "text-gold" },
                { label: "Presentación", val: "11 Diapositivas", color: "text-cyan" },
                { label: "Moneda", val: "USD Dolarizado", color: "text-green" },
                { label: "Activos", val: "Real Estate & Energy", color: "text-gold" }
            ]
        },
        en: {
            categoryTag: "Real Estate Trust & REIT Fund",
            title: "ENERGY CPY Argentina REIT Investment Strategy 2026",
            location: "Argentina 2026 (National)",
            statusLabel: "USD Corporate Yield",
            description: "Real Estate Investment Trust (REIT) and financial trust vehicle for the acquisition, development and leaseback of prime logistics hubs, industrial parks and corporate real estate tied to energy and mining growth.",
            highlights: [
                "Diversified portfolio of USD corporate leases under long-term Triple Net (NNN) contracts.",
                "Financial trust structures backed 100% by physical, unencumbered real estate assets.",
                "Double-digit USD yields with predictable bi-annual dividend distributions.",
                "Transparent governance model with Tier-1 independent auditing.",
                "Active inflation and currency risk mitigation via sovereign/corporate USD agreements."
            ],
            metrics: [
                { label: "Vehicle", val: "REIT Fund 2026", color: "text-gold" },
                { label: "Slide Deck", val: "11 Slides", color: "text-cyan" },
                { label: "Currency", val: "USD Denominated", color: "text-green" },
                { label: "Asset Class", val: "Real Estate & Energy", color: "text-gold" }
            ]
        }
    }
};

// UI Translations Dictionary
const TRANSLATIONS = {
    es: {
        brand_sub: "INVESTMENT SHOWROOM",
        nav_home: "Inicio",
        nav_projects: "Proyectos",
        nav_metrics: "Indicadores",
        nav_guarantees: "Garantías",
        nav_contact: "Contacto Oficial",
        nav_admin: "Gestión",

        hero_badge: "🏛️ Plataforma Oficial de Inversiones — Argentina 2026",
        hero_title_1: "Oportunidades Estratégicas de",
        hero_title_2: "Alto Rendimiento",
        hero_desc: "Estructuración de capital y proyectos llave en mano en <strong>Energía Solar Fotovoltaica</strong>, <strong>Pesca Industrial en Patagonia</strong>, <strong>Servicios Energéticos en Salta</strong> y <strong>Estrategias REIT Dolarizadas</strong>.",
        hero_btn_explore: "Explorar Oportunidades",
        hero_btn_contact: "Contactar a Dirección",
        strip_consultants_label: "Consultores de Capital",
        strip_wsp_label: "WhatsApp Directo Consultores",

        stat_capex_badge: "+265M USD",
        stat_capex_lbl: "CAPEX Total en Portafolio",
        stat_capex_sub: "Activos físicos estructurados en Argentina",
        stat_solar_badge: "Co-Financiado",
        stat_solar_lbl: "CAPEX Solar Pre-Financiado",
        stat_solar_sub: "Respaldado por fabricante global de tecnología",
        stat_pesca_badge: "600M USD/año",
        stat_pesca_lbl: "Track Record en Pesca Industrial",
        stat_pesca_sub: "Flota activa de 16 buques en ZEE Patagonia",
        stat_mater_badge: "MATER / PPA",
        stat_mater_lbl: "Plazo PPA Indexado en Dólares",
        stat_mater_sub: "Contratos con industrias y distribuidores",

        catalog_subtitle: "CATÁLOGO EJECUTIVO",
        catalog_title: "Portafolio de Proyectos de Inversión",
        catalog_desc: "Utilice los filtros avanzados por monto, categoría y estado para explorar las oportunidades disponibles.",

        filter_search_placeholder: "Buscar por palabra clave (ej. solar, pesca, REIT, salta)...",
        filter_category_all: "Todos los Sectores",
        filter_cat_energia: "Energía Solar & Renovable",
        filter_cat_pesca: "Pesca Industrial",
        filter_cat_petroleo: "Petróleo, Gas & Infraestructura",
        filter_cat_reit: "Fondo Inmobiliario REIT",
        filter_cat_mineria: "Minería & Litio",
        filter_cat_hoteleria: "Hotelería & Renta",

        filter_amount_title: "Monto del Proyecto (USD):",
        filter_amount_min: "Desde USD (M)",
        filter_amount_max: "Hasta USD (M)",
        filter_preset_all: "Todos los Montos",
        filter_preset_under10: "< USD 10M",
        filter_preset_10to50: "USD 10M - 50M",
        filter_preset_50to200: "USD 50M - 200M",
        filter_preset_over200: "> USD 200M",

        filter_status_all: "Todos los Estados",
        filter_status_activo: "Activo (Azul)",
        filter_status_tramite: "En trámite (Amarillo)",
        filter_status_vendido: "Vendido (Verde)",

        results_showing: "Mostrando",
        results_of: "de",
        results_projects: "proyectos de inversión",

        card_btn_details: "Ver Presentación & Ficha",
        card_status_activo: "Activo",
        card_status_tramite: "En trámite",
        card_status_vendido: "Vendido",

        ecosystem_subtitle: "SEGURIDAD Y MITIGACIÓN DE RIESGOS",
        ecosystem_title: "Ecosistema Integrado & Garantías de Inversión",
        ecosystem_desc: "Estructuración sólida con mitigación activa de riesgos técnicos, financieros y regulatorios.",
        eco_1_title: "Alianzas con Fabricantes Líderes",
        eco_1_desc: "En proyectos fotovoltaicos, el 50% del CAPEX es pre-financiado directamente por fabricantes mundiales de primer nivel, reduciendo la exposición inicial de capital.",
        eco_2_title: "Contratos PPA & Renta Dolarizada",
        eco_2_desc: "Acuerdos de compra de energía a largo plazo (15 a 20 años) indexados al USD, garantizando predictibilidad total de flujos de caja y rentabilidad sostenida.",
        eco_3_title: "Certificación Global MSC & ESG",
        eco_3_desc: "En el sector pesquero de la Patagonia, las pesquerías operan bajo normas internacionales estrictas MSC Certified, asegurando acceso prioritario a mercados de exportación.",
        eco_4_title: "Construcción Llave en Mano (EPC)",
        eco_4_desc: "Ingeniería de detalle, montaje y puesta en marcha ejecutados bajo contratos cerrados de tarifa fija para neutralizar desvíos presupuestarios.",

        contact_tag: "CANAL EJECUTIVO DIRECTO",
        contact_title: "Consultas Directas con Consultores de Capital",
        contact_desc: "Comuníquese directamente con nuestros consultores estratégicos vía WhatsApp para solicitar memorandos de entendimiento (MoU), informes de debida diligencia o acordar estructuras conjuntas.",
        wsp_btn_chat_javier: "Chat en WhatsApp con Javier Diaz",
        wsp_btn_chat_daniel: "Chat en WhatsApp con Daniel Gonzalez",

        form_title: "Solicitar Dossier / Coordinar Reunión",
        form_desc: "Complete los campos y el sistema derivará automáticamente su solicitud al consultor especialista en la temática.",
        form_name: "Nombre Completo *",
        form_name_ph: "Ej. Ing. Martín Rodríguez",
        form_phone: "Teléfono / WhatsApp *",
        form_phone_ph: "+54 9 11 ... o código internacional",
        form_project_lbl: "Proyecto o Temática de Interés *",
        form_project_ph: "Seleccione una opción...",
        form_message_lbl: "Mensaje o Requerimiento Específico",
        form_message_ph: "Indique ticket estimado de inversión, plazo previsto o detalle de consulta...",
        form_btn_submit: "Enviar Solicitud a Consultores",
        
        assigned_specialist_badge: "Consultor Asignado:",
        specialist_javier_note: "Especialista en Minería, Energía Renovable, Proyectos de Ingeniería y Consultas en Inglés.",
        specialist_daniel_note: "Especialista en Hotelería, Pesca, Petróleo, TRUST Real Estate, REIT, Renta Corporativa y Asesoramiento Financiero.",

        success_title: "¡Consulta Enviada con Éxito!",
        success_body: "Muchas gracias por contactarse. Su solicitud ha sido procesada y asignada al consultor especialista de Energy CPY a cargo de la temática seleccionada. Nos pondremos en contacto a la brevedad.",
        success_btn_wsp: "Continuar Consulta Directa por WhatsApp con",
        success_btn_another: "Enviar Otra Consulta",

        footer_rights: "© 2026 Energy CPY — Todos los derechos reservados.",
        footer_domain: "Desplegado bajo el dominio oficial inventarioenergycpy.github.io",

        modal_tech_sheet: "Ficha Técnica del Proyecto",
        modal_highlights: "Puntos Clave de Inversión",
        modal_btn_pdf: "Descargar Presentación Completa (PDF)",
        modal_wsp_javier: "WhatsApp Javier Diaz",
        modal_wsp_daniel: "WhatsApp Daniel Gonzalez"
    },

    en: {
        brand_sub: "INVESTMENT SHOWROOM",
        nav_home: "Home",
        nav_projects: "Projects",
        nav_metrics: "Metrics",
        nav_guarantees: "Guarantees",
        nav_contact: "Official Contact",
        nav_admin: "Management",

        hero_badge: "🏛️ Official Investment Platform — Argentina 2026",
        hero_title_1: "Strategic High-Yield",
        hero_title_2: "Opportunities",
        hero_desc: "Capital structuring and turnkey project delivery in <strong>Photovoltaic Solar Power</strong>, <strong>Industrial Fisheries in Patagonia</strong>, <strong>Oilfield Services in Salta</strong> and <strong>USD REIT Strategies</strong>.",
        hero_btn_explore: "Explore Opportunities",
        hero_btn_contact: "Contact Management",
        strip_consultants_label: "Capital Consultants",
        strip_wsp_label: "Direct WhatsApp Line",

        stat_capex_badge: "+265M USD",
        stat_capex_lbl: "Total Portfolio CAPEX",
        stat_capex_sub: "Tangible physical assets structured in Argentina",
        stat_solar_badge: "Co-Financed",
        stat_solar_lbl: "Pre-Financed Solar CAPEX",
        stat_solar_sub: "Backed by tier-1 global PV manufacturers",
        stat_pesca_badge: "600M USD/yr",
        stat_pesca_lbl: "Industrial Fishing Track Record",
        stat_pesca_sub: "Active fleet of 16 vessels in Patagonian EEZ",
        stat_mater_badge: "MATER / PPA",
        stat_mater_lbl: "USD-Indexed PPA Contract Term",
        stat_mater_sub: "Agreements with industries and utilities",

        catalog_subtitle: "EXECUTIVE PORTFOLIO",
        catalog_title: "Investment Project Catalog",
        catalog_desc: "Use advanced filters by ticket size, category and project status to explore available opportunities.",

        filter_search_placeholder: "Search by keyword (e.g., solar, fishing, REIT, Salta)...",
        filter_category_all: "All Sectors",
        filter_cat_energia: "Solar & Renewable Energy",
        filter_cat_pesca: "Industrial Fisheries",
        filter_cat_petroleo: "Oil, Gas & Infrastructure",
        filter_cat_reit: "REIT Real Estate Fund",
        filter_cat_mineria: "Mining & Lithium",
        filter_cat_hoteleria: "Hospitality & Yield",

        filter_amount_title: "Project Ticket Size (USD):",
        filter_amount_min: "From USD (M)",
        filter_amount_max: "To USD (M)",
        filter_preset_all: "All Amounts",
        filter_preset_under10: "< USD 10M",
        filter_preset_10to50: "USD 10M - 50M",
        filter_preset_50to200: "USD 50M - 200M",
        filter_preset_over200: "> USD 200M",

        filter_status_all: "All Statuses",
        filter_status_activo: "Active (Blue)",
        filter_status_tramite: "In Progress (Yellow)",
        filter_status_vendido: "Sold Out (Green)",

        results_showing: "Showing",
        results_of: "of",
        results_projects: "investment projects",

        card_btn_details: "View Deck & Technical Sheet",
        card_status_activo: "Active",
        card_status_tramite: "In Progress",
        card_status_vendido: "Sold Out",

        ecosystem_subtitle: "SECURITY & RISK MITIGATION",
        ecosystem_title: "Integrated Ecosystem & Investment Guarantees",
        ecosystem_desc: "Robust financial and technical structuring designed for active risk mitigation.",
        eco_1_title: "Tier-1 Manufacturer Partnerships",
        eco_1_desc: "In photovoltaic projects, 50% of CAPEX is directly pre-financed by leading global manufacturers, reducing upfront investor exposure.",
        eco_2_title: "USD-Indexed Long-Term PPAs",
        eco_2_desc: "Long-term power purchase agreements (15 to 20 years) indexed to USD, ensuring predictable cash flows and sustained yields.",
        eco_3_title: "Global MSC & ESG Certification",
        eco_3_desc: "Patagonian marine operations comply with rigorous MSC Certified standards, securing priority access to key export markets.",
        eco_4_title: "Turnkey EPC Construction",
        eco_4_desc: "Detailed engineering, procurement and commissioning carried out under fixed-price contracts to neutralize cost overruns.",

        contact_tag: "DIRECT EXECUTIVE CHANNEL",
        contact_title: "Direct Inquiries with Capital Consultants",
        contact_desc: "Connect directly with our strategic consultants via WhatsApp to request Memorandums of Understanding (MoU), due diligence materials or discuss joint venture structures.",
        wsp_btn_chat_javier: "Chat on WhatsApp with Javier Diaz",
        wsp_btn_chat_daniel: "Chat on WhatsApp with Daniel Gonzalez",

        form_title: "Request Dossier / Schedule Meeting",
        form_desc: "Complete the form and our system will automatically route your request to the specialist consultant for your sector.",
        form_name: "Full Name *",
        form_name_ph: "e.g., Eng. Martin Rodriguez",
        form_phone: "Phone / WhatsApp *",
        form_phone_ph: "+1 ... or international country code",
        form_project_lbl: "Project or Area of Interest *",
        form_project_ph: "Select an option...",
        form_message_lbl: "Message or Specific Requirement",
        form_message_ph: "Indicate estimated investment ticket, timeline or inquiry details...",
        form_btn_submit: "Submit Request to Consultants",

        assigned_specialist_badge: "Assigned Consultant:",
        specialist_javier_note: "Specialist in Mining, Renewable Energy, Engineering Projects & English-language inquiries.",
        specialist_daniel_note: "Specialist in Hospitality, Fisheries, Oil & Gas, TRUST Real Estate, REIT, Corporate Yield & Financial Advisory.",

        success_title: "Inquiry Successfully Submitted!",
        success_body: "Thank you for reaching out. Your inquiry has been processed and routed to the dedicated Energy CPY consultant for your selected sector. We will be in touch promptly.",
        success_btn_wsp: "Continue Direct Chat on WhatsApp with",
        success_btn_another: "Send Another Inquiry",

        footer_rights: "© 2026 Energy CPY — All rights reserved.",
        footer_domain: "Deployed under the official domain inventarioenergycpy.github.io",

        modal_tech_sheet: "Project Technical Sheet",
        modal_highlights: "Key Investment Highlights",
        modal_btn_pdf: "Download Full Deck (PDF)",
        modal_wsp_javier: "WhatsApp Javier Diaz",
        modal_wsp_daniel: "WhatsApp Daniel Gonzalez"
    }
};

// Global App State
let currentLang = localStorage.getItem("energycpy_lang") || "es";
let currentProjectId = null;
let currentSlideIndex = 1;
let totalSlidesInCurrentProject = 1;

// Project Statuses State (persisted in localStorage)
let projectStatuses = loadProjectStatuses();

function loadProjectStatuses() {
    try {
        const saved = localStorage.getItem("energycpy_project_statuses");
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error("Error reading project statuses from localStorage", e);
    }
    // Default initial statuses
    const defaults = {};
    Object.keys(PROJECTS_DATA).forEach(id => {
        defaults[id] = PROJECTS_DATA[id].defaultStatus || "activo";
    });
    return defaults;
}

function saveProjectStatusesToStorage() {
    try {
        localStorage.setItem("energycpy_project_statuses", JSON.stringify(projectStatuses));
    } catch (e) {
        console.error("Error saving project statuses to localStorage", e);
    }
}

// Initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    applyLanguage(currentLang);
    renderProjectCards();
    initFilters();
    initAnimatedCounters();
    initMobileMenu();
    initKeyboardNavigation();
    initContactFormRouting();
});

/* ==========================================================================
   1. Internationalization (i18n) Engine
   ========================================================================== */
function initLanguageSwitcher() {
    const esBtn = document.getElementById("langBtnEs");
    const enBtn = document.getElementById("langBtnEn");

    if (esBtn && enBtn) {
        esBtn.addEventListener("click", () => setLanguage("es"));
        enBtn.addEventListener("click", () => setLanguage("en"));
    }
}

function setLanguage(lang) {
    if (lang !== "es" && lang !== "en") return;
    currentLang = lang;
    localStorage.setItem("energycpy_lang", lang);
    applyLanguage(lang);
    renderProjectCards();
    applyFilters();
    updateFormSpecialistBadge();
}

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

    // Update active class on language buttons
    const esBtn = document.getElementById("langBtnEs");
    const enBtn = document.getElementById("langBtnEn");
    if (esBtn && enBtn) {
        if (lang === "es") {
            esBtn.classList.add("active");
            enBtn.classList.remove("active");
        } else {
            enBtn.classList.add("active");
            esBtn.classList.remove("active");
        }
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

/* ==========================================================================
   2. Project Cards Dynamic Rendering & Status Styling
   ========================================================================== */
function renderProjectCards() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    Object.keys(PROJECTS_DATA).forEach(projectId => {
        const p = PROJECTS_DATA[projectId];
        const status = projectStatuses[projectId] || p.defaultStatus || "activo";
        const langData = p[currentLang] || p.es;
        const dict = TRANSLATIONS[currentLang];

        let statusClass = "status-badge-activo";
        let statusText = dict.card_status_activo;
        if (status === "tramite") {
            statusClass = "status-badge-tramite";
            statusText = dict.card_status_tramite;
        } else if (status === "vendido") {
            statusClass = "status-badge-vendido";
            statusText = dict.card_status_vendido;
        }

        const card = document.createElement("article");
        card.className = "project-card";
        card.setAttribute("data-id", p.id);
        card.setAttribute("data-category", p.category);
        card.setAttribute("data-amount", p.amountUSD);
        card.setAttribute("data-status", status);

        card.innerHTML = `
            <div class="card-image-wrapper">
                <span class="card-tag tag-${p.category}">${langData.categoryTag}</span>
                <span class="card-status-badge ${statusClass}">
                    <span class="status-indicator-dot"></span> ${statusText}
                </span>
                <img src="${p.coverImage}" alt="${langData.title}" class="card-img" loading="lazy">
                <div class="card-overlay" onclick="openProjectModal('${p.id}')">
                    <span class="overlay-btn"><i class="fa-solid fa-images"></i> ${p.totalSlides} Slides</span>
                </div>
            </div>
            <div class="card-body">
                <div class="card-header-info">
                    <span class="card-location"><i class="fa-solid fa-location-dot"></i> ${langData.location}</span>
                    <span class="card-ticket-amount text-gold"><strong>${p.amountDisplay}</strong></span>
                </div>
                <h3 class="card-title">${langData.title}</h3>
                <p class="card-desc">${langData.description}</p>
                
                <div class="metrics-grid">
                    ${langData.metrics.slice(0, 3).map(m => `
                        <div class="metric-item">
                            <span class="metric-val ${m.color}">${m.val}</span>
                            <span class="metric-lbl">${m.label}</span>
                        </div>
                    `).join("")}
                </div>

                <div class="card-footer-actions">
                    <button class="btn btn-card" onclick="openProjectModal('${p.id}')">
                        <i class="fa-solid fa-expand"></i> ${dict.card_btn_details}
                    </button>
                    <a href="${p.pdfPath}" download class="btn btn-icon-download" title="Descargar PDF">
                        <i class="fa-solid fa-download"></i>
                    </a>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    updateResultsCount();
}

/* ==========================================================================
   3. Advanced Multicriteria Search & Filter Engine (Desde - Hasta)
   ========================================================================== */
function initFilters() {
    const searchInput = document.getElementById("filterSearch");
    const categorySelect = document.getElementById("filterCategory");
    const minInput = document.getElementById("filterMinAmount");
    const maxInput = document.getElementById("filterMaxAmount");
    const statusSelect = document.getElementById("filterStatus");

    if (searchInput) searchInput.addEventListener("input", applyFilters);
    if (categorySelect) categorySelect.addEventListener("change", applyFilters);
    if (minInput) minInput.addEventListener("input", applyFilters);
    if (maxInput) maxInput.addEventListener("input", applyFilters);
    if (statusSelect) statusSelect.addEventListener("change", applyFilters);

    // Preset buttons
    document.querySelectorAll(".preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".preset-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const min = btn.getAttribute("data-min");
            const max = btn.getAttribute("data-max");

            if (minInput) minInput.value = min !== null && min !== "" ? min : "";
            if (maxInput) maxInput.value = max !== null && max !== "" ? max : "";

            applyFilters();
        });
    });
}

function applyFilters() {
    const query = (document.getElementById("filterSearch")?.value || "").toLowerCase().trim();
    const category = document.getElementById("filterCategory")?.value || "all";
    const minVal = parseFloat(document.getElementById("filterMinAmount")?.value) || 0;
    const maxVal = parseFloat(document.getElementById("filterMaxAmount")?.value) || Infinity;
    const status = document.getElementById("filterStatus")?.value || "all";

    const cards = document.querySelectorAll("#projectsGrid .project-card");
    let visibleCount = 0;

    cards.forEach(card => {
        const pId = card.getAttribute("data-id");
        const p = PROJECTS_DATA[pId];
        if (!p) return;

        const langData = p[currentLang] || p.es;
        const pCategory = card.getAttribute("data-category");
        const pAmount = parseFloat(card.getAttribute("data-amount")) || 0;
        const pStatus = card.getAttribute("data-status");

        // Text Search match
        const textContent = `${langData.title} ${langData.description} ${langData.location} ${langData.categoryTag}`.toLowerCase();
        const matchesQuery = !query || textContent.includes(query);

        // Category match
        const matchesCategory = category === "all" || pCategory === category;

        // Amount range match
        const matchesAmount = pAmount >= minVal && pAmount <= maxVal;

        // Status match
        const matchesStatus = status === "all" || pStatus === status;

        if (matchesQuery && matchesCategory && matchesAmount && matchesStatus) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    updateResultsCount(visibleCount);
}

function updateResultsCount(count) {
    const el = document.getElementById("resultsCounter");
    if (!el) return;

    const total = Object.keys(PROJECTS_DATA).length;
    const visible = count !== undefined ? count : document.querySelectorAll("#projectsGrid .project-card[style*='display: flex']").length || total;
    const dict = TRANSLATIONS[currentLang];

    el.innerHTML = `${dict.results_showing} <strong>${visible}</strong> ${dict.results_of} <strong>${total}</strong> ${dict.results_projects}`;
}

/* ==========================================================================
   4. Intelligent Consultation Routing & Silent Email Dispatch
   ========================================================================== */
function initContactFormRouting() {
    const projectSelect = document.getElementById("formProject");
    if (projectSelect) {
        projectSelect.addEventListener("change", updateFormSpecialistBadge);
    }
}

function getAssignedConsultantByTopic(topicValue) {
    // Topic classification rules:
    // Javier Diaz: Minería, Energía Renovable, Proyectos de Ingeniería, Idioma Inglés / English
    // Daniel Gonzalez: Hotelería, Pesca, Petróleo, TRUST Real Estate, REIT, Renta Corporativa, Asesoramiento Financiero
    const v = (topicValue || "").toLowerCase();

    if (v.includes("solar") || v.includes("energía") || v.includes("energia") || 
        v.includes("minería") || v.includes("mineria") || v.includes("ingeniería") || 
        v.includes("ingenieria") || v.includes("english") || v.includes("inglés") || v.includes("ingles")) {
        return CONSULTANTS.javier;
    } else {
        return CONSULTANTS.daniel;
    }
}

function updateFormSpecialistBadge() {
    const projectSelect = document.getElementById("formProject");
    const badgeContainer = document.getElementById("formSpecialistBadge");
    if (!projectSelect || !badgeContainer) return;

    const selectedValue = projectSelect.value;
    if (!selectedValue) {
        badgeContainer.style.display = "none";
        return;
    }

    const consultant = getAssignedConsultantByTopic(selectedValue);
    const dict = TRANSLATIONS[currentLang];
    const note = consultant.id === "javier" ? dict.specialist_javier_note : dict.specialist_daniel_note;

    badgeContainer.style.display = "flex";
    badgeContainer.innerHTML = `
        <div class="specialist-badge-icon">
            <i class="fa-solid fa-user-check ${consultant.id === 'javier' ? 'icon-cyan' : 'icon-gold'}"></i>
        </div>
        <div class="specialist-badge-info">
            <span class="specialist-badge-title">${dict.assigned_specialist_badge} <strong>${consultant.name}</strong></span>
            <span class="specialist-badge-desc">${note}</span>
        </div>
    `;
}

function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const phone = document.getElementById("formPhone").value.trim();
    const topic = document.getElementById("formProject").value;
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !phone || !topic) return;

    const consultant = getAssignedConsultantByTopic(topic);
    const dict = TRANSLATIONS[currentLang];

    // SILENT INTERNAL EMAIL DISPATCH (No email address shown to guest client)
    const emailSubject = encodeURIComponent(`[Consulta Showroom Energy CPY] ${name} - ${topic}`);
    const emailBody = encodeURIComponent(
        `NUEVA CONSULTA DE INVERSIÓN DESDE SHOWROOM WEB ENERGY CPY 2026\n\n` +
        `Consultor Asignado: ${consultant.name}\n` +
        `Nombre del Cliente / Inversor: ${name}\n` +
        `Teléfono / WhatsApp: ${phone}\n` +
        `Proyecto / Temática: ${topic}\n` +
        `Mensaje o Requerimiento:\n${message || '(Sin mensaje adicional)'}\n\n` +
        `Idioma de consulta: ${currentLang.toUpperCase()}\n` +
        `Fecha y Hora: ${new Date().toLocaleString()}`
    );

    // Trigger background mailto dispatch without blocking or exposing email
    const mailtoUri = `mailto:${consultant.internalEmail}?subject=${emailSubject}&body=${emailBody}`;
    const hiddenIframe = document.createElement("iframe");
    hiddenIframe.style.display = "none";
    hiddenIframe.src = mailtoUri;
    document.body.appendChild(hiddenIframe);
    setTimeout(() => hiddenIframe.remove(), 2000);

    // Prepare direct WhatsApp message URL for the assigned consultant
    const wspText = encodeURIComponent(
        `Hola ${consultant.name}, mi nombre es ${name} (Tel: ${phone}). Estoy interesado en el proyecto/temática "${topic}". Deseo coordinar una reunión o solicitar el dossier.` +
        (message ? ` Consulta: "${message}"` : "")
    );
    const wspUrl = `https://wa.me/${consultant.phoneClean}?text=${wspText}`;

    // Hide form and display executive success alert (Zero email exposure)
    document.getElementById("contactForm").style.display = "none";
    const successDiv = document.getElementById("formSuccessMessage");
    successDiv.style.display = "block";

    successDiv.innerHTML = `
        <div class="success-alert-card">
            <div class="success-icon"><i class="fa-solid fa-circle-check"></i></div>
            <h3>${dict.success_title}</h3>
            <p>${dict.success_body}</p>
            <div class="success-specialist-info">
                <span class="specialist-pill"><i class="fa-solid fa-user-tie"></i> ${consultant.name}</span>
                <span class="specialist-phone"><i class="fa-brands fa-whatsapp icon-green"></i> ${consultant.phone}</span>
            </div>
            <div class="success-actions">
                <a href="${wspUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block">
                    <i class="fa-brands fa-whatsapp"></i> ${dict.success_btn_wsp} ${consultant.name}
                </a>
                <button type="button" onclick="resetContactForm()" class="btn btn-outline-gold btn-block mt-2">
                    <i class="fa-solid fa-rotate-left"></i> ${dict.success_btn_another}
                </button>
            </div>
        </div>
    `;
}

function resetContactForm() {
    document.getElementById("contactForm").reset();
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("formSuccessMessage").style.display = "none";
    updateFormSpecialistBadge();
}

/* ==========================================================================
   5. Consultant Admin Panel & Project Status Management (Email Protected)
   ========================================================================== */
function openAdminAuthModal() {
    const modal = document.getElementById("adminAuthModal");
    if (!modal) return;

    document.getElementById("adminEmailInput").value = "";
    document.getElementById("adminAuthError").style.display = "none";
    document.getElementById("adminAuthStep").style.display = "block";
    document.getElementById("adminPanelStep").style.display = "none";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeAdminModal() {
    const modal = document.getElementById("adminAuthModal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
}

function validateAdminEmail() {
    const input = document.getElementById("adminEmailInput").value.trim().toLowerCase();
    const errorEl = document.getElementById("adminAuthError");

    if (AUTHORIZED_ADMIN_EMAILS.includes(input)) {
        errorEl.style.display = "none";
        document.getElementById("adminAuthStep").style.display = "none";
        document.getElementById("adminPanelStep").style.display = "block";
        renderAdminProjectRows();
    } else {
        errorEl.style.display = "block";
        errorEl.innerText = currentLang === "en" ? "Unauthorized consultant email." : "Correo electrónico no autorizado.";
    }
}

function renderAdminProjectRows() {
    const container = document.getElementById("adminProjectList");
    if (!container) return;

    container.innerHTML = "";

    Object.keys(PROJECTS_DATA).forEach(projectId => {
        const p = PROJECTS_DATA[projectId];
        const status = projectStatuses[projectId] || p.defaultStatus || "activo";
        const langData = p[currentLang] || p.es;

        const row = document.createElement("div");
        row.className = "admin-project-item";
        row.innerHTML = `
            <div class="admin-project-info">
                <strong>${langData.title}</strong>
                <span class="admin-project-cat">${langData.categoryTag} | ${p.amountDisplay}</span>
            </div>
            <div class="admin-status-select-wrap">
                <select id="adminStatus_${projectId}" class="admin-select" onchange="updateProjectStatusLive('${projectId}', this.value)">
                    <option value="activo" ${status === 'activo' ? 'selected' : ''}>🔵 Activo (Azul)</option>
                    <option value="tramite" ${status === 'tramite' ? 'selected' : ''}>🟡 En trámite (Amarillo)</option>
                    <option value="vendido" ${status === 'vendido' ? 'selected' : ''}>🟢 Vendido (Verde)</option>
                </select>
            </div>
        `;
        container.appendChild(row);
    });
}

function updateProjectStatusLive(projectId, newStatus) {
    projectStatuses[projectId] = newStatus;
    saveProjectStatusesToStorage();
    renderProjectCards();
    applyFilters();
}

function saveAdminChangesAndClose() {
    saveProjectStatusesToStorage();
    renderProjectCards();
    applyFilters();
    closeAdminModal();
}

/* ==========================================================================
   6. Modal & Slide Viewer Functions
   ========================================================================== */
function openProjectModal(projectId) {
    const project = PROJECTS_DATA[projectId];
    if (!project) return;

    currentProjectId = projectId;
    currentSlideIndex = 1;
    totalSlidesInCurrentProject = project.totalSlides;
    const langData = project[currentLang] || project.es;
    const dict = TRANSLATIONS[currentLang];
    const status = projectStatuses[projectId] || project.defaultStatus || "activo";

    // Set Modal Header & Text
    document.getElementById("modalTag").innerText = langData.categoryTag;
    document.getElementById("modalTitle").innerText = langData.title;
    document.getElementById("modalDesc").innerText = langData.description;

    // Set Status Badge in modal
    let statusClass = "status-badge-activo";
    let statusText = dict.card_status_activo;
    if (status === "tramite") {
        statusClass = "status-badge-tramite";
        statusText = dict.card_status_tramite;
    } else if (status === "vendido") {
        statusClass = "status-badge-vendido";
        statusText = dict.card_status_vendido;
    }
    const modalStatus = document.getElementById("modalStatusBadge");
    if (modalStatus) {
        modalStatus.className = `card-status-badge ${statusClass}`;
        modalStatus.innerHTML = `<span class="status-indicator-dot"></span> ${statusText}`;
    }

    // Set PDF & WhatsApp Links
    const pdfBtn = document.getElementById("modalPdfBtn");
    pdfBtn.href = project.pdfPath;
    pdfBtn.setAttribute("download", langData.title + ".pdf");

    const wspDiazBtn = document.getElementById("modalWspDiaz");
    const wspGonzalezBtn = document.getElementById("modalWspGonzalez");
    const wspText = encodeURIComponent(`Hola, solicito la ficha técnica e información del proyecto "${langData.title}".`);
    if (wspDiazBtn) wspDiazBtn.href = `https://wa.me/5493512064791?text=${wspText}`;
    if (wspGonzalezBtn) wspGonzalezBtn.href = `https://wa.me/5492974233028?text=${wspText}`;

    // Render Highlights
    const highlightsUl = document.getElementById("modalHighlights");
    highlightsUl.innerHTML = langData.highlights.map(h => `<li>${h}</li>`).join("");

    // Render Metrics Summary
    const metricsDiv = document.getElementById("modalMetrics");
    metricsDiv.innerHTML = langData.metrics.map(m => `
        <div class="stat-card" style="padding: 12px; text-align: center;">
            <span class="metric-val ${m.color}">${m.val}</span>
            <span class="metric-lbl" style="display: block; font-size: 0.75rem;">${m.label}</span>
        </div>
    `).join("");

    // Render Slide Image, Counter & Thumbnails
    updateSlideDisplay();
    renderThumbnails();

    // Show Modal
    const modal = document.getElementById("projectModal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function updateSlideDisplay() {
    const project = PROJECTS_DATA[currentProjectId];
    if (!project) return;

    const img = document.getElementById("modalSlideImg");
    img.src = `${project.slidePrefix}${currentSlideIndex}.png`;

    const counter = document.getElementById("slideCounter");
    const dict = TRANSLATIONS[currentLang];
    counter.innerText = currentLang === "en" 
        ? `Slide ${currentSlideIndex} of ${totalSlidesInCurrentProject}` 
        : `Diapositiva ${currentSlideIndex} de ${totalSlidesInCurrentProject}`;

    // Highlight active thumbnail
    const thumbs = document.querySelectorAll("#modalThumbnails .slide-thumb");
    thumbs.forEach((t, idx) => {
        if (idx + 1 === currentSlideIndex) {
            t.classList.add("active");
            t.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        } else {
            t.classList.remove("active");
        }
    });
}

function renderThumbnails() {
    const project = PROJECTS_DATA[currentProjectId];
    const container = document.getElementById("modalThumbnails");
    container.innerHTML = "";

    for (let i = 1; i <= project.totalSlides; i++) {
        const thumb = document.createElement("img");
        thumb.src = `${project.slidePrefix}${i}.png`;
        thumb.alt = `Slide ${i}`;
        thumb.className = `slide-thumb ${i === currentSlideIndex ? 'active' : ''}`;
        thumb.onclick = () => {
            currentSlideIndex = i;
            updateSlideDisplay();
        };
        container.appendChild(thumb);
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 1) {
        currentSlideIndex = totalSlidesInCurrentProject;
    } else if (currentSlideIndex > totalSlidesInCurrentProject) {
        currentSlideIndex = 1;
    }
    updateSlideDisplay();
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function closeModalOnBackdrop(event) {
    if (event.target.classList.contains("modal-backdrop")) {
        closeProjectModal();
        closeAdminModal();
    }
}

function initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
        const modal = document.getElementById("projectModal");
        const adminModal = document.getElementById("adminAuthModal");

        if (modal && modal.classList.contains("active")) {
            if (e.key === "ArrowLeft") changeSlide(-1);
            else if (e.key === "ArrowRight") changeSlide(1);
            else if (e.key === "Escape") closeProjectModal();
        }

        if (adminModal && adminModal.classList.contains("active") && e.key === "Escape") {
            closeAdminModal();
        }
    });
}

/* ==========================================================================
   7. Animated Number Counters & Mobile Menu
   ========================================================================== */
function initAnimatedCounters() {
    const statCards = document.querySelectorAll(".stat-number");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseFloat(entry.target.getAttribute("data-target"));
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(card => observer.observe(card));
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const val = (progress * (end - start) + start).toFixed(end % 1 === 0 ? 0 : 1);
        
        if (end === 265.5) obj.innerHTML = `USD ${val}M`;
        else if (end === 50) obj.innerHTML = `${val}%`;
        else if (end === 25) obj.innerHTML = `+${val} Años`;
        else if (end === 20) obj.innerHTML = `${val} Años`;
        else obj.innerHTML = val;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function initMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const nav = document.getElementById("navLinks");
    
    if (btn && nav) {
        btn.addEventListener("click", () => {
            nav.classList.toggle("mobile-active");
            btn.innerHTML = nav.classList.contains("mobile-active") ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });

        // Close menu on link click
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("mobile-active");
                btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }
}
