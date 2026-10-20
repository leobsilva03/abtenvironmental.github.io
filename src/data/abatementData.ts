import { IMAGES } from '../config/images';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badgeIcon: 'asbestos' | 'lead' | 'mould' | 'commercial';
  fullTitle: string;
  regulationCode: string;
  description: string;
  keyHazards: string[];
  ourSolutions: string[];
  containmentType: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'asbestos',
    title: 'Asbestos Abatement',
    shortDesc: 'Safe and compliant removal of asbestos-containing materials by certified professionals.',
    badgeIcon: 'asbestos',
    fullTitle: 'Type 1, Type 2 & Type 3 Asbestos Abatement',
    regulationCode: 'Ontario Regulation 278/05 (Designated Substances)',
    description: 'Asbestos was widely used in construction prior to the 1990s in pipe insulation, floor tiles, drywall compound, popcorn ceilings, and vermiculite. When disturbed, microscopic airborne fibers cause severe respiratory illnesses including asbestosis and mesothelioma. Our certified abatement crews handle containment, negative air pressure scrubbers, and safe certified disposal.',
    keyHazards: [
      'Friable pipe and boiler insulation',
      'Vermiculite attic insulation',
      'Vinyl floor tiles & mastic adhesive',
      'Acoustic ceiling textures & popcorn plaster',
      'Drywall joint compound & duct wrap'
    ],
    ourSolutions: [
      'Type 1, 2, and 3 full glove-bag and negative-pressure containment',
      'HEPA-filtered air scrubbers operating under negative differential pressure',
      'Certified Ontario MOE manifest transportation & disposal',
      'Complete documentation certificate of safe decontamination'
    ],
    containmentType: 'Type 3 Negative Air Enclosure with Decontamination Chamber',
    image: IMAGES.asbestos
  },
  {
    id: 'lead',
    title: 'Lead Abatement',
    shortDesc: 'Eliminate lead-based hazards in older buildings, ensuring a safer environment for your family, employees and community.',
    badgeIcon: 'lead',
    fullTitle: 'Lead-Based Paint Abatement & Hazard Mitigation',
    regulationCode: 'Ontario Occupational Health and Safety Act - Lead Regulation',
    description: 'Buildings constructed before 1978 commonly contain toxic lead-based paints, lead piping, and structural coatings. During friction, deterioration, or renovation, toxic lead dust settles in living and working spaces, posing severe neurological risks particularly to children and workers.',
    keyHazards: [
      'Flaking lead paint on interior/exterior trim & sills',
      'Friction surface dust on doors, windows and floors',
      'Lead piping, soldered copper joints & plumbing fixtures',
      'Industrial structural steel coatings & lead flashings'
    ],
    ourSolutions: [
      'Chemical paint stripping & stabilization without toxic dust generation',
      'HEPA vacuum shrouded mechanical scraping & needle scaling',
      'Critical barrier plastic containment with air filtration',
      'Encapsulation and permanent safe enclosure systems'
    ],
    containmentType: 'Sealed Barrier with HEPA Local Exhaust Filtration',
    image: IMAGES.lead
  },
  {
    id: 'mould',
    title: 'Mould Remediation',
    shortDesc: 'Identify, contain and remove mould at the source, preventing recurrence and improving indoor air quality.',
    badgeIcon: 'mould',
    fullTitle: 'Comprehensive Microbial Remediation & Moisture Control',
    regulationCode: 'IICRC S520 Standard for Professional Mold Remediation',
    description: 'Black mould (Stachybotrys chartarum), Aspergillus, and Cladosporium develop rapidly after water intrusion, plumbing leaks, high humidity, or flooding. Mould spores exacerbate asthma, trigger severe allergic reactions, and compromise building integrity. We identify moisture root causes, eliminate colonies, and restore pristine air.',
    keyHazards: [
      'Hidden attic condensation & poor ventilation mould blooms',
      'Basement foundation seepage & subfloor spore colonies',
      'HVAC ductwork contamination & airborne spore circulation',
      'Post-flood drywall, insulation and framing moisture decay'
    ],
    ourSolutions: [
      'Thermal imaging and pinless moisture mapping to find hidden leaks',
      'Antimicrobial botanical fogging and non-toxic disinfection',
      'Physical removal of porous contaminated drywall & insulation',
      'HEPA vacuuming and industrial dehumidification stabilization'
    ],
    containmentType: 'Level 2 & 3 Isolation Barriers with Continuous Dehumidification',
    image: IMAGES.mould
  },
  {
    id: 'commercial',
    title: 'Industrial & Commercial',
    shortDesc: 'Customized solutions for residential, commercial and industrial properties.',
    badgeIcon: 'commercial',
    fullTitle: 'Commercial, Institutional & Industrial Hazmat Contracting',
    regulationCode: 'Ontario Building Code & Ministry of Labour Environmental Safety',
    description: 'Large-scale commercial retrofits, manufacturing facilities, school boards, hospitals, and heritage restorations require stringent safety compliance, minimum tenant downtime, and phased containment. ABT Environmental brings industrial capacity, licensed personnel, and after-hours execution.',
    keyHazards: [
      'Commercial mechanical room insulation & boiler systems',
      'Industrial plant decommissioning & machinery decontamination',
      'High-traffic public facilities requiring dust-free operations',
      'Multi-unit residential complex phased restorations'
    ],
    ourSolutions: [
      'Phased containment and 24/7 off-hours scheduling to prevent business disruption',
      'Multi-point negative pressure air scrubbers with differential manometers',
      'Dedicated project management with digital safety manifests',
      'WSIB clearance certificates and comprehensive commercial liability insurance',
      'Turnkey prep for demolition, renovation, or tenant re-occupancy'
    ],
    containmentType: 'High-Volume Modular Industrial Negative Pressure Zones',
    image: IMAGES.hero
  }
];

