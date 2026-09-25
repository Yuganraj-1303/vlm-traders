export const products = [
  // LED Bulbs
  {
    id: 1,
    slug: "led-bulb-9w",
    name: "LED Bulb 9W",
    category: "LED Bulbs",
    image: "/images/products/led-bulb.png",
    shortDescription: "Energy-efficient 9W LED bulb for everyday lighting.",
    description: "High quality 9W LED bulb providing bright illumination while saving on energy bills. Features a durable polycarbonate shell.",
    features: ["9W power", "Energy efficient", "Suitable for home use", "Cool White / Warm White"],
    featured: true
  },
  {
    id: 2,
    slug: "led-bulb-12w",
    name: "LED Bulb 12W",
    category: "LED Bulbs",
    image: "/images/products/led-bulb.png",
    shortDescription: "Bright 12W LED bulb for larger rooms.",
    description: "12W LED bulb designed for spaces requiring higher brightness like living rooms and kitchens.",
    features: ["12W power", "High brightness", "Long lifespan"],
    featured: false
  },
  {
    id: 3,
    slug: "led-bulb-15w",
    name: "LED Bulb 15W",
    category: "LED Bulbs",
    image: "/images/products/led-bulb.png",
    shortDescription: "High-power 15W LED bulb for commercial spaces.",
    description: "Powerful 15W LED bulb suitable for shops, halls, and outdoor covered areas.",
    features: ["15W power", "Extra bright", "Wide beam angle"],
    featured: false
  },
  
  // LED Lights
  {
    id: 4,
    slug: "led-tube-light-20w",
    name: "LED Tube Light 20W",
    category: "LED Lights",
    image: "/images/products/led-tube.png",
    shortDescription: "Sleek 20W LED batten for uniform room lighting.",
    description: "Slim profile 20W LED tube light. Easy to install and provides glare-free illumination.",
    features: ["20W power", "Slim design", "Flicker-free"],
    featured: true
  },
  {
    id: 5,
    slug: "led-panel-light-12w",
    name: "LED Panel Light 12W (Round)",
    category: "LED Lights",
    image: "/images/products/led_panel_light.jpg",
    shortDescription: "Recessed 12W LED panel light for false ceilings.",
    description: "Elegant round LED panel light perfect for modern false ceiling designs.",
    features: ["12W power", "Recessed mounting", "Diffused light"],
    featured: false
  },
  {
    id: 6,
    slug: "led-street-light-30w",
    name: "LED Street Light 30W",
    category: "LED Lights",
    image: "/images/products/led_street_light.jpg",
    shortDescription: "Durable 30W LED street light for outdoors.",
    description: "Weather-resistant 30W LED street light ideal for residential streets and compound walls.",
    features: ["30W power", "IP65 waterproof", "Surge protection"],
    featured: false
  },

  // Switches
  {
    id: 7,
    slug: "modular-switch-10a",
    name: "Modular Switch 10A",
    category: "Switches",
    image: "/images/products/modular-switch.png",
    shortDescription: "Standard 10A modular switch for lights and fans.",
    description: "High-quality polycarbonate modular switch. Smooth operation and long electrical life.",
    features: ["10A rating", "Modular design", "Fire retardant body"],
    featured: true
  },
  {
    id: 8,
    slug: "modular-switch-16a",
    name: "Modular Switch 16A",
    category: "Switches",
    image: "/images/products/modular-switch.png",
    shortDescription: "Heavy-duty 16A switch for appliances.",
    description: "16A modular switch suitable for ACs, geysers, and microwaves.",
    features: ["16A rating", "Heavy duty contacts", "ISI marked"],
    featured: false
  },
  {
    id: 9,
    slug: "bell-push-switch",
    name: "Bell Push Switch",
    category: "Switches",
    image: "/images/products/modular-switch.png",
    shortDescription: "Modular bell push switch with indicator.",
    description: "Door bell push switch with built-in LED indicator for easy visibility at night.",
    features: ["With indicator", "Soft push action", "Durable"],
    featured: false
  },

  // Sockets
  {
    id: 10,
    slug: "modular-socket-6a",
    name: "Modular Socket 6A",
    category: "Sockets",
    image: "/images/products/modular-socket.png",
    shortDescription: "Standard 2/3 pin 6A modular socket.",
    description: "Safe and reliable 6A socket with child-safety shutters.",
    features: ["6A rating", "Child safety shutters", "Universal pin support"],
    featured: true
  },
  {
    id: 11,
    slug: "modular-socket-16a",
    name: "Modular Socket 16A",
    category: "Sockets",
    image: "/images/products/modular-socket.png",
    shortDescription: "Power socket 16A for heavy appliances.",
    description: "16A heavy-duty socket designed to withstand high loads safely.",
    features: ["16A rating", "Heat resistant", "Safety shutters"],
    featured: false
  },

  // Wires & Cables
  {
    id: 12,
    slug: "fr-wire-1-sq-mm",
    name: "FR Wire 1.0 sq mm (90m)",
    category: "Wires & Cables",
    image: "/images/products/wire-red.png",
    shortDescription: "Fire Retardant 1.0 sq mm copper wire bundle.",
    description: "High-quality 100% copper wire with Fire Retardant PVC insulation. Ideal for house wiring.",
    features: ["1.0 sq mm", "90m length", "Fire retardant", "Pure copper"],
    featured: true
  },
  {
    id: 13,
    slug: "fr-wire-1-5-sq-mm",
    name: "FR Wire 1.5 sq mm (90m)",
    category: "Wires & Cables",
    image: "/images/products/wire-red.png",
    shortDescription: "Fire Retardant 1.5 sq mm copper wire for general power.",
    description: "Standard 1.5 sq mm copper wire for general purpose power outlets and heavy lighting.",
    features: ["1.5 sq mm", "90m length", "Fire retardant", "High conductivity"],
    featured: false
  },
  {
    id: 14,
    slug: "fr-wire-2-5-sq-mm",
    name: "FR Wire 2.5 sq mm (90m)",
    category: "Wires & Cables",
    image: "/images/products/wire-yellow.png",
    shortDescription: "Fire Retardant 2.5 sq mm copper wire for AC/Geyser.",
    description: "Heavy-duty 2.5 sq mm wire designed for high load appliances like ACs and Geysers.",
    features: ["2.5 sq mm", "90m length", "Fire retardant", "Heavy load capacity"],
    featured: true
  },

  // Fans
  {
    id: 15,
    slug: "ceiling-fan-1200mm",
    name: "Ceiling Fan 1200mm",
    category: "Fans",
    image: "/images/products/crompton_fan.jpg",
    shortDescription: "High-speed 1200mm ceiling fan for home.",
    description: "Elegant and efficient 1200mm ceiling fan delivering high air delivery with minimal noise.",
    features: ["1200mm sweep", "High speed (400 RPM)", "Aerodynamic blades"],
    featured: true
  },
  {
    id: 16,
    slug: "exhaust-fan-200mm",
    name: "Exhaust Fan 200mm",
    category: "Fans",
    image: "/images/products/exhaust_fan.jpg",
    shortDescription: "Ventilation exhaust fan for kitchen and bathroom.",
    description: "Powerful exhaust fan to keep your kitchen or bathroom fresh and free from odors.",
    features: ["200mm sweep", "High suction", "Rust-proof body"],
    featured: false
  },

  // MCB & DB
  {
    id: 17,
    slug: "mcb-spn-10a",
    name: "MCB SPN 10A",
    category: "MCB & DB",
    image: "/images/products/mcb_switch.jpg",
    shortDescription: "Single Pole 10A MCB for circuit protection.",
    description: "Reliable 10A Miniature Circuit Breaker for protecting lighting and fan circuits from overload and short circuits.",
    features: ["10A rating", "C-Curve", "10kA breaking capacity"],
    featured: false
  },
  {
    id: 18,
    slug: "mcb-spn-32a",
    name: "MCB SPN 32A",
    category: "MCB & DB",
    image: "/images/products/mcb_switch.jpg",
    shortDescription: "Single Pole 32A MCB for heavy load protection.",
    description: "32A MCB for securing high-power circuits like air conditioners.",
    features: ["32A rating", "C-Curve", "Reliable trip mechanism"],
    featured: false
  },
  {
    id: 19,
    slug: "distribution-board-8-way",
    name: "Distribution Board 8-Way",
    category: "MCB & DB",
    image: "/images/products/distribution_board.jpg",
    shortDescription: "8-Way Double Door Distribution Board.",
    description: "Aesthetic and sturdy 8-way distribution board for home main panel.",
    features: ["8-way capacity", "Double door", "Powder coated finish"],
    featured: false
  },

  // Inverters
  {
    id: 20,
    slug: "pure-sine-wave-inverter-900va",
    name: "Pure Sine Wave Inverter 900VA",
    category: "Inverters",
    image: "/images/products/inverter_ups.jpg",
    shortDescription: "900VA home UPS for seamless power backup.",
    description: "Advanced pure sine wave technology inverter ensuring safe backup for sensitive home appliances.",
    features: ["900VA capacity", "Pure sine wave", "Fast charging", "Overload protection"],
    featured: true
  },

  // Batteries
  {
    id: 21,
    slug: "tubular-battery-150ah",
    name: "Tubular Battery 150Ah",
    category: "Batteries",
    image: "/images/products/tubular_battery.jpg",
    shortDescription: "Long-lasting 150Ah tall tubular battery.",
    description: "Robust 150Ah tubular battery designed for long power cuts and extended life.",
    features: ["150Ah capacity", "Tall tubular design", "Low maintenance"],
    featured: true
  },
  
  // Electrical Accessories
  {
    id: 22,
    slug: "pvc-insulation-tape",
    name: "PVC Insulation Tape",
    category: "Electrical Accessories",
    image: "/images/products/insulation_tape.jpg",
    shortDescription: "High grip PVC electrical insulation tape.",
    description: "Quality insulation tape for wire jointing and electrical safety.",
    features: ["Strong adhesive", "Fire retardant", "Various colors"],
    featured: false
  },
  {
    id: 23,
    slug: "bulb-holder-angle",
    name: "Angle Bulb Holder",
    category: "Electrical Accessories",
    image: "/images/products/bulb_holder.jpg",
    shortDescription: "Durable angle holder for B22 base bulbs.",
    description: "Heavy quality plastic angle holder with brass terminals.",
    features: ["B22 base", "Brass contacts", "Heat resistant"],
    featured: false
  },
  {
    id: 24,
    slug: "line-tester",
    name: "Electrical Line Tester",
    category: "Electrical Accessories",
    image: "/images/products/line_tester.jpg",
    shortDescription: "Standard 500V electrical neon line tester.",
    description: "Safe and reliable line tester for checking electrical current presence.",
    features: ["Up to 500V testing", "Neon indicator", "Insulated body"],
    featured: false
  },
  {
    id: 25,
    slug: "extension-board-4-way",
    name: "4-Way Extension Board",
    category: "Electrical Accessories",
    image: "/images/products/extension_board.jpg",
    shortDescription: "4-socket extension board with switch and surge protection.",
    description: "Convenient 4-way extension spike buster with individual switches and a heavy-duty power cord.",
    features: ["4 sockets", "Surge protection", "Long cable"],
    featured: false
  },
  // Added from new brand list
  {
    id: 26,
    slug: "legrand-mcb-distribution-board",
    name: "Legrand MCB Distribution Board",
    category: "MCB & DB",
    image: "/images/products/legrand_switchgear.jpg",
    shortDescription: "Premium Legrand RCCB and MCB distribution board.",
    description: "High-quality Legrand Switch Gear, including RCCB and MCB for ultimate circuit protection.",
    features: ["Legrand Brand", "RCCB & MCB", "Premium Quality"],
    featured: true
  },
  {
    id: 27,
    slug: "crompton-aero-ceiling-fan",
    name: "Crompton Aero Ceiling Fan",
    category: "Fans",
    image: "/images/products/crompton_fan.jpg",
    shortDescription: "Sleek and aerodynamic Crompton ceiling fan.",
    description: "High-speed Crompton ceiling fan with aerodynamic blades for superior air delivery.",
    features: ["Crompton Brand", "Aerodynamic", "High Speed"],
    featured: true
  },
  {
    id: 28,
    slug: "orbit-fr-wire-bundle",
    name: "Orbit FR Copper Wire",
    category: "Wires & Cables",
    image: "/images/products/orbit_wire.jpg",
    shortDescription: "Orbit brand fire retardant copper wire bundle.",
    description: "High-quality Orbit FR wire, available in multiple colors. Excellent conductivity and safety.",
    features: ["Orbit Brand", "Fire Retardant", "Pure Copper"],
    featured: true
  },
  {
    id: 29,
    slug: "anchor-metal-box",
    name: "Anchor Metal Box",
    category: "Electrical Accessories",
    image: "/images/products/anchor_box.jpg",
    shortDescription: "Durable Anchor metal box for switchboards.",
    description: "Concealed metal box by Anchor for secure switchboard mounting.",
    features: ["Anchor Brand", "Rust Proof", "Durable"],
    featured: false
  },
  {
    id: 30,
    slug: "l-and-t-rotary-switch",
    name: "L&T Rotary Switch",
    category: "Switches",
    image: "/images/products/lt_rotary.jpg",
    shortDescription: "Industrial grade L&T rotary switch.",
    description: "Heavy-duty rotary switch from L&T for industrial and high-load applications.",
    features: ["L&T Brand", "Industrial Grade", "Heavy Duty"],
    featured: false
  },
  {
    id: 31,
    slug: "hikvision-dome-camera",
    name: "Hikvision Dome Security Camera",
    category: "CCTV Surveillance",
    image: "/images/products/hikvision_camera.jpg",
    shortDescription: "High-definition indoor dome camera for surveillance.",
    description: "Sleek and modern Hikvision dome CCTV camera providing crisp, clear security footage for residential and commercial monitoring.",
    features: ["Hikvision Brand", "HD Resolution", "Night Vision"],
    featured: true
  },
  {
    id: 32,
    slug: "crompton-water-pump-1hp",
    name: "Crompton 1HP Water Pump",
    category: "Plumbing Services",
    image: "/images/products/water_pump_1hp.jpg",
    shortDescription: "Robust heavy-duty 1HP residential water pump.",
    description: "High-performance Crompton 1HP water pump, built for reliable water supply and long-lasting durability.",
    features: ["Crompton Brand", "1HP Motor", "Heavy Duty"],
    featured: true
  },
  {
    id: 33,
    slug: "gm-modular-switch-plate",
    name: "GM Modular Switch Plate",
    category: "Switches",
    image: "/images/products/gm_switch.jpg",
    shortDescription: "Premium GM modular electrical wall switch plate.",
    description: "Elegant and modern GM modular switch plate featuring a premium metallic finish to complement high-end interiors.",
    features: ["GM Brand", "Premium Finish", "Modular"],
    featured: true
  },
  {
    id: 34,
    slug: "atomberg-bldc-fan",
    name: "Atomberg BLDC Ceiling Fan",
    category: "Fans",
    image: "/images/products/atomberg_fan.jpg",
    shortDescription: "Energy-efficient Atomberg BLDC fan with wood finish.",
    description: "Sleek Atomberg BLDC motor ceiling fan. Ultra energy efficient, silent operation, and comes with elegant wooden finish blades.",
    features: ["Atomberg Brand", "BLDC Motor", "Energy Saver"],
    featured: true
  },
  {
    id: 35,
    slug: "orbit-pvc-conduit",
    name: "Orbit PVC Conduit Pipe",
    category: "Electrical Accessories",
    image: "/images/products/orbit_conduit.jpg",
    shortDescription: "Durable Orbit PVC conduit pipe and fittings.",
    description: "High-grade PVC conduit pipes and fittings by Orbit for safe and concealed electrical wiring.",
    features: ["Orbit Brand", "Flame Retardant PVC", "High Durability"],
    featured: false
  },
  {
    id: 36,
    slug: "hi-fi-modular-switch",
    name: "Hi-Fi Modular Switch",
    category: "Switches",
    image: "/images/products/gm_switch.jpg",
    shortDescription: "Standard Hi-Fi brand modular switch.",
    description: "Reliable and cost-effective modular switch from Hi-Fi, perfect for residential use.",
    features: ["Hi-Fi Brand", "Durable", "Affordable"],
    featured: false
  },
  {
    id: 37,
    slug: "finolex-house-wire",
    name: "Finolex Copper Wire (90m)",
    category: "Wires & Cables",
    image: "/images/products/finolex_wire.jpg",
    shortDescription: "Premium Finolex pure copper house wire.",
    description: "Industry-leading Finolex house wire ensuring high conductivity, fire retardant properties, and ultimate safety.",
    features: ["Finolex Brand", "Pure Copper", "Fire Retardant"],
    featured: false
  },
  {
    id: 38,
    slug: "vr-flex-cable",
    name: "VR Flex Industrial Cable",
    category: "Wires & Cables",
    image: "/images/products/vr_flex_cable.jpg",
    shortDescription: "Flexible multi-core VR Flex cable.",
    description: "Heavy-duty VR Flex multi-core cables designed for industrial and complex wiring setups.",
    features: ["VR Flex Brand", "Multi-core", "Flexible"],
    featured: false
  },
  {
    id: 39,
    slug: "orient-ceiling-fan",
    name: "Orient Electric Ceiling Fan",
    category: "Fans",
    image: "/images/products/atomberg_fan.jpg",
    shortDescription: "High-speed Orient electric ceiling fan.",
    description: "Classic high-speed ceiling fan by Orient Electric offering maximum air delivery and quiet performance.",
    features: ["Orient Brand", "High Speed", "Silent Operation"],
    featured: false
  },
  {
    id: 40,
    slug: "surya-led-bulb-9w",
    name: "Surya LED Bulb 9W",
    category: "LED Bulbs",
    image: "/images/products/led-bulb.png",
    shortDescription: "Bright and energy-efficient Surya 9W LED.",
    description: "Long-lasting Surya 9W LED bulb providing brilliant white light while saving energy.",
    features: ["Surya Brand", "9W Output", "Energy Efficient"],
    featured: false
  },
  {
    id: 41,
    slug: "orient-led-tube",
    name: "Orient LED Batten 20W",
    category: "LED Lights",
    image: "/images/products/led-tube.png",
    shortDescription: "Sleek Orient 20W LED batten light.",
    description: "Slim profile 20W LED tube light from Orient, ensuring glare-free and uniform room illumination.",
    features: ["Orient Brand", "20W Output", "Slim Design"],
    featured: false
  },
  {
    id: 42,
    slug: "asmon-house-wire",
    name: "Asmon Flexible Wire",
    category: "Wires & Cables",
    image: "/images/products/orbit_wire.jpg",
    shortDescription: "High-grade Asmon flexible electrical wire.",
    description: "Durable and highly flexible Asmon copper wire, ideal for complex domestic and commercial wiring needs.",
    features: ["Asmon Brand", "Flexible", "High Grade"],
    featured: false
  },
  {
    id: 43,
    slug: "crompton-led-panel",
    name: "Crompton LED Panel Light",
    category: "LED Lights",
    image: "/images/products/led_panel_light.jpg",
    shortDescription: "Premium Crompton recessed LED panel light.",
    description: "Elegant Crompton LED panel light for false ceilings, offering bright and energy-saving illumination.",
    features: ["Crompton Brand", "Recessed Mount", "Energy Saving"],
    featured: false
  },
  {
    id: 44,
    slug: "hikvision-turbo-hd-bullet-camera",
    name: "Hikvision 2MP Turbo HD Bullet Camera",
    category: "CCTV Surveillance",
    image: "/images/products/cat_cctv.jpg",
    shortDescription: "Weatherproof outdoor Hikvision Turbo HD IR bullet camera.",
    description: "High-performance Hikvision 2MP Turbo HD bullet camera with smart IR night vision up to 30m, IP67 weatherproof metal housing, and crystal clear day/night surveillance.",
    features: ["Hikvision Brand", "2MP Full HD", "30m Smart IR", "IP67 Weatherproof", "Motion Detection"],
    featured: true
  },
  {
    id: 45,
    slug: "cp-plus-cosmic-hd-camera",
    name: "CP Plus 2.4MP Cosmic HD Camera",
    category: "CCTV Surveillance",
    image: "/images/products/cpplus_camera.jpg",
    shortDescription: "High-resolution CP Plus 2.4MP Cosmic series security camera.",
    description: "Premium CP Plus Cosmic 2.4MP Full HD security camera with advanced IR night vision, 1080P real-time video, DWDR, and plug-and-play installation for homes and offices.",
    features: ["CP Plus Brand", "2.4MP Resolution", "20m IR Night Vision", "Plug & Play", "High Durability"],
    featured: true
  },
  {
    id: 46,
    slug: "dahua-full-color-camera",
    name: "Dahua 2MP Full-Color Starlight Camera",
    category: "CCTV Surveillance",
    image: "/images/products/dahua_camera.png",
    shortDescription: "24/7 full-color vivid night vision Dahua CCTV camera.",
    description: "Industry-leading Dahua Full-Color technology camera capturing vivid color images even in pitch-black darkness. Features built-in warm supplemental LEDs and IP67 weather resistance.",
    features: ["Dahua Brand", "24/7 Full Color", "Starlight Sensor", "IP67 Rated", "Built-in Mic"],
    featured: true
  },
  {
    id: 47,
    slug: "trueview-smart-ptz-wifi-camera",
    name: "Trueview 3MP Smart 360° Wi-Fi PTZ Camera",
    category: "CCTV Surveillance",
    image: "/images/products/trueview_camera.png",
    shortDescription: "Smart wireless 360° pan-tilt Trueview camera with mobile app.",
    description: "Intelligent Trueview 3MP Wi-Fi PTZ camera featuring 360-degree pan & tilt coverage, two-way audio talkback, AI human auto-tracking, and live mobile monitoring via smartphone app.",
    features: ["Trueview Brand", "360° Pan & Tilt", "Two-Way Audio", "Wi-Fi Wireless", "AI Human Tracking"],
    featured: true
  },
  {
    id: 48,
    slug: "securemax-4ch-cctv-power-supply",
    name: "Securemax 4-Channel CCTV Power Supply",
    category: "CCTV Surveillance",
    image: "/images/products/securemax_cctv.jpg",
    shortDescription: "Regulated 12V 5A CCTV multi-channel SMPS power supply.",
    description: "Heavy-duty Securemax 4-Channel 12V 5A regulated SMPS power supply unit for CCTV security systems. Comes in a lockable metal cabinet with surge protection and individual channel fuses.",
    features: ["Securemax Brand", "4-Channel Regulated 12V", "Surge Protection", "Lockable Metal Box", "Overload Cut-off"],
    featured: true
  },
  {
    id: 49,
    slug: "supreme-pipes-and-fittings",
    name: "Supreme CPVC & PVC Pipes & Fittings",
    category: "Plumbing Services",
    image: "/images/products/supreme_pipes.png",
    shortDescription: "Premium Supreme Lifeline CPVC and PVC pipes with precision fittings.",
    description: "High-grade Supreme Lifeline CPVC & PVC pipes and fittings engineered for hot and cold potable water, residential plumbing, and agricultural systems. 100% leak-proof, chemical-resistant, and maintenance-free.",
    features: ["Supreme Brand", "CPVC & PVC", "Leak-Proof Joints", "High Temperature Rated", "Corrosion Free"],
    featured: true
  },
  {
    id: 50,
    slug: "trueflow-pipes-and-fittings",
    name: "Trueflow High Pressure Pipes & Fittings",
    category: "Plumbing Services",
    image: "/images/products/trueflow_pipes.png",
    shortDescription: "Durable Trueflow UPVC and CPVC plumbing pipes and joints.",
    description: "Precision engineered Trueflow plumbing pipes and fittings offering superior tensile strength, lead-free composition, and smooth inner surface for friction-free water flow in residential and commercial setups.",
    features: ["Trueflow Brand", "UPVC & CPVC", "Lead Free", "High Pressure", "Impact Resistant"],
    featured: true
  },
  {
    id: 51,
    slug: "ashirvad-pipes-and-fittings",
    name: "Ashirvad FlowGuard Plus CPVC Pipes & Fittings",
    category: "Plumbing Services",
    image: "/images/products/ashirvad_pipes.png",
    shortDescription: "World-class Ashirvad FlowGuard Plus CPVC potable water pipes.",
    description: "Genuine Ashirvad FlowGuard Plus CPVC pipes and fittings manufactured to highest international standards. Ideal for hot and cold water distribution, boasting 25% higher pressure resistance and bacteriological growth resistance.",
    features: ["Ashirvad Brand", "FlowGuard Plus", "Hot & Cold Water", "SDR 11 Grade", "25% Higher Pressure"],
    featured: true
  },
  {
    id: 52,
    slug: "watertec-taps-and-fittings",
    name: "Watertec Premium PTMT Bathroom Taps & Fittings",
    category: "Plumbing Services",
    image: "/images/products/watertec_taps.png",
    shortDescription: "Rust-proof Watertec PTMT bib cocks, pillar taps, and bath fittings.",
    description: "India's pioneer Watertec engineering polymer PTMT taps and bathroom fittings. Featuring zero-drip technology, superior resistance to hard and salt water, high durability, and modern ergonomic finish.",
    features: ["Watertec Brand", "PTMT Virgin Polymer", "Zero Drip", "Hard Water Resistant", "3-Year Warranty"],
    featured: true
  },
  {
    id: 53,
    slug: "leo-taps-and-fittings",
    name: "Leo Chrome Bathroom Taps & Fittings",
    category: "Plumbing Services",
    image: "/images/products/leo_taps.jpg",
    shortDescription: "Sleek Leo chrome-plated faucets, bib cocks, and bathroom fittings.",
    description: "Modern Leo bathroom taps and fittings crafted with solid metal bodies and mirror chrome plating. Includes high-durability quarter-turn ceramic disc valves for effortless, smooth flow control.",
    features: ["Leo Brand", "Mirror Chrome Plating", "Quarter Turn Ceramic", "High Flow Rate", "Modern Ergonomics"],
    featured: true
  },
  {
    id: 54,
    slug: "supreme-siltank-water-tank-1000l",
    name: "Supreme Siltank 1000L Triple Layer Water Tank",
    category: "Plumbing Services",
    image: "/images/products/supreme_water_tank.jpg",
    shortDescription: "Heavy-duty 1000 Litres triple layer UV-stabilized overhead water storage tank.",
    description: "Supreme Siltank 1000L overhead water tank manufactured from 100% virgin food-grade polymer. Engineered with advanced 3-layer technology for UV protection, algae prevention, and maximum structural durability under extreme heat.",
    features: ["Supreme Brand", "Triple Layer Design", "1000 Litres Capacity", "UV Stabilized", "Food Grade Polymer"],
    featured: true
  },
  {
    id: 55,
    slug: "texmo-v4-submersible-pump",
    name: "Texmo 1.5HP V4 Borewell Submersible Pump",
    category: "Plumbing Services",
    image: "/images/products/texmo_submersible_pump.png",
    shortDescription: "High-performance Texmo multi-stage deep borewell water pump.",
    description: "Reliable Texmo 1.5HP V4 submersible borewell pump set built with 100% copper winding, water-cooled motor, and abrasion-resistant stainless steel impellers for uninterrupted residential and farm water pumping.",
    features: ["Texmo Brand", "1.5HP Motor", "100% Copper Winding", "V4 Borewell Ready", "High Head Discharge"],
    featured: true
  },
  {
    id: 56,
    slug: "watertec-health-faucet-set",
    name: "Watertec 2-in-1 PTMT Health Faucet with Hose",
    category: "Plumbing Services",
    image: "/images/products/watertec_health_faucet.png",
    shortDescription: "Ergonomic Watertec bidet spray gun with flexible hose and wall hook.",
    description: "Watertec signature 2-in-1 health faucet trigger spray gun made of premium engineering polymer. Includes 1.5-meter high-pressure flexible braided hose and wall mount bracket. Zero rusting and smooth trigger actuation.",
    features: ["Watertec Brand", "1.5m Flexible Hose", "Wall Hook Included", "Rust & Leak Proof", "Comfort Trigger"],
    featured: true
  },
  {
    id: 57,
    slug: "heavy-duty-brass-ball-valve-1inch",
    name: "Heavy-Duty Forged Brass Ball Valve (1 Inch)",
    category: "Plumbing Services",
    image: "/images/products/brass_ball_valve.jpg",
    shortDescription: "Full-bore 1\" forged brass shut-off water control valve.",
    description: "Industrial-grade 1-inch forged brass ball valve with chrome-plated ball and stainless steel lever handle. Designed for main pipeline isolation, water tanks, and high-pressure plumbing control with zero leakage.",
    features: ["Forged Brass Body", "1-Inch Full Bore", "Quarter Turn Handle", "High Pressure Rated", "Corrosion Free"],
    featured: true
  },
  {
    id: 58,
    slug: "ptfe-teflon-thread-seal-tape",
    name: "PTFE Teflon Thread Seal Tape (Pack of 10)",
    category: "Plumbing Services",
    image: "/images/products/ptfe_teflon_tape.jpg",
    shortDescription: "High-density waterproof PTFE thread seal tape for leak-proof pipe joints.",
    description: "Professional grade 100% PTFE Teflon pipe seal tape spools. Essential for sealing threaded connections on CPVC, PVC, GI pipes, taps, and angle valves to guarantee completely airtight and watertight joints.",
    features: ["100% Virgin PTFE", "Airtight & Watertight", "Chemical Resistant", "Universal Thread Fit", "Pack of 10 Spools"],
    featured: true
  },
  {
    id: 59,
    slug: "supreme-silbond-solvent-cement",
    name: "Supreme Silbond Heavy-Duty PVC Solvent Cement",
    category: "Plumbing Services",
    image: "/images/products/supreme_silbond_cement.png",
    shortDescription: "Heavy-bodied fast-setting solvent cement for UPVC & CPVC pipes.",
    description: "Supreme Silbond industrial-grade solvent cement engineered for high pressure water lines and PVC pipe joints. Provides quick chemical bonding, high burst pressure tolerance, and 100% leak-proof welds.",
    features: ["Supreme Brand", "Fast Setting", "High Pressure", "Leak-Proof Bond", "NSF Approved"],
    featured: true
  },
  {
    id: 60,
    slug: "watertec-shower-8a",
    name: "Watertec 8A Circular Overhead Rain Shower",
    category: "Plumbing Services",
    image: "/images/products/watertec_shower.png",
    shortDescription: "Wide-spread relaxing overhead polymer rain shower head with swivel ball joint.",
    description: "Watertec 8A overhead shower crafted from virgin engineering polymer. Features self-cleaning silicon nozzles, smooth swivel ball joint for angle adjustment, and uniform rain cascade spray even at low water pressure.",
    features: ["Watertec Brand", "Rain Spray", "Swivel Ball Joint", "Scale-Resistant Nozzles", "Corrosion Proof"],
    featured: true
  },
  {
    id: 61,
    slug: "watertec-right-angle-valve",
    name: "Watertec M-Series PTMT Right Angle Stop Valve",
    category: "Plumbing Services",
    image: "/images/products/watertec_angle_valve.png",
    shortDescription: "Quarter-turn PTMT angle stop cock for geyser, toilet, and faucet connection.",
    description: "Durable Watertec M-Series angle stop valve made of virgin engineering polymer. Features 1/2-inch BSP threads, drip-free ceramic disc cartridge, and high resistance to hard water scaling.",
    features: ["Watertec Brand", "PTMT Body", "Quarter Turn", "Hard Water Resistant", "3-Year Warranty"],
    featured: false
  },
  {
    id: 62,
    slug: "water-pressure-booster-pump",
    name: "Automatic Water Pressure Booster Pump System",
    category: "Plumbing Services",
    image: "/images/products/cat_pumps.jpg",
    shortDescription: "Automatic multi-stage pressure booster pump with digital pressure controller.",
    description: "High-efficiency domestic water pressure booster pump system designed to maintain constant water pressure in multi-storey bathrooms, overhead showers, and kitchen taps. Equipped with thermal overload protection and dry-run safety.",
    features: ["Constant Pressure", "Auto On/Off Sensor", "Dry Run Protection", "Low Noise Motor", "Energy Efficient"],
    featured: true
  },
  {
    id: 63,
    slug: "polycab-2-5-copper-wire",
    name: "Polycab 2.5 Sq.mm FR Copper Building Wire",
    category: "Wires & Cables",
    image: "/images/products/polycab_wire.jpg",
    shortDescription: "Flame retardant 100% pure electrolytic copper house wire (90m coil).",
    description: "Polycab Optima Plus 2.5 Sq.mm single core multi-strand copper flexible building wire. Insulated with high-oxygen index flame-retardant PVC compound, offering 101% copper conductivity and ISI certification.",
    features: ["Polycab Brand", "2.5 Sq.mm", "Flame Retardant (FR)", "100% Pure Copper", "ISI Certified"],
    featured: true
  },
  {
    id: 64,
    slug: "anchor-roma-10a-modular-switch",
    name: "Anchor Roma 10A 1-Way Modular Switch",
    category: "Switches",
    image: "/images/products/anchor_roma_switch.png",
    shortDescription: "Classic white Anchor Roma 1-module smooth rocker switch.",
    description: "India's highest selling Anchor Roma 10A 1-way modular switch by Panasonic. Built with silver cadmium oxide contacts for spark-free performance, high impact flame-retardant polycarbonate, and tested for over 100,000 clicks.",
    features: ["Anchor Brand", "Roma Series", "10A Rating", "Silver Contacts", "Smooth Rocker Click"],
    featured: true
  },
  {
    id: 65,
    slug: "crompton-laser-ray-20w-led-batten",
    name: "Crompton Laser Ray 20W LED Batten Light",
    category: "LED Lights",
    image: "/images/products/crompton_batten.png",
    shortDescription: "4-Foot ultra-slim high lumen glare-free LED tube batten.",
    description: "Crompton Laser Ray Neo 20W 4ft LED batten delivering 2000 lumens of crisp Cool Day Light (6500K). Features surge protection up to 4kV, wide 120-degree beam spread, and durable polycarbonate housing that will not yellow over time.",
    features: ["Crompton Brand", "20W Power", "2000 Lumens", "4kV Surge Protection", "Eye-Friendly No Flicker"],
    featured: true
  },
  {
    id: 66,
    slug: "philips-10w-led-tbulb",
    name: "Philips Stellar Bright 10W LED T-Bulb",
    category: "LED Bulbs",
    image: "/images/products/philips_led_bulb.jpg",
    shortDescription: "Innovative wide-angle B22 LED T-bulb for broad room illumination.",
    description: "Philips Stellar Bright 10W B22 base LED T-bulb with wider light throw than conventional round bulbs. Delivers 1000 lumens of crisp white daylight with 40% wider light distribution, ideal for study areas, kitchens, and living rooms.",
    features: ["Philips Brand", "10W Wattage", "Wide Throw T-Shape", "B22 Cap", "Long 15,000h Life"],
    featured: false
  },
  {
    id: 67,
    slug: "luminous-zelio-1100-inverter",
    name: "Luminous Zelio+ 1100 Pure Sine Wave Inverter",
    category: "Inverters",
    image: "/images/products/luminous_inverter.webp",
    shortDescription: "Intelligent pure sine wave home UPS with digital backup display.",
    description: "Advanced Luminous Zelio+ 1100 (900VA / 756W) pure sine wave home UPS powered by a 32-bit DSP processor. Features an intuitive LCD display indicating power backup and charging time in hours and minutes, bypass switch, and silent operation.",
    features: ["Luminous Brand", "Pure Sine Wave", "Smart LCD Display", "32-Bit DSP Processor", "Supports 1 Battery"],
    featured: true
  },
  {
    id: 68,
    slug: "microtek-dura-strong-150ah-battery",
    name: "Microtek 150Ah Tall Tubular Inverter Battery",
    category: "Batteries",
    image: "/images/products/microtek_battery.jpg",
    shortDescription: "Heavy-duty 12V 150Ah low-maintenance inverter backup battery.",
    description: "Microtek Dura Strong 150Ah 12V tall tubular battery with high acid volume design for extended power cuts. Manufactured with ultra-pure alloy spines and ceramic float indicators for minimal maintenance and reliable 48-month service life.",
    features: ["Microtek Brand", "150Ah Capacity", "Tall Tubular Tech", "6 Float Indicators", "Fast Recharge"],
    featured: true
  },
  {
    id: 69,
    slug: "hikvision-4ch-turbo-hd-dvr",
    name: "Hikvision 4-Channel Turbo HD Digital Video Recorder",
    category: "CCTV Surveillance",
    image: "/images/products/hikvision_dvr.png",
    shortDescription: "Compact 4-channel 1080p H.265+ DVR with mobile viewing.",
    description: "Hikvision DS-7104HGHI 4-channel Turbo HD DVR supporting 5-in-1 video inputs (HDTVI, AHD, CVI, CVBS, IP). Features high-efficiency H.265+ video compression to save up to 80% storage, HDMI/VGA video output, and remote phone access via Hik-Connect app.",
    features: ["Hikvision Brand", "4 Channels", "H.265+ Compression", "Mobile Live View", "Supports 6TB HDD"],
    featured: true
  },
  {
    id: 70,
    slug: "cp-plus-8ch-full-hd-dvr",
    name: "CP Plus 8-Channel Cosmic HD DVR",
    category: "CCTV Surveillance",
    image: "/images/products/cpplus_dvr.jpg",
    shortDescription: "8-Channel 1080P Full HD hybrid DVR with smart audio recording.",
    description: "CP Plus CP-UVR-0801E1 8-channel high-performance digital video recorder. Supports all HD analog video formats and IP cameras with audio-over-coax, AI human detection, and instant push notifications on your smartphone via gCMOB app.",
    features: ["CP Plus Brand", "8 Channels", "Audio Over Coax", "gCMOB Smartphone App", "Full HD 1080P"],
    featured: true
  },
  {
    id: 71,
    slug: "cctv-3-plus-1-cable-coil-90m",
    name: "Hi-Focus CCTV 3+1 Pure Copper Cable (90 Meters)",
    category: "CCTV Surveillance",
    image: "/images/products/cctv_cable_coil.jpg",
    shortDescription: "Shielded 3+1 pure copper composite CCTV video and power transmission cable.",
    description: "High-grade 90-meter coil of 3+1 CCTV composite cable. Incorporates a high-frequency solid copper video coaxial core with dense shielding plus 3 insulated power cores for clear video without interference and long-distance camera powering.",
    features: ["90 Meter Coil", "3+1 Composite Cable", "Pure Copper Core", "Aluminum Mylar Shield", "Weatherproof Jacket"],
    featured: false
  },
  {
    id: 72,
    slug: "dahua-2mp-hdcvi-bullet-camera",
    name: "Dahua 2MP HDCVI Outdoor Bullet Security Camera",
    category: "CCTV Surveillance",
    image: "/images/products/dahua_hdcvi.png",
    shortDescription: "Heavy-duty metal outdoor bullet camera with 20m Smart IR night vision.",
    description: "Dahua HDCVI 2MP 1080P weatherproof outdoor security camera. Boasts Smart IR illumination up to 20 meters, 3.6mm fixed lens for wide field of view, IP67 waterproof metal housing, and multi-format video switchability (HDCVI/CVBS/AHD/TVI).",
    features: ["Dahua Brand", "2MP Full HD", "20m Smart IR", "IP67 Weatherproof", "Metal Enclosure"],
    featured: false
  },
  {
    id: 73,
    slug: "dahua-4mp-ip-eyeball-camera",
    name: "Dahua 4MP Starlight IP Dome Camera",
    category: "CCTV Surveillance",
    image: "/images/products/dahua_ip.png",
    shortDescription: "High-resolution 4MP Starlight IP eyeball camera with built-in PoE.",
    description: "Dahua 4MP network IP dome camera featuring Starlight low-light sensitivity, PoE (Power over Ethernet) support, H.265 smart codec, 30-meter infrared night vision, and tamper-resistant vandal dome construction.",
    features: ["Dahua Brand", "4MP Resolution", "PoE Supported", "Starlight Low Light", "H.265 Codec"],
    featured: false
  },
  {
    id: 74,
    slug: "dahua-ptz-speed-dome-camera",
    name: "Dahua 4MP 25x Optical Zoom PTZ Speed Dome Camera",
    category: "CCTV Surveillance",
    image: "/images/products/dahua_ptz.png",
    shortDescription: "Commercial speed dome PTZ camera with 25x optical zoom and 100m IR.",
    description: "Dahua professional 4MP PTZ speed dome camera equipped with a powerful 25x optical zoom lens, 360-degree endless pan rotation, 100-meter Smart IR night range, auto-tracking algorithms, and heavy-duty IP66 weatherproof housing.",
    features: ["Dahua Brand", "25x Optical Zoom", "360° Endless Pan", "100m Night Vision", "AI Auto-Tracking"],
    featured: true
  },
  {
    id: 75,
    slug: "gm-modular-25a-power-socket-box",
    name: "GM Modular 25A Heavy Duty Power Outlet Box",
    category: "Sockets",
    image: "/images/products/gm_switch.jpg",
    shortDescription: "Pre-wired 25A power outlet box with DP switch and indicator for AC and geysers.",
    description: "GM Modular 25A surface-mounting power unit with heavy-duty double pole switch and neon pilot indicator. Designed for high wattage appliances including 1.5/2-Ton air conditioners, 25L water geysers, and commercial kitchen loads.",
    features: ["GM Brand", "25A Heavy Load", "Double Pole Switch", "Neon Indicator", "Flame Retardant Box"],
    featured: false
  },
  {
    id: 76,
    slug: "legrand-32a-double-pole-isolator",
    name: "Legrand 32A Double Pole Main Isolator Switch",
    category: "MCB & DB",
    image: "/images/products/legrand_switchgear.jpg",
    shortDescription: "DIN-rail 32A 2-pole isolator disconnect switch for main distribution boards.",
    description: "Legrand DX3 32A Double Pole (DP) isolator switch for single phase main electrical disconnect. Conforms to IEC 60947-3, features positive contact indication, captive screw terminals, and high mechanical endurance.",
    features: ["Legrand Brand", "32A Rating", "Double Pole (DP)", "DIN Rail Mounting", "Positive Contact Window"],
    featured: false
  },
  {
    id: 77,
    slug: "anchor-4-way-spike-surge-extension-board",
    name: "Anchor 4-Way Surge & Spike Protected Extension Board",
    category: "Electrical Accessories",
    image: "/images/products/extension_board.jpg",
    shortDescription: "4-Socket heavy-duty extension cord with master switch and reset fuse.",
    description: "Anchor by Panasonic 4-way universal socket spike extension cord with 2-meter heavy gauge cable. Features metal oxide varistor (MOV) surge protection against voltage spikes, resettable overload circuit breaker, and child safety shutters.",
    features: ["Anchor Brand", "4 Universal Sockets", "2m Heavy Cable", "Surge Protection", "Overload Reset Fuse"],
    featured: false
  },
  {
    id: 78,
    slug: "vlm-professional-electrician-toolkit",
    name: "VLM Pro Multi-Meter & Electrical Service Kit",
    category: "Electrical Accessories",
    image: "/images/products/cat_electrical.jpg",
    shortDescription: "Complete domestic & industrial electrical troubleshooting toolset.",
    description: "Professional electrician and technician service bundle including digital clamp multi-meter, insulated 1000V screwdrivers, heavy wire stripper/cutter, test pen, and rugged carry organizer for all on-site repairs.",
    features: ["Digital Multi-Meter", "Insulated Tools", "Wire Stripper & Cutter", "Heavy-Duty Carry Pouch", "1000V Rated"],
    featured: false
  },

  // Microtek Inverters
  {
    id: 79,
    slug: "microtek-luxe-1400-pure-sine-wave-inverter",
    name: "Microtek Luxe 1400 Pure Sine Wave Inverter (1100VA / 12V)",
    category: "Inverters",
    image: "/images/products/microtek_inverter.jpg",
    shortDescription: "Smart 1100VA pure sine wave home inverter with intelligent multi-stage battery charging.",
    description: "Microtek Luxe 1400 is an advanced 1100VA / 12V pure sine wave UPS inverter engineered with micro-controller DSP technology. Ensures silent power backup, zero humming noise, smart overload sensing, and high-efficiency fast battery recharge for home and office appliances.",
    features: ["Microtek Brand", "Pure Sine Wave 1100VA", "DSP Smart Technology", "Multi-Stage Battery Charger", "Bypass Switch Included"],
    featured: true
  },

  // Luminous Batteries
  {
    id: 80,
    slug: "luminous-red-charge-rc18000-150ah-battery",
    name: "Luminous Red Charge RC 18000 150Ah Tall Tubular Battery",
    category: "Batteries",
    image: "/images/products/luminous_battery.jpg",
    shortDescription: "Heavy-duty 150Ah tall tubular inverter battery with high acid volume for deep discharge backup.",
    description: "Luminous Red Charge RC 18000 150Ah 12V tall tubular battery built with patented alloy spines and high-durability tubular plates. Engineered for rugged performance during frequent and long power cuts, features 6 ceramic float indicators and low maintenance.",
    features: ["Luminous Brand", "150Ah Tall Tubular", "High Acid Volume", "6 Float Indicators", "Extended Life Cycle"],
    featured: true
  },

  // Solar - Microtek & Luminous
  {
    id: 81,
    slug: "microtek-solar-pcu-1235-hybrid-inverter",
    name: "Microtek Solar PCU 1235 (12V / 850VA) Hybrid Solar Inverter",
    category: "Solar Solutions",
    image: "/images/products/microtek_solar_pcu.jpg",
    shortDescription: "Intelligent hybrid solar power conditioning unit with built-in PWM charge controller.",
    description: "Microtek Solar PCU 1235 is a high-efficiency pure sine wave hybrid solar inverter designed to prioritize solar energy over grid electricity. Equipped with a built-in 30A solar charge controller, dual charging logic, digital LCD display for solar generation units, and overload protection.",
    features: ["Microtek Brand", "Solar Hybrid PCU", "30A Solar Controller", "Pure Sine Wave", "Digital Generation Display"],
    featured: true
  },
  {
    id: 82,
    slug: "luminous-high-efficiency-solar-panel-330w",
    name: "Luminous 330W / 24V High-Efficiency Polycrystalline Solar Panel",
    category: "Solar Solutions",
    image: "/images/products/luminous_solar_panel.webp",
    shortDescription: "Heavy-duty 330W 24V solar photovoltaic module with tempered glass and anodized aluminium frame.",
    description: "Luminous 330W / 24V solar panel module featuring high-grade silicon solar cells protected by anti-reflective, low-iron toughened glass. Designed to deliver superior energy output even in low-light and cloudy conditions, equipped with pre-attached IP67 junction box and MC4 connectors.",
    features: ["Luminous Brand", "330W Peak Power", "24V System Compatible", "Toughened Solar Glass", "IP67 Weatherproof"],
    featured: true
  },

  // Voltage Stabilizers - Microtek & Everest
  {
    id: 83,
    slug: "microtek-em4160-automatic-voltage-stabilizer",
    name: "Microtek EM4160+ Automatic Digital Voltage Stabilizer for 1.5 Ton AC",
    category: "Voltage Stabilizers",
    image: "/images/products/microtek_stabilizer.jpg",
    shortDescription: "Advanced digital voltage stabilizer for up to 1.5 Ton inverter and split ACs (160V-285V).",
    description: "Microtek EM4160+ Automatic Voltage Digital Stabilizer provides robust protection for your air conditioner against harmful voltage fluctuations. Features an intuitive seven-segment digital display, Intelli-Auto Start, smart time delay system, and high & low voltage cut-off mechanisms.",
    features: ["Microtek Brand", "For Inverter AC up to 1.5 Ton", "Operating Range 160V-285V", "Digital Voltage Display", "Intelli Auto Start"],
    featured: true
  },
  {
    id: 84,
    slug: "everest-ew400-elegant-digital-voltage-stabilizer",
    name: "Everest EW 400 Elegant Voltage Stabilizer for 1.5 Ton Inverter AC",
    category: "Voltage Stabilizers",
    image: "/images/products/everest_stabilizer.jpg",
    shortDescription: "100% Pure copper winding voltage stabilizer with wide working range (130V - 280V) for inverter ACs.",
    description: "Everest EW 400 Elegant digital stabilizer features 100% pure copper winding for superior conductivity, minimal power loss, and extended appliance life. Built with sophisticated IC circuitry, wide input working range (130V-280V), high cut-off, and crystal-clear LED digital voltage display.",
    features: ["Everest Brand", "100% Copper Winding", "Wide Range 130V-280V", "Supports 1.5 Ton Inverter AC", "Digital Seven Segment Display"],
    featured: true
  },
  {
    id: 85,
    slug: "everest-double-booster-ac-stabilizer",
    name: "Everest EWD Double Booster Classic Digital Stabilizer (90V-290V)",
    category: "Voltage Stabilizers",
    image: "/images/products/everest_stabilizer.jpg",
    shortDescription: "Ultra-wide low-voltage double booster stabilizer for areas with severe voltage drops.",
    description: "Everest EWD Double Booster stabilizer operates from an ultra-low input voltage of 90V up to 290V, ensuring your air conditioner runs smoothly even in rural and low-voltage areas. Features heavy-duty relays, thermal overload protection, and 100% copper toroidal transformer.",
    features: ["Everest Brand", "Double Booster (90V-290V)", "100% Copper Coil", "Thermal Overload Sensor", "Instant Digital Display"],
    featured: false
  },
  {
    id: 86,
    slug: "microtek-emr2013-refrigerator-stabilizer",
    name: "Microtek EMR 2013 Automatic Voltage Stabilizer for Refrigerator",
    category: "Voltage Stabilizers",
    image: "/images/products/microtek_stabilizer.jpg",
    shortDescription: "Compact digital stabilizer for double-door refrigerators and deep freezers up to 300L.",
    description: "Microtek EMR 2013 provides complete voltage regulation for domestic refrigerators up to 300 Litres. Operates within 130V to 290V with intelligent delay system to safeguard compressor life against abrupt power spikes and tripping.",
    features: ["Microtek Brand", "For Refrigerators up to 300L", "Working Range 130V-290V", "Smart Delay Circuit", "High Voltage Cut-off"],
    featured: false
  }
];

