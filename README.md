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

Mirrors the Quick-Start v0.5.2 canonical rules. Each tier costs **1 Tech Point**, and your point budget scales with character level:

| Level | Tech Points | What's reachable                                              |
|-------|-------------|---------------------------------------------------------------|
| 1     | 2           | D1+D3 in one tree (depth 2), OR D1 in two different trees     |
| 2     | 3           | Full single-tree path D1+D3+D5 (Mastery spike unlocked)       |
| 3     | 4           | Full tree + one splash D1                                     |
| 4     | 5           | Full tree + two splash D1s                                    |
| 5     | 6           | Full tree + three splash D1s                                  |

A Level dial in the character sheet section adjusts the budget. Depth 3 requires Depth 1 in the same tree; Depth 5 requires Depth 3. See `forge/forge-data.js` header comment for the data shape.

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
