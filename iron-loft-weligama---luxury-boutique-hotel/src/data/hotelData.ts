export interface Room {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  area: string; // e.g. "140 m² / 1,506 sq ft"
  guests: string; // e.g. "2 to 4 Guests"
  bed: string; // e.g. "King Bed + Optional Daybed"
  view: string; // e.g. "Panoramic Weligama Bay & Surf Break"
  pricePerNight: number;
  currency: string;
  images: string[];
  features: string[];
  amenities: {
    comfort: string[];
    bathroom: string[];
    technology: string[];
    complimentary: string[];
  };
  architecturalHighlights: string[];
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  timing: string;
  idealFor: string;
  description: string;
  details: string[];
  image: string;
  included: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'architecture' | 'suites' | 'wellness' | 'culinary' | 'weligama';
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export const HOTEL_CONFIG = {
  name: "IRON LOFT WELIGAMA",
  shortName: "Iron Loft",
  destination: "Weligama Bay, Sri Lanka",
  phone: "+94 77 928 3400",
  whatsappNumber: "94779283400", // numeric without '+' for direct wa.me links
  email: "concierge@ironloftweligama.com",
  reservationsEmail: "stay@ironloftweligama.com",
  address: "Iron Loft, Pelena Coastal Road, Weligama Bay, Southern Province 80400, Sri Lanka",
  coordinates: "5.9735° N, 80.4287° E",
  checkIn: "14:00 (2:00 PM)",
  checkOut: "11:00 (11:00 AM)",
  currencySymbol: "$",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
  }
};

