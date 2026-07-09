---
name: design-identity
description: Use this skill when creating, adapting, or validating the visual identity of a landing page or website for any industry. It applies BRAND_IDENTITY.md and AGENTS_PROJECT.md to page-level design choices and is kept as a compatibility alias for older workflows; for full page implementation, prefer page-design-execution.
---

# Design Identity Skill

This skill is universal. It does not assume any fixed industry, competitor reference, visual benchmark, or previous project style.

Use it to keep page design aligned with the current project's identity:

- `brief/brief-result.md` defines the business, audience, offer, market, conversion goal, and available assets.
- `BRAND_IDENTITY.md` defines colors, typography, spacing, tone, and visual behavior.
- `AGENTS_PROJECT.md` defines project-specific component and layout rules.
- `SITE_STRUCTURE.md` defines the page sections and content strategy.

If these documents do not exist yet, create them in this order: `site-architecture`, `brand-identity-creation`, and `design-system-builder`. The required upstream input is `brief/brief-result.md`.

## Core Rule

Do not import a visual style from a previous project. Every landing page must be generated from the current request and the current project documents.

The design should feel:

- specific to the business and audience
- conversion-focused without pressure tactics
- consistent across sections
- visually credible for the market category
- clear before it is decorative

## When To Use

Use this skill when the task involves:

- creating a new landing page visual direction
- adapting an existing page to a generated brand identity
- checking whether a section matches `BRAND_IDENTITY.md`
- improving hero, proof, services, benefits, CTA, form, or FAQ sections
- removing generic template styling
- making a page feel more credible, intentional, and market-appropriate

For actual page coding and section construction, use `page-design-execution` after this skill.

## Workflow

### 1. Read the project basis

Read, in this order:

1. `brief/brief-result.md`
2. `BRAND_IDENTITY.md`
3. `AGENTS_PROJECT.md`
4. `SITE_STRUCTURE.md`
5. Existing page/component files, if the project is already built

If a file is missing, infer only what is necessary from the user's request and document the assumption in the relevant output file.

### 2. Define the design intent

Before editing UI, identify:

- business type and market category
- target audience and their sophistication level
- primary conversion action
- trust signals available
- desired tone: premium, practical, playful, technical, editorial, local, luxury, etc.
- visual assets available or needed

### 3. Apply identity to sections

Use the project identity instead of fixed references:

- Hero: communicate the offer, audience, proof, and CTA immediately.
- Trust/proof: use real logos, metrics, reviews, certifications, media, integrations, or visible product evidence.
- Services/features: name concrete deliverables or benefits, not generic abstractions.
- Process/how-it-works: reduce uncertainty and show what happens after conversion.
- Benefits/outcomes: connect features to practical customer value.
- CTA/form: keep the next action simple and visually dominant.
- FAQ: address objections that block conversion.

### 4. Keep the visual system coherent

Always follow:

- colors from `BRAND_IDENTITY.md`
- typography from the project type scale
- spacing tokens from `_vars.scss`
- existing component classes before new classes
- parent grid/flex layouts with `gap`
- project-specific imagery direction

Do not use one-off colors, arbitrary spacing, hardcoded heights, visual offsets, or decorative effects that do not fit the brand.

## Copy Guidance

Write in the tone defined by `BRAND_IDENTITY.md` and `brief/brief-result.md`.

Good copy is:

- specific
- easy to scan
- commercially useful
- matched to audience awareness
- focused on outcomes and objections

Avoid:

- buzzwords
- vague innovation claims
- fake urgency
- fake proof
- language copied from another project or industry

## Related Skills

Use with:

- `page-design-execution` for implementation.
- `design-consistency` for cross-section coherence.
- `section-visual-balance` for multi-column and card layouts.
- `seo-optimization` for metadata, headings, schema, and intent.
- `translation-system` for multilingual UI.
- `image-prompt-generator` for visuals that match the brand.
- `navigation-adaptivity` for header/menu visuals that must match the identity.
- `form-email-submission` for form UI states that need identity-aligned styling.
- `performance` for identity-preserving optimizations to images, fonts, and motion.

## Final Check

Before finishing, verify:

- The design reflects the current business, not a previous template.
- The hero explains what is offered, for whom, and why to trust it.
- Proof appears early enough for the conversion path.
- CTA language matches the project goal.
- Colors, spacing, typography, radius, shadows, and components match project tokens.
- Images and icons match the project art direction.
- No section relies on arbitrary margins, offsets, or hardcoded heights.
- Mobile layout preserves hierarchy and conversion clarity.

A result is successful only if it feels intentionally designed for the current landing-page request.
