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

                ]
            },
            bard: {},
            cleric: {},
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