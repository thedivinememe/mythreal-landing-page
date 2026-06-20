// MythReal — Build Your Legend data model
// All 20 Tech Trees with depth-1/3/5 features pulled from canonical sources:
//   - Quick-Start Rules v0.5.2 (pregen features, Appendix C identities/spikes)
//   - Talents_and_Features_v9.xlsx → feature_data_compilation sheet
//
// `voice`  = the in-voice description from the rules data
// `desc`   = the mechanical effect text
// `canon`  = 'pregen' (verbatim from a Quick-Start pregen) or 'compiled' (from the
//            features compilation spreadsheet, which is the working master list).
//
// Forge build economy (matches Quick-Start v0.5.2 canonical rules):
//   At Level 1, a character has 2 Tech Tree feature points.
//   Each subsequent level grants +1 point. So budget = level + 1 (capped at L5 = 6).
//   Each tier costs 1 point: Depth 1 (Proficiency), Depth 3 (Specialty), Depth 5 (Mastery).
//   Depth 3 requires Depth 1 in the same tree; Depth 5 requires Depth 3.
//   - L1 (2 pts): one tree at depth 2 (D1+D3), OR D1 in two trees.
//   - L2 (3 pts): single-tree specialist hits the L5 spike, OR D1+D3 + D1 elsewhere.
//   - L5 (6 pts): can take all three tiers in one tree and still splash three more D1s.
//
// To add or revise trees, edit this file directly — the forge UI rebuilds from data.

