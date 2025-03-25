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
            bard: {
                features: [
                    {
                        level: 1,
                        title: "Bardic Inspiration",
                        text: `
                            <div style="margin-bottom: 20px">
                                You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.
                            </div>
                            <h4>Using Bardic Inspiration:</h4>
                            <div style="margin-bottom: 20px">
                                As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.
                            </div>
                            <div style="margin-bottom: 20px">
                                Once within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.
                            </div>
                            <h4>Number of Uses:</h4>
                            <div style="margin-bottom: 20px">
                                You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.
                            </div>
                            <h4>At Higher Levels:</h4>
                            <div style="margin-bottom: 20px">
                                Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column of the Bard Features table. The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p59"
                    },
                    {
                        level: 1,
                        title: "Spellcasting",
                        text: `
                            <div style="margin-bottom: 20px">
                                You have learned to cast spells through your bardic arts. See chapter 7 for the rules on spellcasting. The information below details how you use those rules with Bard spells, which appear in the Bard spell list later in the class's description.
                            </div>
                            <h4>Cantrips:</h4>
                            <div style="margin-bottom: 20px">
                                You know two cantrips of your choice from the Bard spell list. Dancing Lights and Vicious Mockery are recommended.
                            </div>
                            <div style="margin-bottom: 20px">
                                Whenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.
                            </div>
                            <div style="margin-bottom: 20px">
                                When you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.
                            </div>
                            <h4>Spell Slots:</h4>
                            <div style="margin-bottom: 20px">
                                The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.
                            </div>
                            <h4>Prepared Spells of Level 1+:</h4>
                            <div style="margin-bottom: 20px">
                                You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list. Charm Person, Color Spray, Dissonant Whispers, and Healing Word are recommended.
                            </div>
                            <div style="margin-bottom: 20px">
                                The number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the Bard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots.
                            </div>
                            <div style="margin-bottom: 20px">
                                If another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.
                            </div>
                            <h4>Changing Your Prepared Spells:</h4>
                            <div style="margin-bottom: 20px">
                                Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.
                            </div>
                            <h4>Spellcasting Ability:</h4>
                            <div style="margin-bottom: 20px">
                                Charisma is your spellcasting ability for your Bard spells.
                            </div>
                            <h4>Spellcasting Focus:</h4>
                            <div style="margin-bottom: 20px">
                                You can use a Musical Instrument as a Spellcasting Focus for your Bard spells.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p59"
                    },
                    {
                        level: 2,
                        title: "Expertise",
                        text: `
                            <div style="margin-bottom: 20px">
                                You gain Expertise in two of your skill proficiencies of your choice. Performance and Persuasion are recommended if you have proficiency in them.
                            </div>
                            <div style="margin-bottom: 20px">
                                At Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p60"
                    },
                    {
                        level: 2,
                        title: "Jack of All Trades",
                        text: `
                            <div style="margin-bottom: 20px">
                                You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency Bonus.
                            </div>
                            <div style="margin-bottom: 20px">
                                For example, if you make a Strength (Athletics) check and lack Athletics proficiency, you can add half your Proficiency Bonus to the check.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p60"
                    },
                    {
                        level: 3,
                        title: "Bard Subclass",
                        text: `
                            <div style="margin-bottom: 20px">
                                You gain a Bard subclass of your choice. A subclass is a specialization that grants you features at certain Bard levels. For the rest of your career, you gain each of your subclass's features that are of your Bard level or lower.
                            </div>
                            <div style="margin-bottom: 20px">
                                No Subclass Selected
                                Select a subclass to view its feature(s) here.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p60"
                    },
                    {
                        level: 4,
                        title: "Ability Score Improvement",
                        text: `
                            <div style="margin-bottom: 20px">
                                You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Bard levels 8, 12, and 16.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p61"
                    },
                    {
                        level: 5,
                        title: "Font of Inspiration",
                        text: `
                            <div style="margin-bottom: 20px">
                                You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest.
                            </div>
                            <div style="margin-bottom: 20px">
                                In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p61"
                    },
                    {
                        level: 6,
                        title: "Subclass Feature",
                        text: `
                            <div style="margin-bottom: 20px">
                                You gain a feature from your Bard Subclass.
                            </div>
                            <div style="margin-bottom: 20px">
                                No Subclass Selected
                                Select a subclass to view its feature(s) here.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p61"
                    },
                    {
                        level: 7,
                        title: "Countercharm",
                        text: `
                            <div style="margin-bottom: 20px">
                                You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p61"
                    },
                    {
                        level: 8,
                        title: "Ability Score Improvement",
                        text: `
                            <div style="margin-bottom: 20px">
                                You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p61"
                    }                    
                ]
            },
            cleric: {
                features:[
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
                        level:5,
                        title: 'Sear Undead',
                        text: `
                            <div style="margin-bottom: 20px">
                            Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p71'
                    },
                    {
                        level:6,
                        title: 'Subclass Feature',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain a feature from your Cleric Subclass.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p71'
                    },
                    {
                        level:7,
                        title: 'Blessed Strikes',
                        text: `
                            <div style="margin-bottom: 20px">
                            Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).
                            </div>
                            <h4>Divine Strike</h4>
                            <div style="margin-bottom: 20px">
                            Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice).
                            </div>
                            <h4>Potent Spellcasting</h4>
                            <div style="margin-bottom: 20px">
                             Add your Wisdom modifier to the damage you deal with any Cleric cantrip.
                            </div>
                            `,
                        effects: null,
                        referenceBook: 'PHB24 p71'
                    },
                    {
                        level: 8,
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
                        level: 8,
                        title: 'Subclass Feature',
                        text: `
                            <div style="margin-bottom: 20px">
                            Depending on your choice of subclass, you may gain certain subclass features—or meet prerequisites for acquiring them—at this level.
                            </div>
                                            `,
                        effects: null,
                        referenceBook: 'PHB24 p71'
                    },
                ]
            },
            druid: {
                features: [
                    {
                        level: 1,
                        title: "Druidic",
                        text: `
                            <div style="margin-bottom: 20px">
                                Você conhece o Druidic, a língua secreta dos Druidas. Ao aprender essa língua antiga, você também desbloqueou a magia de se comunicar com animais; você sempre tem o feitiço Falar com os Animais preparado.
                            </div>
                            <div style="margin-bottom: 20px">
                                Você pode usar o Druidic para deixar mensagens ocultas. Você e outros que sabem Druidic automaticamente percebem tal mensagem. Outros percebem a presença da mensagem com um sucesso em um teste de Inteligência (Investigação) com dificuldade 15, mas não podem decifrá-la sem magia.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p80"
                    },
                    {
                        level: 1,
                        title: "Primal Order",
                        text: `
                            <div style="margin-bottom: 20px">
                                Você se dedicou a um dos seguintes papéis sagrados à sua escolha:
                            </div>
                            <h5>Magician</h5>
                            <div style="margin-bottom: 20px">
                                Você conhece um cantrip extra da lista de feitiços de Druida. Além disso, sua conexão mística com a natureza lhe dá um bônus em seus testes de Inteligência (Arcanismo ou Natureza). O bônus é igual ao seu modificador de Sabedoria (mínimo de +1).
                            </div>
                            <h5>Warden</h5>
                            <div style="margin-bottom: 20px">
                                Treinado para o combate, você ganha proficiência com armas marciais e treinamento com armaduras médias.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p80"
                    },
                    {
                        level: 1,
                        title: "Spellcasting",
                        text: `
                            <div style="margin-bottom: 20px">
                                Você aprendeu a lançar feitiços através do estudo das forças místicas da natureza. Consulte o capítulo 7 para as regras sobre o lançamento de feitiços. As informações abaixo detalham como você usa essas regras com os feitiços de Druida, que aparecem na lista de feitiços de Druida mais adiante na descrição da classe.
                            </div>
                            <h4>Cantrips:</h4>
                            <div style="margin-bottom: 20px">
                                Você conhece dois cantrips de sua escolha da lista de feitiços de Druida. Druidcraft e Produce Flame são recomendados.
                            </div>
                            <div style="margin-bottom: 20px">
                                Sempre que você ganhar um nível de Druida, pode substituir um dos seus cantrips por outro cantrip de sua escolha da lista de feitiços de Druida.
                            </div>
                            <div style="margin-bottom: 20px">
                                Quando você atingir os níveis 4 e 10 de Druida, você aprenderá outro cantrip de sua escolha da lista de feitiços de Druida, conforme mostrado na coluna de Cantrips da tabela de recursos de Druida.
                            </div>
                            <h4>Spell Slots:</h4>
                            <div style="margin-bottom: 20px">
                                A tabela de recursos de Druida mostra quantos slots de feitiço você tem para lançar seus feitiços de nível 1+. Você recupera todos os slots gastos quando termina um Long Rest.
                            </div>
                            <h4>Feitiços Preparados de Nível 1+:</h4>
                            <div style="margin-bottom: 20px">
                                Você prepara a lista de feitiços de nível 1+ que estão disponíveis para você lançar com esta habilidade. Para começar, escolha quatro feitiços de nível 1 da lista de feitiços de Druida. Animal Friendship, Cure Wounds, Faerie Fire e Thunderwave são recomendados.
                            </div>
                            <div style="margin-bottom: 20px">
                                O número de feitiços em sua lista aumenta conforme você ganha níveis de Druida, conforme mostrado na coluna de Feitiços Preparados da tabela de recursos de Druida. Sempre que esse número aumentar, escolha feitiços adicionais da lista de feitiços de Druida até que o número de feitiços em sua lista corresponda ao número da tabela. Os feitiços escolhidos devem ser de um nível para o qual você tenha slots de feitiço. Por exemplo, se você for um Druida de nível 3, sua lista de feitiços preparados pode incluir seis feitiços de níveis 1 e 2 em qualquer combinação.
                            </div>
                            <div style="margin-bottom: 20px">
                                Se outro recurso de Druida lhe conceder feitiços que você sempre tem preparados, esses feitiços não contam contra o número de feitiços que você pode preparar com essa habilidade, mas esses feitiços contam como feitiços de Druida para você.
                            </div>
                            <h4>Alterando Seus Feitiços Preparados:</h4>
                            <div style="margin-bottom: 20px">
                                Sempre que terminar um Long Rest, você pode alterar sua lista de feitiços preparados, substituindo qualquer um dos feitiços por outros feitiços de Druida para os quais você tenha slots de feitiço.
                            </div>
                            <h4>Habilidade de Lançamento de Feitiços:</h4>
                            <div style="margin-bottom: 20px">
                                Sabedoria é sua habilidade de lançamento de feitiços para os feitiços de Druida.
                            </div>
                            <h4>Foco de Lançamento de Feitiços:</h4>
                            <div style="margin-bottom: 20px">
                                Você pode usar um Foco Druídico como Foco de Lançamento de Feitiços para seus feitiços de Druida.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p79"
                    },
                    {
                        level: 2,
                        title: "Wild Companion",
                        text: `
                            <div style="margin-bottom: 20px">
                                Você pode invocar um espírito da natureza que assume a forma de um animal para ajudá-lo. Como uma ação mágica, você pode gastar um slot de feitiço ou uma utilização de Wild Shape para lançar o feitiço Find Familiar sem componentes materiais.
                            </div>
                            <div style="margin-bottom: 20px">
                                Quando você lançar o feitiço dessa maneira, o familiar é Fey e desaparece quando você terminar um Long Rest.
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p81"
                      },
                      {
                        level: 2,
                        title: "Wild Shape",
                        text: `
                            <div style="margin-bottom: 20px">
                                O poder da natureza permite que você assuma a forma de um animal. Como uma Ação Bônus, você se transforma em uma forma de Bestas que você aprendeu para esta habilidade (veja "Formas Conhecidas" abaixo). Você permanece nessa forma por um número de horas igual à metade do seu nível de Druida ou até usar Wild Shape novamente, ficar Incapacitado, ou morrer. Você também pode sair da forma antes como uma Ação Bônus.
                            </div>
                            <h4>Usos:</h4>
                            <div style="margin-bottom: 20px">
                                Você pode usar Wild Shape duas vezes. Você recupera uma utilização gasta quando termina um Short Rest, e recupera todas as utilizações gastas quando termina um Long Rest.
                            </div>
                            <div style="margin-bottom: 20px">
                                Você ganha utilizações adicionais conforme atinge certos níveis de Druida, conforme mostrado na coluna de Wild Shape da tabela de recursos de Druida.
                            </div>
                            <h4>Formas Conhecidas:</h4>
                            <div style="margin-bottom: 20px">
                                Você conhece quatro formas de Bestas para esta habilidade, escolhidas entre estatísticas de Bestas que têm um CR máximo de 1/4 e que não possuem Velocidade de Voo (consulte o apêndice B para opções de estatísticas). O Rato, Cavalo de Montaria, Aranha e Lobo são recomendados. Sempre que terminar um Long Rest, você pode substituir uma das suas formas conhecidas por outra forma elegível.
                            </div>
                            <div style="margin-bottom: 20px">
                                Quando você atingir certos níveis de Druida, seu número de formas conhecidas e o CR máximo para essas formas aumentam, conforme mostrado na tabela de Formas de Bestas. Além disso, a partir do nível 8, você pode adotar uma forma que tenha Velocidade de Voo.
                            </div>
                            <div style="margin-bottom: 20px">
                                Ao escolher formas conhecidas, você pode consultar o Monster Manual ou outras fontes para Bestas elegíveis, caso o Mestre de Jogo permita.
                            </div>
                            <h4>Regras Enquanto Transformado:</h4>
                            <div style="margin-bottom: 20px">
                                Enquanto em uma forma, você retém sua personalidade, memórias e capacidade de falar, e as seguintes regras se aplicam:
                            </div>
                            <ul>
                                <li><strong>Pontos de Vida Temporários:</strong> Ao assumir uma forma de Wild Shape, você ganha uma quantidade de Pontos de Vida Temporários igual ao seu nível de Druida.</li>
                                <li><strong>Estatísticas de Jogo:</strong> Suas estatísticas de jogo são substituídas pelas do estatuto da Besta, mas você retém seu tipo de criatura; Pontos de Vida; Dados de Pontos de Vida; pontuações de Inteligência, Sabedoria e Carisma; características de classe; línguas; e feitos. Você também retém suas proficiências de habilidades e testes de resistência, usando seu bônus de proficiência para elas, além de ganhar as proficiências da criatura. Se um modificador de habilidade ou teste de resistência no estatuto da Besta for superior ao seu, use o do estatuto da Besta.</li>
                                <li><strong>Sem Lançamento de Feitiços:</strong> Você não pode lançar feitiços, mas a transformação não interrompe sua Concentração ou interfere com um feitiço que você já tenha lançado.</li>
                                <li><strong>Objetos:</strong> Sua capacidade de lidar com objetos é determinada pelos membros da forma, não pelos seus. Além disso, você escolhe se seu equipamento cai no seu espaço, se funde com sua nova forma ou se é usado por ela. O equipamento usado funciona normalmente, mas o DM decide se é prático para a nova forma usar um item com base no tamanho e forma da criatura. Seu equipamento não muda de tamanho ou forma para se ajustar à nova forma, e qualquer equipamento que a nova forma não possa usar deve cair no chão ou se fundir com a forma. Equipamento que se funde com a forma não tem efeito enquanto você está nessa forma.</li>
                            </ul>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p80"
                      },
                      {
                        level: 3,
                        title: "Druid Subclass",
                        text: `
                            <div style="margin-bottom: 20px">
                                Você ganha um subtipo de Druida à sua escolha. Um subtipo é uma especialização que concede habilidades em certos níveis de Druida. Pelo resto da sua carreira, você ganha as habilidades do seu subtipo à medida que atinge os níveis de Druida apropriados.
                            </div>
                            <div style="margin-bottom: 20px">
                                <strong>Subclasse não selecionada</strong>
                            </div>
                        `,
                        effects: null,
                        referenceBook: "PHB'24 p81"
                      },
                      {
                        level: 4,
                        title: 'Ability Score Improvement',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Druid levels 8, 12, and 16.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB24 p81'
                        },
                        {
                        level: 5,
                        title: 'Wild Resurgence',
                        text: `
                            <div style="margin-bottom: 20px">
                            Once on each of your turns, if you have no uses of Wild Shape left, you can give yourself one use by expending a spell slot (no action required).
                            </div>
                            <div style="margin-bottom: 20px">
                            In addition, you can expend one use of Wild Shape (no action required) to give yourself a level 1 spell slot, but you can't do so again until you finish a Long Rest.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB24 p81'
                        },
                        {
                        level: 6,
                        title: 'Subclass Feature',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain a feature from your Druid Subclass.
                            </div>
                            <h4>No Subclass Selected</h4>
                            <div style="margin-bottom: 20px">
                            Select a subclass to view its feature(s) here.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB24 p81'
                        },
                        {
                        level: 7,
                        title: 'Elemental Fury',
                        text: `
                            <div style="margin-bottom: 20px">
                            The might of the elements flows through you. You gain one of the following options of your choice.
                            </div>
                            <h4>Potent Spellcasting</h4>
                            <div style="margin-bottom: 20px">
                            Add your Wisdom modifier to the damage you deal with any Druid cantrip.
                            </div>
                            <h4>Primal Strike</h4>
                            <div style="margin-bottom: 20px">
                            Once on each of your turns when you hit a creature with an attack roll using a weapon or a Beast form's attack in Wild Shape, you can cause the target to take an extra 1d8 Cold, Fire, Lightning, or Thunder damage (choose when you hit).
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB24 p81'
                        },
                        {
                        level: 8,
                        title: 'Ability Score Improvement',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain the Ability Score Improvement Feat or another feat of your choice for which you qualify.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB24 p81'
                        }
                                
                ]
            },
            fighter: {
                features: [
                    {
                        level: 1,
                        title: "Fighting Style",
                        text: `<div style="margin-bottom: 20px">You have honed your martial prowess and gain a Fighting Style feat of your choice. Defense is recommended.</div><div style="margin-bottom: 20px">Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p91"
                    },
                    {
                        level: 1,
                        title: "Second Wind",
                        text: `<div style="margin-bottom: 20px">You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.</div><div style="margin-bottom: 20px">You can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.</div><div style="margin-bottom: 20px">When you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p91"
                    },
                    {
                        level: 1,
                        title: "Weapon Mastery",
                        text: `<div style="margin-bottom: 20px">Your training with weapons allows you to use the mastery properties of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.</div><div style="margin-bottom: 20px">When you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons, as shown in the Weapon Mastery column of the Fighter Features table.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p91"
                    },
                    {
                        level: 2,
                        title: "Action Surge",
                        text: `<div style="margin-bottom: 20px">You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.</div><div style="margin-bottom: 20px">Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p91"
                    },
                    {
                        level: 2,
                        title: "Tactical Mind",
                        text: `<div style="margin-bottom: 20px">You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p91"
                    },
                    {
                        level: 3,
                        title: "Fighter Subclass",
                        text: `<div style="margin-bottom: 20px">You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Fighter levels. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower.</div><h4>No Subclass Selected</h4><div style="margin-bottom: 20px">Select a subclass to view its feature(s) here.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p92"
                    },
                    {
                        level: 4,
                        title: "Ability Score Improvement",
                        text: `<div style="margin-bottom: 20px">You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p92"
                    },
                    {
                        level: 5,
                        title: "Extra Attack",
                        text: `<div style="margin-bottom: 20px">You can attack twice instead of once whenever you take the Attack action on your turn.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p92"
                    },
                    {
                        level: 5,
                        title: "Tactical Shift",
                        text: `<div style="margin-bottom: 20px">Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p92"
                    },
                    {
                        level: 6,
                        title: "Ability Score Improvement",
                        text: `<div style="margin-bottom: 20px">You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p92"
                    },
                    {
                        level: 7,
                        title: "Subclass Feature",
                        text: `<div style="margin-bottom: 20px">You gain a feature from your Fighter Subclass.</div><h4>No Subclass Selected</h4><div style="margin-bottom: 20px">Select a subclass to view its feature(s) here.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p92"
                    },
                    {
                        level: 8,
                        title: "Ability Score Improvement",
                        text: `<div style="margin-bottom: 20px">You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.</div>`,
                        effects: null,
                        referenceBook: "PHB'24 p92"
                    }
                ]
            }
            ,
            monk: {
                features: [
                    {
                        level: 1,
                        title: 'Martial Arts',
                        text: `
                            <div style="margin-bottom: 20px">
                            Your practice of martial arts gives you mastery of combat styles that use your Unarmed Strike and Monk weapons, which are the following:
                            </div>
                            <h4>Simple Melee Weapons</h4>
                            <h4>Martial Melee Weapons that have the Light property</h4>
                            <div style="margin-bottom: 20px">
                            You gain the following benefits while you are unarmed or wielding only Monk weapons and you aren't wearing armor or wielding a Shield.
                            </div>
                            <h4>Bonus Unarmed Strike</h4>
                            <div style="margin-bottom: 20px">
                            You can make an Unarmed Strike as a Bonus Action.
                            </div>
                            <h4>Martial Arts Die</h4>
                            <div style="margin-bottom: 20px">
                            You can roll 1d6 in place of the normal damage of your Unarmed Strike or Monk weapons. This die changes as you gain Monk levels, as shown in the Martial Arts column of the Monk Features table.
                            </div>
                            <h4>Dexterous Attacks</h4>
                            <div style="margin-bottom: 20px">
                            You can use your Dexterity modifier instead of your Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk weapons. In addition, when you use the Grapple or Shove option of your Unarmed Strike, you can use your Dexterity modifier instead of your Strength modifier to determine the save DC.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p101'
                    },
                    {
                        level: 1,
                        title: 'Unarmored Defense',
                        text: `
                            <div style="margin-bottom: 20px">
                            While you aren't wearing armor or wielding a Shield, your base Armor Class equals 10 plus your Dexterity and Wisdom modifiers.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p101'
                    },
                    {
                        level: 2,
                        title: 'Monk\'s Focus',
                        text: `
                            <div style="margin-bottom: 20px">
                            Your focus and martial training allow you to harness a well of extraordinary energy within yourself. This energy is represented by Focus Points. Your Monk level determines the number of points you have, as shown in the Focus Points column of the Monk Features table.
                            </div>
                            <h4>Flurry of Blows</h4>
                            <div style="margin-bottom: 20px">
                            You can expend 1 Focus Point to make two Unarmed Strikes as a Bonus Action.
                            </div>
                            <h4>Patient Defense</h4>
                            <div style="margin-bottom: 20px">
                            You can take the Disengage action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and the Dodge actions as a Bonus Action.
                            </div>
                            <h4>Step of the Wind</h4>
                            <div style="margin-bottom: 20px">
                            You can take the Dash action as a Bonus Action. Alternatively, you can expend 1 Focus Point to take both the Disengage and Dash actions as a Bonus Action, and your jump distance is doubled for the turn.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p101'
                    },
                    {
                        level: 2,
                        title: 'Unarmored Movement',
                        text: `
                            <div style="margin-bottom: 20px">
                            Your speed increases by 10 feet while you aren't wearing armor or wielding a Shield. This bonus increases when you reach certain Monk levels, as shown on the Monk Features table.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p102'
                    },
                    {
                        level: 2,
                        title: 'Uncanny Metabolism',
                        text: `
                            <div style="margin-bottom: 20px">
                            When you roll Initiative, you can regain all expended Focus Points. When you do so, roll your Martial Arts die, and regain a number of Hit Points equal to your Monk level plus the number rolled.
                            </div>
                            <div style="margin-bottom: 20px">
                            Once you use this feature, you can't use it again until you finish a Long Rest.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p102'
                    },
                    {
                        level: 3,
                        title: 'Deflect Attacks',
                        text: `
                            <div style="margin-bottom: 20px">
                            When an attack roll hits you and its damage includes Bludgeoning, Piercing, or Slashing damage, you can take a Reaction to reduce the attack's total damage against you. The reduction equals 1d10 plus your Dexterity modifier and Monk level.
                            </div>
                            <div style="margin-bottom: 20px">
                            If you reduce the damage to 0, you can expend 1 Focus Point to redirect some of the attack's force. If you do so, choose a creature you can see within 5 feet of yourself if the attack was a melee attack or a creature you can see within 60 feet of yourself that isn't behind Total Cover if the attack was a ranged attack. That creature must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die plus your Dexterity modifier. The damage is the same type dealt by the attack.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p102'
                    },
                    {
                        level: 3,
                        title: 'Monk Subclass',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain a Monk subclass of your choice. A subclass is a specialization that grants you features at certain Monk levels. For the rest of your career, you gain each of your subclass's features that are of your Monk level or lower.
                            </div>
                            <div style="margin-bottom: 20px">
                            No Subclass Selected
                            Select a subclass to view its feature(s) here.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p103'
                    },
                    {
                        level: 4,
                        title: 'Ability Score Improvement',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain the Ability Score Improvement feat or another feat of your choice for which you qualify. You gain this feature again at Monk levels 8, 12, and 16.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p103'
                    },
                    {
                        level: 4,
                        title: 'Slow Fall',
                        text: `
                            <div style="margin-bottom: 20px">
                            You can take a Reaction when you fall to reduce any damage you take from the fall by an amount equal to five times your Monk level.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p103'
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
                        referenceBook: 'PHB\'24 p103'
                    },
                    {
                        level: 5,
                        title: 'Stunning Strike',
                        text: `
                            <div style="margin-bottom: 20px">
                            Once per turn when you hit a creature with a Monk weapon or an Unarmed Strike, you can expend 1 Focus Point to attempt a stunning strike. The target must make a Constitution saving throw. On a failed save, the target has the Stunned condition until the start of your next turn. On a successful save, the target's Speed is halved until the start of your next turn, and the next attack roll made against the target before then has Advantage.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p103'
                    },
                    {
                        level: 6,
                        title: 'Empowered Strikes',
                        text: `
                            <div style="margin-bottom: 20px">
                            Whenever you deal damage with your Unarmed Strike, it can deal your choice of Force damage or its normal damage type.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p103'
                    },
                    {
                        level: 6,
                        title: 'Subclass Feature',
                        text: `
                            <div style="margin-bottom: 20px">
                            You gain a feature from your Monk subclass.
                            </div>
                            <div style="margin-bottom: 20px">
                            No Subclass Selected
                            Select a subclass to view its feature(s) here.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p103'
                    },
                    {
                        level: 7,
                        title: 'Evasion',
                        text: `
                            <div style="margin-bottom: 20px">
                            When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail.
                            </div>
                            <div style="margin-bottom: 20px">
                            You don't benefit from this feature if you have the Incapacitated condition.
                            </div>
                        `,
                        effects: null,
                        referenceBook: 'PHB\'24 p103'
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
                        referenceBook: 'PHB\'24 p103'
                    }
                ]
            },
            paladin: {
                
            },
            ranger: {},
            rogue: {},
            sorcerer: {},
            warlock: {},
            wizard: {},
        }
    };