// MythReal — Forge talent data
// Talents pulled from Talents_and_Features_v9.xlsx `talent_data_compilation` sheet,
// filtered to category='tech' across the 20 canonical Tech Tree codes.
// Each entry: { name, desc, effect }. Talents are eligible at character
// levels matching their `level` key (1-5), gated by feature-point investment
// in the tree: depth-1 investment unlocks L1 talents; depth-3 unlocks L1-L3;
// depth-5 unlocks all five tiers.
(function () { 'use strict';
window.FORGE_TALENTS = {
  "1HW": {
    "1": [
      {
        "name": "Armor Proficiency",
        "desc": "You know how to use a type of armor",
        "effect": "gain proficiency in 1 armor type"
      },
      {
        "name": "Shield Wielder",
        "desc": "Your shields are your primary weapon",
        "effect": "You can dual wield small shields"
      }
    ],
    "2": [
      {
        "name": "Duelist",
        "desc": "You're at your best while using 1 weapon without a shield",
        "effect": "Gain +2 DEF while using a 1h weapon with no shield"
      }
    ],
    "3": [
      {
        "name": "Riposte Strike",
        "desc": "Your parry becomes a counter-attack.",
        "effect": "When you successfully parry a melee attack (using the 1HW Parry ability), make one immediate counter-attack at 1x weapon damage + COR. Once per turn."
      }
    ],
    "4": [
      {
        "name": "Nimble",
        "desc": "",
        "effect": "add 1 to your speed"
      }
    ],
    "5": [
      {
        "name": "Master Duelist",
        "desc": "One-on-one, you have no equal.",
        "effect": "When fighting a single enemy with no other enemies within 6m of you, gain +2 to attack rolls and +1d6 damage against that enemy. (Doesn't trigger when outnumbered.)"
      },
      {
        "name": "Disarm",
        "desc": "",
        "effect": "Gain Disarm ability"
      }
    ]
  },
  "2HW": {
    "1": [
      {
        "name": "Armor Proficiency",
        "desc": "You know how to use a type of armor",
        "effect": "gain proficiency in 1 armor type"
      },
      {
        "name": "2h Whirlwind",
        "desc": "You're good at spinning with your weapon",
        "effect": "Gain 2h Whirlwind ability"
      }
    ],
    "2": [
      {
        "name": "Endurance",
        "desc": "You're stronk",
        "effect": "Gain additional carrying capacity"
      }
    ],
    "3": [
      {
        "name": "Throw 2h Weapon",
        "desc": "You can throw your weapon with accuracy",
        "effect": "Gain \"Throw 2h Weapon\" ability"
      }
    ],
    "4": [
      {
        "name": "Makeshift Shield",
        "desc": "You know how to use your armor as a shield even while using a 2h weapon",
        "effect": "gain +1 to your DEF"
      }
    ],
    "5": [
      {
        "name": "Launch with Weapon",
        "desc": "You can launch people using your weapon as a catapult",
        "effect": "gain \"launch\" ability"
      },
      {
        "name": "Rend",
        "desc": "You can use your 2h weapon to strike with deadly force",
        "effect": "gain \"Rend\" ability"
      }
    ]
  },
  "DWW": {
    "1": [
      {
        "name": "Armor Proficiency",
        "desc": "You know how to use a type of armor",
        "effect": "gain proficiency in 1 armor type"
      }
    ],
    "2": [
      {
        "name": "Throw Offhand Weapon",
        "desc": "You know how to throw your offhand weapon to great effect",
        "effect": "Gain \"Throw Offhand Weapon\" ability"
      }
    ],
    "3": [
      {
        "name": "Twin Reaction",
        "desc": "Your reactions strike with both blades.",
        "effect": "When you make an opportunity attack or any reaction attack, make it with both weapons (one mainhand + one offhand attack instead of one). Both attacks must target the same enemy."
      }
    ],
    "4": [
      {
        "name": "Nimble",
        "desc": "",
        "effect": "add 1 to your speed"
      }
    ],
    "5": [
      {
        "name": "Ambidextrous Mastery",
        "desc": "Your offhand strikes as truly as your main.",
        "effect": "Your offhand attacks no longer suffer any penalty. When both your mainhand and offhand attacks hit the same target in the same turn, the second hit deals +1d6 damage."
      },
      {
        "name": "Disarm",
        "desc": "",
        "effect": "Gain Disarm ability"
      },
      {
        "name": "Shield Wielder",
        "desc": "Your shields are your primary weapon",
        "effect": "You can dual wield small shields"
      }
    ]
  },
  "RNW": {
    "1": [
      {
        "name": "Barbed Ranged Weapons",
        "desc": "You've modified your ranged weapons to be able to do damage in melee range",
        "effect": "Gain a melee attack with your ranged weapon equipped"
      },
      {
        "name": "Armored Ranged Weapons",
        "desc": "You've modified your ranged weapons to be able to be used as a shield",
        "effect": "You can equip your ranged weapon as a shield"
      }
    ],
    "2": [
      {
        "name": "Arrow Stab",
        "desc": "You can stab with arrows as a reaction",
        "effect": "gain \"arrow stab\" ability"
      }
    ],
    "3": [
      {
        "name": "Homing Arrow",
        "desc": "You have homing arrows",
        "effect": "gain \"Homing Arrow\" ability"
      },
      {
        "name": "Uncanny Aim",
        "desc": "You have great aim when you focus",
        "effect": "gain \"focus shot\" ability"
      }
    ],
    "4": [
      {
        "name": "Rapid Fire",
        "desc": "You can draw and fire quickly",
        "effect": "Gain \"rapid fire\" ability"
      }
    ],
    "5": [
      {
        "name": "Long Shot",
        "desc": "You can fire from long distances",
        "effect": "gain \"long shot\" ability"
      }
    ]
  },
  "MGW": {
    "1": [
      {
        "name": "Improved Essence Armor",
        "desc": "Your essence binds tighter to your flesh.",
        "effect": "Your Essence Armor ability now grants +3 DEF instead of +2, and lasts twice as long."
      },
      {
        "name": "Grappling Hook",
        "desc": "",
        "effect": "Your Essence Weapon can deploy a 12m grappling line as a 1 AP standard action. Useful for climbing, swinging, pulling small objects, or pulling small creatures (DEF 12 or lower) up to 6m toward you. Cannot deal damage directly."
      }
    ],
    "2": [
      {
        "name": "Improved Essence Missiles",
        "desc": "",
        "effect": "Increases your Essence missiles to 4"
      }
    ],
    "3": [
      {
        "name": "Smoke Machine",
        "desc": "",
        "effect": "Gives you the \"Smoke\" ability"
      }
    ],
    "4": [
      {
        "name": "Danger Detector",
        "desc": "",
        "effect": "Adds +2 to your Perception"
      }
    ],
    "5": [
      {
        "name": "Mind Chip",
        "desc": "An essence-bound chip enhances your memory capacity.",
        "effect": "Increase your maximum Memory pool by 3 slots permanently. (Allows you to memorize 3 additional memory-1 abilities, or fewer higher-cost ones.)"
      },
      {
        "name": "Golem Form",
        "desc": "",
        "effect": "Allows you to turn into a Golem for additional abilities"
      }
    ]
  },
  "FIR": {
    "1": [
      {
        "name": "Heat",
        "desc": "Warm up something you can touch",
        "effect": "As a 1 AP standard action, heat a single material object you can touch up to dangerous temperatures. Useful for melting locks, igniting tinder, branding, scorching ropes, etc. Cannot directly damage creatures (use Burning Hands or other FIR abilities for combat)."
      },
      {
        "name": "Burn",
        "desc": "The fires you call linger.",
        "effect": "Targets that take fire damage from your abilities take an additional 1 fire damage at the start of their next turn. Does not stack on the same target across abilities."
      }
    ],
    "2": [
      {
        "name": "Absorb Flames",
        "desc": "",
        "effect": "gain \"absorb flames\" ability"
      }
    ],
    "3": [
      {
        "name": "Explosive Abilities",
        "desc": "Your fire abilities erupt outward on impact.",
        "effect": "When your FIR damaging abilities deal damage to a target, all enemies adjacent to that target take 1d4 fire splash damage. (Triggers on hit, not on save-for-half.) Stacks once per turn."
      }
    ],
    "4": [
      {
        "name": "Steam",
        "desc": "",
        "effect": "gain \"create steam\" ability"
      }
    ],
    "5": [
      {
        "name": "Cooking Boons",
        "desc": "A meal prepared by your hand is a gift.",
        "effect": "When you prepare a meal during a long rest, all allies who eat gain a Cooking Boon: pick one of (a) +5 max HP for next encounter, (b) advantage on first attack roll next encounter, (c) +1 to all saves for next encounter. Boons last until used or end of next encounter."
      },
      {
        "name": "Combustible",
        "desc": "Your blows ignite the air around you.",
        "effect": "When you deal melee weapon damage, all enemies adjacent to your target (not target itself) take 1d4 fire damage. Triggers once per turn."
      }
    ]
  },
  "WTR": {
    "1": [
      {
        "name": "Aquatic Combat",
        "desc": "You can manipulate water so you can breathe underneath it",
        "effect": "Allows you to breathe and fight underwater"
      },
      {
        "name": "Conjure Water",
        "desc": "You can manipulate essence to conjure water from thin air",
        "effect": "Create 1 gallon of water once per rest"
      }
    ],
    "2": [
      {
        "name": "Water Walk",
        "desc": "You walk on water as if it were solid ground.",
        "effect": "You can walk across the surface of water as if it were solid ground. While in or on water, your speed increases by +3m and you can breathe normally. While walking on water, you can phase partially into it as a free action, gaining 1/2 cover from anyone above the surface."
      }
    ],
    "3": [
      {
        "name": "Ice Breath",
        "desc": "",
        "effect": "Gives you \"Ice Breath\" ability"
      }
    ],
    "4": [
      {
        "name": "Protection from the Storm",
        "desc": "Your aura protects allies from frozen winds.",
        "effect": "Allies within 6m of you take half damage from cold and water-based area attacks, whether yours or enemies'. Friendly fire from your own WTR abilities deals no damage to protected allies. Always active while you are conscious."
      }
    ],
    "5": [
      {
        "name": "Healing Waters",
        "desc": "Your water carries succor as well as harm.",
        "effect": "When your WTR abilities target an ally (intentionally or as part of an AOE), the ally takes no damage from the ability and instead heals 1d6 + (FAI || INT) HP."
      },
      {
        "name": "Water Form",
        "desc": "Master the most fundamental form of water: yourself. You learn the Water Form ability.",
        "effect": "Turns you into a water avatar with special abilities"
      }
    ]
  },
  "WND": {
    "1": [
      {
        "name": "Wind Walking",
        "desc": "The wind carries you when you leap.",
        "effect": "+2 to Athletics rolls. Your jumping range is doubled (long jump and high jump). You take no fall damage from falls of 6m or less."
      },
      {
        "name": "Dandelion in the wind",
        "desc": "You know how to manipulate the wind essence when falling great distances",
        "effect": "fall great distances without taking damage"
      }
    ],
    "2": [
      {
        "name": "Lightning Reflex",
        "desc": "The wind tells you what's coming.",
        "effect": "+1 DEF when not Exhausted. (Effectively +1 DEF in most encounters.)"
      }
    ],
    "3": [
      {
        "name": "Dramatic Flash",
        "desc": "The wind carries blinding light.",
        "effect": "Your weapon attacks and WND ability damage create a brief blinding flash. On hit, target makes WIT save or is Distracted (-1 to attack rolls) for 1 turn. Once per turn."
      }
    ],
    "4": [
      {
        "name": "One with the Weather",
        "desc": "Your power shifts with the sky.",
        "effect": "Choose at the start of each day based on current weather: Stormy/rainy: gain +1d4 lightning damage on all WND abilities. Windy: gain +3m movement. Calm/clear: gain +2 to ranged attacks. Effect updates as weather changes (MG ruling on weather conditions)."
      }
    ],
    "5": [
      {
        "name": "Catch Your Breath",
        "desc": "You steal the breath of those who would harm you.",
        "effect": "When you deal damage to an enemy within 2m, you steal 1 AP from their next turn (they have 1 fewer AP available). Triggers once per turn. Limited to 1 AP stolen per encounter per enemy."
      },
      {
        "name": "Bolt Spears",
        "desc": "",
        "effect": "Gain the ability to conjure Spears made of lightning."
      }
    ]
  },
  "ERT": {
    "1": [
      {
        "name": "Rock Weapon",
        "desc": "",
        "effect": "Spend 10 minutes shaping a piece of stone into a usable weapon. Stone weapons function as standard 1H weapons (1d8 bludgeoning) or 2H weapons (1d10 bludgeoning) but are non-magical. Stone weapons crumble after 24 hours unless reinforced with the Shape Mineral talent."
      },
      {
        "name": "Shape Mineral",
        "desc": "You can fashion stones and metals by bending their essence",
        "effect": "Manipulate \"earth\" you can touch"
      }
    ],
    "2": [
      {
        "name": "Protect from Stone",
        "desc": "The earth knows your allies.",
        "effect": "Your allies are immune to damage from your ERT abilities. Friendly fire from earth damage no longer applies."
      }
    ],
    "3": [
      {
        "name": "Move the Earth",
        "desc": "The ground itself moves to assist you.",
        "effect": "Outside of combat, you and any allies within 9m of you gain +3m to base speed. Useful for travel, chase scenes, or cinematic movement. Has no effect during initiative-based encounters."
      }
    ],
    "4": [
      {
        "name": "Impactful Assaulter",
        "desc": "Your strikes are bone-shaking.",
        "effect": "When you deal damage with a melee weapon attack, target makes COR save or is knocked prone. Triggers once per turn."
      }
    ],
    "5": [
      {
        "name": "Improved Pocket Sand",
        "desc": "",
        "effect": "Allows you to use Pocket Sand as a reaction without expending any action points"
      },
      {
        "name": "Stone Feather",
        "desc": "You change what it means for stone to be heavy.",
        "effect": "1 AP standard action. Touch a single object up to 100 lbs (45 kg). For 5 turns, you can choose its effective weight: feather-light (it floats and drifts), normal, or doubled (anchors in place, harder to move). Useful for pulling levers, throwing heavy things, securing objects."
      }
    ]
  },
  "LIT": {
    "1": [
      {
        "name": "Nourishing aura",
        "desc": "Light gathers around you and pours into the wounded.",
        "effect": "Allies within 4m of you receive 1 + (FAI || INT) HP at the beginning of your turn. Always active while you are conscious."
      },
      {
        "name": "Light",
        "desc": "Conjure a ball of light in your palm",
        "effect": "you can light up dark spaces"
      }
    ],
    "2": [
      {
        "name": "Light Speed",
        "desc": "You can move faster",
        "effect": "gain +1 to Speed"
      }
    ],
    "3": [
      {
        "name": "Reflect",
        "desc": "Your light bends back what it touches.",
        "effect": "When a hostile ranged ability misses you, you may use a reaction to reflect it at a target within 6m of you (using the original attack roll). Once per turn."
      }
    ],
    "4": [
      {
        "name": "Light Weapon",
        "desc": "Your weapon glows with sacred fire.",
        "effect": "Your melee weapon attacks deal an additional +1d4 radiant damage. Stacks with weapon damage type (applies in addition)."
      }
    ],
    "5": [
      {
        "name": "Friendly Light",
        "desc": "Your light reveals only to those you choose.",
        "effect": "Once per encounter, conjure shared light visible only to you and your designated allies (chosen at cast). Light has 9m radius, lasts 5 turns. Enemies see only normal darkness/dim light. Allies see as if in bright light. 0 AP cost (free action)."
      },
      {
        "name": "Purifier",
        "desc": "You can remove curses",
        "effect": "gain \"purify\" ability"
      }
    ]
  },
  "DRK": {
    "1": [
      {
        "name": "Hard to See",
        "desc": "You blend into the shadows",
        "effect": "Enemies have disadvantage on perception when you're hiding"
      }
    ],
    "2": [
      {
        "name": "Sap Life",
        "desc": "You're able to draw the life out of enemies when you touch them",
        "effect": "Void touch heals you for half the damage you dealt"
      }
    ],
    "3": [
      {
        "name": "Impervious Mind",
        "desc": "",
        "effect": "Disadvantage on attempts to intimidate or perceive a deception"
      }
    ],
    "4": [
      {
        "name": "Improved Shadow Blade",
        "desc": "Your Shadow Blade burns longer and cuts deeper.",
        "effect": "Your Shadow Blade gains: duration extended to 8 turns; bonus damage increased to +1d8 (was +1d6); on critical hit, target gains Doubt status (-1 to attack rolls) for 2 turns."
      },
      {
        "name": "Cast a Large Shadow",
        "desc": "The shadow you cast hides others as well as yourself.",
        "effect": "1 AP standard action. For 5 turns, you and any allies within 6m of you gain +1 to attempts to hide and have advantage on Stealth checks while in dim light or shadow. 5-turn cooldown."
      }
    ],
    "5": [
      {
        "name": "Improved Counterspell",
        "desc": "",
        "effect": "Reduces Counterspell to 1 AP"
      },
      {
        "name": "Night Follows",
        "desc": "Light bends away from you.",
        "effect": "Always-on. You exist in dim light at minimum, even in bright sunlight. Bright-light effects targeting you are reduced to dim-light effects. You take half damage from radiant sources."
      }
    ]
  },
  "ARC": {
    "1": [
      {
        "name": "Familiar",
        "desc": "Gain a familiar with status bonuses",
        "effect": "Choose one of the available familiar options; it gives you bonuses that accumulate as you level"
      },
      {
        "name": "Prodding Mind",
        "desc": "",
        "effect": "add proficiency to your Perception skill"
      }
    ],
    "2": [
      {
        "name": "Penetrating Abilities",
        "desc": "Your magic finds gaps in defenses.",
        "effect": "Your magic abilities ignore one resistance per cast (your choice). Does not bypass immunity. Does not bypass damage reduction below 0 (you cannot deal negative damage)."
      }
    ],
    "3": [
      {
        "name": "Identify",
        "desc": "",
        "effect": "You can spend 10 minutes examining a magical or unusual object to learn its properties: its function, history, command words, attunement requirements, and any curses or hostile effects. No AP cost. Once per object."
      }
    ],
    "4": [
      {
        "name": "Advanced Illusionist",
        "desc": "Your mastery of illusion magic deepens.",
        "effect": "Your Illusion ability now lasts 1 hour instead of 5 turns. Observers have disadvantage on the WIT save to disbelieve. You can have up to 2 active illusions at once."
      }
    ],
    "5": [
      {
        "name": "Advanced Counterspell",
        "desc": "When you counter a hostile spell, you turn it back on the caster.",
        "effect": "When you successfully Counterspell a hostile ability, you may immediately reflect it back at the original caster (using their stats and your targeting). The reflected ability cannot itself be Counterspelled."
      },
      {
        "name": "Portal Enthusiast",
        "desc": "You have mastered the discipline of distance magic.",
        "effect": "Your Teleport ability gains: range tripled (up to 270m); can teleport up to 3 willing targets simultaneously; can teleport without line of sight if you've been to the destination before."
      }
    ]
  },
  "BLD": {
    "1": [
      {
        "name": "Bone Armor",
        "desc": "",
        "effect": "Gives +1 DEF while in light armor or unarmored; provides resistance against blood damage"
      },
      {
        "name": "Animator",
        "desc": "When the binding takes hold, it takes hold strong.",
        "effect": "When you successfully summon a creature on a critical hit (natural 20 on the casting roll), the summon gains +50% maximum HP and +1 to all attack rolls for its full duration."
      }
    ],
    "2": [
      {
        "name": "Blood Weapon",
        "desc": "",
        "effect": "Allows you to summon a blood weapon"
      }
    ],
    "3": [
      {
        "name": "Advanced Charm",
        "desc": "Your blood-bond ability spreads further.",
        "effect": "Your BLD Charm gains: duration extended to 8 turns; the WIT save is at disadvantage; on a successful charm, the target also believes any other charmed allies are friends to them. (Self-damage on cast remains 1d4.)"
      }
    ],
    "4": [
      {
        "name": "Improved Life Transfer",
        "desc": "Life flows more freely from you to those who need it.",
        "effect": "Your Life Transfer gains: range increased to 9m (was touch); healing increased to 2d6 + WIT (caster damage stays 1d6); can be cast as a reaction when an ally drops below 1/4 HP, with 3-turn cooldown."
      }
    ],
    "5": [
      {
        "name": "Constant Companion",
        "desc": "The blood-bound stay longer at your side.",
        "effect": "All your blood-themed summons (Animate Dead, Blood Weapon, Summon Demon, etc.) last twice as long as their listed duration."
      },
      {
        "name": "Improved Summon Demon",
        "desc": "The demons you bind are more potent.",
        "effect": "Your Summon Demon gains: HP increased by your level x 2; the demon gains a 6m teleport ability (1 AP); duration increased to 8 turns; demon can use one of your BLD abilities once per encounter."
      }
    ]
  },
  "SMN": {
    "1": [
      {
        "name": "Summoner Turret",
        "desc": "Your summons project force at range.",
        "effect": "All your summons gain a ranged attack: 6m range, 1d6 + INT damage of an appropriate type for the summon (claws -> piercing thrown, fire -> fire bolt, etc.). Replaces or adds to existing summon attack at MG discretion."
      },
      {
        "name": "Summoner Aura",
        "desc": "Your summons emanate an aura of your choosing.",
        "effect": "All your summons emanate one aura (chosen when you take this talent): Threatening Aura (enemies adjacent to summon take -1 to attack rolls); Healing Aura (allies adjacent to summon heal 1 HP at start of their turn); Spiking Aura (when summon is hit by melee, attacker takes 1d4 damage). Aura applies in 2m radius. Choice is permanent."
      }
    ],
    "2": [
      {
        "name": "Summon Material",
        "desc": "You bind raw matter from elsewhere.",
        "effect": "Once per long rest, summon up to 5 cubic feet of common material (wood, stone, metal, cloth, etc.) in a location you can see within 9m. The material is real and persistent. MG decides material durability and quality based on the situation."
      }
    ],
    "3": [
      {
        "name": "Imbued Strength",
        "desc": "Your summons hit harder.",
        "effect": "All your summons gain +2 to attack rolls and +1d4 to damage rolls."
      }
    ],
    "4": [
      {
        "name": "Advanced Familiar",
        "desc": "",
        "effect": "Familiars cost 0 AP"
      }
    ],
    "5": [
      {
        "name": "Improved Portal",
        "desc": "Your portals reach further and last longer.",
        "effect": "Your portal-related summon abilities (any with 'portal' in the name, including Portable Eye) gain +50% duration and +12m range."
      },
      {
        "name": "Improved Summon Dragon",
        "desc": "The dragons you summon are more powerful.",
        "effect": "Your Summon Dragon ability gains: HP increased to level x 12 (was x 8); breath weapon damage increased to 2d8 + INT (was 1d8 + INT); duration extended to 8 turns (was 5); can be used twice per long rest (was once)."
      }
    ]
  },
  "MRP": {
    "1": [
      {
        "name": "Mutation",
        "desc": "You've mutated to unexpected results",
        "effect": "add 2 proficiencies of your choice"
      },
      {
        "name": "Hardened Carapace",
        "desc": "Your hide is more resistant to damage",
        "effect": "gain +1 DEF naturally"
      }
    ],
    "2": [
      {
        "name": "Regeneration",
        "desc": "Your shifting flesh repairs itself.",
        "effect": "If you ended your last turn at less than full HP, regain 1 HP at the start of your turn. Activates only if you took damage during the encounter."
      }
    ],
    "3": [
      {
        "name": "Advanced Camouflage",
        "desc": "Camouflage automatically",
        "effect": "Camouflage automatically when you're not moving"
      }
    ],
    "4": [
      {
        "name": "Touch of Sadim",
        "desc": "Become the same material as the thing you touch",
        "effect": "gain \"Touch of Sadim\" ability"
      }
    ],
    "5": [
      {
        "name": "Adaptable Ability",
        "desc": "You learn what you should not be able to.",
        "effect": "Choose one ability from any other tech tree (L1-L3 only, not spike). You learn this ability and can memorize it. Choice is permanent and made when you take this talent."
      },
      {
        "name": "Permanent Enhancement",
        "desc": "You permanently reshape your body in a chosen way.",
        "effect": "Choose one permanent body modification when you take this talent. Options: Hardened Skin (+1 DEF permanently); Extra Limb (one additional reaction per turn permanently); Bone Plates (+5 max HP and resistance to bludgeoning damage). Cannot be removed without a similar L5 talent."
      }
    ]
  },
  "MRA": {
    "1": [
      {
        "name": "Unarmored Proficiency",
        "desc": "",
        "effect": "Add +1 defense when unarmored"
      },
      {
        "name": "Forceful Hits",
        "desc": "Gives more power to your unarmed attacks",
        "effect": "Regular attacks attempt to knock down opponents"
      }
    ],
    "2": [
      {
        "name": "Phantom Step",
        "desc": "You step briefly out of physical reality.",
        "effect": "1 AP standard action: become incorporeal until your next turn. While incorporeal, you can move through enemies (max 6m), cannot be hit by physical attacks, but cannot attack or use abilities. 3-turn cooldown."
      }
    ],
    "3": [
      {
        "name": "Athletic Mastery",
        "desc": "Your body is your finest tool.",
        "effect": "+1 to Athletics rolls (stacks with proficiency). You no longer take damage from falls of 9m or less. You can stand from prone for 0 AP instead of 1 AP."
      }
    ],
    "4": [
      {
        "name": "Spirit Weapon Expertise",
        "desc": "Your Spirit Weapon strikes deeper and lasts longer.",
        "effect": "Your Spirit Weapon ability damage increases to 1d10 + STR (was 1d8 + STR), and the spirit weapon now lasts 8 turns (was 5)."
      }
    ],
    "5": [
      {
        "name": "Improved Deflect",
        "desc": "Your deflection technique now works against all attacks, and you can redirect them.",
        "effect": "Your Deflect ability gains: now triggers against ranged attacks as well as melee; on successful deflect, you can choose to redirect the attack to another target within 6m (using the original attack roll). 1-turn cooldown after redirect."
      },
      {
        "name": "Improved Projection",
        "desc": "You project multiple copies of yourself, each acting independently.",
        "effect": "Your Self-Projection ability gains: project up to 2 copies of yourself simultaneously; copies last 5 rounds (was 3); each copy can take its own actions on your turn (sharing your AP pool, max 5 AP per copy per turn)."
      }
    ]
  },
  "SLY": {
    "1": [
      {
        "name": "Cunning Action",
        "desc": "You move in the spaces other people don't see.",
        "effect": "Once per turn as a free action (no AP cost), choose one: Hide (if cover is available); Disengage (your next move this turn does not provoke opportunity attacks); Dash (gain +3m movement this turn). One use per turn."
      },
      {
        "name": "Counter",
        "desc": "A miss is an opening you take.",
        "effect": "Reaction. When an attack misses you in melee, make one attack against the attacker (1x weapon damage + COR). Once per turn."
      }
    ],
    "2": [
      {
        "name": "Brutal Blows",
        "desc": "Your strikes carry presence.",
        "effect": "When you successfully hit an enemy with a melee weapon attack, all enemies within 6m make a WIT save or are 'Shaken' (-1 to attack rolls) for 1 turn. Triggers once per turn."
      }
    ],
    "3": [
      {
        "name": "Enhanced Mobility",
        "desc": "You move faster than most can track.",
        "effect": "Your base speed increases by +3m permanently. (For typical 6m base, this becomes 9m.)"
      }
    ],
    "4": [
      {
        "name": "Sneak Attack Mastery",
        "desc": "You've found new vulnerabilities to exploit.",
        "effect": "Your Sneak Attack damage increases by +1d6 (so +2d6 cumulative). Sneak Attack now also triggers when target has lost AP this turn (Dazed, Numbed, etc.) — additional trigger condition beyond flanked or unaware."
      }
    ],
    "5": [
      {
        "name": "Quick Draw",
        "desc": "",
        "effect": "Switch weapons with no penalty"
      },
      {
        "name": "Poison Weapon",
        "desc": "Your blade carries a small death.",
        "effect": "Your weapon attacks deal an additional +1d4 poison damage. On a critical hit, target also gains the Poisoned status (1d6/turn for 3 turns, FRT save end)."
      }
    ]
  },
  "HNT": {
    "1": [
      {
        "name": "Track",
        "desc": "You're an experienced tracker",
        "effect": "you gain additional proficiency in Nature and Survival"
      },
      {
        "name": "Animal Friendship",
        "desc": "You have experience dealing with animals",
        "effect": "additional proficiency in Animals, capacity for an animal companion"
      },
      {
        "name": "Armor Proficiency",
        "desc": "You've trained in basic armor.",
        "effect": "Gain proficiency in 1 armor type of your choice. (Light, medium, or heavy.)"
      }
    ],
    "2": [
      {
        "name": "Trapper",
        "desc": "You're good with Traps",
        "effect": "Abilities to make traps cost 1 fewer AP"
      }
    ],
    "3": [
      {
        "name": "Companion Tactics",
        "desc": "You and your animal companion fight as a unit.",
        "effect": "Your animal companion gains +2 to attack rolls when you and the companion are both within 6m of the same enemy."
      }
    ],
    "4": [
      {
        "name": "Dodge Projectile",
        "desc": "You can dodge projectiles as a reaction",
        "effect": "Gain \"dodge projectile\" ability"
      }
    ],
    "5": [
      {
        "name": "Monster Hunter",
        "desc": "You know how to take down a monster",
        "effect": "Advantage against monsters you've fought before"
      },
      {
        "name": "Shrapnel Arrow",
        "desc": "You have exploding arrows",
        "effect": "gain \"Shrapnel Arrow\" ability"
      }
    ]
  },
  "WLD": {
    "1": [
      {
        "name": "Fungal Aura",
        "desc": "Spores drift from your skin. The wild does not stop at your edges.",
        "effect": "Enemies adjacent to you take 1 HP poison damage at the start of their turn. Effect is always active while you are conscious."
      },
      {
        "name": "Critter Communicator",
        "desc": "",
        "effect": "gain the ability to communicate with animals"
      }
    ],
    "2": [
      {
        "name": "Wild Weapons",
        "desc": "The wild stirs in your blade.",
        "effect": "Your weapons (all of them) gain a wild enchantment chosen when you take this talent: Thorns (+1d4 piercing on hit); Verdant (+1d4 poison on hit; FRT save to negate); Bestial (+1d4 against beasts and monsters specifically). The chosen enchantment can be re-selected during a long rest."
      }
    ],
    "3": [
      {
        "name": "Critter Commander",
        "desc": "A small ally heeds your call.",
        "effect": "Gain a critter familiar (small animal: bird, cat, rat, etc.) as a permanent companion. The familiar has 5 HP, can move 9m/turn, can scout up to 30m away, and can carry small objects. If killed, you can summon a new one after a long rest."
      }
    ],
    "4": [
      {
        "name": "Find Essence",
        "desc": "You can sense the elemental currents of the world.",
        "effect": "Once per long rest, spend 10 minutes attuning to find a specific type of essence (fire, water, earth, etc., or any of the tech-tree essences). You sense the nearest source within 1 km, and learn its approximate distance and direction. Useful for foraging, ritual prep, and tracking elemental creatures."
      }
    ],
    "5": [
      {
        "name": "Gift of Conscience",
        "desc": "you can breath consciousness into certain inanimate objects",
        "effect": "As a 2 AP standard action, sense the surface intentions of a creature you can see within 9m. You learn whether they currently intend hostility, deception, or aid toward you. WIT save resists. The creature is not aware you've sensed them. Once per encounter."
      },
      {
        "name": "Growth Aura",
        "desc": "Life clusters around you.",
        "effect": "Allies within 4m of you receive 1 + (FAI || INT) HP at the beginning of your turn. Always active while you are conscious. Stacks with LIT Nourishing Aura if both are present (allies get the aura twice)."
      }
    ]
  },
  "WAR": {
    "1": [
      {
        "name": "Dust yourself Off",
        "desc": "When your captain is bloodied, the company rallies.",
        "effect": "When you drop below 1/4 maximum HP for the first time in an encounter, regain 1d6 + STR HP. Triggers automatically as a free action; no AP cost. Resets at the end of each encounter."
      },
      {
        "name": "Stances",
        "desc": "You have trained in fundamental combat stances and can shift between them on the fly.",
        "effect": "As a free action at the start of your turn, choose one stance: Defensive Stance (+1 DEF, -1 to attack rolls); Offensive Stance (-1 DEF, +1 to attack rolls); Steady Stance (immune to forced movement; no other bonus or penalty). You begin combat in Steady Stance unless you declare otherwise."
      }
    ],
    "2": [
      {
        "name": "Frenzy",
        "desc": "You're able to let go of your emotions and fly into a blind rage",
        "effect": "Gain Frenzy ability"
      }
    ],
    "3": [
      {
        "name": "Battlefield Awareness",
        "desc": "You see the entire field. Your group cannot be flanked.",
        "effect": "You and any allies adjacent to you cannot be flanked. Enemies attacking flanked targets in your group don't get flanking bonuses."
      },
      {
        "name": "Courageous",
        "desc": "You do not waver.",
        "effect": "You are immune to the Fear status. WIT saves against fear-inducing effects automatically succeed."
      }
    ],
    "4": [
      {
        "name": "Imposing Figure",
        "desc": "You're a scary dude",
        "effect": "Gain advantage on Intimidation rolls"
      }
    ],
    "5": [
      {
        "name": "Inspiring Strategist",
        "desc": "Your tactical eye uplifts those who fight beside you.",
        "effect": "Allies within 5m of you gain +1 to attack rolls and +1 to damage rolls when attacking the same target as another ally (flanking or coordinated assault). Always active while you are conscious."
      },
      {
        "name": "Flanker",
        "desc": "You know how to position yourself well",
        "effect": "gain +2 to hit and +2 to DEF when flanking an enemy"
      }
    ]
  }
};
})();
