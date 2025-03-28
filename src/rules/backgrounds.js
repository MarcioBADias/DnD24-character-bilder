export const backgrounds = [
  {
    name: 'Acolyte',
    source: "PHB'24, page 178",
    abilityScores: ['Intelligence', 'Wisdom', 'Charisma'],
    feat: 'Magic Initiate (Cleric)',
    skillProficiencies: ['Insight', 'Religion'],
    toolProficiency: "Calligrapher's Supplies",
    equipment: [
      {
        option: 'A',
        items: [
          "Calligrapher's Supplies",
          'Book (prayers)',
          'Holy Symbol',
          'Parchment (10 sheets)',
          'Robe',
          '8 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Artisan',
    source: "PHB'24, page 179",
    abilityScores: ['Strength', 'Dexterity', 'Intelligence'],
    feat: 'Crafter',
    skillProficiencies: ['Investigation', 'Persuasion'],
    toolProficiency: "Choose one kind of Artisan's Tools",
    equipment: [
      {
        option: 'A',
        items: ["Artisan's Tools", '2 Pouches', "Traveler's Clothes", '32 GP'],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Charlatan',
    source: "PHB'24, page 180",
    abilityScores: ['Dexterity', 'Constitution', 'Charisma'],
    feat: 'Skilled',
    skillProficiencies: ['Deception', 'Sleight of Hand'],
    toolProficiency: 'Forgery Kit',
    equipment: [
      {
        option: 'A',
        items: ['Forgery Kit', 'Costume', 'Fine Clothes', '15 GP'],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Criminal',
    source: "PHB'24, page 180",
    abilityScores: ['Dexterity', 'Constitution', 'Intelligence'],
    feat: 'Alert',
    skillProficiencies: ['Sleight of Hand', 'Stealth'],
    toolProficiency: "Thieves' Tools",
    equipment: [
      {
        option: 'A',
        items: [
          '2 Daggers',
          "Thieves' Tools",
          'Crowbar',
          '2 Pouches',
          "Traveler's Clothes",
          '16 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Entertainer',
    source: "PHB'24, page 180",
    abilityScores: ['Strength', 'Dexterity', 'Charisma'],
    feat: 'Musician',
    skillProficiencies: ['Acrobatics', 'Performance'],
    toolProficiency: 'Choose one kind of Musical Instrument',
    equipment: [
      {
        option: 'A',
        items: [
          'Musical Instrument',
          '2 Costumes',
          'Mirror',
          'Perfume',
          "Traveler's Clothes",
          '11 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Farmer',
    source: "PHB'24, page 180",
    abilityScores: ['Strength', 'Constitution', 'Wisdom'],
    feat: 'Tough',
    skillProficiencies: ['Animal Handling', 'Nature'],
    toolProficiency: "Carpenter's Tools",
    equipment: [
      {
        option: 'A',
        items: [
          'Sickle',
          "Carpenter's Tools",
          "Healer's Kit",
          'Iron Pot',
          'Shovel',
          '30 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Guard',
    source: "PHB'24, page 181",
    abilityScores: ['Strength', 'Intelligence', 'Wisdom'],
    feat: 'Alert',
    skillProficiencies: ['Athletics', 'Perception'],
    toolProficiency: 'Choose one kind of Gaming Set',
    equipment: [
      {
        option: 'A',
        items: [
          'Spear',
          'Light Crossbow',
          '20 Bolts',
          'Gaming Set',
          'Hooded Lantern',
          'Manacles',
          'Quiver',
          "Traveler's Clothes",
          '12 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Guide',
    source: "PHB'24, page 181",
    abilityScores: ['Dexterity', 'Constitution', 'Wisdom'],
    feat: 'Magic Initiate (Druid)',
    skillProficiencies: ['Stealth', 'Survival'],
    toolProficiency: "Cartographer's Tools",
    equipment: [
      {
        option: 'A',
        items: [
          'Shortbow',
          '20 Arrows',
          "Cartographer's Tools",
          'Bedroll',
          'Quiver',
          'Tent',
          "Traveler's Clothes",
          '3 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Hermit',
    source: "PHB'24, page 182",
    abilityScores: ['Constitution', 'Wisdom', 'Charisma'],
    feat: 'Healer',
    skillProficiencies: ['Medicine', 'Religion'],
    toolProficiency: 'Herbalism Kit',
    equipment: [
      {
        option: 'A',
        items: [
          'Quarterstaff',
          'Herbalism Kit',
          'Bedroll',
          'Book (philosophy)',
          'Lamp',
          'Oil (3 flasks)',
          "Traveler's Clothes",
          '16 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Merchant',
    source: "PHB'24, page 182",
    abilityScores: ['Constitution', 'Intelligence', 'Charisma'],
    feat: 'Lucky',
    skillProficiencies: ['Animal Handling', 'Persuasion'],
    toolProficiency: "Navigator's Tools",
    equipment: [
      {
        option: 'A',
        items: [
          "Navigator's Tools",
          '2 Pouches',
          "Traveler's Clothes",
          '22 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Noble',
    source: "PHB'24, page 183",
    abilityScores: ['Strength', 'Intelligence', 'Charisma'],
    feat: 'Skilled',
    skillProficiencies: ['History', 'Persuasion'],
    toolProficiency: 'Choose one kind of Gaming Set',
    equipment: [
      {
        option: 'A',
        items: ['Gaming Set', 'Fine Clothes', 'Perfume', '29 GP'],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Sage',
    source: "PHB'24, page 183",
    abilityScores: ['Constitution', 'Intelligence', 'Wisdom'],
    feat: 'Magic Initiate (Wizard)',
    skillProficiencies: ['Arcana', 'History'],
    toolProficiency: "Calligrapher's Supplies",
    equipment: [
      {
        option: 'A',
        items: [
          'Quarterstaff',
          "Calligrapher's Supplies",
          'Book (history)',
          'Parchment (8 sheets)',
          'Robe',
          '8 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Sailor',
    source: "PHB'24, page 184",
    abilityScores: ['Strength', 'Dexterity', 'Wisdom'],
    feat: 'Tavern Brawler',
    skillProficiencies: ['Acrobatics', 'Perception'],
    toolProficiency: "Navigator's Tools",
    equipment: [
      {
        option: 'A',
        items: [
          'Dagger',
          "Navigator's Tools",
          'Rope',
          "Traveler's Clothes",
          '20 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Scribe',
    source: "PHB'24, page 184",
    abilityScores: ['Dexterity', 'Intelligence', 'Wisdom'],
    feat: 'Skilled',
    skillProficiencies: ['Investigation', 'Perception'],
    toolProficiency: "Calligrapher's Supplies",
    equipment: [
      {
        option: 'A',
        items: [
          "Calligrapher's Supplies",
          'Fine Clothes',
          'Lamp',
          'Oil (3 flasks)',
          'Parchment (12 sheets)',
          '23 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Soldier',
    source: "PHB'24, page 185",
    abilityScores: ['Strength', 'Dexterity', 'Constitution'],
    feat: 'Savage Attacker',
    skillProficiencies: ['Athletics', 'Intimidation'],
    toolProficiency: 'Choose one kind of Gaming Set',
    equipment: [
      {
        option: 'A',
        items: [
          'Spear',
          'Shortbow',
          '20 Arrows',
          'Gaming Set',
          "Healer's Kit",
          'Quiver',
          "Traveler's Clothes",
          '14 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
  {
    name: 'Wayfarer',
    source: "PHB'24, page 185",
    abilityScores: ['Dexterity', 'Wisdom', 'Charisma'],
    feat: 'Lucky',
    skillProficiencies: ['Insight', 'Stealth'],
    toolProficiency: "Thieves' Tools",
    equipment: [
      {
        option: 'A',
        items: [
          '2 Daggers',
          "Thieves' Tools",
          'Gaming Set',
          'Bedroll',
          '2 Pouches',
          "Traveler's Clothes",
          '16 GP',
        ],
      },
      {
        option: 'B',
        items: ['50 GP'],
      },
    ],
  },
]
