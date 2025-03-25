export const CharacterClass = {
        class: {
            artificer: {},
            barbarian: {
                features:[
                    {
                        level: 1,
                        title: 'Rage',
                        text: `
                            <div style="margin-bottom: 20px">
                            You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience. You can enter it as a Bonus Action if you aren't wearing Heavy armor. You can enter your Rage the number of times shown for your Barbarian level in the Rages column of the Barbarian Features table. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. While active, your Rage follows the rules below.",
                            effects:
                            </div>
                            <h4>Damage Resistance</h4>
                            <div style="margin-bottom: 20px">
                            You have Resistance to Bludgeoning, Piercing, and Slashing damage.
                            </div>
                            <h4>Rage Damage</h4>
                            <div style="margin-bottom: 20px">
                            When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus to the damage that 
                            increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian Features table.
                            </div>
                            <h4>Strength Advantage</h4>
                            <div style="margin-bottom: 20px">
                            You have Advantage on Strength checks and Strength saving throws.
                            </div>
                            <h4>No Concentration or Spells</h4>
                            <div style="margin-bottom: 20px">
                            You can't maintain Concentration, and you can't cast spells.
                            </div>
                            <h4>Duration</h4>
                            <div style="margin-bottom: 20px">                            
                            The Rage lasts until the end of your next turn, and it ends early if you don Heavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the Rage for another round by doing one of the following:
                            </div>
                            <div style="margin-bottom: 20px">
                            - Make an attack roll against an enemy.
                            </div>
                            <div style="margin-bottom: 20px">
                            - Force an enemy to make a saving throw.
                            </div>
                            <div style="margin-bottom: 20px">
                            - Take a Bonus Action to extend your Rage.
                            </div>
                            <div style="margin-bottom: 20px">
                            - Each time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10 minutes.
                            </div>
                        
                         `,
                         effects: null,
                         referenceBook: 'PHB24 p51'
                    },
                    {
                        level: 1,
                        title: 'Unarmored Defense',
                        text: `
                            <div style="margin-bottom: 20px">
                            While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.
                            </div>`,
                        effects: null,
                        referenceBook: 'PHB24 p51'
                    },
                    {
                        level: 1,
                        title: 'Weapon Mastery',
                        text: `
                            <div style="margin-bottom: 20px">
                            Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons of your choice, such as Greataxes and Handaxes. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.
                            When you reach certain Barbarian levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Barbarian Features table.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB24 p52'
                    },
                    {
                        level: 2,
                        title: 'Danger Sense',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain an uncanny sense of when things aren't as they should be, giving you an edge when you dodge perils. You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p52'
                    },
                    {
                        level: 2,
                        title: 'Reckless Attack',
                        text: `
                            <div style="margin-bottom: 20px">
                            You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p52'
                    },
                    {
                        level: 3,
                        title: 'Primal Knowledge',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1.
                            In addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you make an ability check using one of the following skills, you can make it as a Strength check even if it normally uses a different ability: Acrobatics, Intimidation, Perception, Stealth, or Survival. When you use this ability, your Strength represents primal power coursing through you, honing your agility, bearing, and senses.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p52'
                    },
                    {
                        level: 3,
                        title: 'Barbarian Subclass',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain a Barbarian subclass of your choice. A subclass is a specialization that grants you features at certain Barbarian levels. For the rest of your career, you gain each of your subclass's features that are of your Barbarian level or lower.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p52'
                    },
                    {
                        level: 4,
                        title: 'Ability Score Improvement',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Barbarian levels 8, 12, and 16.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                    {
                        level: 5,
                        title: 'Extra Attack',
                        text: `
                            <div style="margin-bottom: 20px">
                            You can attack twice instead of once whenever you take the Attack action on your turn.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                    {
                        level: 5,
                        title: 'Fast Movement',
                        text: `
                            <div style="margin-bottom: 20px">
                            Your speed increases by 10 feet while you aren't wearing Heavy armor.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                    {
                        level: 6,
                        title: 'Subclass Feature',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain a feature from your Barbarian subclass.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                    {
                        level: 7,
                        title: 'Feral Instinct',
                        text: `
                            <div style="margin-bottom: 20px">
                            Your instincts are so honed that you have Advantage on Initiative rolls.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                    {
                        level: 7,
                        title: 'Instinctive Pounce',
                        text: `
                            <div style="margin-bottom: 20px">
                            As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                    {
                        level: 8,
                        title: 'Ability Score Improvement',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                    {
                        level: 9,
                        title: 'Brutal Strike',
                        text: `
                            <div style="margin-bottom: 20px">
                            If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your turn. The chosen attack roll mustn't have Disadvantage. If the chosen attack roll hits, the target takes an extra 1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of your choice. You have the following effect options.
                            Forceful Blow. The target is pushed 15 feet straight away from you. You can then move up to half your Speed straight toward the target without provoking Opportunity Attacks.
                            Hamstring Blow. The target's Speed is reduced by 15 feet until the start of your next turn. A target can be affected by only one Hamstring Blow at a time—the most recent one.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p53'
                    },
                ]
            },
            bard: {},
            cleric: {features:[
                    {
                        level: 1,
                        title: 'Spellcasting',
                        text: `
                            <div style="margin-bottom: 20px">
                            You have learned to cast spells through prayer and meditation. See chapter 7 for the rules on spellcasting. The information below details how you use those rules with Cleric spells, which appear on the Cleric spell list later in the class's description.
                            </div>
                            <h4>Cantrips:</h4>
                            <div style="margin-bottom: 20px">
                            You know three cantrips of your choice from the Cleric spell list. Guidance, Sacred Flame, and Thaumaturgy are recommended.
                            </div>
                            <div style="margin-bottom: 20px">
                            Whenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.
                            </div>
                            <div style="margin-bottom: 20px">
                            When you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.
                            </div>
                            <h4>Spell Slots</h4>
                            <div style="margin-bottom: 20px">
                            The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.
                            </div>
                            <h4>Prepared Spells of Level 1+</h4>
                            <div style="margin-bottom: 20px">
                            You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list. Bless, Cure Wounds, Guiding Bolt, and Shield of Faith are recommended.
                            </div>
                            <div style="margin-bottom: 20px">
                            The number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table. Whenever that number increases, choose additional spells from the Cleric spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Cleric, your list of prepared spells can include six spells of levels 1 and 2 in any combination.
                            </div>
                            <div style="margin-bottom: 20px">
                            If another Cleric feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you.
                            </div>
                            <h4>Changing Your Prepared Spells.</h4>
                            <div style="margin-bottom: 20px">
                            Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.
                            </div>
                            <h4>Spellcasting Ability.</h4>
                            <div style="margin-bottom: 20px">
                            Wisdom is your spellcasting ability for your Cleric spells.
                            </div>
                            <h4>Spellcasting Focus.</h4>
                            <div style="margin-bottom: 20px">
                            You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p70'
                        },
                    {
                        level: 1,
                        title: 'Divine Order',
                        text: `
                            <div style="margin-bottom: 20px">
                            You have dedicated yourself to one of the following sacred roles of your choice.</div>
                            <h4>Protector</h4>
                            <div style="margin-bottom: 20px">
                            Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.
                            </div>
                            <h4>Thaumaturge</h4>
                            <div style="margin-bottom: 20px">
                            You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1).
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p70'
                    },
                    {
                        level: 2,
                        title: 'Channel Divinity',
                        text: `
                            <div style="margin-bottom: 20px">
                            You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below. Each time you use this class's Channel Divinity, choose which Channel Divinity effect from this class to create. You gain additional effect options at higher Cleric levels.
                            </div>
                            <div>
                            You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.
                            </div>
                            <div>
                            If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.
                            </div>
                            <h4>Divine Spark</h4>
                            <div style="margin-bottom: 20px">
                            As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).
                            </div>
                            <div style="margin-bottom: 20px">
                            You roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8).
                            </div>
                            <h4>Turn Undead. </h4>
                            <div style="margin-bottom: 20px">
                            As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p70'
                    },
                    {
                        level: 3,
                        title: 'Cleric Subclass',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain a Cleric subclass of your choice. A subclass is a specialization that grants you features at certain Cleric levels. For the rest of your career, you gain each of your subclass's features that are of your Cleric level or lower.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p71'
                    },
                    {
                        level: 4,
                        title: 'Ability Score Improvement',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Cleric levels 8, 12, and 16.
                            </div>
                                            `,
                        effects: null,
                        referenceBook: 'PHB24 p71'
                    },
                    {
                        level:52,
                        title: 'Sear Undead',
                        text: `
                            <div style="margin-bottom: 20px">
                            Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p71'
                    },
                ]
            },
            druid: {},
            fighter: {},
            monk: {},
            paladin: {},
            ranger: {},
            rogue: {},
            sorcerer: {},
            warlock: {},
            wizard: {},
        }
    };