export const SERVICE_AREAS = [
  {
    region: 'Greater Toronto Area (GTA)',
    cities: ['Toronto', 'Mississauga', 'Brampton', 'Markham', 'Vaughan', 'Richmond Hill', 'Oakville', 'Burlington'],
    responseTime: '< 90 mins'
  },
  {
    region: 'Waterloo Region & Guelph',
    cities: ['Kitchener', 'Waterloo', 'Cambridge', 'Guelph', 'Elmira', 'New Hamburg'],
    responseTime: '< 30 mins (Local Dispatch)'
  },
  {
    region: 'Hamilton & Niagara',
    cities: ['Hamilton', 'Stoney Creek', 'St. Catharines', 'Niagara Falls', 'Grimsby', 'Welland'],
    responseTime: '< 90 mins'
  },
  {
    region: 'London & Southwestern Ontario',
    cities: ['London', 'Woodstock', 'Stratford', 'St. Thomas', 'Chatham-Kent', 'Windsor', 'Sarnia'],
    responseTime: '< 90 mins'
  },
  {
    region: 'Central & Eastern Ontario',
    cities: ['Barrie', 'Newmarket', 'Oshawa', 'Whitby', 'Peterborough', 'Kingston', 'Ottawa'],
    responseTime: '< 90 mins'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Inspection & Assessment',
    desc: 'Our certified technicians conduct an on-site hazard audit with bulk sampling, moisture mapping, and thorough risk analysis.'
  },
  {
    step: '02',
    title: 'Containment & Air Scrubbing',
    desc: 'We erect air-tight poly barriers, install sealed decontamination chambers, and initiate continuous negative air pressure with HEPA filtration units.'
  },
  {
    step: '03',
    title: 'Safe Certified Abatement & Disposal',
    desc: 'Trained hazmat specialists in full PPE safely remove and package hazardous materials using wet methods, sealing all waste in regulated containers for certified manifest transport.'
  }
];
