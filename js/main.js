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
    "solar-cuatro-vientos": {
        "id": "solar-cuatro-vientos",
        "category": "energia",
        "sector": "Energía Solar & Renovable",
        "assignedAgent": "javier",
        "amountUSD": 300.0,
        "basePrice": 300000000,
        "overpriceTarget": 15000000,
        "currency": "USD",
        "amountDisplay": "USD 300M",
        "defaultStatus": "activo",
        "modality": "Socio Inversor",
        "roi": "7 Años",
        "statusProgress": "Ingeniería avanzada y estudios de red listos para PPA MATER/CAMMESA",
        "isPrivatePlacement": false,
        "coverImage": "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_1.png",
        "totalSlides": 13,
        "slidePrefix": "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_",
        "es": {
            "categoryTag": "Energía Solar Fotovoltaica",
            "title": "Parque Solar Sol de los Cuatro Vientos 300 MW",
            "location": "Mendoza, Argentina",
            "statusLabel": "USD 300M — Socio Inversor",
            "description": "Desarrollo solar fotovoltaico de gran escala (300 MW) en zona de radiación solar excepcional en Mendoza. Estructuración orientada a contratos PPA a largo plazo indexados en USD bajo el marco MATER / CAMMESA.",
            "thesis": "Proyecto utility-scale con factor de planta líder en el cono sur, nodo de evacuación en alta tensión reservado y modelo de sindicación para socio inversor de primer nivel.",
            "highlights": [
                "300 MW de potencia nominal con factor de capacidad líder mundial en Cuyo.",
                "Estructuración de contratos PPA indexados en USD a 15-20 años bajo marco MATER/CAMMESA.",
                "Búsqueda de socio inversor / equity partner con entrada estratégica y gobierno compartido.",
                "Prioridad de despacho y estudios de interconexión eléctrica en etapa avanzada.",
                "Elegible para beneficios fiscales y cambiarios bajo el régimen RIGI (Ley 27.742)."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 300M",
                    "color": "text-gold"
                },
                {
                    "label": "Potencia Nominal",
                    "val": "300 MW",
                    "color": "text-cyan"
                },
                {
                    "label": "ROI Estimado",
                    "val": "7 Años",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Socio Inversor",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Solar PV Energy",
            "title": "Sol de los Cuatro Vientos 300 MW Solar Park",
            "location": "Mendoza, Argentina",
            "statusLabel": "USD 300M — Equity Partner",
            "description": "Large-scale utility solar PV development (300 MW) located in Mendoza's premier solar irradiance belt. Designed for long-term USD-indexed PPAs under the MATER / CAMMESA framework.",
            "thesis": "World-class capacity factor, high-voltage grid interconnection in advanced permitting, and strategic co-equity structure for institutional investors.",
            "highlights": [
                "300 MW nominal capacity in Cuyo's premier solar corridor.",
                "USD-denominated 15-20 year PPA structure (MATER / CAMMESA).",
                "Equity partnership model with attractive risk-adjusted IRR.",
                "Interconnection priority and advanced environmental clearance.",
                "Eligible for RIGI investment incentive regime."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 300M",
                    "color": "text-gold"
                },
                {
                    "label": "Nominal Power",
                    "val": "300 MW",
                    "color": "text-cyan"
                },
                {
                    "label": "Estimated ROI",
                    "val": "7 Years",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Equity Partner",
                    "color": "text-gold"
                }
            ]
        }
    },
    "solar-vaca-muerta": {
        "id": "solar-vaca-muerta",
        "category": "energia",
        "sector": "Energía Solar & Renovable",
        "assignedAgent": "javier",
        "amountUSD": 30.0,
        "basePrice": 30000000,
        "overpriceTarget": 2000000,
        "currency": "USD",
        "amountDisplay": "USD 30M",
        "defaultStatus": "activo",
        "modality": "Socio Inversor",
        "roi": "5 Años",
        "statusProgress": "Proyecto ejecutivo orientado a offtakers industriales de hidrocarburos en Añelo",
        "isPrivatePlacement": false,
        "coverImage": "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_2.png",
        "totalSlides": 13,
        "slidePrefix": "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_",
        "es": {
            "categoryTag": "Energía Solar & O&G",
            "title": "Parque Solar 30 MW Vaca Muerta",
            "location": "Añelo, Neuquén, Argentina",
            "statusLabel": "USD 30M — Socio Inversor",
            "description": "Planta fotovoltaica de 30 MW emplazada en el corazón de la formación no convencional Vaca Muerta. Provisión directa de energía limpia y descarbonización para operaciones de operadoras petroleras y de servicios.",
            "thesis": "Generación distribuida de alta demanda en boca de yacimiento, reemplazando costosa generación térmica diésel con PPA industrial privado en USD y payback acelerado a 5 años.",
            "highlights": [
                "30 MW dedicados al suministro de energía renovable en Añelo / Vaca Muerta.",
                "Offtakers corporativos de primer nivel en el sector de petróleo y gas.",
                "Retorno de inversión acelerado en 5 años por alta competitividad frente al diésel.",
                "Reducción directa de emisiones de Alcance 2 para metas ESG de operadoras.",
                "Opción de ampliación modular por etapas sucesivas."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 30M",
                    "color": "text-gold"
                },
                {
                    "label": "Potencia",
                    "val": "30 MW",
                    "color": "text-cyan"
                },
                {
                    "label": "ROI Estimado",
                    "val": "5 Años",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Socio Inversor",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Solar & O&G Decarbonization",
            "title": "30 MW Vaca Muerta Solar Park",
            "location": "Añelo, Neuquén, Argentina",
            "statusLabel": "USD 30M — Equity Partner",
            "description": "30 MW PV solar plant strategically positioned in Añelo, the core of Vaca Muerta shale play. Direct clean power supply to O&G operators replacing diesel generation.",
            "thesis": "Fast 5-year payback backed by private industrial USD offtake agreements and critical ESG impact for shale drilling clusters.",
            "highlights": [
                "30 MW dedicated to Vaca Muerta oilfield operations.",
                "Direct industrial USD PPA with tier-1 O&G operators.",
                "Accelerated 5-year payback substituting expensive diesel power.",
                "Direct Scope 2 carbon footprint abatement.",
                "Modular scalable architecture."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 30M",
                    "color": "text-gold"
                },
                {
                    "label": "Capacity",
                    "val": "30 MW",
                    "color": "text-cyan"
                },
                {
                    "label": "Est. ROI",
                    "val": "5 Years",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Equity Partner",
                    "color": "text-gold"
                }
            ]
        }
    },
    "solar": {
        "id": "solar",
        "category": "energia",
        "sector": "Energía Solar & Renovable",
        "assignedAgent": "javier",
        "amountUSD": 50.0,
        "basePrice": 50000000,
        "overpriceTarget": 2500000,
        "currency": "USD",
        "amountDisplay": "USD 50M (50% Pre-Financiado)",
        "defaultStatus": "activo",
        "modality": "EPC Llave en Mano",
        "roi": "6 Años",
        "statusProgress": "Ready to Build con co-financiamiento asegurado por fabricante Tier 1",
        "isPrivatePlacement": false,
        "pdfPath": "assets/docs/plantas_solares_2026.pdf",
        "totalSlides": 13,
        "slidePrefix": "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_",
        "coverImage": "assets/slides/Inversión_en_Plantas_Solares_en_Argentina_2026_page_1.png",
        "es": {
            "categoryTag": "Energía Solar Fotovoltaica",
            "title": "Plantas Solares Llave en Mano con Financiamiento Asegurado",
            "location": "Cuyo y NOA, Argentina",
            "statusLabel": "Co-Financiado 50% CAPEX",
            "description": "Desarrollo estratégico de parques fotovoltaicos llave en mano con el 50% del CAPEX pre-financiado por fabricante líder global de paneles e inversores. Contratos PPA a 15-20 años indexados al USD.",
            "thesis": "Estructura de co-inversión que minimiza el capital inicial y maximiza la TIR mediante financiamiento directo del proveedor tecnológico internacional.",
            "highlights": [
                "50% del CAPEX pre-financiado directamente por fabricante global.",
                "Contratos PPA indexados al Dólar estadounidense a 15-20 años.",
                "Recurso solar excepcional en Cuyo y NOA con factor líder.",
                "Contrato EPC llave en mano con costos y plazos cerrados y garantizados.",
                "Garantía de rendimiento y mantenimiento integral bajo contratos O&M."
            ],
            "metrics": [
                {
                    "label": "Co-Financiamiento",
                    "val": "50% CAPEX",
                    "color": "text-gold"
                },
                {
                    "label": "Plazo PPA",
                    "val": "15 - 20 Años",
                    "color": "text-cyan"
                },
                {
                    "label": "Mercado",
                    "val": "MATER / CAMMESA",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "EPC Llave en Mano",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Photovoltaic Solar Energy",
            "title": "Turnkey Solar Plants with Secured Co-Financing",
            "location": "Cuyo & NOA Regions, Argentina",
            "statusLabel": "50% Co-Financed CAPEX",
            "description": "Strategic turnkey solar park developments with 50% of CAPEX pre-financed by a world-leading PV manufacturer. Long-term PPA contracts (15 to 20 years) indexed to USD.",
            "thesis": "Co-investment architecture minimizing upfront equity and maximizing equity IRR through vendor financing.",
            "highlights": [
                "50% of CAPEX pre-financed directly by top-tier global manufacturer.",
                "USD-indexed PPA contracts with 15 to 20 years duration.",
                "Exceptional solar irradiance in Cuyo & NOA regions.",
                "Turnkey EPC agreement with guaranteed fixed cost.",
                "Guaranteed performance metrics and preventative O&M."
            ],
            "metrics": [
                {
                    "label": "Co-Financing",
                    "val": "50% CAPEX",
                    "color": "text-gold"
                },
                {
                    "label": "PPA Term",
                    "val": "15 - 20 Yrs USD",
                    "color": "text-cyan"
                },
                {
                    "label": "Target Market",
                    "val": "MATER / CAMMESA",
                    "color": "text-green"
                },
                {
                    "label": "Delivery",
                    "val": "Turnkey EPC",
                    "color": "text-gold"
                }
            ]
        }
    },
    "hotel-casino-mendoza-3s": {
        "id": "hotel-casino-mendoza-3s",
        "category": "hoteleria",
        "sector": "Hotelería & Renta",
        "assignedAgent": "daniel",
        "amountUSD": 40.0,
        "basePrice": 40000000,
        "overpriceTarget": 2500000,
        "currency": "USD",
        "amountDisplay": "USD 40M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "1 Año",
        "statusProgress": "Activo operativo en marcha con flujo consolidado y licencias de juego vigentes",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p2_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Hotelería & Casino",
            "title": "Hotel 3 Estrellas + Casino + Salón de Eventos",
            "location": "Mendoza, Argentina",
            "statusLabel": "USD 40M — Venta Directa",
            "description": "Complejo hotelero de 3 estrellas en funcionamiento pleno con sala de casino equipada y habilitación provincial. Cuenta con salón de eventos corporativos y sociales con alta demanda turística internacional.",
            "thesis": "Extraordinario cash flow operativo derivado del juego y turismo vitivinícola, generando un retorno de capital estimado en 1 año sobre el valor de venta del activo.",
            "highlights": [
                "Hotel de 3 estrellas operativo con sólida tasa de ocupación anual.",
                "Licencia y explotación activa de casino con alto flujo de caja en efectivo.",
                "Salón de eventos de gran capacidad para turismo MICE y convenciones.",
                "Retorno de inversión sin precedentes proyectado en 1 año.",
                "Venta del 100% del activo inmobiliario y paquete comercial sin pasivos."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 40M",
                    "color": "text-gold"
                },
                {
                    "label": "Tipo Activo",
                    "val": "Hotel 3★ + Casino",
                    "color": "text-cyan"
                },
                {
                    "label": "ROI Estimado",
                    "val": "1 Año",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Directa",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Hospitality & Casino",
            "title": "3-Star Hotel + Casino + Event Convention Center",
            "location": "Mendoza, Argentina",
            "statusLabel": "USD 40M — Asset Sale",
            "description": "Operational 3-star hotel complex featuring an active licensed casino hall and convention center. Strong year-round occupancy supported by Mendoza's wine and gaming tourism.",
            "thesis": "Exceptional cash flow from gaming operations delivering a projected 1-year payback on enterprise asset value.",
            "highlights": [
                "Fully operational 3-star hotel with solid occupancy history.",
                "Active gaming casino license with high daily cash flow.",
                "Large convention hall catering to corporate and social events.",
                "Unprecedented 1-year projected payback.",
                "Clean title and corporate structure with zero debt."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 40M",
                    "color": "text-gold"
                },
                {
                    "label": "Asset Type",
                    "val": "Hotel 3★ + Casino",
                    "color": "text-cyan"
                },
                {
                    "label": "Est. ROI",
                    "val": "1 Year",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Direct Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "hotel-casino-mendoza-5s": {
        "id": "hotel-casino-mendoza-5s",
        "category": "hoteleria",
        "sector": "Hotelería & Renta",
        "assignedAgent": "daniel",
        "amountUSD": 60.0,
        "basePrice": 60000000,
        "overpriceTarget": 3500000,
        "currency": "USD",
        "amountDisplay": "USD 60M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "1 Año",
        "statusProgress": "Hotel 5 estrellas de lujo en operación con sala de juego y cocheras",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p2_2.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Hotelería de Lujo & Casino",
            "title": "Hotel 5 Estrellas (72 Habitaciones) + Casino + Cocheras",
            "location": "Mendoza, Argentina",
            "statusLabel": "USD 60M — Venta Directa",
            "description": "Exclusivo hotel de 5 estrellas con 72 habitaciones de alta gama, casino privado en operación, restaurante gourmet, spa y estacionamiento subterráneo en la mejor ubicación de Mendoza.",
            "thesis": "Activo trophy de alta rentabilidad con tarifa promedio diaria (ADR) dolarizada, clientela internacional y un ROI extraordinario de 1 año traccionado por la sala de casino.",
            "highlights": [
                "72 habitaciones y suites de lujo totalmente equipadas con amenities de 5 estrellas.",
                "Casino de alta categoría en funcionamiento con licencias y equipamiento de última generación.",
                "Edificio icónico con cocheras subterráneas y salones ejecutivos.",
                "Retorno acelerado en 1 año respaldado por el flujo de caja del casino y hotelería.",
                "Operación llave en mano con personal calificado y marca consolidada."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 60M",
                    "color": "text-gold"
                },
                {
                    "label": "Habitaciones",
                    "val": "72 Suites 5★",
                    "color": "text-cyan"
                },
                {
                    "label": "ROI Estimado",
                    "val": "1 Año",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Directa",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Luxury Hospitality & Casino",
            "title": "5-Star Hotel (72 Rooms) + Casino + Underground Parking",
            "location": "Mendoza, Argentina",
            "statusLabel": "USD 60M — Asset Sale",
            "description": "Premier 5-star boutique hotel featuring 72 luxury rooms, operational private casino, fine dining restaurant, luxury spa, and private parking in prime Mendoza.",
            "thesis": "Trophy asset with strong USD average daily rates and high-margin casino revenue driving a projected 1-year capital payback.",
            "highlights": [
                "72 luxury suites with complete 5-star amenities.",
                "High-end operational casino with modern gaming licenses.",
                "Prime architectural building with underground parking.",
                "Rapid 1-year payback backed by combined hotel and gaming cash flows.",
                "Turnkey management and established reputation."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 60M",
                    "color": "text-gold"
                },
                {
                    "label": "Rooms",
                    "val": "72 Suites 5★",
                    "color": "text-cyan"
                },
                {
                    "label": "Est. ROI",
                    "val": "1 Year",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Direct Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "hotel-lujo-bariloche": {
        "id": "hotel-lujo-bariloche",
        "category": "hoteleria",
        "sector": "Hotelería & Renta",
        "assignedAgent": "daniel",
        "amountUSD": 0.0,
        "basePrice": 0,
        "overpriceTarget": 0,
        "currency": "USD",
        "amountDisplay": "A Invitación Exclusiva",
        "defaultStatus": "activo",
        "modality": "Venta Exclusiva a Invitación",
        "roi": "Confidencial",
        "statusProgress": "Operación off-market estrictamente confidencial disponible solo bajo NDA firmado",
        "isPrivatePlacement": true,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p3_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Private Placement — Gran Lujo",
            "title": "Venta Exclusiva a Invitación — Hotel de Lujo en Bariloche",
            "location": "San Carlos de Bariloche, Patagonia, Argentina",
            "statusLabel": "🔒 Private Placement Off-Market",
            "description": "Emblemático hotel de ultra-lujo situado en un entorno natural privilegiado en Bariloche, Patagonia. Comercialización off-market reservada exclusivamente para inversores calificados bajo estricto acuerdo de confidencialidad (NDA).",
            "thesis": "Activo hotelero trofeo sin equivalentes en la Patagonia, con vistas directas al lago y clientela internacional de alto poder adquisitivo. Datos financieros y dossier disponibles únicamente a invitación.",
            "highlights": [
                "Venta off-market estrictamente confidencial (sin publicación de montos en web).",
                "Ubicación irrepetible con vistas panorámicas al lago y arquitectura patagónica.",
                "Instalaciones de máxima jerarquía hotelera internacional.",
                "Acceso al Data Room y estados contables supeditado a calificación previa y NDA.",
                "Acompañamiento personalizado directo con la dirección de Energy CPY."
            ],
            "metrics": [
                {
                    "label": "Modalidad",
                    "val": "Private Placement",
                    "color": "text-gold"
                },
                {
                    "label": "Categoría",
                    "val": "Ultra Lujo",
                    "color": "text-cyan"
                },
                {
                    "label": "Acceso",
                    "val": "Bajo NDA",
                    "color": "text-green"
                },
                {
                    "label": "Estado",
                    "val": "Venta Exclusiva",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Private Placement — Ultra Luxury",
            "title": "Exclusive Invitation Sale — Luxury Hotel in Bariloche",
            "location": "Bariloche, Patagonia, Argentina",
            "statusLabel": "🔒 Private Placement Off-Market",
            "description": "Iconic ultra-luxury hotel situated in a prime natural setting in Bariloche, Patagonia. Off-market transaction available exclusively to qualified investors under non-disclosure agreement (NDA).",
            "thesis": "Irreplaceable trophy asset with direct lakefront views and elite international patronage. Financial dossier available strictly upon invitation.",
            "highlights": [
                "Strictly confidential off-market sale (no public financial figures).",
                "Irreplaceable lakefront location with signature Andean architecture.",
                "Highest tier of international hospitality standards.",
                "Data room access granted exclusively following investor verification and signed NDA.",
                "Direct confidential advisory with Energy CPY executives."
            ],
            "metrics": [
                {
                    "label": "Deal Structure",
                    "val": "Private Placement",
                    "color": "text-gold"
                },
                {
                    "label": "Category",
                    "val": "Ultra Luxury",
                    "color": "text-cyan"
                },
                {
                    "label": "Access",
                    "val": "Under NDA",
                    "color": "text-green"
                },
                {
                    "label": "Status",
                    "val": "Exclusive Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "hotel-lujo-cordoba": {
        "id": "hotel-lujo-cordoba",
        "category": "hoteleria",
        "sector": "Hotelería & Renta",
        "assignedAgent": "daniel",
        "amountUSD": 0.0,
        "basePrice": 0,
        "overpriceTarget": 0,
        "currency": "USD",
        "amountDisplay": "A Invitación Exclusiva",
        "defaultStatus": "activo",
        "modality": "Venta Exclusiva a Invitación",
        "roi": "Confidencial",
        "statusProgress": "Operación off-market estrictamente confidencial disponible solo bajo NDA firmado",
        "isPrivatePlacement": true,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p3_2.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Private Placement — Gran Lujo",
            "title": "Venta Exclusiva a Invitación — Hotel de Lujo en Córdoba",
            "location": "Córdoba, Argentina",
            "statusLabel": "🔒 Private Placement Off-Market",
            "description": "Distinguido establecimiento hotelero de máxima jerarquía en la provincia de Córdoba. Operación off-market de colocación privada sin mención de estudios financieros públicos, orientada a grupos selectos.",
            "thesis": "Patrimonio arquitectónico e inmobiliario de primer orden con posicionamiento líder en turismo corporativo y eventos de alta gama en el centro del país.",
            "highlights": [
                "Venta off-market de colocación privada mediante invitación.",
                "Instalaciones de primer nivel para congresos internacionales y hotelería premium.",
                "Historial de ocupación y marca consolidada en la región central.",
                "Entrega de memorias económicas y técnicas supeditada a firma de NDA formal.",
                "Atención directa y reservada por parte del consultor a cargo."
            ],
            "metrics": [
                {
                    "label": "Modalidad",
                    "val": "Private Placement",
                    "color": "text-gold"
                },
                {
                    "label": "Categoría",
                    "val": "Gran Lujo",
                    "color": "text-cyan"
                },
                {
                    "label": "Acceso",
                    "val": "Bajo NDA",
                    "color": "text-green"
                },
                {
                    "label": "Estado",
                    "val": "Venta Exclusiva",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Private Placement — Ultra Luxury",
            "title": "Exclusive Invitation Sale — Luxury Hotel in Córdoba",
            "location": "Córdoba, Argentina",
            "statusLabel": "🔒 Private Placement Off-Market",
            "description": "Distinguished premier luxury hotel in Córdoba province. Private placement off-market transaction without public financial figures, tailored for select institutional groups.",
            "thesis": "Prime architectural and real estate asset leading in executive tourism and major corporate conventions in Central Argentina.",
            "highlights": [
                "Private placement off-market transaction by direct invitation.",
                "State-of-the-art facilities for international conventions and luxury lodging.",
                "Proven historical occupancy and distinguished regional brand.",
                "Economic and operational disclosures released exclusively upon signed NDA.",
                "Confidential engagement directly with senior partners."
            ],
            "metrics": [
                {
                    "label": "Deal Structure",
                    "val": "Private Placement",
                    "color": "text-gold"
                },
                {
                    "label": "Category",
                    "val": "Grand Luxury",
                    "color": "text-cyan"
                },
                {
                    "label": "Access",
                    "val": "Under NDA",
                    "color": "text-green"
                },
                {
                    "label": "Status",
                    "val": "Exclusive Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "estancia-17000ha-riego": {
        "id": "estancia-17000ha-riego",
        "category": "agro",
        "sector": "Agro, Campo & Industria",
        "assignedAgent": "javier",
        "amountUSD": 60.0,
        "basePrice": 60000000,
        "overpriceTarget": 3500000,
        "currency": "USD",
        "amountDisplay": "USD 60M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "2 Años",
        "statusProgress": "Establecimiento productivo en marcha con pivotes de riego y títulos perfectos",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p10_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Agroindustria & Tierras",
            "title": "Estancia 17.000 Hectáreas con Riego en Zona Turística",
            "location": "Región Centro, Argentina",
            "statusLabel": "USD 60M — Venta",
            "description": "Extraordinario establecimiento agropecuario de 17.000 hectáreas con infraestructura completa de riego presurizado instalada. Emplazado en una comarca de alto valor paisajístico y turístico en la región centro del país.",
            "thesis": "Combinación inusual de alta productividad agrícola bajo riego con formidable plusvalía inmobiliaria y turística, permitiendo un recupero acelerado en 2 años.",
            "highlights": [
                "17.000 hectáreas con aptitud mixta y módulos de riego de alta tecnología.",
                "Ubicación privilegiada en zona turística de rápida valorización territorial.",
                "Rápido recupero proyectado a 2 años mediante cultivos intensivos y desarrollos asociados.",
                "Infraestructura completa: casco, galpones, corrales, caminos internos y electrificación.",
                "Títulos de propiedad consolidados y posesión inmediata sin pasivos."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 60M",
                    "color": "text-gold"
                },
                {
                    "label": "Superficie",
                    "val": "17.000 Ha",
                    "color": "text-cyan"
                },
                {
                    "label": "ROI Estimado",
                    "val": "2 Años",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Directa",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Agribusiness & Prime Land",
            "title": "17,000-Hectare Irrigated Ranch in Prime Tourist Area",
            "location": "Central Region, Argentina",
            "statusLabel": "USD 60M — Asset Sale",
            "description": "Exceptional 17,000-hectare agricultural estate equipped with extensive pressurized irrigation infrastructure, located in a scenic and high-growth tourist corridor in Central Argentina.",
            "thesis": "Unique synergy of intensive irrigated crop yields and real estate capital appreciation offering a 2-year estimated capital return.",
            "highlights": [
                "17,000 hectares combining crop irrigation and pastoral land.",
                "Strategic setting in a fast-appreciating tourism and lifestyle zone.",
                "Rapid projected 2-year payback from high-yield crops and land upside.",
                "Full operational infrastructure: main house, sheds, power, and road network.",
                "Clear titles and immediate handover with zero encumbrances."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 60M",
                    "color": "text-gold"
                },
                {
                    "label": "Total Area",
                    "val": "17,000 Ha",
                    "color": "text-cyan"
                },
                {
                    "label": "Est. ROI",
                    "val": "2 Years",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Direct Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "planta-avicola-avex": {
        "id": "planta-avicola-avex",
        "category": "agro",
        "sector": "Agro, Campo & Industria",
        "assignedAgent": "javier",
        "amountUSD": 5.0,
        "basePrice": 5000000,
        "overpriceTarget": 500000,
        "currency": "USD",
        "amountDisplay": "USD 5M",
        "defaultStatus": "activo",
        "modality": "Socio Inversor",
        "roi": "7 Años",
        "statusProgress": "Planta frigorífica habilitada SENASA con red de distribución nacional estructurada",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p10_2.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Industria Frigorífica & Alimentos",
            "title": "Planta Avícola + Red de Distribución Nacional (Avex)",
            "location": "Río Cuarto, Córdoba, Argentina",
            "statusLabel": "USD 5M — Socio Inversor",
            "description": "Complejo agroindustrial avícola con habilitación SENASA para faena y despiece, complementado con red logística y comercial en las principales plazas del país. Búsqueda de socio inversor para reactivación y capital de trabajo.",
            "thesis": "Inversión de bajo ticket relativo (USD 5M) sobre activos tangibles de gran valor de reposición, generando un EBITDA sólido con retorno a 7 años.",
            "highlights": [
                "Planta de faena avícola con habilitaciones oficiales SENASA y capacidad instalada relevante.",
                "Red de comercialización y distribución nacional en canales mayoristas y minoristas.",
                "Socio inversor de USD 5M destinado a capital de giro y optimización de líneas de proceso.",
                "Retorno proyectado a 7 años respaldado por alta demanda de proteína animal.",
                "Excelente conectividad logística en el nudo de rutas de Río Cuarto, Córdoba."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 5M",
                    "color": "text-gold"
                },
                {
                    "label": "Ubicación",
                    "val": "Río Cuarto, Cba",
                    "color": "text-cyan"
                },
                {
                    "label": "ROI Estimado",
                    "val": "7 Años",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Socio Inversor",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Poultry & Food Processing",
            "title": "Poultry Processing Plant + National Distribution (Avex)",
            "location": "Río Cuarto, Córdoba, Argentina",
            "statusLabel": "USD 5M — Equity Partner",
            "description": "SENASA-certified poultry slaughter and processing facility with nationwide distribution channels. Seeking equity partner for operating capital and throughput reactivation.",
            "thesis": "Attractive entry ticket (USD 5M) securing substantial tangible industrial assets and predictable cash flows with 7-year capital recovery.",
            "highlights": [
                "Modern processing facility fully licensed by SENASA.",
                "Structured nationwide sales and refrigerated distribution network.",
                "USD 5M equity ticket targeted for working capital expansion.",
                "Solid 7-year projected ROI driven by steady protein market consumption.",
                "Prime logistic junction in Río Cuarto, central Argentina."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 5M",
                    "color": "text-gold"
                },
                {
                    "label": "Location",
                    "val": "Río Cuarto, Cba",
                    "color": "text-cyan"
                },
                {
                    "label": "Est. ROI",
                    "val": "7 Years",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Equity Partner",
                    "color": "text-gold"
                }
            ]
        }
    },
    "mineria-diente-oro-verde": {
        "id": "mineria-diente-oro-verde",
        "category": "mineria",
        "sector": "Minería",
        "assignedAgent": "javier",
        "amountUSD": 60.0,
        "basePrice": 60000000,
        "overpriceTarget": 3500000,
        "currency": "USD",
        "amountDisplay": "USD 60M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "Activo Minero",
        "statusProgress": "Yacimiento aurífero a certificar bajo estándar internacional NI 43-101",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p1_2.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Minería Metalífera — Oro",
            "title": "Yacimiento de Oro 'Diente Oro Verde'",
            "location": "San Luis, Argentina",
            "statusLabel": "USD 60M — Venta",
            "description": "Propiedad minera de oro a certificar bajo código internacional canadiense NI 43-101. Posee importantes estructuras de vetas hidrotermales con leyes superficiales y en profundidad de alto interés comercial.",
            "thesis": "Oportunidad de adquisición directa de un yacimiento aurífero en una provincia con tradición minera, ideal para empresas junior o intermedias con capacidad de exploración y cubicación.",
            "highlights": [
                "Yacimiento de oro con estudios previos y listo para certificación técnica NI 43-101.",
                "Estructuras mineralizadas continuas con potencial de explotación a cielo abierto y subterránea.",
                "Provincia con facilidades logísticas, red vial pavimentada y energía cercana.",
                "Venta del 100% de los derechos de explotación y mensura minera definitiva.",
                "Alto apalancamiento ante el ciclo alcista internacional del precio del oro."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 60M",
                    "color": "text-gold"
                },
                {
                    "label": "Mineral",
                    "val": "Oro (Au)",
                    "color": "text-cyan"
                },
                {
                    "label": "Estándar",
                    "val": "A cert. NI 43-101",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Total",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Precious Metals — Gold",
            "title": "'Diente Oro Verde' Gold Deposit",
            "location": "San Luis, Argentina",
            "statusLabel": "USD 60M — Asset Sale",
            "description": "High-potential gold deposit prepared for international technical certification under NI 43-101 standard. Contains extensive hydrothermal vein structures with attractive grades.",
            "thesis": "Direct acquisition opportunity of a promising gold concession in a mining-friendly jurisdiction, perfectly positioned for junior or mid-tier exploration firms.",
            "highlights": [
                "Gold deposit ready for NI 43-101 technical report certification.",
                "Continuous mineralized structures suitable for open-pit and underground methods.",
                "Excellent regional infrastructure, paved access, and nearby grid power.",
                "100% ownership sale of granted mining concessions and survey titles.",
                "Direct exposure to the historic secular bull market in precious metals."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 60M",
                    "color": "text-gold"
                },
                {
                    "label": "Commodity",
                    "val": "Gold (Au)",
                    "color": "text-cyan"
                },
                {
                    "label": "Standard",
                    "val": "NI 43-101 Path",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "100% Asset Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "mineria-marmol-san-luis": {
        "id": "mineria-marmol-san-luis",
        "category": "mineria",
        "sector": "Minería",
        "assignedAgent": "javier",
        "amountUSD": 50.0,
        "basePrice": 50000000,
        "overpriceTarget": 3000000,
        "currency": "USD",
        "amountDisplay": "USD 50M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "Activo Minero",
        "statusProgress": "Canteras con reservas cubicadas de roca de aplicación ornamental y bloques",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p2_3.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Minería No Metalífera — Mármol",
            "title": "Canteras y Yacimiento de Mármol Ornamental",
            "location": "San Luis, Argentina",
            "statusLabel": "USD 50M — Venta",
            "description": "Depósitos masivos de mármoles y rocas de aplicación de altísima calidad estética para la industria de la construcción y revestimientos premium. Reservas cubicadas listas para corte y extracción en bloques.",
            "thesis": "Monopolio natural de variedades de mármol cotizadas en mercados de exportación (Europa, Medio Oriente y EE.UU.) con bajo costo de extracción y alto margen operativo.",
            "highlights": [
                "Yacimiento de mármol y travertino con frentes de cantera explorados y habilitados.",
                "Reservas masivas de bloques dimensionados para exportación y mercado interno.",
                "Bajo costo de explotación a cielo abierto con tecnología de corte con hilo diamantado.",
                "Títulos mineros consolidados sin litigios y permisos ambientales vigentes.",
                "Venta total del complejo extractivo por USD 50M."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 50M",
                    "color": "text-gold"
                },
                {
                    "label": "Mineral",
                    "val": "Mármol & Travertino",
                    "color": "text-cyan"
                },
                {
                    "label": "Destino",
                    "val": "Exportación & Constr.",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Directa",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Industrial Minerals — Marble",
            "title": "Quarries & Ornamental Marble Deposit",
            "location": "San Luis, Argentina",
            "statusLabel": "USD 50M — Asset Sale",
            "description": "Extensive marble and dimensional stone deposits of superior aesthetic quality for luxury architecture and export markets. Large measured reserves ready for block quarrying.",
            "thesis": "Natural monopoly in prized marble varieties with competitive open-pit mining costs and high export margins to Europe and North America.",
            "highlights": [
                "Marble and travertine deposits with active and surveyed quarry faces.",
                "Massive measured reserves of dimensioned blocks for premium architecture.",
                "Cost-effective open-pit extraction using modern diamond-wire cutting.",
                "Clear mineral tenure with active environmental and provincial permits.",
                "Complete asset sale for USD 50M."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 50M",
                    "color": "text-gold"
                },
                {
                    "label": "Commodity",
                    "val": "Marble & Stone",
                    "color": "text-cyan"
                },
                {
                    "label": "Target",
                    "val": "Export & Luxury",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Direct Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "mineria-oro-san-juan": {
        "id": "mineria-oro-san-juan",
        "category": "mineria",
        "sector": "Minería",
        "assignedAgent": "javier",
        "amountUSD": 150.0,
        "basePrice": 150000000,
        "overpriceTarget": 8000000,
        "currency": "USD",
        "amountDisplay": "USD 100M - 200M",
        "defaultStatus": "activo",
        "modality": "Socio Inversor",
        "roi": "En Producción",
        "statusProgress": "Yacimiento en producción inicial (28 t/d) buscando capital para ampliación de planta",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p3_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Minería de Oro — Producción",
            "title": "Yacimiento de Oro en Producción Inicial (28 ton/día)",
            "location": "San Juan, Argentina",
            "statusLabel": "USD 100M-200M — Socio Inversor",
            "description": "Mina de oro en producción operativa inicial a razón de 28 toneladas diarias procesadas. Convocatoria a socio inversor estratégico para inyectar entre USD 100M y USD 200M para escalamiento de planta y lixiviación.",
            "thesis": "Des-riesgo técnico comprobado al encontrarse ya en explotación activa en San Juan, la provincia minera por excelencia de Argentina. Rápido incremento de rentabilidad al multiplicar la escala.",
            "highlights": [
                "Operación aurífera activa con planta de procesamiento en marcha (28 ton/día).",
                "San Juan: Jurisdicción líder en estabilidad legal e institucional para minería.",
                "Estructuración de capital (USD 100M a 200M) para ampliación de capacidad de beneficio.",
                "Flujo de caja positivo inmediato y reservas en expansión continua.",
                "Modelo de socio inversor con participación societaria y derechos de offtake de oro."
            ],
            "metrics": [
                {
                    "label": "Rango Inversión",
                    "val": "USD 100M - 200M",
                    "color": "text-gold"
                },
                {
                    "label": "Producción Actual",
                    "val": "28 Ton / Día",
                    "color": "text-cyan"
                },
                {
                    "label": "Provincia",
                    "val": "San Juan",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Socio Inversor",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Gold Mining — Operating",
            "title": "Gold Mine in Initial Production (28 tons/day)",
            "location": "San Juan, Argentina",
            "statusLabel": "USD 100M-200M — Equity Partner",
            "description": "Operating gold mine currently processing 28 tons/day. Seeking strategic equity partner to deploy USD 100M to 200M for plant expansion, milling, and leaching facilities.",
            "thesis": "De-risked operating asset in San Juan, Argentina's leading mining jurisdiction. Substantial economies of scale upon processing capacity expansion.",
            "highlights": [
                "Active gold mining operation with processing plant handling 28 tons/day.",
                "San Juan: Top-tier Argentine mining jurisdiction with solid legal backing.",
                "Capital call of USD 100M-200M to multiply milling and leaching throughput.",
                "Immediate positive operational cash flow with ongoing resource expansion.",
                "Equity partnership model with gold off-take and board participation."
            ],
            "metrics": [
                {
                    "label": "Investment Range",
                    "val": "USD 100M - 200M",
                    "color": "text-gold"
                },
                {
                    "label": "Current Output",
                    "val": "28 Tons / Day",
                    "color": "text-cyan"
                },
                {
                    "label": "Jurisdiction",
                    "val": "San Juan",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Equity Partner",
                    "color": "text-gold"
                }
            ]
        }
    },
    "mineria-litio-catamarca": {
        "id": "mineria-litio-catamarca",
        "category": "mineria",
        "sector": "Minería",
        "assignedAgent": "javier",
        "amountUSD": 11.0,
        "basePrice": 11000000,
        "overpriceTarget": 1000000,
        "currency": "USD",
        "amountDisplay": "USD 11M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "Exploración OK",
        "statusProgress": "Estudios de exploración geoquímica y geofísica concluidos con dictamen favorable",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p3_2.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Minería de Litio — Salmueras",
            "title": "Yacimiento de Litio — Estudios de Exploración OK",
            "location": "Catamarca, Argentina",
            "statusLabel": "USD 11M — Venta",
            "description": "Concesión minera de salmueras de litio en la puna de Catamarca (Triángulo del Litio). Campaña exploratoria inicial completada con éxito (geofísica y sondeos geoquímicos con excelentes relaciones Mg/Li).",
            "thesis": "Entrada estratégica de bajo ticket (USD 11M) en un salar de alta ley, con saneamiento legal total y listo para perforación de pozos y estimación de recursos NI 43-101.",
            "highlights": [
                "Ubicación en el epicentro mundial de salmueras de litio en Catamarca.",
                "Estudios de exploración geoeléctrica y muestreos hidroquímicos concluidos (OK).",
                "Baja relación magnesio/litio favoreciendo procesos de precipitación química directa.",
                "Título de propiedad minera perfecto y canon al día.",
                "Venta total por USD 11M, ideal para fondos de recursos naturales o desarrolladores de baterías."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 11M",
                    "color": "text-gold"
                },
                {
                    "label": "Mineral",
                    "val": "Litio (Li)",
                    "color": "text-cyan"
                },
                {
                    "label": "Estado",
                    "val": "Exploración OK",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Directa",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Critical Minerals — Lithium",
            "title": "Lithium Brine Deposit — Exploration OK",
            "location": "Catamarca, Argentina",
            "statusLabel": "USD 11M — Asset Sale",
            "description": "Lithium brine mining concession located in the Catamarca Puna within the global Lithium Triangle. Preliminary exploration campaign successfully completed with favorable Mg/Li ratios.",
            "thesis": "Low-entry ticket (USD 11M) in a premium salar basin with clean legal status, ready for resource drilling and NI 43-101 resource estimation.",
            "highlights": [
                "Located in the world-class Catamarca lithium brine basin.",
                "Geophysical and hydrogeochemical exploratory studies confirmed (OK).",
                "Favorable magnesium-to-lithium ratio enabling low processing OPEX.",
                "Clear legal title with mining cadastre fees in full standing.",
                "100% asset sale for USD 11M, ideal for battery metal developers."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 11M",
                    "color": "text-gold"
                },
                {
                    "label": "Commodity",
                    "val": "Lithium (Li)",
                    "color": "text-cyan"
                },
                {
                    "label": "Stage",
                    "val": "Exploration OK",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Direct Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "refipampa-medanito": {
        "id": "refipampa-medanito",
        "category": "petroleo",
        "sector": "Petróleo, Gas & Infraestructura",
        "assignedAgent": "daniel",
        "amountUSD": 180.0,
        "basePrice": 180000000,
        "overpriceTarget": 10000000,
        "currency": "USD",
        "amountDisplay": "USD 180M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "En Producción",
        "statusProgress": "Refinería activa 750 m³/d (proy. 3.000 m³/d), 500 pozos en Medanito y Data Room listo",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p1_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Petróleo & Refinación Integrada",
            "title": "Venta Refipampa y Yacimiento Medanito (500 Pozos)",
            "location": "La Pampa / Cuenca Neuquina, Argentina",
            "statusLabel": "USD 180M — Venta Inmediata",
            "description": "Operación downstream y upstream integrada: refinería Refipampa procesando 750 m³/día con expansión proyectada a 3.000 m³/día y yacimiento Medanito con 500 pozos en producción activa. Data Room listo para auditoría inmediata.",
            "thesis": "Adquisición de un operador integrado con refinería propia, red de despacho y suministro asegurado de crudo liviano de Cuenca Neuquina por USD 180M.",
            "highlights": [
                "Refinería Refipampa operativa: 750 m³/día actual con proyecto a 3.000 m³/día.",
                "Yacimiento Medanito: 500 pozos productores con reservas y concesión vigente.",
                "Data Room completo y actualizado listo para Due Diligence de cierre rápido.",
                "Cadena de valor integrada desde boca de pozo hasta expendio de combustibles.",
                "Venta del paquete de control por USD 180M."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 180M",
                    "color": "text-gold"
                },
                {
                    "label": "Refinería",
                    "val": "750 a 3.000 m³/d",
                    "color": "text-cyan"
                },
                {
                    "label": "Pozos",
                    "val": "500 Activos",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Total",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Integrated Oil & Refining",
            "title": "Refipampa Refinery & Medanito Field Sale (500 Wells)",
            "location": "La Pampa / Neuquina Basin, Argentina",
            "statusLabel": "USD 180M — Immediate Sale",
            "description": "Integrated upstream & downstream business: Refipampa refinery producing 750 m³/day with expansion plan to 3,000 m³/day, paired with Medanito field operating 500 producing wells. Complete Data Room ready for fast due diligence.",
            "thesis": "Turnkey acquisition of an integrated domestic energy player with dedicated refining capacity, logistics network, and secure crude supply.",
            "highlights": [
                "Refipampa operating refinery: 750 m³/day with expansion pipeline to 3,000 m³/day.",
                "Medanito oilfield: 500 active producing wells with established reserves.",
                "Fully populated and audited virtual Data Room ready for rapid closing.",
                "Integrated value chain from wellhead extraction to wholesale fuel delivery.",
                "100% controlling interest sale for USD 180M."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 180M",
                    "color": "text-gold"
                },
                {
                    "label": "Refinery",
                    "val": "750-3,000 m³/d",
                    "color": "text-cyan"
                },
                {
                    "label": "Wells",
                    "val": "500 Active",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Direct Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "refinor-salta": {
        "id": "refinor-salta",
        "category": "petroleo",
        "sector": "Petróleo, Gas & Infraestructura",
        "assignedAgent": "daniel",
        "amountUSD": 50.0,
        "basePrice": 50000000,
        "overpriceTarget": 3000000,
        "currency": "USD",
        "amountDisplay": "USD 50M",
        "defaultStatus": "activo",
        "modality": "Venta",
        "roi": "En Producción",
        "statusProgress": "Refinería activa en Campo Durán con capacidad de 4.000 m³/día y red de ductos",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p1_2.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Downstream & Poliductos",
            "title": "REFINOR — Complejo de Refinación y Poliductos NOA",
            "location": "Campo Durán, Salta, Argentina",
            "statusLabel": "USD 50M — Venta",
            "description": "Refinería estratégica en Campo Durán, Salta, con capacidad de procesamiento de 4.000 m³ diarios de crudo y condensados. Red troncal de poliductos y estaciones de carga asociadas para abastecimiento del NOA.",
            "thesis": "Adquisición a valuación de distress industrial (USD 50M) con gigantesca infraestructura instalada de destilación, ductos y logística regional insustituible.",
            "highlights": [
                "Capacidad instalada de refinación de 4.000 m³/día en el norte argentino.",
                "Red troncal propia de poliductos para transporte de combustibles y GLP.",
                "Posicionamiento estratégico en la frontera de gas y petróleo con Bolivia y Chile.",
                "Facilidades de almacenamiento masivo y despacho multimodal.",
                "Venta por USD 50M con enorme potencial de sinergia de crudos livianos."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 50M",
                    "color": "text-gold"
                },
                {
                    "label": "Capacidad",
                    "val": "4.000 m³/Día",
                    "color": "text-cyan"
                },
                {
                    "label": "Red",
                    "val": "Poliductos NOA",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Venta Directa",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Downstream & Pipelines",
            "title": "REFINOR — Refinery & Pipeline Complex NOA",
            "location": "Campo Durán, Salta, Argentina",
            "statusLabel": "USD 50M — Asset Sale",
            "description": "Strategic regional refinery in Campo Durán, Salta, with 4,000 m³/day processing capacity for crude and gas condensates. Features an extensive regional pipeline and fuel distribution network.",
            "thesis": "Opportunity to acquire critical energy infrastructure in Northern Argentina at an attractive valuation (USD 50M) with irreplaceable transport assets.",
            "highlights": [
                "Refining capacity of 4,000 m³/day in northern Argentina.",
                "Proprietary multi-product pipeline network for fuels and LPG.",
                "Strategic cross-border logistical hub near Bolivia and Chile.",
                "Extensive tank storage and multimodal rack distribution facilities.",
                "Attractive asset sale for USD 50M with major synergy upside."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 50M",
                    "color": "text-gold"
                },
                {
                    "label": "Capacity",
                    "val": "4,000 m³/Day",
                    "color": "text-cyan"
                },
                {
                    "label": "Logistics",
                    "val": "NOA Pipelines",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Direct Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "salta-garrido-25areas": {
        "id": "salta-garrido-25areas",
        "category": "petroleo",
        "sector": "Petróleo, Gas & Infraestructura",
        "assignedAgent": "daniel",
        "amountUSD": 1870.0,
        "basePrice": 1870000000,
        "overpriceTarget": 50000000,
        "currency": "USD",
        "amountDisplay": "USD 1.870M",
        "defaultStatus": "activo",
        "modality": "Socio Inversor",
        "roi": "20 Años Concesión",
        "statusProgress": "25 áreas hidrocarburíferas para explotación integral con concesión a 20 años renovable",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p2_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Upstream Hidrocarburos — 25 Áreas",
            "title": "Proyecto Salta - GARRIDO (25 Áreas de Explotación)",
            "location": "Cuenca Noroeste, Salta, Argentina",
            "statusLabel": "USD 1.870M — Socio Inversor / UTE",
            "description": "Magno proyecto petrolero y gasífero que comprende 25 áreas de concesión adjudicadas por 20 años con opción de renovación en Salta. Búsqueda de socio inversor para plan maestro de USD 1.870M, con esquemas flexibles de participación por áreas o UTE.",
            "thesis": "Consolidación de cuenca madura y bloques profundos con reservas de crudo liviano y gas natural, beneficiados por la reversión del Gasoducto Norte y exportaciones a Brasil.",
            "highlights": [
                "25 áreas de explotación hidrocarburífera con concesión legal a 20 años.",
                "Estructura de participación societaria flexible o UTE compartida por bloques.",
                "Reservas certificadas de crudo y gas con acceso a red troncal de transporte.",
                "Reversión del Gasoducto Norte que abre mercado premium de exportación a Brasil.",
                "Monto total de financiamiento: USD 1.870 Millones."
            ],
            "metrics": [
                {
                    "label": "Inversión Total",
                    "val": "USD 1.870M",
                    "color": "text-gold"
                },
                {
                    "label": "Concesiones",
                    "val": "25 Áreas",
                    "color": "text-cyan"
                },
                {
                    "label": "Plazo",
                    "val": "20 Años Renov.",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Socio / UTE",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Upstream Oil & Gas — 25 Blocks",
            "title": "Salta - GARRIDO Project (25 Exploitation Blocks)",
            "location": "Northwest Basin, Salta, Argentina",
            "statusLabel": "USD 1,870M — Equity / JV Partner",
            "description": "Major hydrocarbon upstream development covering 25 licensed exploitation blocks for 20 renewable years in Salta. Seeking institutional partner for a USD 1.87B capex plan, open to block farm-outs or JV syndication.",
            "thesis": "Large-scale basin consolidation with proven sweet crude and natural gas reserves, strategically aligned with the Northern Gas Pipeline reversal towards Brazilian markets.",
            "highlights": [
                "25 oil and gas concession blocks with secure 20-year renewable licenses.",
                "Flexible corporate joint-venture models or shared block farm-ins.",
                "Certified crude and gas reserves with direct pipeline interconnection.",
                "Northern Pipeline reversal unlocking high-value export markets to Brazil.",
                "Total project capex: USD 1,870 Million."
            ],
            "metrics": [
                {
                    "label": "Total Ticket",
                    "val": "USD 1,870M",
                    "color": "text-gold"
                },
                {
                    "label": "Concessions",
                    "val": "25 Blocks",
                    "color": "text-cyan"
                },
                {
                    "label": "Term",
                    "val": "20 Yrs Renewable",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "JV / Farm-In",
                    "color": "text-gold"
                }
            ]
        }
    },
    "palermo-aike-chubut": {
        "id": "palermo-aike-chubut",
        "category": "petroleo",
        "sector": "Petróleo, Gas & Infraestructura",
        "assignedAgent": "daniel",
        "amountUSD": 200.0,
        "basePrice": 200000000,
        "overpriceTarget": 10000000,
        "currency": "USD",
        "amountDisplay": "A Estructurar con Socio",
        "defaultStatus": "activo",
        "modality": "Socio Inversor",
        "roi": "Plan No Convencional",
        "statusProgress": "Proyecto oficial integral presentado por Chubut para exploración no convencional",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p2_2.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Shale Oil & Gas — Palermo Aike",
            "title": "Desarrollo No Convencional Palermo Aike Chubut",
            "location": "Chubut / Cuenca Austral, Argentina",
            "statusLabel": "Socio Inversor — Plan Integral",
            "description": "Proyecto exploratorio y de desarrollo no convencional en la formación Palermo Aike, considerada la segunda mayor reserva de shale de Argentina después de Vaca Muerta. Presentado oficialmente por la provincia de Chubut.",
            "thesis": "Oportunidad pionera de ingresar en la frontera no convencional de la Patagonia sur con beneficios tributarios provinciales y elegibilidad para el régimen RIGI.",
            "highlights": [
                "Segunda roca generadora no convencional de mayor volumen de Argentina.",
                "Proyecto integral con respaldo institucional de la Gobernación de Chubut.",
                "Búsqueda de operadoras y consorcios inversores para pozos exploratorios horizontales.",
                "Infraestructura portuaria y de evacuación en el Atlántico Sur.",
                "Elegible para incentivos RIGI de libre disponibilidad de divisas."
            ],
            "metrics": [
                {
                    "label": "Formación",
                    "val": "Palermo Aike",
                    "color": "text-gold"
                },
                {
                    "label": "Recurso",
                    "val": "Shale Oil & Gas",
                    "color": "text-cyan"
                },
                {
                    "label": "Provincia",
                    "val": "Chubut",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Socio Inversor",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Shale Play — Palermo Aike",
            "title": "Palermo Aike Unconventional Play Chubut",
            "location": "Chubut / Austral Basin, Argentina",
            "statusLabel": "Equity Partner — Master Plan",
            "description": "Unconventional exploration and development play targeting the Palermo Aike shale formation, recognized as Argentina's second-largest shale deposit after Vaca Muerta. Officially sponsored by Chubut Province.",
            "thesis": "Pioneering entry into Argentina's newest shale frontier with strong provincial incentives and full RIGI federal investment eligibility.",
            "highlights": [
                "Second-largest unconventional shale resource in Argentina.",
                "Comprehensive development package sponsored by the Chubut Government.",
                "Seeking operating and financial partners for horizontal drilling campaign.",
                "Proximity to deepwater Atlantic export terminals.",
                "Eligible for RIGI FX deregulation and tax stability benefits."
            ],
            "metrics": [
                {
                    "label": "Formation",
                    "val": "Palermo Aike",
                    "color": "text-gold"
                },
                {
                    "label": "Resource",
                    "val": "Shale Oil & Gas",
                    "color": "text-cyan"
                },
                {
                    "label": "Province",
                    "val": "Chubut",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Equity Partner",
                    "color": "text-gold"
                }
            ]
        }
    },
    "vacamuerta-3refinerias-puerto": {
        "id": "vacamuerta-3refinerias-puerto",
        "category": "petroleo",
        "sector": "Petróleo, Gas & Infraestructura",
        "assignedAgent": "daniel",
        "amountUSD": 350.0,
        "basePrice": 350000000,
        "overpriceTarget": 15000000,
        "currency": "USD",
        "amountDisplay": "USD 350M",
        "defaultStatus": "activo",
        "modality": "Venta Llave en Mano",
        "roi": "Reactivación 6 Meses",
        "statusProgress": "3 refinerías y Puerto Galván con título propio; puesta a punto a 6 meses",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p2_3.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Infraestructura & Refinación Vaca Muerta",
            "title": "Paquete 3 Refinerías en Vaca Muerta + Puerto de Aguas Profundas",
            "location": "Cuenca Neuquina & Puerto Galván (Bahía Blanca), Argentina",
            "statusLabel": "USD 350M — Venta Llave en Mano",
            "description": "Excepcional paquete accionario que incluye 3 unidades de negocio de refinación especializadas en Vaca Muerta y terminal marítima de aguas profundas con título de propiedad en Puerto Galván, Bahía Blanca. Reactivación llave en mano a 6 meses.",
            "thesis": "Infraestructura estratégica de downstream y biocombustibles acoplada a logística portuaria privada de aguas profundas, eliminando cuellos de botella en la exportación de crudo.",
            "highlights": [
                "Refinería 1: Tratamiento de crudos livianos (1.400 m³/día; almacenaje 22.000 m³).",
                "Refinería 2: Refinación de naftas, hidrotratamiento e isomerización (1.040 m³/día; almacenaje 8.000 m³).",
                "Refinería 3: Producción de biocombustibles (130 ton/día; almacenaje 2.000 ton).",
                "Puerto Galván: Con título de propiedad privado en Bahía Blanca con muelle de aguas profundas.",
                "Modalidad llave en mano con 6 meses para reactivación total y acompañamiento estratégico por USD 350M."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 350M",
                    "color": "text-gold"
                },
                {
                    "label": "Refinerías",
                    "val": "3 Complejos",
                    "color": "text-cyan"
                },
                {
                    "label": "Puerto",
                    "val": "Propiedad Galván",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Llave en Mano",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Refining & Deepwater Port Hub",
            "title": "3 Vaca Muerta Refineries + Deepwater Port Complex",
            "location": "Neuquina Basin & Puerto Galván (Bahía Blanca), Argentina",
            "statusLabel": "USD 350M — Turnkey Asset Sale",
            "description": "Strategic equity package comprising 3 specialized refining business units in Vaca Muerta plus a private deepwater ocean terminal with freehold title in Puerto Galván, Bahía Blanca. Turnkey restart within 6 months.",
            "thesis": "Unmatched combination of midstream refining and private oceanfront port infrastructure debottlenecking export logistics for Vaca Muerta crude.",
            "highlights": [
                "Refinery 1: Light crude processing (1,400 m³/day; 22,000 m³ storage capacity).",
                "Refinery 2: Hydrotreating, reforming, and isomerization (1,040 m³/day; 8,000 m³ storage).",
                "Refinery 3: Biofuel manufacturing unit (130 tons/day; 2,000 tons storage).",
                "Deepwater Ocean Terminal: Freehold title in Puerto Galván, Bahía Blanca port.",
                "Turnkey delivery within 6 months with full engineering transition for USD 350M."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 350M",
                    "color": "text-gold"
                },
                {
                    "label": "Refineries",
                    "val": "3 Units",
                    "color": "text-cyan"
                },
                {
                    "label": "Deepwater Port",
                    "val": "Freehold Title",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Turnkey Sale",
                    "color": "text-gold"
                }
            ]
        }
    },
    "vacamuerta-operadora-15concesiones": {
        "id": "vacamuerta-operadora-15concesiones",
        "category": "petroleo",
        "sector": "Petróleo, Gas & Infraestructura",
        "assignedAgent": "daniel",
        "amountUSD": 340.0,
        "basePrice": 340000000,
        "overpriceTarget": 15000000,
        "currency": "USD",
        "amountDisplay": "USD 340M",
        "defaultStatus": "activo",
        "modality": "Socio Inversor",
        "roi": "En Producción",
        "statusProgress": "15 concesiones en 3.000 km², ~1.200 pozos, >500 empleados; inversión llave en mano",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p3_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Upstream Operadora — Vaca Muerta",
            "title": "Operadora de Pozos Petroleros en Vaca Muerta (15 Concesiones)",
            "location": "Cuenca Neuquina, Neuquén, Argentina",
            "statusLabel": "USD 340M — Socio Inversor",
            "description": "Compañía operadora en marcha con 15 concesiones de explotación activas sobre una superficie de 3.000 km² en la Cuenca Neuquina. Bloque de 1.200 pozos y más de 500 empleados. Plan llave en mano de mejora con tecnología No Convencional.",
            "thesis": "Empresa petrolera consolidada a escala corporativa con formidable masa crítica de pozos para reactivación y estimulación horizontal en tight y shale.",
            "highlights": [
                "15 concesiones de explotación hidrocarburífera en 3.000 km² de Cuenca Neuquina.",
                "Parque activo de aproximadamente 1.200 pozos en producción con base operativa propia.",
                "Estructura corporativa sólida con más de 500 colaboradores técnicos y operarios.",
                "Inversión de USD 340M estructurada para plan llave en mano con técnica No Convencional.",
                "Socio inversor con participación de control o co-gestión ejecutiva."
            ],
            "metrics": [
                {
                    "label": "Inversión Final",
                    "val": "USD 340M",
                    "color": "text-gold"
                },
                {
                    "label": "Superficie",
                    "val": "3.000 km²",
                    "color": "text-cyan"
                },
                {
                    "label": "Pozos",
                    "val": "1.200 Pozos",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Socio Inversor",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Upstream Operator — Vaca Muerta",
            "title": "Oilfield Operator in Vaca Muerta (15 Concessions)",
            "location": "Neuquina Basin, Neuquén, Argentina",
            "statusLabel": "USD 340M — Equity Partner",
            "description": "Fully established independent oil & gas operator holding 15 exploitation licenses across 3,000 km² in the prolific Neuquina Basin. ~1,200 active wells and >500 staff. Turnkey unconventional well enhancement plan.",
            "thesis": "Corporate-scale platform company with massive well stock and extensive acreage ready for high-yield unconventional workover and horizontal re-stimulation.",
            "highlights": [
                "15 exploitation licenses covering 3,000 km² in prime Vaca Muerta play.",
                "Operational base managing approximately 1,200 active producing wells.",
                "Experienced workforce with more than 500 skilled petroleum engineers and crew.",
                "Turnkey capital plan of USD 340M deploying unconventional stimulation.",
                "Equity partnership with shared governance or controlling stake."
            ],
            "metrics": [
                {
                    "label": "Final Ticket",
                    "val": "USD 340M",
                    "color": "text-gold"
                },
                {
                    "label": "Acreage",
                    "val": "3,000 km²",
                    "color": "text-cyan"
                },
                {
                    "label": "Well Stock",
                    "val": "1,200 Wells",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Equity Partner",
                    "color": "text-gold"
                }
            ]
        }
    },
    "pozo-salta": {
        "id": "pozo-salta",
        "category": "petroleo",
        "sector": "Petróleo, Gas & Infraestructura",
        "assignedAgent": "daniel",
        "amountUSD": 15.0,
        "basePrice": 15000000,
        "overpriceTarget": 1000000,
        "currency": "USD",
        "amountDisplay": "USD 15M CAPEX",
        "defaultStatus": "activo",
        "modality": "Infraestructura & Servicios",
        "roi": "3 Años",
        "statusProgress": "Planta de tratamiento y secado de cuttings en zona hidrocarburífera de Salta",
        "isPrivatePlacement": false,
        "pdfPath": "assets/docs/pozo_salta_2026.pdf",
        "totalSlides": 12,
        "slidePrefix": "assets/slides/Proyecto_Pozo_Salta_2026_page_",
        "coverImage": "assets/slides/Proyecto_Pozo_Salta_2026_page_2.png",
        "es": {
            "categoryTag": "Servicios Petroleros & Cuttings",
            "title": "Proyecto Pozo Salta — Infraestructura & Secado de Cuttings",
            "location": "Cuenca Noroeste, Salta, Argentina",
            "statusLabel": "USD 15M CAPEX",
            "description": "Centro logístico y ambiental para tratamiento térmico y disposición de lodos y recortes de perforación (cuttings) con certificación ambiental en el NOA.",
            "thesis": "Servicio ambiental mandatorio para operadoras con tarifas indexadas y alta tasa de utilización de planta.",
            "highlights": [
                "USD 15M CAPEX con recupero a 3 años.",
                "Capacidad para 500 m³ diarios de cuttings.",
                "Contratos vigentes de servicio ambiental.",
                "Normativa ambiental estricta que asegura demanda inelástica.",
                "Ubicación en nudo neurálgico de perforación."
            ],
            "metrics": [
                {
                    "label": "CAPEX Requerido",
                    "val": "USD 15M",
                    "color": "text-gold"
                },
                {
                    "label": "Capacidad",
                    "val": "500 m³/día",
                    "color": "text-cyan"
                },
                {
                    "label": "Recupero",
                    "val": "3 Años",
                    "color": "text-green"
                },
                {
                    "label": "Servicio",
                    "val": "Mandatorio",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Oilfield Environmental Services",
            "title": "Pozo Salta Project — Cuttings Drying & Treatment",
            "location": "Northwest Basin, Salta, Argentina",
            "statusLabel": "USD 15M CAPEX",
            "description": "Environmental and logistics hub for thermal treatment and recycling of drilling muds and cuttings serving Northwest Argentina oilfields.",
            "thesis": "Mandatory compliance service with recurring dollar-linked contracts and strong EBITDA margins.",
            "highlights": [
                "USD 15M CAPEX with 3-year payback.",
                "Processing capacity of 500 m³/day.",
                "Active long-term environmental service agreements.",
                "Inelastic demand driven by strict environmental regulations.",
                "Prime geographical hub near drilling clusters."
            ],
            "metrics": [
                {
                    "label": "Required CAPEX",
                    "val": "USD 15M",
                    "color": "text-gold"
                },
                {
                    "label": "Throughput",
                    "val": "500 m³/day",
                    "color": "text-cyan"
                },
                {
                    "label": "Payback",
                    "val": "3 Years",
                    "color": "text-green"
                },
                {
                    "label": "Compliance",
                    "val": "Mandatory",
                    "color": "text-gold"
                }
            ]
        }
    },
    "asesoramiento-inbound-funds": {
        "id": "asesoramiento-inbound-funds",
        "category": "asesoramiento",
        "sector": "Asesoramiento Financiero",
        "assignedAgent": "daniel",
        "amountUSD": 0.0,
        "basePrice": 0,
        "overpriceTarget": 0,
        "currency": "USD",
        "amountDisplay": "Mandato Institucional",
        "defaultStatus": "activo",
        "modality": "Asset Management & Advisory",
        "roi": "Continuo",
        "statusProgress": "Servicio institucional integral con equipo multidisciplinario y cartelera curada",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p1_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Banca de Inversión & Mandatos",
            "title": "Gestión y Administración Integral de Grupos Inversores",
            "location": "Buenos Aires / Córdoba / Global",
            "statusLabel": "Servicio Institucional",
            "description": "Acompañamiento integral para grupos inversores y fondos internacionales (FDI) que buscan estructurar y desplegar capital en activos estratégicos de la economía real argentina.",
            "thesis": "Plataforma de aterrizaje seguro ('soft landing') que minimiza la fricción regulatoria, cambiaria y legal, asegurando la selección de proyectos con estricto estándar de debida diligencia.",
            "highlights": [
                "Cartelera activa de oportunidades de inversión auditadas y de alto rendimiento.",
                "Estructuración de vehículos societarios locales, cuentas fiduciarias y compliance cambiario.",
                "Equipo multidisciplinario: analistas financieros, ingenieros, abogados y escribanos.",
                "Gobierno corporativo y seguimiento de avance de proyectos en tiempo real.",
                "Asignación de consultor dedicado para interlocución con juntas directivas."
            ],
            "metrics": [
                {
                    "label": "Servicio",
                    "val": "Gestión Integral",
                    "color": "text-gold"
                },
                {
                    "label": "Alcance",
                    "val": "Fondos Extranjeros",
                    "color": "text-cyan"
                },
                {
                    "label": "Equipo",
                    "val": "Multidisciplinario",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Mandato Privado",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Investment Banking & Advisory",
            "title": "Comprehensive Asset Management for Investment Groups",
            "location": "Buenos Aires / Córdoba / Global",
            "statusLabel": "Institutional Service",
            "description": "End-to-end advisory and management services for international private equity and foreign direct investment (FDI) groups allocating capital into real Argentine assets.",
            "thesis": "Turnkey soft-landing platform mitigating regulatory, FX, and legal complexity while delivering rigorously vetted investment-grade deals.",
            "highlights": [
                "Curated pipeline of audited, high-yield investment proposals across key sectors.",
                "Corporate vehicle structuring, fiduciary escrow administration, and FX compliance.",
                "Multidisciplinary team of financial modelers, engineers, and legal counsels.",
                "Corporate governance and real-time project milestone tracking.",
                "Dedicated partner assignment for board-level liaison."
            ],
            "metrics": [
                {
                    "label": "Service",
                    "val": "Asset Management",
                    "color": "text-gold"
                },
                {
                    "label": "Scope",
                    "val": "Foreign Funds",
                    "color": "text-cyan"
                },
                {
                    "label": "Team",
                    "val": "Multidisciplinary",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Private Mandate",
                    "color": "text-gold"
                }
            ]
        }
    },
    "asesoramiento-gobiernos": {
        "id": "asesoramiento-gobiernos",
        "category": "asesoramiento",
        "sector": "Asesoramiento Financiero",
        "assignedAgent": "daniel",
        "amountUSD": 0.0,
        "basePrice": 0,
        "overpriceTarget": 0,
        "currency": "USD",
        "amountDisplay": "Estructuración a Medida",
        "defaultStatus": "activo",
        "modality": "Estructuración Financiera",
        "roi": "Estructural",
        "statusProgress": "Asesoría para entes públicos, provincias y municipios bajo marco RIGI / PPP",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p2_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Finanzas Públicas & Infraestructura",
            "title": "Financiamiento de Proyectos Gubernamentales e Infraestructura",
            "location": "Nación, Provincias y Municipios, Argentina",
            "statusLabel": "Advisory Estructurado",
            "description": "Diseño y estructuración de instrumentos de financiamiento para estados provinciales, municipios y entes autárquicos destinados a infraestructura energética, vial, hídrica y de transporte.",
            "thesis": "Monetización y apalancamiento de fondos públicos mediante bonos verdes, fideicomisos de garantía y esquemas PPP/RIGI para viabilizar obras de gran porte sin comprometer el balance fiscal.",
            "highlights": [
                "Estructuración de bonos verdes, títulos de deuda y fideicomisos de obra pública.",
                "Adecuación y estructuración de proyectos estratégicos al Régimen RIGI (Ley 27.742).",
                "Modelos de asociación público-privada (PPP) con repago por tarifas o peajes.",
                "Dictámenes de viabilidad económica, fiscal y financiera auditables.",
                "Vínculo con organismos multilaterales de crédito y bancos de desarrollo."
            ],
            "metrics": [
                {
                    "label": "Servicio",
                    "val": "Finanzas Públicas",
                    "color": "text-gold"
                },
                {
                    "label": "Instrumentos",
                    "val": "Bonos & Fideicomisos",
                    "color": "text-cyan"
                },
                {
                    "label": "Marco",
                    "val": "RIGI / PPP",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Estructuración",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Public Finance & Infrastructure",
            "title": "Government Project Financing & Infrastructure Advisory",
            "location": "Federal, Provincial & Municipal, Argentina",
            "statusLabel": "Structured Advisory",
            "description": "Design and structuring of financing instruments for provincial governments, municipalities, and state utilities targeting energy, road, water, and transport infrastructure.",
            "thesis": "Public balance-sheet optimization via green bonds, infrastructure trusts, and PPP/RIGI mechanisms to fund large-scale developments.",
            "highlights": [
                "Green bond issuances, debt certificates, and public infrastructure trust funds.",
                "Project alignment with the federal RIGI framework (Law 27,742).",
                "Public-Private Partnership (PPP) modeling with user-toll or availability fee repayment.",
                "Auditable economic and fiscal feasibility appraisals.",
                "Direct structuring liaison with multilateral development banks."
            ],
            "metrics": [
                {
                    "label": "Service",
                    "val": "Public Finance",
                    "color": "text-gold"
                },
                {
                    "label": "Instruments",
                    "val": "Bonds & Trusts",
                    "color": "text-cyan"
                },
                {
                    "label": "Framework",
                    "val": "RIGI / PPP",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Financial Advisory",
                    "color": "text-gold"
                }
            ]
        }
    },
    "asesoramiento-real-estate": {
        "id": "asesoramiento-real-estate",
        "category": "asesoramiento",
        "sector": "Asesoramiento Financiero",
        "assignedAgent": "daniel",
        "amountUSD": 0.0,
        "basePrice": 0,
        "overpriceTarget": 0,
        "currency": "USD",
        "amountDisplay": "Desarrollo Fiduciario",
        "defaultStatus": "activo",
        "modality": "Desarrollo & Advisory",
        "roi": "Renta / Plusvalía",
        "statusProgress": "Vehículos fiduciarios, parques logísticos, loteos y fondos REIT dolarizados",
        "isPrivatePlacement": false,
        "coverImage": "assets/images/img_ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_p3_1.jpeg",
        "totalSlides": 5,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "es": {
            "categoryTag": "Bienes Raíces & REITs",
            "title": "Gestión de Proyectos de Bienes Raíces & Construcción",
            "location": "Polos Corporativos e Industriales, Argentina",
            "statusLabel": "Estructuración Fiduciaria",
            "description": "Estructuración integral de vehículos de inversión inmobiliaria de renta corporativa (REITs), parques industriales, loteos turísticos y naves logísticas 'triple A' con flujos dolarizados.",
            "thesis": "Protección patrimonial y rentabilidad en USD mediante el apalancamiento de activos de tierra estratégicos desarrollados bajo contratos fiduciarios de estricta segregación patrimonial.",
            "highlights": [
                "Vehículos fiduciarios de inversión inmobiliaria (REITs) transparentes y dolarizados.",
                "Desarrollo de naves industriales, centros de distribución y polos logísticos.",
                "Modelado financiero de flujos de fondos, absorción comercial y retorno al inversor.",
                "Segregación patrimonial y seguridad jurídica respaldada en el CCCN (Ley 26.994).",
                "Comercialización de unidades de renta corporativa con inquilinos multinacionales."
            ],
            "metrics": [
                {
                    "label": "Servicio",
                    "val": "Real Estate Advisory",
                    "color": "text-gold"
                },
                {
                    "label": "Activos",
                    "val": "Logística & Hotelería",
                    "color": "text-cyan"
                },
                {
                    "label": "Moneda",
                    "val": "Flujos USD",
                    "color": "text-green"
                },
                {
                    "label": "Modalidad",
                    "val": "Estructuración",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Real Estate & REIT Structuring",
            "title": "Real Estate & Construction Project Management",
            "location": "Corporate & Industrial Hubs, Argentina",
            "statusLabel": "Fiduciary Advisory",
            "description": "Comprehensive design and administration of commercial real estate investment trusts (REITs), industrial logistics parks, master-planned residential communities, and prime yield assets.",
            "thesis": "Wealth preservation and inflation-hedged USD cash yields leveraging prime land assets governed by bankruptcy-remote fiduciary trust contracts.",
            "highlights": [
                "USD-denominated transparent Real Estate Investment Trust (REIT) structures.",
                "Development of prime industrial warehouses, logistics parks, and lifestyle communities.",
                "Quantitative discounted cash flow modeling, absorption metrics, and IRR targets.",
                "Strict legal asset ring-fencing under Argentine Civil and Commercial Code (Law 26,994).",
                "Commercial leasing to multinational corporate tenants."
            ],
            "metrics": [
                {
                    "label": "Service",
                    "val": "REIT & RE Advisory",
                    "color": "text-gold"
                },
                {
                    "label": "Asset Class",
                    "val": "Industrial / Yield",
                    "color": "text-cyan"
                },
                {
                    "label": "Currency",
                    "val": "USD Yield",
                    "color": "text-green"
                },
                {
                    "label": "Deal Type",
                    "val": "Fiduciary Vehicle",
                    "color": "text-gold"
                }
            ]
        }
    },
    "reit-strategy": {
        "id": "reit-strategy",
        "category": "reit",
        "sector": "Real Estate / REIT",
        "assignedAgent": "daniel",
        "amountUSD": 30.0,
        "basePrice": 30000000,
        "overpriceTarget": 1500000,
        "currency": "USD",
        "amountDisplay": "USD 30M Fondo",
        "defaultStatus": "activo",
        "modality": "Fondo Inmobiliario",
        "roi": "12% Anual USD",
        "statusProgress": "Estrategia REIT dolarizada en activos triple A",
        "isPrivatePlacement": false,
        "pdfPath": "assets/docs/reit_strategy_2026.pdf",
        "totalSlides": 11,
        "slidePrefix": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_",
        "coverImage": "assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_1.png",
        "es": {
            "categoryTag": "Fondo Inmobiliario REIT",
            "title": "ENERGY CPY Argentina REIT Investment Strategy 2026",
            "location": "CABA & Corredor Norte, Argentina",
            "statusLabel": "USD 30M — Fondo Dolarizado",
            "description": "Estrategia fiduciaria de inversión inmobiliaria de renta corporativa dolarizada (REIT) enfocada en oficinas premium y centros logísticos con contratos a largo plazo.",
            "thesis": "Renta neta distribuible del 10% al 12% anual en USD combinada con plusvalía de capital en activos irreemplazables.",
            "highlights": [
                "Portafolio diversificado en activos inmobiliarios clase A+.",
                "Contratos de alquiler corporativo dolarizados a 5-10 años.",
                "Rendimiento anual neto proyectado del 10% al 12% en USD.",
                "Vehículo fiduciario independiente con estricto gobierno corporativo.",
                "Ticket de ingreso estructurado para inversores institucionales y privados."
            ],
            "metrics": [
                {
                    "label": "Fondo Objetivo",
                    "val": "USD 30M",
                    "color": "text-gold"
                },
                {
                    "label": "Rendimiento",
                    "val": "10% - 12% USD",
                    "color": "text-cyan"
                },
                {
                    "label": "Contratos",
                    "val": "5 - 10 Años",
                    "color": "text-green"
                },
                {
                    "label": "Tipo",
                    "val": "REIT Dolarizado",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Real Estate Investment Trust",
            "title": "ENERGY CPY Argentina REIT Investment Strategy 2026",
            "location": "Buenos Aires Prime Corridor, Argentina",
            "statusLabel": "USD 30M — USD Fund",
            "description": "Fiduciary corporate yield real estate investment strategy (REIT) focused on prime offices and modern logistics hubs backed by long-term corporate leases.",
            "thesis": "Targeted net annual yield of 10% to 12% in USD combined with capital appreciation in trophy commercial assets.",
            "highlights": [
                "Diversified portfolio in prime Class A+ real estate.",
                "Long-term USD-indexed commercial leases (5-10 years).",
                "Projected net annual distribution of 10% to 12% in USD.",
                "Ring-fenced bankruptcy-remote trust with institutional governance.",
                "Structured entry tickets for qualified private and institutional capital."
            ],
            "metrics": [
                {
                    "label": "Target Fund",
                    "val": "USD 30M",
                    "color": "text-gold"
                },
                {
                    "label": "Yield",
                    "val": "10% - 12% USD",
                    "color": "text-cyan"
                },
                {
                    "label": "Lease Term",
                    "val": "5 - 10 Years",
                    "color": "text-green"
                },
                {
                    "label": "Asset Type",
                    "val": "USD REIT",
                    "color": "text-gold"
                }
            ]
        }
    },
    "pesca-gran-escala": {
        "id": "pesca-gran-escala",
        "category": "pesca",
        "sector": "Pesca Industrial",
        "assignedAgent": "daniel",
        "amountUSD": 260.0,
        "basePrice": 260000000,
        "overpriceTarget": 12000000,
        "currency": "USD",
        "amountDisplay": "USD 260M CAPEX",
        "defaultStatus": "activo",
        "modality": "Flota & Industria",
        "roi": "4 Años",
        "statusProgress": "Flota activa de 16 buques en ZEE y planta de congelado en tierra",
        "isPrivatePlacement": false,
        "pdfPath": "assets/docs/pesca_industrial_2026.pdf",
        "totalSlides": 13,
        "slidePrefix": "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_",
        "coverImage": "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_2.png",
        "es": {
            "categoryTag": "Pesca Industrial Gran Escala",
            "title": "Proyecto 6.6 — Pesca Industrial de Gran Escala en Patagonia",
            "location": "Zona Económica Exclusiva (ZEE) Argentina",
            "statusLabel": "USD 260M CAPEX",
            "description": "Modelo consolidado de alta rentabilidad para captura y exportación de especies marinas premium (Merluza Hubbsi y Langostino Rojo) con flota activa de 16 buques de gran calado y planta de congelado propia.",
            "thesis": "Activo estratégico con derechos consolidados de captura en aguas argentinas generando ingresos brutos proyectados de USD 600M anuales.",
            "highlights": [
                "USD 260 Millones en CAPEX requerido para operación de gran escala.",
                "USD 600 Millones/año en ingresos brutos proyectados por capturas.",
                "Flota activa de 16 buques altamente equipados para aguas patagónicas.",
                "Planta terrestre propia de procesado, empaque y congelado rápido.",
                "Track record comprobado con más de 25 años de operabilidad exitosa."
            ],
            "metrics": [
                {
                    "label": "CAPEX Requerido",
                    "val": "USD 260M",
                    "color": "text-gold"
                },
                {
                    "label": "Ingresos Proy.",
                    "val": "USD 600M/año",
                    "color": "text-cyan"
                },
                {
                    "label": "Flota Activa",
                    "val": "16 Buques",
                    "color": "text-green"
                },
                {
                    "label": "Mercado",
                    "val": "Exportación 100%",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Industrial High-Seas Fishing",
            "title": "Project 6.6 — Large-Scale Industrial Fishing in Patagonia",
            "location": "Exclusive Economic Zone (EEZ) Argentina",
            "statusLabel": "USD 260M CAPEX",
            "description": "Established high-yield marine capture and processing enterprise targeting prime species (Argentine Hake and Red Shrimp) with an active fleet of 16 deep-sea vessels and onshore freezing facility.",
            "thesis": "Secured fishing quotas in Argentine South Atlantic waters delivering USD 600M/yr in projected gross export revenues.",
            "highlights": [
                "USD 260M CAPEX deployment for massive industrial scale.",
                "USD 600M/year projected gross revenues from high-value seafood.",
                "Active operational fleet of 16 deep-sea trawlers and jiggers.",
                "Proprietary onshore quick-freeze and processing facility.",
                "Over 25-year successful operating track record."
            ],
            "metrics": [
                {
                    "label": "Required CAPEX",
                    "val": "USD 260M",
                    "color": "text-gold"
                },
                {
                    "label": "Projected Rev.",
                    "val": "USD 600M/yr",
                    "color": "text-cyan"
                },
                {
                    "label": "Active Fleet",
                    "val": "16 Vessels",
                    "color": "text-green"
                },
                {
                    "label": "Target Market",
                    "val": "100% Export",
                    "color": "text-gold"
                }
            ]
        }
    },
    "pesca-integrado": {
        "id": "pesca-integrado",
        "category": "pesca",
        "sector": "Pesca Industrial",
        "assignedAgent": "daniel",
        "amountUSD": 5.5,
        "basePrice": 5500000,
        "overpriceTarget": 500000,
        "currency": "USD",
        "amountDisplay": "USD 5.5M CAPEX",
        "defaultStatus": "activo",
        "modality": "Operación Boutique",
        "roi": "3 Años",
        "statusProgress": "Ecosistema pesquero integrado en Patagonia",
        "isPrivatePlacement": false,
        "pdfPath": "assets/docs/pesca_industrial_2026.pdf",
        "totalSlides": 13,
        "slidePrefix": "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_",
        "coverImage": "assets/slides/Proyectos_de_Pesca_Industrial_en_Argentina_2026_page_6.png",
        "es": {
            "categoryTag": "Pesca Industrial & Logística",
            "title": "Proyecto 6.7 — Ecosistema Pesquero Integrado Patagonia",
            "location": "Puerto Madryn & Rawson, Chubut, Argentina",
            "statusLabel": "USD 5.5M CAPEX",
            "description": "Desarrollo boutique modular que integra buques tangoneros costeros, procesamiento en planta y logística de frío para exportación directa a mercados asiáticos y europeos.",
            "thesis": "Alta rentabilidad operativa con bajo ticket de ingreso y ciclo de caja ágil basado en la captura del codiciado Langostino Patagónico.",
            "highlights": [
                "USD 5.5 Millones en CAPEX para puesta a punto y escalamiento.",
                "Enfocado en Langostino Salvaje de alto valor comercial.",
                "Contratos cerrados de exportación FOB Puerto Madryn.",
                "Estructura ágil con rápida rotación de capital de trabajo.",
                "Retorno proyectado de la inversión en 3 años."
            ],
            "metrics": [
                {
                    "label": "CAPEX Requerido",
                    "val": "USD 5.5M",
                    "color": "text-gold"
                },
                {
                    "label": "Producto",
                    "val": "Langostino Salvaje",
                    "color": "text-cyan"
                },
                {
                    "label": "Recupero",
                    "val": "3 Años",
                    "color": "text-green"
                },
                {
                    "label": "Destino",
                    "val": "Europa / Asia",
                    "color": "text-gold"
                }
            ]
        },
        "en": {
            "categoryTag": "Integrated Fishery & Cold Chain",
            "title": "Project 6.7 — Integrated Fishery Ecosystem Patagonia",
            "location": "Puerto Madryn & Rawson, Chubut, Argentina",
            "statusLabel": "USD 5.5M CAPEX",
            "description": "Modular boutique fishery combining coastal outrigger vessels, onshore rapid processing, and cold-chain logistics for direct export to Asian and European distributors.",
            "thesis": "High operating margin with accessible ticket size targeting wild-caught Argentine Red Shrimp.",
            "highlights": [
                "USD 5.5 Million CAPEX required for fleet upgrade and scaling.",
                "Focus on wild Patagonian Red Shrimp with strong export pricing.",
                "Secured FOB supply contracts from Puerto Madryn.",
                "Lean operating model with rapid working capital turnover.",
                "3-year estimated capital payback."
            ],
            "metrics": [
                {
                    "label": "Required CAPEX",
                    "val": "USD 5.5M",
                    "color": "text-gold"
                },
                {
                    "label": "Primary Target",
                    "val": "Wild Red Shrimp",
                    "color": "text-cyan"
                },
                {
                    "label": "Payback",
                    "val": "3 Years",
                    "color": "text-green"
                },
                {
                    "label": "Destination",
                    "val": "Europe / Asia",
                    "color": "text-gold"
                }
            ]
        }
    }
};

const TRANSLATIONS = {
    es: {
        brand_sub: "INVESTMENT SHOWROOM",
        filter_cat_hoteleria: "Hotelería & Casinos",
        filter_cat_agro: "Agro, Campo & Industria",
        filter_cat_mineria: "Minería & Metales",
        filter_cat_petroleo: "Petróleo, Gas & Infraestructura",
        filter_cat_asesoramiento: "Asesoramiento Financiero",
        card_btn_onepager: "Resumen Ejecutivo (1 Pág)",
        card_badge_private: "🔒 Private Placement / Off-Market",
        card_cta_private: "Solicitar Invitación & NDA",
        private_amount: "A Invitación Exclusiva",
        
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
        filter_cat_hoteleria: "Hospitality & Casinos",
        filter_cat_agro: "Agribusiness & Industry",
        filter_cat_mineria: "Mining & Critical Minerals",
        filter_cat_petroleo: "Oil, Gas & Infrastructure",
        filter_cat_asesoramiento: "Financial Advisory & Structuring",
        card_btn_onepager: "Executive Summary (1 Page)",
        card_badge_private: "🔒 Private Placement / Off-Market",
        card_cta_private: "Request Invitation & NDA",
        private_amount: "Exclusive Invitation Only",
        
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
        const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es;

        let statusClass = "status-badge-activo";
        let statusText = dict.card_status_activo || "Activo";
        if (p.isPrivatePlacement) {
            statusClass = "status-badge-private";
            statusText = dict.card_badge_private || "🔒 Private Placement";
        } else if (status === "tramite") {
            statusClass = "status-badge-tramite";
            statusText = dict.card_status_tramite || "En Trámite";
        } else if (status === "vendido") {
            statusClass = "status-badge-vendido";
            statusText = dict.card_status_vendido || "Vendido";
        }

        const card = document.createElement("article");
        card.className = "project-card";
        card.setAttribute("data-id", p.id);
        card.setAttribute("data-category", p.category);
        card.setAttribute("data-amount", p.amountUSD);
        card.setAttribute("data-status", status);

        const amountText = p.isPrivatePlacement ? (dict.private_amount || "A Invitación Exclusiva") : p.amountDisplay;

        card.innerHTML = `
            <div class="card-image-wrapper">
                <span class="card-tag tag-${p.category}">${langData.categoryTag}</span>
                <span class="card-status-badge ${statusClass}">
                    <span class="status-indicator-dot"></span> ${statusText}
                </span>
                <img src="${p.coverImage || 'assets/slides/ENERGY_CPY_Argentina_REIT_Investment_Strategy___Argentina_2026_page_1.png'}" alt="${langData.title}" class="card-img" loading="lazy">
                <div class="card-overlay" onclick="openOnePager('${p.id}')">
                    <span class="overlay-btn"><i class="fa-solid fa-file-contract"></i> ${dict.card_btn_onepager || 'Resumen Ejecutivo (1 Pág)'}</span>
                </div>
            </div>
            <div class="card-body">
                <div class="card-header-info">
                    <span class="card-location"><i class="fa-solid fa-location-dot"></i> ${langData.location}</span>
                    <span class="card-ticket-amount text-gold"><strong>${amountText}</strong></span>
                </div>
                <h3 class="card-title">${langData.title}</h3>
                <p class="card-desc">${langData.description}</p>
                
                <div class="metrics-grid">
                    ${(langData.metrics || []).slice(0, 3).map(m => `
                        <div class="metric-item">
                            <span class="metric-val ${m.color}">${m.val}</span>
                            <span class="metric-lbl">${m.label}</span>
                        </div>
                    `).join("")}
                </div>

                <div class="card-footer-actions">
                    <button class="btn btn-card-op" onclick="openOnePager('${p.id}')">
                        <i class="fa-solid fa-file-contract"></i> ${dict.card_btn_onepager || 'Resumen (1 Pág)'}
                    </button>
                    ${p.isPrivatePlacement ? `
                        <button class="btn btn-card-private" onclick="requestPrivateAccess('${p.id}')">
                            <i class="fa-solid fa-key"></i> ${dict.card_cta_private || 'Solicitar NDA'}
                        </button>
                    ` : `
                        <button class="btn btn-card" onclick="openProjectModal('${p.id}')" title="Ver Presentación">
                            <i class="fa-solid fa-images"></i> ${p.totalSlides || 5}
                        </button>
                    `}
                    ${p.pdfPath ? `
                    <a href="${p.pdfPath}" download class="btn btn-icon-download" title="Descargar PDF">
                        <i class="fa-solid fa-download"></i>
                    </a>` : ''}
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



/* ==========================================================================
   ONE-PAGER EXECUTIVE SUMMARY MODAL & PRINT CONTROLLER (ENERGY CPY)
   ========================================================================== */

function openOnePager(projectId) {
    const p = PROJECTS_DATA[projectId];
    if (!p) return;

    const modal = document.getElementById("onePagerModal");
    const container = document.getElementById("onePagerContent");
    if (!modal || !container) return;

    const langData = p[currentLang] || p.es;
    const consultant = CONSULTANTS[p.assignedAgent] || CONSULTANTS.daniel;
    const isEn = (currentLang === "en");

    const amountLabel = p.isPrivatePlacement 
        ? (isEn ? "Exclusive Invitation Only" : "A Invitación Exclusiva") 
        : p.amountDisplay;

    const modalityLabel = p.modality || "Direct Deal";
    const roiLabel = p.roi || "N/A";
    const statusProg = p.statusProgress || (isEn ? "Active in Portfolio" : "Activo en Cartera");

    const highlightsHtml = (langData.highlights || []).map(h => `
        <li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>
    `).join("");

    const metricsHtml = (langData.metrics || []).map(m => `
        <div class="op-metric-box">
            <div class="op-metric-val ${m.color}">${m.val}</div>
            <div class="op-metric-lbl">${m.label}</div>
        </div>
    `).join("");

    const wspMsg = encodeURIComponent(
        isEn 
        ? `Hello ${consultant.name}, I am contacting you from Energy CPY Showroom regarding project: ${langData.title} (Ref: ECPY-${p.id.toUpperCase()}). Please provide further details.`
        : `Hola ${consultant.name}, me contacto desde el Showroom de Energy CPY por la propuesta: ${langData.title} (Ref: ECPY-${p.id.toUpperCase()}). Deseo solicitar información.`
    );

    const wspUrl = `https://wa.me/${consultant.phoneClean}?text=${wspMsg}`;

    container.innerHTML = `
        <!-- Header -->
        <div class="op-header">
            <div>
                <div class="op-brand-title">ENERGY CPY</div>
                <div class="op-brand-sub">${isEn ? "PRIVATE INVESTMENT ADVISORY — ARGENTINA" : "ASESORAMIENTO PRIVADO DE INVERSIONES — ARGENTINA"}</div>
            </div>
            <div class="op-meta-box">
                <div class="op-ref-code">REF: ECPY-${p.id.toUpperCase()}</div>
                <div class="op-confidential-badge">${isEn ? "CONFIDENTIAL / INVESTMENT GRADE" : "CONFIDENCIAL / GRADO DE INVERSIÓN"}</div>
            </div>
        </div>

        <!-- Title & Location -->
        <div class="op-title-section">
            <span class="op-tag-pill tag-${p.category}">${langData.categoryTag}</span>
            <h1 class="op-project-title">${langData.title}</h1>
            <div class="op-location">
                <i class="fa-solid fa-location-dot"></i> ${langData.location}
            </div>
        </div>

        <!-- 4-Item Deal Terms Bar -->
        <div class="op-deal-bar">
            <div class="op-deal-col">
                <span class="op-deal-lbl">${isEn ? "Target Ticket" : "Monto Inversión"}</span>
                <span class="op-deal-val">${amountLabel}</span>
            </div>
            <div class="op-deal-col">
                <span class="op-deal-lbl">${isEn ? "Deal Modality" : "Modalidad"}</span>
                <span class="op-deal-val">${modalityLabel}</span>
            </div>
            <div class="op-deal-col">
                <span class="op-deal-lbl">${isEn ? "Est. ROI / Payback" : "Retorno / Payback"}</span>
                <span class="op-deal-val">${roiLabel}</span>
            </div>
            <div class="op-deal-col">
                <span class="op-deal-lbl">${isEn ? "Stage / Status" : "Estado de Avance"}</span>
                <span class="op-deal-val" style="font-size: 0.78rem; font-weight: 600; color: #38bdf8;">${statusProg}</span>
            </div>
        </div>

        <!-- Body: Summary & Thesis -->
        <div class="op-body-grid">
            <div class="op-card-block">
                <div class="op-block-title">
                    <i class="fa-solid fa-briefcase"></i> ${isEn ? "Executive Summary & Investment Thesis" : "Resumen Ejecutivo & Tesis de Inversión"}
                </div>
                <p class="op-desc-text">${langData.description}</p>
                ${langData.thesis ? `
                <div class="op-thesis-box">
                    <strong>${isEn ? "Investment Thesis: " : "Tesis Financiera: "}</strong>${langData.thesis}
                </div>` : ''}
            </div>

            <div class="op-card-block">
                <div class="op-block-title">
                    <i class="fa-solid fa-star"></i> ${isEn ? "Strategic Value Drivers & Key Highlights" : "Factores Críticos de Valor & Aspectos Clave"}
                </div>
                <ul class="op-highlights-list">
                    ${highlightsHtml}
                </ul>
            </div>
        </div>

        <!-- 4-Metrics Grid -->
        <div class="op-metrics-grid">
            ${metricsHtml}
        </div>

        <!-- Consultant Info & Direct Contact -->
        <div class="op-footer-box">
            <div class="op-consultant-info">
                <div class="op-consultant-avatar">${consultant.name.charAt(0)}</div>
                <div>
                    <div class="op-consultant-name">${consultant.name}</div>
                    <div class="op-consultant-role">${isEn ? consultant.role_en : consultant.role_es}</div>
                </div>
            </div>
            <div class="op-consultant-links no-print">
                <a href="${wspUrl}" target="_blank" class="op-btn-wsp">
                    <i class="fa-brands fa-whatsapp"></i> WhatsApp Directo
                </a>
                <a href="mailto:${consultant.internalEmail}?subject=Consulta%20Inversion%20${encodeURIComponent(langData.title)}" class="op-btn-email">
                    <i class="fa-solid fa-envelope"></i> Email
                </a>
            </div>
        </div>

        <!-- Legal Disclaimer -->
        <div class="op-legal-disclaimer">
            <strong>${isEn ? "LEGAL DISCLAIMER:" : "AVISO LEGAL Y CONFIDENCIALIDAD:"}</strong> 
            ${isEn 
                ? "This document is strictly confidential and issued by Energy CPY for preliminary informative evaluation only. It does not constitute a public offering of securities or a binding contractual commitment. Financial memorandums, dataroom access, and detailed technical records are disclosed exclusively under a signed Non-Disclosure Agreement (NDA)."
                : "Este documento es de carácter estrictamente confidencial y ha sido emitido por Energy CPY con fines informativos de evaluación preliminar. No constituye oferta pública de valores ni promesa de contrato vinculante. La entrega de memorias económicas, acceso a Data Room y dossiers técnicos queda supeditada a la firma previa de un Acuerdo de Confidencialidad (NDA)."}
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeOnePager() {
    const modal = document.getElementById("onePagerModal");
    if (modal) {
        modal.style.display = "none";
    }
    document.body.style.overflow = "auto";
}

function printOnePager() {
    window.print();
}

function requestPrivateAccess(projectId) {
    openOnePager(projectId);
}
