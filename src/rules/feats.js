const feats = {
  'Ability Score Improvement': {
    source: "PHB'24",
    page: 202,
    type: 'General Feat',
    prerequisites: 'Level 4+',
    description:
      "Increase one ability score of your choice by 2, or increase two ability scores of your choice by 1. This feat can't increase an ability score above 20.",
    repeatable: true,
  },
  Actor: {
    source: "PHB'24",
    page: 202,
    type: 'General Feat',
    prerequisites: 'Level 4+, Charisma 13+',
    abilityScoreIncrease: 'Cha +1',
    description:
      "You gain the following benefits:\n- Ability Score Increase: Increase your Charisma score by 1, to a maximum of 20.\n- Impersonation: While you're disguised as a real or fictional person, you have Advantage on Charisma (Deception or Performance) checks to convince others that you are that person.\n- Mimicry: You can mimic the sounds of other creatures, including speech. A creature that hears the mimicry must succeed on a Wisdom (Insight) check to determine the effect is faked (DC 8 plus your Charisma modifier and Proficiency Bonus).",
  },
  Alert: {
    source: "PHB'24",
    page: 200,
    type: 'Origin Feat',
    description:
      "You gain the following benefits:\n- Initiative Proficiency: When you roll Initiative, you can add your Proficiency Bonus to the roll.\n- Initiative Swap: Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition.",
  },
  Archery: {
    source: "PHB'24",
    page: 209,
    type: 'Fighting Style Feat',
    prerequisites: 'Fighting Style Feature',
    description:
      'You gain a +2 bonus to attack rolls you make with Ranged weapons.',
  },
  Athlete: {
    source: "PHB'24",
    page: 202,
    type: 'General Feat',
    prerequisites: 'Level 4+, Strength or Dexterity 13+',
    abilityScoreIncrease: 'Str/Dex +1',
    description:
      'You gain the following benefits:\n- Ability Score Increase: Increase your Strength or Dexterity by 1, to a maximum of 20.\n- Climb Speed: You gain a Climb Speed equal to your Speed.\n- Hop Up: When you have the Prone condition, you can right yourself with only 5 feet of movement.\n- Jumping: You can make a running Long or High Jump after moving only 5 feet.',
  },
  'Blessed Warrior': {
    source: "PHB'24",
    page: 110,
    type: 'Fighting Style Replacement (Paladin)',
    prerequisites: "When Gaining the Level 2 Paladin 'Fighting Style' Feature",
    description:
      'You learn two Cleric cantrips of your choice. Guidance and Sacred Flame are recommended. The chosen cantrips count as Paladin spells for you, and Charisma is your spellcasting ability for them. Whenever you gain a Paladin level, you can replace one of these cantrips with another Cleric cantrip.',
  },
  'Blind Fighting': {
    source: "PHB'24",
    page: 209,
    type: 'Fighting Style Feat',
    prerequisites: 'Fighting Style Feature',
    description: 'You have Blindsight with a range of 10 feet.',
  },
  'Boon of Combat Prowess': {
    source: "PHB'24",
    page: 210,
    type: 'Epic Boon Feat',
    prerequisites: 'Level 19+',
    abilityScoreIncrease: 'Any +1',
    description:
      "You gain the following benefits:\n- Ability Score Increase: Increase one ability score of your choice by 1, to a maximum of 30.\n- Peerless Aim: When you miss with an attack roll, you can hit instead. Once you use this benefit, you can't use it again until the start of your next turn.",
  },
  Tough: {
    source: "PHB'24",
    page: 202,
    type: 'Origin Feat',
    description:
      'Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maximum increases by an additional 2 Hit Points.',
  },
  'Two-Weapon Fighting': {
    source: "PHB'24",
    page: 210,
    type: 'Fighting Style Feat',
    prerequisites: 'Fighting Style Feature',
    description:
      "When you make an extra attack as a result of using a weapon that has the Light property, you can add your ability modifier to the damage of that attack if you aren't already adding it to the damage.",
  },
  'Unarmed Fighting': {
    source: "PHB'24",
    page: 210,
    type: 'Fighting Style Feat',
    prerequisites: 'Fighting Style Feature',
    description:
      "When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d6 plus your Strength modifier instead of the normal damage of an Unarmed Strike. If you aren't holding any weapons or a Shield when you make the attack roll, the d6 becomes a d8.\nAt the start of each of your turns, you can deal 1d4 Bludgeoning damage to one creature Grappled by you.",
  },
  'War Caster': {
    source: "PHB'24",
    page: 209,
    type: 'General Feat',
    prerequisites: 'Level 4+; Spellcasting or Pact Magic Feature',
    abilityScoreIncrease: 'Int/Wis/Cha +1',
    description:
      'You gain the following benefits:\n- Concentration: You have Advantage on Constitution saving throws that you make to maintain Concentration.\n- Reactive Spell: When a creature provokes an Opportunity Attack from you by leaving your reach, you can take a Reaction to cast a spell at the creature rather than making an Opportunity Attack. The spell must have a casting time of one action and must target only that creature.\n- Somatic Components: You can perform the Somatic components of spells even when you have weapons or a Shield in one or both hands.',
  },
  'Weapon Master': {
    source: "PHB'24",
    page: 209,
    type: 'General Feat',
    prerequisites: 'Level 4+',
    abilityScoreIncrease: 'Str/Dex +1',
    description:
      'You gain the following benefits:\n- Mastery Property: Your training with weapons allows you to use the mastery property of one kind of Simple or Martial weapon of your choice, provided you have proficiency with it. Whenever you finish a Long Rest, you can change the kind of weapon to another eligible kind.',
  },
}