export const ROOMS: Room[] = [
  {
    id: "iron-penthouse",
    slug: "the-iron-penthouse",
    name: "The Grand Iron Penthouse",
    subtitle: "Rooftop Sanctuary & Private Bay Panorama",
    tagline: "Monolithic steel framing and panoramic vistas across Weligama's curved coastline.",
    description: "Perched at the highest tier of Iron Loft, this 140 m² sanctuary commands uninterrupted 270-degree horizons over the Indian Ocean. Designed with floor-to-ceiling blackened iron casement windows, a cantilevered plunge pool, and hand-troweled alabaster stone plaster.",
    longDescription: [
      "The Grand Iron Penthouse represents the pinnacle of coastal brutalism in Sri Lanka. Elevated above the palms, the suite pairs the tactile severity of charcoal iron and volcanic basalt with the warmth of aged teak and sun-bleached Belgian linens.",
      "A private 40 m² stone sundeck hosts an open-air plunge pool cantilevered toward the sunset, accompanied by twin low-slung sun loungers and a sheltered daybed pavilion.",
      "The master bathing chamber features an oversized solid travertine soaking tub overlooking the surf break, paired with a dual rain shower finished in matte black hardware and organic botanical amenities formulated with Ceylon cinnamon and vetiver."
    ],
    area: "140 m² / 1,506 sq ft",
    guests: "2 – 4 Adults",
    bed: "Custom King Platform Bed + Double Daybed",
    view: "270° Ocean Horizon & Weligama Bay",
    pricePerNight: 620,
    currency: "USD",
    images: [
      "/src/assets/images/suite_grand_penthouse_1793974562373.jpg",
      "/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg",
      "/src/assets/images/wellness_pool_sanctuary_1793974563896.jpg",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private Rooftop Plunge Pool",
      "270° Weligama Bay Oceanfront View",
      "Floor-to-Ceiling Iron Casements",
      "Solid Travertine Deep Soaking Tub",
      "Dedicated 24h Villa Concierge"
    ],
    amenities: {
      comfort: [
        "Hand-stitched Belgian linen bedding",
        "Pillow menu (goose down, organic kapok, buckwheat)",
        "Automated blackout iron shutters",
        "Acoustic double-glazed glazing",
        "Dedicated climate & ceiling fan control"
      ],
      bathroom: [
        "Freestanding hand-carved travertine tub",
        "Dual indoor & outdoor monsoon rain showers",
        "Dyson Supersonic hair system",
        "Organic Ceylon sandalwood bath toiletries",
        "Plush waffle linen bathrobes & slippers"
      ],
      technology: [
        "Bang & Olufsen Bluetooth sound system",
        "High-speed fiber Wi-Fi (150 Mbps)",
        "Bespoke discreet bedside charging ports",
        "Curated library of architectural monographs"
      ],
      complimentary: [
        "Daily sunset cocktails on your private terrace",
        "Bespoke artisan Ceylon single-estate tea bar",
        "Morning surf report and private board rack",
        "Daily tropical breakfast served in-suite"
      ]
    },
    architecturalHighlights: [
      "Custom blackened structural steel framing designed to patinate naturally with coastal sea salt",
      "Unbroken sightlines from bedside directly to Weligama's famed reef breaks",
      "Cast concrete ceiling with subtle linear board-formed texture"
    ]
  },
  {
    id: "ocean-loft",
    slug: "ocean-loft-suite",
    name: "Oceanfront Loft Suite",
    subtitle: "Double-Height Volume & Cantilevered Ocean Daybed",
    tagline: "Volumetric spatial freedom with private balcony suspended over the palm canopy.",
    description: "A two-level architectural loft celebrating natural light and oceanic breezes. Featuring an open-plan steel staircase, mezzanine sleeping gallery, and an expansive ground-level salon that opens seamlessly to the ocean horizon.",
    longDescription: [
      "Ascend into a double-height volume where 6-meter ceilings amplify the sound of distant ocean breakers. The lower floor features a sunken travertine lounge, artisanal bar, and a cantilevered teak daybed suspended above lush palm fronds.",
      "A blackened steel architectural staircase leads to an intimate mezzanine sleeping platform, oriented to welcome the sunrise over Weligama Bay without leaving the comfort of the linen-draped king bed.",
      "Sliding glass partitions dissolve the boundary between indoors and the private ocean terrace, allowing the tropical coastal trade winds to naturally ventilate the loft."
    ],
    area: "85 m² / 915 sq ft",
    guests: "2 Adults",
    bed: "King Size Mezzanine Bed",
    view: "Unobstructed Weligama Ocean & Beach",
    pricePerNight: 440,
    currency: "USD",
    images: [
      "/src/assets/images/suite_ocean_loft_1793974562664.jpg",
      "/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg",
      "/src/assets/images/suite_grand_penthouse_1793974562373.jpg",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Double-Height 6m Architectural Ceiling",
      "Cantilevered Exterior Ocean Daybed",
      "Mezzanine Master Bedroom",
      "Sunken Travertine Lounge",
      "Direct Ocean Breeze Flow-Through"
    ],
    amenities: {
      comfort: [
        "Mezzanine sleeping retreat with king bed",
        "Organic linen throw blankets and cushions",
        "Handcrafted solid teak furniture",
        "Quiet inverter climate control & fan"
      ],
      bathroom: [
        "Walk-in open rain shower room",
        "Artisanal black volcanic rock dual vanities",
        "Handmade Ayurvedic soap and body oils",
        "Organic bamboo towels and robes"
      ],
      technology: [
        "Marshall Stanmore wireless audio",
        "Fast fiber broadband",
        "USB-C high-wattage charging points"
      ],
      complimentary: [
        "Single-estate pour-over coffee kit",
        "Complimentary evening tea tasting",
        "Daily mineral water in reusable glass vessels",
        "Artisanal tropical fruit platter on arrival"
      ]
    },
    architecturalHighlights: [
      "Monolithic blackened plate steel staircase fabricated on-site by Southern Province ironworkers",
      "Smooth mineral plaster walls reflecting the changing amber hues of sunset",
      "Cantilevered teak daybed balancing over native cinnamon tree canopy"
    ]
  },
  {
    id: "monolith-garden",
    slug: "monolith-garden-suite",
    name: "Monolith Garden Suite",
    subtitle: "Secluded Courtyard & Open-Air Volcanic Rain Shower",
    tagline: "Grounded tropical serenity cradled by basalt walls and lush native flora.",
    description: "Located on the ground tier with direct access to private walled gardens. Massive raw volcanic stone walls form a secluded sanctuary complete with an open-air monsoon shower, private reflection basin, and deep shade.",
    longDescription: [
      "The Monolith Garden Suite is designed for deep rest and tactile grounding. Enclosed by massive dry-stacked basalt walls, the suite offers a cool, meditative escape from the midday equatorial heat.",
      "Step into your private walled garden courtyard where an open-air rainwater shower flows over smooth river stones, surrounded by giant elephant ears, wild ferns, and fragrant frangipani blossoms.",
      "Polished charcoal terrazzo floors remain cool beneath bare feet, while bespoke brass fixtures and soft ambient cove lighting create an intimate evening atmosphere."
    ],
    area: "70 m² / 753 sq ft",
    guests: "2 Adults",
    bed: "King Platform Bed with Teak Headboard",
    view: "Private Walled Garden & Reflection Pool",
    pricePerNight: 380,
    currency: "USD",
    images: [
      "/src/assets/images/wellness_pool_sanctuary_1793974563896.jpg",
      "/src/assets/images/suite_ocean_loft_1793974562664.jpg",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private Basalt Walled Courtyard",
      "Open-Air Tropical Rain Shower",
      "Direct Access to Ground Water Mirror",
      "Polished Charcoal Terrazzo Flooring",
      "Absolute Acoustic Privacy"
    ],
    amenities: {
      comfort: [
        "Custom king platform bed with integrated reading lamps",
        "Hypoallergenic organic cotton bedding",
        "Private garden daybed with mosquito canopy",
        "Whisper-quiet eco climate control"
      ],
      bathroom: [
        "Open-sky tropical rain shower",
        "Monolithic river stone sink basin",
        "Botanical neem and turmeric bath amenities",
        "Pure cotton kimono robes"
      ],
      technology: [
        "Tivoli Bluetooth audio unit",
        "Ultra-fast Wi-Fi throughout suite and courtyard",
        "International universal power sockets"
      ],
      complimentary: [
        "Herbal infusion tea setup with local lemongrass",
        "Daily garden floral refreshment",
        "Yoga mat and meditation cushion in-suite"
      ]
    },
    architecturalHighlights: [
      "Dry-stacked volcanic stone perimeter wall providing natural acoustic dampening",
      "Seamless transition from polished indoor terrazzo to outdoor cleft stone pavers",
      "Framed aperture opening into a private micro-jungle courtyard"
    ]
  },
  {
    id: "alabaster-pavilion",
    slug: "alabaster-pavilion",
    name: "Alabaster Ocean Pavilion",
    subtitle: "Sprawling Lateral Residence & Private Plunge Terrace",
    tagline: "Airy alabaster mineral plaster, expansive outdoor living, and timeless ocean poetry.",
    description: "An expansive 110 m² lateral suite offering seamless indoor-outdoor living. Features wide-format bronze sliding doors, a sheltered outdoor dining loggia, private cold plunge pool, and dedicated library niche.",
    longDescription: [
      "The Alabaster Ocean Pavilion draws inspiration from Geoffrey Bawa's tropical modernism filtered through a rigorous contemporary lens. Finished in luminous off-white lime plaster, the space is perpetually bathed in soft, reflected maritime light.",
      "An expansive private veranda features an outdoor dining terrace, private daybed lounge, and a serene basalt plunge pool overlooking the gently breaking waves of Weligama.",
      "Inside, a curated collection of contemporary South Asian art and design literature invites guests to disconnect, read, and soak in the slow, luxurious rhythm of the southern coast."
    ],
    area: "110 m² / 1,184 sq ft",
    guests: "2 – 3 Adults",
    bed: "California King Bed + Sofa Bed",
    view: "Elevated Oceanfront & Sunset Coastline",
    pricePerNight: 510,
    currency: "USD",
    images: [
      "/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg",
      "/src/assets/images/suite_grand_penthouse_1793974562373.jpg",
      "/src/assets/images/wellness_pool_sanctuary_1793974563896.jpg",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private Veranda Cold Plunge Pool",
      "Sheltered Outdoor Dining Loggia",
      "Full Oceanfront Lateral Elevation",
      "Curated Architectural Library",
      "In-Suite Private Dining Option"
    ],
    amenities: {
      comfort: [
        "California King bed with breathable linen duvets",
        "Spacious dressing gallery with custom teak wardrobes",
        "Dual chaise lounges on private sundeck",
        "Subtle circadian lighting automation"
      ],
      bathroom: [
        "Deep oval bathtub with floor-mounted bronze spout",
        "Oversized rainfall shower stall",
        "Double floating alabaster vanities",
        "Organic essential oil bathroom diffuser"
      ],
      technology: [
        "Sonos multi-room audio system",
        "High-speed fiber connectivity",
        "Silent electronic laptop safe"
      ],
      complimentary: [
        "Daily in-room breakfast or terrace service",
        "Sunset canapés and vintage tea pairing",
        "Complimentary laundry service (up to 4 items daily)"
      ]
    },
    architecturalHighlights: [
      "Continuous lime-plaster finish applied by master craftsmen using traditional Sri Lankan techniques",
      "Recessed architectural bronze track system for silent sliding partitions",
      "Deep concrete eaves offering natural solar shading without obstructing coastal sightlines"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "surf-sanctuary",
    slug: "dawn-surf-sanctuary",
    title: "Dawn Surf Sanctuary & Private Bay Coaching",
    category: "Ocean & Surf",
    duration: "2.5 Hours",
    timing: "Daily at 06:15 AM",
    idealFor: "Beginners to Advanced Surfers",
    description: "Experience Weligama Bay's legendary gentle peelers and outer reef breaks with Iron Loft's dedicated surf coach. Begin with a mindful beachside mobility session, custom-fitted high-performance boards, and private ocean instruction.",
    details: [
      "Weligama Bay is renowned globally for its consistent, sand-bottom peeling waves ideal for refinement, alongside outer reef breaks for seasoned surfers.",
      "Includes private video review and drone analysis over breakfast to accelerate wave technique.",
      "Premium quiver access: longboards, mid-lengths, and performance twin fins hand-shaped in Sri Lanka and Australia."
    ],
    image: "/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg",
    included: [
      "Private ISA-certified surf coach",
      "Custom surfboard & zinc protection",
      "Hydration coconut & fresh tropical fruit",
      "GoPro / Drone photographic capture"
    ]
  },
  {
    id: "sunset-gastronomy",
    slug: "rooftop-mixology-dinner",
    title: "Sunset Ember & Ocean-to-Table Gastronomy",
    category: "Culinary & Dining",
    duration: "3 Hours",
    timing: "Evening from 17:30 PM",
    idealFor: "Couples & Culinary Travelers",
    description: "An intimate culinary journey guided by our Executive Chef. Savor catch-of-the-day yellowfin tuna, jumbo lagoon prawns, and wood-fired coconut flatbreads paired with botanical cocktails infused with Ceylon spices.",
    details: [
      "Dining unfolds on the cantilevered iron terrace overlooking the tranquil pink-and-charcoal dusk of Weligama Bay.",
      "Dishes honor Southern Sri Lankan coastal heritage while applying minimalist Japanese and French charcoal techniques.",
      "Bespoke wine pairing featuring biodynamic and natural vintages selected by our sommelier."
    ],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    included: [
      "5-Course wood-fired tasting menu",
      "Cocktail pairing with Ceylon botanical infusions",
      "Private table on the sunset terrace",
      "Dedicated culinary host"
    ]
  },
  {
    id: "white-tea-cinnamon",
    slug: "virgin-white-tea-trail",
    title: "Handunugoda Virgin White Tea & Cinnamon Trail",
    category: "Heritage & Nature",
    duration: "4.5 Hours",
    timing: "Morning at 08:30 AM",
    idealFor: "Culture & Nature Lovers",
    description: "Journey into the emerald hills of the Southern Province to visit the historic Handunugoda Tea Estate, world-famous for its untouched Virgin White Tea harvested with gold scissors without direct human touch.",
    details: [
      "Private chauffeur in an air-conditioned vintage Land Rover or executive luxury transport through lush rubber and spice groves.",
      "Exclusive guided walk with the estate master, revealing ancient methods of Ceylon true cinnamon harvesting and artisan tea processing.",
      "Comprehensive tea degustation featuring over 25 rare single-estate grades alongside homemade tea scones."
    ],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Private roundtrip transfer from Iron Loft",
      "VIP private estate master guide",
      "White tea & Ceylon cinnamon tasting ceremony",
      "Gift tin of estate Virgin White Tea"
    ]
  },
  {
    id: "whale-expedition",
    slug: "mirissa-whale-expedition",
    title: "Private Catamaran Blue Whale Expedition",
    category: "Ocean & Wildlife",
    duration: "4 Hours",
    timing: "Seasonal (Nov – Apr) at 06:00 AM",
    idealFor: "Wildlife Enthusiasts & Small Groups",
    description: "Set sail from nearby Mirissa harbor aboard a private 40-foot sailing catamaran into the deep shelf waters where the world's largest mammals—the majestic Blue Whales and playful spinner dolphins—gather.",
    details: [
      "Avoid crowded commercial boats with our private, respectful low-impact eco-charter adhering to strict marine observation guidelines.",
      "Onboard marine naturalist providing rich ecological insights into the Indian Ocean cetacean migration.",
      "Gourmet breakfast hamper, freshly squeezed tropical juices, and artisan coffee served on the shaded teak forward deck."
    ],
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Exclusive private 40ft catamaran charter",
      "Marine biologist guide on board",
      "Artisanal breakfast hamper & champagne",
      "Direct harbor transfers"
    ]
  },
  {
    id: "wellness-bath",
    slug: "sound-bath-ayurveda",
    title: "Volcanic Mineral Bath & Ayurvedic Botanical Ritual",
    category: "Wellness & Spa",
    duration: "2 Hours",
    timing: "Flexible (10:00 AM – 19:00 PM)",
    idealFor: "Rejuvenation & Stress Release",
    description: "Surrender to ancient Sri Lankan Ayurvedic wisdom in our subterranean stone pavilion. Begins with warm herbal oil marma therapy, followed by a mineral soak infused with ocean sea salts, ginger root, and crushed gotu kola.",
    details: [
      "Therapies are tailored to individual dosha constitutions using oils cooked locally over firewood with therapeutic herbs.",
      "Concludes with a resonant Tibetan singing bowl sound bath aligning physical relaxation with auditory serenity.",
      "Private outdoor relaxation veranda with warm ginger-coriander herbal elixir."
    ],
    image: "/src/assets/images/wellness_pool_sanctuary_1793974563896.jpg",
    included: [
      "Pre-treatment Ayurvedic dosha consultation",
      "75-minute full body marma abhyanga massage",
      "30-minute volcanic mineral and herbal immersion",
      "Acoustic Tibetan sound bath"
    ]
  },
  {
    id: "galle-fort",
    slug: "galle-architectural-heritage",
    title: "Colonial Dutch Galle Fort Curated Walk",
    category: "Heritage & Art",
    duration: "4 Hours",
    timing: "Afternoon from 15:30 PM",
    idealFor: "Architecture & History Connoisseurs",
    description: "Explore the UNESCO World Heritage Galle Dutch Fort, just 35 minutes along the coastal road. Walk through 400 years of Portuguese, Dutch, and British colonial stone ramparts with a resident architectural historian.",
    details: [
      "Discover private courtyards, antique jewelry vaults, and boutique galleries normally closed to the public.",
      "Stroll along the historic lighthouse bastions as twilight illuminates the coral stone ramparts and crashing ocean spray.",
      "Conclude with gin cocktails at a restored 18th-century merchant mansion."
    ],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    included: [
      "Private chauffeur transfer to Galle",
      "Resident architectural historian guide",
      "Access to private heritage residences",
      "Sunset cocktails and colonial tea tapas"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Monolithic Oceanfront Facade",
    category: "architecture",
    image: "/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg",
    aspect: "landscape",
    caption: "Raw charcoal concrete slabs and blackened iron framing overlooking Weligama Bay at sunset."
  },
  {
    id: "gal-2",
    title: "Grand Iron Penthouse Chamber",
    category: "suites",
    image: "/src/assets/images/suite_grand_penthouse_1793974562373.jpg",
    aspect: "landscape",
    caption: "Travertine flooring and floor-to-ceiling iron casements framing uninterrupted coastal waters."
  },
  {
    id: "gal-3",
    title: "Volcanic Mineral Pool at Dusk",
    category: "wellness",
    image: "/src/assets/images/wellness_pool_sanctuary_1793974563896.jpg",
    aspect: "landscape",
    caption: "Quiet water mirror bordered by volcanic basalt walls and lush tropical greenery."
  },
  {
    id: "gal-4",
    title: "Oceanfront Loft Double-Height Volume",
    category: "suites",
    image: "/src/assets/images/suite_ocean_loft_1793974562664.jpg",
    aspect: "landscape",
    caption: "Cantilevered ocean daybed and bespoke industrial blackened steel staircase."
  },
  {
    id: "gal-5",
    title: "Sunset Charcoal Terrace Dining",
    category: "culinary",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    caption: "Ocean-to-table wood-fired gastronomy under open tropical night skies."
  },
  {
    id: "gal-6",
    title: "Weligama Bay Surf Peeler",
    category: "weligama",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    caption: "The gentle turquoise rolling waves of Weligama's protected coastal bay."
  },
  {
    id: "gal-7",
    title: "Alabaster Plaster & Teak Library",
    category: "architecture",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    caption: "Tactile mineral surfaces and bespoke timber millwork reflecting soft daylight."
  },
  {
    id: "gal-8",
    title: "Morning Pour-Over Tea Ceremony",
    category: "culinary",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    caption: "Single-estate virgin white tea prepared tableside with brass and clay wares."
  },
  {
    id: "gal-9",
    title: "Southern Coastline Palms & Headland",
    category: "weligama",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape",
    caption: "Golden sand coves and swaying coconut groves characteristic of southern Sri Lanka."
  }
];

export const HOTEL_HIGHLIGHTS = [
  {
    number: "01",
    title: "Understated Coastal Brutalism",
    subtitle: "Raw Iron & Plaster",
    description: "Monolithic cast concrete and blackened iron frameworks softened by warm alabaster travertine and sun-bleached natural linens."
  },
  {
    number: "02",
    title: "Weligama Bay Sanctuary",
    subtitle: "Ocean & Surf Haven",
    description: "Direct elevated presence above Sri Lanka's premiere surf destination, offering unhurried privacy and immediate bay access."
  },
  {
    number: "03",
    title: "Private Water Mirrors",
    subtitle: "Plunge Pools & Basalt",
    description: "Every suite commands private aquatic features, from cantilevered rooftop pools to secluded subterranean volcanic water basins."
  },
  {
    number: "04",
    title: "Unhurried Concierge Culture",
    subtitle: "Intimate Solitude",
    description: "Bespoke 24-hour service designed to protect your sanctuary. Discreet, anticipatory, and rooted in genuine island warmth."
  }
];