(function () {
  'use strict';

  const ATTRIBUTES = [
    { code: 'STR', name: 'Strength',     desc: 'Physical force. Melee attacks, lifting, breaking.' },
    { code: 'COR', name: 'Coordination', desc: 'Speed and dexterity. Ranged attacks, finesse, stealth.' },
    { code: 'FRT', name: 'Fortitude',    desc: 'Resilience. Endurance saves, resisting poison.' },
    { code: 'INT', name: 'Intellect',    desc: 'Reasoning. Arcane spells, Memory pool, knowledge.' },
    { code: 'FAI', name: 'Faith',        desc: 'Conviction. Divine spells, resisting fear.' },
    { code: 'SOC', name: 'Sociability',  desc: 'Presence. Speech, deception, intimidation.' },
    { code: 'WIT', name: 'Wits',         desc: 'Awareness. Initiative, perception, insight.' },
  ];

  // Canonical L1 standard array (Quick-Start v0.5.2): assign these 7 values to
  // the 7 attributes in any order. Total +8 (one specialty, two solid secondaries,
  // two competent, one mediocre, one weakness). The forge shuffles this array
  // across attributes each time ancestry is chosen, then applies ancestry boosts.
  const STANDARD_ARRAY = [3, 2, 2, 1, 1, 0, -1];

  const ANCESTRIES = [
    {
      id: 'human',
      name: 'Human',
      tagline: 'Adaptable. Ambitious.',
      blurb: 'Two attribute boosts of your choice. Humans built the New Unter Alliance from the bones of empire.',
      boosts: { choose: 2, value: 1, pool: ['STR','COR','FRT','INT','FAI','SOC','WIT'] },
      glyph: 'human',
    },
    {
      id: 'elf',
      name: 'Elf',
      tagline: 'Ancient. Graceful.',
      blurb: 'Bonuses to Coordination, Intellect, and Faith. Elves remember when the Elder Dragons still walked.',
      boosts: { fixed: { COR: 1, INT: 1, FAI: 1 } },
      glyph: 'elf',
    },
    {
      id: 'orc',
      name: 'Orc',
      tagline: 'Powerful. Resilient.',
      blurb: 'Bonuses to Strength and Fortitude. Orcs were the first to break the dragon yoke.',
      boosts: { fixed: { STR: 2, FRT: 1 } },
      glyph: 'orc',
    },
    {
      id: 'drake',
      name: 'Drake',
      tagline: 'Draconic heritage.',
      blurb: 'Bonuses to Strength and Wits. Drakes carry the blood of the Elder Dragons and the weight of their fall.',
      boosts: { fixed: { STR: 2, WIT: 1 } },
      glyph: 'drake',
    },
  ];

  const TREE_GROUPS = {
    weapon:    { label: 'Weapon' },
    elemental: { label: 'Elemental' },
    sacred:    { label: 'Sacred' },
    esoteric:  { label: 'Esoteric' },
    body:      { label: 'Body' },
    skill:     { label: 'Skill' },
  };

  // Trees ordered by group for clean spatial clustering around the hub.
  const TECH_TREES = [
    // ═══════════════════ Weapon (5) ═══════════════════
    {
      code: '1HW', name: 'One-Handed Weapons', group: 'weapon',
      identity: 'Duelist precision. Parry, riposte, single-target mastery.',
      d1: {
        name: '1H Weapon Proficiency', ap: 1, canon: 'compiled',
        voice: 'You’re trained in the duelist’s craft — one weapon, one hand, one decisive moment.',
        desc: 'Gain proficiency in one-handed weapons of your choice (longsword, mace, shortsword, rapier, etc.) and shields. When wielding a 1H weapon and a shield, gain +1 to attack rolls.',
      },
      d3: {
        name: 'Riposte Stance', ap: 2, canon: 'compiled',
        voice: 'When wielding a 1H weapon, you stand ready to counter any attack that misses you.',
        desc: 'When a melee attack against you misses while you wield a 1H weapon, spend 1 banked AP as a reaction to make an immediate basic attack against the attacker. 1-turn cooldown.',
      },
      d5: {
        name: 'Master Duelist', ap: 2, canon: 'compiled', spike: true,
        voice: 'In single combat, you have no equal — every duel is a conversation you’ve already won.',
        desc: 'Fighting a single opponent (no other enemies within 10 ft), gain advantage on all attack rolls and +2 DEF against that opponent. Ends when another enemy enters the 10 ft zone. Always-on, no AP cost.',
      },
    },
    {
      code: '2HW', name: 'Two-Handed Weapons', group: 'weapon',
      identity: 'Heavy force. Battlefield-shaping swings and brace stances.',
      d1: {
        name: '2H Weapon Proficiency', ap: 1, canon: 'compiled',
        voice: 'You’re trained in heavy weapons — the kind you swing with both hands and your full weight behind them.',
        desc: 'Gain proficiency in two-handed weapons of your choice (greatsword, maul, halberd, greataxe, etc.). When wielding a 2H weapon, gain +1 to damage rolls.',
      },
      d3: {
        name: 'Cleave', ap: 2, canon: 'compiled',
        voice: 'You swing through enemies — when one falls, your weapon’s momentum carries into the next.',
        desc: 'When you reduce an enemy to 0 HP with a 2H attack, immediately make another basic 2H attack against a different enemy within reach as a free action. Once per turn.',
      },
      d5: {
        name: 'Earthshaker', ap: 2, canon: 'compiled', spike: true,
        voice: 'When you swing with full commitment, the ground shakes and your enemies fall before you.',
        desc: 'Once per encounter, in place of a basic 2H attack, sweep through all enemies in a 10 ft cone in front of you. Each rolls a separate attack; damage as normal. Targets that take damage make a STR save (DC 13) or are knocked prone.',
      },
    },
    {
      code: 'DWW', name: 'Dual-Wield Weapons', group: 'weapon',
      identity: 'Two of everything. Multi-attack flurries and reactive counter-blades.',
      d1: {
        name: 'Dual-Wield Proficiency', ap: 1, canon: 'pregen',
        voice: 'You fight with a weapon in each hand, both moving in coordinated rhythm.',
        desc: 'Gain proficiency in daggers and one other 1H weapon. Ignore the offhand penalty — offhand attacks deal full damage. Make an offhand attack as part of any mainhand attack at no extra AP cost (separate to-hit roll).',
      },
      d3: {
        name: 'Twin Reaction', ap: 2, canon: 'compiled',
        voice: 'Both your weapons strike when an enemy gives you the opening.',
        desc: 'Your opportunity attacks (and other reactive melee attacks) are made with both weapons: one mainhand and one offhand, each rolling separately. The reaction still costs 1 banked AP total.',
      },
      d5: {
        name: 'Whirlwind of Steel', ap: 2, canon: 'compiled', spike: true,
        voice: 'You become a cyclone of blades — every adjacent enemy faces both your weapons in a single instant.',
        desc: 'Once per encounter, spend 4 AP. Make a mainhand AND offhand attack against EVERY enemy adjacent to you. Each enemy is attacked twice; roll separately. Damage as normal.',
      },
    },
    {
      code: 'RNW', name: 'Ranged Weapons', group: 'weapon',
      identity: 'Bow, crossbow, thrown. Volley fire and precision shots.',
      d1: {
        name: 'Ranged Weapon Proficiency', ap: 1, canon: 'pregen',
        voice: 'You’re trained with bows, crossbows, and thrown weapons — distance is your craft.',
        desc: 'Gain proficiency in ranged weapons of your choice. +1 to attack rolls with ranged weapons. Move 5 ft before or after a ranged attack at no AP cost, once per turn.',
      },
      d3: {
        name: 'Volley', ap: 2, canon: 'compiled',
        voice: 'You fire a follow-up shot before your target has time to recover.',
        desc: 'Once per turn after making a ranged attack, spend 1 AP to make a second ranged attack at the same target at −2 to hit. The follow-up shot ignores half cover.',
      },
      d5: {
        name: 'Eagle Eye', ap: 2, canon: 'compiled', spike: true,
        voice: 'Distance and obstacles are no longer barriers — your shots find their mark wherever the eye can reach.',
        desc: 'Your ranged attacks ignore all cover. Maximum range doubled. Attack creatures up to one size larger or smaller with no penalty regardless of size or partial concealment. Always-on, no AP cost.',
      },
    },
    {
      code: 'MGW', name: 'Magic Weapons', group: 'weapon',
      identity: 'Essence-bound steel. Weapon as spell focus.',
      d1: {
        name: 'Magic Weapon Proficiency', ap: 1, canon: 'compiled',
        voice: 'Your weapon is also your spell focus — you channel arcane essence through it.',
        desc: 'Gain proficiency in one weapon type (any 1H or 2H melee). It counts as a magical focus — use it for spellcasting and channel arcane abilities through it. Weapon attacks may use INT or FAI in place of STR at your choice.',
      },
      d3: {
        name: 'Imbued Strikes', ap: 2, canon: 'compiled',
        voice: 'Your weapon channels arcane essence on every swing.',
        desc: 'Basic weapon attacks deal +1d4 elemental damage of a type chosen at long rest (fire, cold, lightning, thunder, light, or dark). Change during short rest. Stacks with normal damage.',
      },
      d5: {
        name: 'Twincast Cataclysm', ap: 2, canon: 'compiled', spike: true,
        voice: 'Your weapon and your essence are one — you can channel two spells through a single strike.',
        desc: 'Once per encounter, when you cast an L1-L3 ability, immediately cast a second L1-L3 ability (from any tree you have) as a free action. Both resolve normally. Second ability’s AP cost is paid but not subject to banking restrictions.',
      },
    },

    // ═══════════════════ Elemental (4) ═══════════════════
    {
      code: 'FIR', name: 'Fire', group: 'elemental',
      identity: 'Burning destruction. Area denial. Heat as argument.',
      d1: {
        name: 'Kindle', ap: 1, canon: 'pregen',
        voice: 'Fire answers your touch. Sparks find tinder when you’re close.',
        desc: 'Ignite small flammable objects at touch (no AP). Resistance to fire damage (half, rounded down). Once per long rest, relight a recently-extinguished flame at up to 30 ft.',
      },
      d3: {
        name: 'Burning Mark', ap: 2, canon: 'compiled',
        voice: 'Your fire abilities leave embers that keep burning long after the spell is cast.',
        desc: 'Damage a creature with fire to mark them Burning. At the start of each of their turns, Burning creatures take 1d6 fire. They may spend 1 AP to attempt extinguish (FRT save DC 13). One target Burning at a time; marking a new one ends the previous.',
      },
      d5: {
        name: 'Living Flame', ap: 2, canon: 'compiled', spike: true,
        voice: 'You become fire itself — your body burns with the essence of pyromancy.',
        desc: 'Once per encounter, spend 2 AP to transform into living flame for 3 turns. While transformed: immune to fire, resistance to all physical damage, deal 1d6 fire to anyone hitting you in melee, move through 1-inch gaps. Retain all abilities and speech.',
      },
    },
    {
      code: 'WTR', name: 'Water', group: 'elemental',
      identity: 'Control and protection. Tidewalls, frost, zone domination.',
      d1: {
        name: 'Shape Water', ap: 1, canon: 'compiled',
        voice: 'Water listens to you. Small bodies of liquid bend to your hand and your intent.',
        desc: 'Manipulate shape/temperature/motion of up to ~5 gallons of water within 30 ft (free out of combat, 1 AP in combat). Freeze a 5×5 ft puddle into slippery patch (COR save DC 13 or prone), or boil water (1d4 fire to creatures in contact).',
      },
      d3: {
        name: 'Frozen Reach', ap: 2, canon: 'compiled',
        voice: 'The waters that bend to your will reach further, and grow cold enough to freeze.',
        desc: 'Shape Water range increases to 60 ft and volume to ~20 gallons. Freeze shaped water (not just chill) to create ice walls up to 10×10×1 ft (6 HP, vulnerable to fire) at 1 AP each.',
      },
      d5: {
        name: 'Tide of the Deep', ap: 2, canon: 'compiled', spike: true,
        voice: 'You call up the sea itself, even where there is no sea.',
        desc: 'Once per encounter, spend 4 AP: a 30×30 ft area within 60 ft floods with shin-deep water for 5 turns. Difficult terrain for non-WTR characters; you and chosen allies move at full speed. Creatures starting their turn in the area make STR save (DC 14) or are pushed 5 ft.',
      },
    },
    {
      code: 'WND', name: 'Wind', group: 'elemental',
      identity: 'Speed, lightning, force. Atmospheric weather modulation.',
      d1: {
        name: 'Stormstride', ap: 1, canon: 'compiled',
        voice: 'You feel the wind around you and can ride its currents — a brush of static-charged air precedes your strikes.',
        desc: 'Move 20+ ft in a single turn and your next attack this turn deals +1d4 lightning on a hit. Lightning carries standard thunder/lightning rules (audible long-range; chain reactions in stormy weather).',
      },
      d3: {
        name: 'Static Field', ap: 2, canon: 'compiled',
        voice: 'The air around you crackles with retained charge — touch you, and you shock back.',
        desc: 'When you take damage in melee, the attacker takes 1d4 lightning damage in return. Advantage on saves against being grappled or restrained (the wind currents shrug off contact).',
      },
      d5: {
        name: 'Tempest’s Verdict', ap: 2, canon: 'compiled', spike: true,
        voice: 'The sky answers when you call — lightning strikes precisely where you direct.',
        desc: 'Once per encounter, spend 4 AP. Choose 3 squares within 60 ft; each struck for 5d8 lightning (COR save DC 14 for half). Then a 30 ft radius around you fills with thunder for 2 turns; enemies entering take 2d6 thunder on entry.',
      },
    },
    {
      code: 'ERT', name: 'Earth', group: 'elemental',
      identity: 'Stone and structural force. Permanent battlefield reshaping.',
      d1: {
        name: 'Rock Steady', ap: 1, canon: 'compiled',
        voice: 'The earth under your feet recognizes you and holds you in place when others would fall.',
        desc: 'Advantage on saves against being knocked prone, pushed, pulled, or grappled. STR checks for grappling/shoving have advantage when both you and target stand on natural earth or stone.',
      },
      d3: {
        name: 'Stoneskin', ap: 2, canon: 'compiled',
        voice: 'Your skin takes on the toughness of stone — not literally, but the earth is with you.',
        desc: '+1 DEF (stacks with armor). When you take damage of 5+ from a single attack, reduce that damage by 2. (This is the only damage reduction outside of resistances.)',
      },
      d5: {
        name: 'Continental Drift', ap: 2, canon: 'compiled', spike: true,
        voice: 'You reshape the battlefield — pull stone from the ground, carve pits where you choose.',
        desc: 'Once per encounter, spend 4 AP. Designate up to 4 squares within 60 ft. Each becomes a 5 ft stone wall (10 HP, blocks movement and sight) OR a 5 ft pit (2 AP to climb out). Lasts 5 turns then crumbles back.',
      },
    },

    // ═══════════════════ Sacred / Shadow (2) ═══════════════════
    {
      code: 'LIT', name: 'Light', group: 'sacred',
      identity: 'Healing, blinding radiance, party support.',
      d1: {
        name: 'Healing Touch', ap: 1, canon: 'pregen',
        voice: 'Light flows through your hands more freely than most — a touch of the divine, given form.',
        desc: 'Your healing abilities heal +1 HP per use. Healing abilities also deal half their healing as radiant damage to undead/shadow creatures in the area on a successful spell attack.',
      },
      d3: {
        name: 'Aura of Mending', ap: 2, canon: 'compiled',
        voice: 'Your presence itself heals — a soft, ongoing radiance that knits small wounds.',
        desc: 'All allies within 30 ft regain 1 HP at the start of their turns. Stacks with other healing. Sustained while conscious; ends if you fall to 0 HP and resumes when healed.',
      },
      d5: {
        name: 'Dawnsong', ap: 2, canon: 'compiled', spike: true,
        voice: 'The morning sun answers your call — light flooding every wound and shadow.',
        desc: 'Once per encounter, spend 4 AP: all allies within 30 ft healed 4d6+FAI HP. Downed allies restored to consciousness (prone). One negative status removed per ally (your choice: Burning, Bleeding, Shaken, Dazed, Crippled, Distracted, Frightened, etc.).',
      },
    },
    {
      code: 'DRK', name: 'Dark', group: 'sacred',
      identity: 'Shadow magic, fear, psychological warfare.',
      d1: {
        name: 'Shadow Swept', ap: 1, canon: 'compiled',
        voice: 'Darkness welcomes you and speeds your passage through it.',
        desc: 'In dim light or darkness, your movement costs are halved: 20 ft per AP instead of 10. (Speed is otherwise a system constant; DRK’s identity earns this carve-out.)',
      },
      d3: {
        name: 'Cloak of Shadows', ap: 2, canon: 'compiled',
        voice: 'Shadow itself wraps you in concealment — you can step into it and out of sight.',
        desc: 'In dim light or darkness: +2 DEF, and you may Hide as a 1 AP action (instead of 2). Your first attack each turn made from hidden (not seen by target) deals +1d6 damage.',
      },
      d5: {
        name: 'The Long Night', ap: 2, canon: 'compiled', spike: true,
        voice: 'You call on the deepest darkness — a darkness that fights for you.',
        desc: 'Once per encounter, spend 3 AP: 30 ft radius around you fills with magical darkness for 3 turns. Enemies have disadvantage on attacks; you and designated allies treat the area as dim light. Enemies of WIT 12+ make a FAI save each turn (DC 14) or are Shaken for 1 turn.',
      },
    },

    // ═══════════════════ Esoteric (4) ═══════════════════
    {
      code: 'ARC', name: 'Arcane', group: 'esoteric',
      identity: 'Reality manipulation, illusion, teleportation.',
      d1: {
        name: 'Sense Essence', ap: 1, canon: 'pregen',
        voice: 'You feel the texture of magic in the world — its presence, its direction, its rough type.',
        desc: 'Detect magical effects, items, and creatures within 30 ft as a free action. Identifying what the magic is requires an Essence check. Arcane spell range +50% (round up). Study a magical item for 10 minutes to identify general function (Essence check).',
      },
      d3: {
        name: 'Phase Step', ap: 2, canon: 'compiled',
        voice: 'You step through the thin places where space folds on itself.',
        desc: 'Once per turn, spend 1 AP to teleport up to 15 ft to a location you can see. No opportunity attacks. The arcane spell range bonus from Sense Essence increases from +50% to +100%.',
      },
      d5: {
        name: 'Severance', ap: 2, canon: 'compiled', spike: true,
        voice: 'You unweave the thread of a creature’s existence in this place — not killing them, just removing them.',
        desc: 'Once per encounter, spend 4 AP to remove a creature you can see from reality for 4 turns. They cannot act, be targeted, or perceive the battlefield. Return at the start of their fourth turn after Severance, in the square they left. FAI save (DC 15) to resist.',
      },
    },
    {
      code: 'BLD', name: 'Blood', group: 'esoteric',
      identity: 'Self-sacrifice for power. Charm, summons, life manipulation.',
      d1: {
        name: 'Bloodbound', ap: 1, canon: 'compiled',
        voice: 'You have a magical sensitivity to blood — your own and others’. Drawing blood opens a thread of influence.',
        desc: 'Gain proficiency in Intimidation. When you have drawn blood from a creature in the last hour (any damage counts), advantage on Intimidation and Speech checks against that creature. Lasts until they’re fully healed or 1 hour passes.',
      },
      d3: {
        name: 'Blood Pact', ap: 2, canon: 'compiled',
        voice: 'Your blood is currency — you may spend it to fortify allies or wound enemies.',
        desc: '1 AP: sacrifice 1d6 HP. Then either grant a willing ally within 30 ft equivalent temp HP for 5 turns, OR deal that amount as necrotic damage to a creature you’ve drawn blood from in the last hour. The damage option ignores standard cover.',
      },
      d5: {
        name: 'Crimson Pact', ap: 2, canon: 'pregen', spike: true,
        voice: 'You bind two souls in a single thread of blood — what one suffers, the other suffers.',
        desc: 'Once per encounter, designate two creatures within 30 ft (one ally + one enemy, OR two enemies). For 5 turns, damage taken by either is also dealt to the other (full to both, not split). Both must remain visible. Link breaks if either dies, falls unconscious, or moves more than 60 ft apart.',
      },
    },
    {
      code: 'SMN', name: 'Summoning', group: 'esoteric',
      identity: 'Spirits, elementals, and dragons at your command.',
      d1: {
        name: 'Summoned Armor', ap: 1, canon: 'compiled',
        voice: 'Your summoned creatures don’t just fight beside you — they form a defensive ring around you.',
        desc: '+1 DEF per active summoned creature within 30 ft, to a max of +3 DEF.',
      },
      d3: {
        name: 'Conduit', ap: 2, canon: 'compiled',
        voice: 'Your bond with summoned creatures grows stronger — they can act in concert with you.',
        desc: 'Once per turn, spend 1 banked AP to grant one active summoned creature an additional turn this round (acts immediately after its current turn). Maximum active summons increases by 1.',
      },
      d5: {
        name: 'Convocation', ap: 2, canon: 'pregen', spike: true,
        voice: 'You call all your bonded creatures to your side at once.',
        desc: 'Once per encounter, in a single 3 AP turn, summon up to 3 different creatures from your summon list (each must be a creature type you have access to). All appear within 30 ft and act immediately on your initiative. They count toward your active summon cap while they remain.',
      },
    },
    {
      code: 'MRP', name: 'Morphology', group: 'esoteric',
      identity: 'Body modification and shapeshifting.',
      d1: {
        name: 'Adaptive Form', ap: 1, canon: 'compiled',
        voice: 'Your body bends to your will in small, deliberate ways — never the full transformation, but enough to suit the moment.',
        desc: '1 AP: grow one of — claws (1d6 slashing unarmed), gills (breathe water 10 min), feathered ear-tufts (advantage on Perception involving sound), or webbed digits (swim 10 ft/AP, climb 5 ft/AP). Lasts 10 min; one active at a time.',
      },
      d3: {
        name: 'Shapeshifter', ap: 2, canon: 'compiled',
        voice: 'You have the full power of bodily transformation — not just modifications, but full forms.',
        desc: '2 AP: transform into one creature you’ve studied (animals or humanoids up to size Large; must have observed the type 1+ hour previously). Retain INT, FAI, SOC, Memory, and abilities; gain the creature’s STR, COR, FRT, movement modes, and natural attacks. Up to 1 hour. 1-encounter cooldown.',
      },
      d5: {
        name: 'The Other Self', ap: 2, canon: 'compiled', spike: true,
        voice: 'You are no longer bound by a single shape — your body is fluid, responsive, infinite.',
        desc: 'Once per encounter, 1 AP: fluid form for 5 turns. At the start of each of your turns, freely switch between true form, any L1 Adaptive Form configuration, or any creature shape you’ve used Shapeshifter to access. Resistance to physical damage; advantage on STR, COR, FRT saves.',
      },
    },

    // ═══════════════════ Body / Skill (5) ═══════════════════
    {
      code: 'MRA', name: 'Martial Arts', group: 'body',
      identity: 'Unarmed combat. Body as weapon. Stance and breath.',
      d1: {
        name: 'Dodge', ap: 1, canon: 'pregen',
        voice: 'You move with the easy fluidity of trained unarmed combat.',
        desc: 'Gain the Dodge reaction (1 banked AP): when targeted by a melee attack, impose disadvantage on the attack roll. 1-turn cooldown. Counts toward the standard one-reaction-per-round limit.',
      },
      d3: {
        name: 'Stances', ap: 2, canon: 'compiled',
        voice: 'Your training has given you signature combat postures, each with its own discipline.',
        desc: 'At the start of each turn, choose a stance active until the start of your next turn: Iron Fist (+1 unarmed damage), Mountain (+1 DEF, immune to forced movement), or Flowing River (move 5 ft after each unarmed attack at no AP). Switching is a free action. One at a time.',
      },
      d5: {
        name: 'One Thousand Hands', ap: 2, canon: 'pregen', spike: true,
        voice: 'Your strikes blur into a single uninterrupted motion — too many hands for the eye to follow.',
        desc: 'Once per encounter, spend 4 AP: 5 unarmed attacks against any combination of targets within reach. Each rolls 1d6+STR blunt. Each hit increases the next by +1 cumulative (1st = base, 2nd = base+1, ..., 5th = base+4). Resets after the sequence.',
      },
    },
    {
      code: 'SLY', name: 'Sly', group: 'skill',
      identity: 'Stealth, sneak attacks, escape.',
      d1: {
        name: 'Sneak Attack', ap: 1, canon: 'pregen',
        voice: 'You exploit weakness in your enemies’ defenses, striking where they’re not looking.',
        desc: 'Hit a target that is flanked or unaware of you (hidden, blinded, or surprised) to deal +1d6 physical damage. Once per turn — only the first qualifying attack each turn gets the bonus.',
      },
      d3: {
        name: 'Assassin’s Eye', ap: 2, canon: 'compiled',
        voice: 'You see openings others miss — and exploit more of them.',
        desc: 'Sneak Attack damage increases from +1d6 to +2d6, and triggers up to twice per turn (if both conditions are met on different attacks). Make Stealth checks while moving at full speed with no penalty.',
      },
      d5: {
        name: 'The Trick', ap: 2, canon: 'pregen', spike: true,
        voice: 'You land a strike no one will see coming, and disappear before they understand what happened.',
        desc: 'Once per encounter, when attacking a target unaware of you, instead of standard Sneak Attack deal 6d6 damage and apply ALL of: Bleeding (1d6 / start of target’s turn for 3 turns), Crippled (5 ft speed for 3 turns), Dazed (disadvantage on next attack). Then move up to 30 ft as a free action and attempt to Hide as 1 AP.',
      },
    },
    {
      code: 'HNT', name: 'Hunting', group: 'skill',
      identity: 'Tracking, animal companions, ranged trapping.',
      d1: {
        name: 'Mark Prey', ap: 1, canon: 'pregen',
        voice: 'You can fix your attention on a single creature so completely that they cannot escape your awareness.',
        desc: '1 AP: designate a visible creature as Marked. While Marked, they take +1d4 damage from your attacks; advantage on Survival to track them. One Marked at a time. Ends if they leave your sight for 1 minute or after a long rest.',
      },
      d3: {
        name: 'Companion Tactics', ap: 2, canon: 'compiled',
        voice: 'You have an animal companion who hunts beside you — trained, bonded, and tactically integrated.',
        desc: 'Gain an animal companion (Wolf, Hawk, Boar, or similar; scaled to your level). It has its own initiative and turns; direct it as a free action on your turn. Share Marked status with the companion — when you mark a target, the companion also gains +1d4 against it.',
      },
      d5: {
        name: 'Pack Master', ap: 2, canon: 'pregen', spike: true,
        voice: 'You call the spectral hounds of the hunt — bound to your will, driven by your mark.',
        desc: 'Once per encounter, spend 3 AP to summon 1d4+1 spectral hounds for 5 turns. Each: HP 8, DEF 14, INIT +2, bite 1d6+WIT piercing; moves on your initiative; obeys free-action commands. When a hound hits a target, the target gains your Marked status (replacing any previous mark).',
      },
    },
    {
      code: 'WLD', name: 'Wild', group: 'skill',
      identity: 'Nature, beasts, plant magic.',
      d1: {
        name: 'Wild Proficiency', ap: 1, canon: 'compiled',
        voice: 'You have a hand in the wild — its creatures and its weapons feel like extensions of your craft.',
        desc: 'Gain proficiency in Nature and in natural weapons (staves, clubs, slings, javelins). Advantage on checks to identify plants, fungi, and natural hazards.',
      },
      d3: {
        name: 'Speak with Nature', ap: 2, canon: 'compiled',
        voice: 'The wild speaks to you — plants whisper, animals communicate, the land remembers.',
        desc: 'Conversational communication with plants and small/non-sapient animals (WIT 6 or lower). Spend 10 minutes examining a natural area to learn the previous 24 hours of activity (Nature check, DC 10-20 set by MG).',
      },
      d5: {
        name: 'The Wild Answer', ap: 2, canon: 'pregen', spike: true,
        voice: 'The wild responds when you call — beasts and beings of the natural world rally to you.',
        desc: 'Once per encounter, spend 4 AP. Summon 4d6 hit dice of natural creatures appropriate to your location (MG selects). They serve you 5 turns then depart. All enemies within 30 ft make WIT save (DC 14) or are Frightened (disadvantage vs you and your summons) for 2 turns.',
      },
    },
    {
      code: 'WAR', name: 'Warfare', group: 'skill',
      identity: 'Tactical leadership and battlefield command.',
      d1: {
        name: 'Combat Training', ap: 1, canon: 'pregen',
        voice: 'You have a base rooted in combat — formal training, military service, or hard-won battlefield experience.',
        desc: 'Gain proficiency in 2 weapon types of your choice (one melee, one ranged, or two of either). Wear medium armor without penalty.',
      },
      d3: {
        name: 'Tactical Awareness', ap: 2, canon: 'compiled',
        voice: 'You read battlefields the way scholars read books — pattern, threat, opportunity.',
        desc: 'At the start of combat, identify one enemy as the most dangerous threat. +1 to attack rolls and +1 DEF against that specific enemy for the combat. Allies within 30 ft treat their Initiative as +2 higher (stacks with WIT).',
      },
      d5: {
        name: 'Final Stand', ap: 2, canon: 'pregen', spike: true,
        voice: 'When the battle is at its worst, you rally your allies with a moment of impossible defiance.',
        desc: 'Once per encounter, when an ally within 30 ft is reduced to 0 HP, declare Final Stand: that ally is restored to 1 HP, and for 1 turn all allies within 30 ft (including you and the rallied ally) gain immunity to damage and +2 to attack rolls. Protection ends at the start of your next turn.',
      },
    },
  ];

  // Voice samples for the AI prompt — pregen openers from the Quick-Start v0.5.2.
  const VOICE_SAMPLES = [
    'A bodyguard turned wandering soldier. Prefers a problem he can hit with a longsword and a shield to lean on when one isn’t enough.',
    'An elven scholar who decided libraries were boring. Reads three things at once and sets a fourth on fire for fun.',
    'A detective by trade — tracks people for coin and monsters for free.',
    'A criminal trying to be a slightly better criminal.',
    'A medic who took oaths to a god she has questions about. Heals first, asks theology later — though she always asks.',
    'A drake who left the dragonkind territories to find what was on the other side of the mountains. Found mostly bandits. Punched through them. Still going.',
  ];

  window.FORGE_DATA = {
    ATTRIBUTES,
    STANDARD_ARRAY,
    ANCESTRIES,
    TECH_TREES,
    TREE_GROUPS,
    VOICE_SAMPLES,
    // Canonical: 2 points at L1, +1 per level. Budget = level + 1.
    POINTS_AT_LEVEL_1: 2,
    POINTS_PER_LEVEL: 1,
    MAX_LEVEL: 5,
    NODE_COST: { d1: 1, d3: 1, d5: 1 },
  };
})();
