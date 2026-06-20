# MythReal Landing Page

Marketing site for MythReal — a classless tabletop RPG with 20 Tech Trees, an Action Point combat system, and a multiverse setting.

Live at: [mythreal.co](https://mythreal.co)

## Stack

- Single-file vanilla HTML/CSS/JS (no frameworks, no build step)
- Hosted on Netlify
- Email signups via Netlify Forms
- Character forge AI synthesis via a Netlify Function

## Routes

- `/` — main landing page (`index.html`)
- `/forge/` — Build Your Legend character forge (`forge/index.html`)
- `/auto-battler/` — Raw Essence auto-battler demo (`auto-battler/index.html`)
- `/.netlify/functions/synthesize` — AI character synthesis endpoint

## Local development

For static-only changes, just open `index.html` in a browser or serve the directory:

```
npx serve .
```

To run the forge locally with the synthesis function, use Netlify Dev (loads `.env` for API keys):

```
npx netlify-cli dev
```

## Required environment variables

The forge synthesis function calls two AI providers. Copy `.env.example` to `.env` for local dev, and set the same vars in **Netlify > Site settings > Environment variables** for production.

| Variable                | Required | Default                | Purpose                          |
|-------------------------|----------|------------------------|----------------------------------|
| `ANTHROPIC_API_KEY`     | yes      | —                      | Character text (Claude)          |
| `OPENAI_API_KEY`        | yes      | —                      | Portrait image (OpenAI Images)   |
| `ANTHROPIC_MODEL`       | no       | `claude-sonnet-4-6`    | Text model override              |
| `OPENAI_IMAGE_MODEL`    | no       | `gpt-image-1`          | Image model override             |
| `FORGE_RATE_LIMIT`      | no       | `20`                   | Max forges per IP per hour       |

Never commit `.env` — it is gitignored.

## Deploy

```
npx netlify-cli deploy --prod --dir=.
```

Or wire up Netlify > Continuous Deployment to auto-deploy from `master`.

## Adding more Tech Trees to the forge

Tree content lives entirely in `forge/forge-data.js`. To flesh out one of the 15 stub trees:

1. Find its stub entry, e.g. `{ code: 'WTR', name: 'Water', group: 'elemental', identity: '...', stub: true }`.
2. Replace it with the full schema used by `MRA`/`FIR`/`WAR`/`SMN`/`BLD`:

```js
{
  code: 'WTR',
  name: 'Water',
  group: 'elemental',
  identity: 'Control and protection. Tidewalls, frost, zone domination.',
  d1: { name: '...', ap: 1, canon: 'pregen' | 'derived', desc: '...', voice: '...' },
  d3: { name: '...', ap: 2, canon: 'pregen' | 'derived', desc: '...', voice: '...' },
  d5: { name: '...', ap: 2, canon: 'pregen' | 'derived', spike: true, desc: '...', voice: '...' },
},
```

3. Tag each feature `canon: 'pregen'` if pulled verbatim from the Quick-Start v0.5.2, or `canon: 'derived'` if extrapolated from tree identity + Appendix C spike. No code changes needed — the forge graph and character sheet pick it up automatically.

The `voice` field on each feature shows in the tooltip as an italic flavor line — keep it terse and in MythReal's register (concrete, dry, anti-grandeur).

## Forge build economy

Each tree has **5 tiers** (L1–L5), each costing **1 Tech Point**. L1/L3/L5 are named feature unlocks (Foundation, Specialty, Mastery); L2/L4 are intermediate ability-tier nodes that bridge between the features and unlock the L2/L4 talent picks. Every tier requires the previous tier in the same tree. Fully spec'd single tree = 5 pts.

Your point budget scales with character level:

| Level | Tech Points | What's reachable                                              |
|-------|-------------|---------------------------------------------------------------|
| 1     | 2           | D1+D2 in one tree, OR D1 in two different trees               |
| 2     | 3           | D1+D2+D3 in one tree (Specialty), OR splits                   |
| 3     | 4           | D1+D2+D3+D4 in one tree, OR 1 full + splash                   |
| 4     | 5           | Full single-tree D1–D5 path (Mastery spike unlocked)          |
| 5     | 6           | Full tree + one splash D1                                     |

A Level dial in the character sheet section adjusts the budget. Refunding a tier cascades down — clicking an already-invested tier refunds it and everything deeper in the same tree.

In addition to feature points, characters get **one talent pick per level** (separate currency). The forge renders N talent slots equal to character level. Picker shows talents grouped by tree, only from trees the player has invested in, capped by investment depth (D1 → L1 talents only; D2 → L1–L2; D3 → L1–L3; D4 → L1–L4; D5 → all five tiers). 142 tech-tree talents are extracted from `Talents_and_Features_v9.xlsx` → `forge/forge-talents.js`. Leveling down or refunding tree investments auto-trims excess picks.

## Auto-battler (Raw Essence)

`auto-battler/index.html` is the integrated **Raw Essence** prototype: open packs of dice-characters, draft a party of three, run auto-battles. It's a single-file self-contained app, originally developed in `D:\Projects\mythreal-auto-battler`.

The integration keeps the game's full HTML/CSS/JS untouched and bolts a brand layer on top:
- Override CSS variables remap its cyberpunk palette to the site's gold-on-near-black tokens
- Cinzel for the H1 wordmark and section headings, Raleway for body, monospace preserved for stat grids and the battle log
- The site nav header is injected before the game's `<div id="app">`, and a site footer is appended before `</body>`

To pull in a newer version from the source project:
1. Replace `auto-battler/index.html` with the new file
2. Re-apply the head/body injections (see existing file as a template)
3. The brand override `<style>` block at the bottom of the in-file stylesheet should be preserved verbatim — it works against the variable names the game already uses
