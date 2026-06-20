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

Each character starts with **5 AP** to spend across trees:
- Tier I (Foundation, depth 1): 1 AP
- Tier III (Specialty, depth 3): 2 AP (requires Tier I in the same tree)
- Tier V (Mastery, depth 5): 2 AP (requires Tier III in the same tree)

Full single-tree specialist = all 5 AP in one tree.
Five-tree generalist = 1 AP each across five trees (foundations only).

This is a forge UX simplification of the actual character-creation rules in the Quick-Start, which use tech-tree feature points + level-up progression. See `forge/forge-data.js` header comment for design notes.
