# Universal Site Generation System

## Overview

This system is a **zero-to-launch landing page and website generation framework** that works for any industry, business type, and brand positioning.

---

## Core Innovation

The core sequence:
1. Receive completed briefing output as `brief/brief-result.md`
2. Plan site architecture and content strategy
3. Build brand identity (colors, typography, visual tone)
4. Generate a complete design system with tokens and components
5. Execute design and development with perfect consistency

**Key:** Each skill's output feeds into the next skill's input. No guessing, no reinvention of design decisions.

---

## Skill Execution Sequence

### Phase 1: Strategic Foundation

#### 1. Use completed `brief/brief-result.md`

**Input:** External briefing result

**Output:**
- `brief/brief-result.md` - business goals, target audience, positioning, competitive landscape, offer, tone, and available assets

**Questions answered:**
- What does this business do?
- Who is the target audience?
- What makes it different?
- What should the website achieve?
- What is the primary conversion goal?

---

#### 2. Run `site-architecture` skill

**Input:** `brief/brief-result.md`

**Output:**
- `SITE_STRUCTURE.md` - complete site map and content strategy

**What gets planned:**
- Which pages the site needs (Home, Services, About, Contact, etc.)
- What content goes on each page (hero, features, proof, CTA, etc.)
- Page-by-page content strategy (headlines, sections, CTAs)
- Internal linking strategy
- Mobile responsive structure
- SEO keyword distribution

---

#### 3. Run `brand-identity-creation` skill

**Input:** `brief/brief-result.md` + `SITE_STRUCTURE.md`

**Output:**
- `BRAND_IDENTITY.md` - visual identity documentation
- `_vars.scss` - 50+ design tokens ready to use

**What gets created:**
- Primary brand color (with psychology justification)
- Secondary accent color
- 5-7 neutral gray shades
- Status colors (success, error, warning, info)
- Typography system (2-3 fonts, complete type scale)
- Spacing scale (8px base, 9 increments)
- Border radius system
- Shadow system
- All breakpoints

**Never guesses:**
- Colors are strategic, not decorative
- Typography reflects industry + positioning
- All tokens are proportionally scaled
- All decisions documented with rationale

---

#### 4. Run `design-system-builder` skill

**Input:** `BRAND_IDENTITY.md` + `SITE_STRUCTURE.md` + `brief/brief-result.md`

**Output:**
- Complete `src/scss/components/` structure with all components
- `AGENTS_PROJECT.md` - project-specific design rules
- `uikit.html` - component showcase

**What gets built:**
- `_buttons.scss` - all button variants (primary, secondary, large, small, etc.)
- `_cards.scss` - all card types (standard, surface, accent, special)
- `_sections.scss` - layout patterns (hero, two-column, grid, etc.)
- `_typography.scss` - all heading and text styles
- `_forms.scss` - input, textarea, select, validation styles
- `_navigation.scss` - header, nav, mobile menu
- `_footer.scss` - footer layout
- Plus any type-specific components (pricing tables, product cards, etc.)

**All components:**
- Use only `BRAND_IDENTITY` tokens
- Follow BEM naming
- Are responsive by default
- Have accessible states (focus, disabled, hover)

---

### Phase 2: Design & Development

#### 5. For each page, use existing skills

**For page creation:**
- ✅ `page-design-execution` (formerly design-identity) — uses `BRAND_IDENTITY.md` + `AGENTS_PROJECT.md`
- ✅ `design-consistency` — ensures page looks like part of same system
- ✅ `section-visual-balance` — for multi-column sections
- ✅ `seo-optimization` — SEO strategy from `brief/brief-result.md` and `SITE_STRUCTURE.md`
- ✅ `image-prompt-generator` — images aligned with `BRAND_IDENTITY`

**For technical setup:**
- ✅ `translation-system` — if multilingual
- ✅ `scroll-reveal-animations` — if animations needed
- ✅ `navigation-adaptivity` — header/mobile menu
- ✅ `form-email-submission` — form handling

---

## Output Documents

### Strategic Foundation (Created before internal skill execution)

#### 1. `brief/brief-result.md`
```
Business Overview
Target Audience
Website Objectives
Competitive Context
Visual & Tone Direction
Key Pages (Draft)
Success Criteria
```

#### 2. `BRAND_IDENTITY.md`
```
Brand Positioning
Color System (primary, secondary, neutrals, status)
Typography (fonts, sizes, weights, line heights)
Spacing Scale
Border Radius System
Shadows
Visual Tone & Usage Rules
Component Defaults
```

#### 3. `_vars.scss`
```scss
--color-primary: #...
--color-secondary: #...
--color-neutral-*: #...
--font-heading: ...
--font-body: ...
--font-size-*: ...
--space-*: ...
--radius-*: ...
--shadow-*: ...
--bp-*: ...
```

#### 4. `AGENTS_PROJECT.md`
```
Design Tokens (from BRAND_IDENTITY)
Component Rules
Layout Patterns
Spacing Discipline
Color Usage
Typography Rules
Responsive Behavior
Accessibility Standards
Non-Negotiables
```

#### 5. `SITE_STRUCTURE.md`
```
Overall Site Structure (sitemap)
Page-by-Page Content Strategy
Content Hierarchy Rules
Navigation & Linking Strategy
Mobile Responsiveness
SEO Keyword Strategy
Success Criteria
```

---

## System Architecture

### File & Folder Organization

```
project-name/
├── brief/
│   └── brief-result.md       ← From external briefing
├── BRAND_IDENTITY.md         ← From brand-identity-creation
├── AGENTS_PROJECT.md         ← From design-system-builder
├── SITE_STRUCTURE.md         ← From site-architecture
├── src/
│   ├── scss/
│   │   ├── _vars.scss        ← Generated from brand-identity-creation
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   ├── _fonts.scss
│   │   │   ├── _mixins.scss
│   │   │   └── index.scss
│   │   ├── components/       ← Generated from design-system-builder
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _sections.scss
│   │   │   ├── _typography.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _navigation.scss
│   │   │   ├── _footer.scss
│   │   │   └── index.scss
│   │   └── styles.scss
│   ├── css/
│   │   └── styles.css        (compiled)
│   └── graphics/
│       ├── svg/
│       ├── png/
│       └── webmanifest
├── pages/
│   ├── index.html            ← Built per SITE_STRUCTURE.md
│   ├── about/
│   ├── services/
│   ├── contact/
│   └── blog/
├── scripts/
│   ├── script.js
│   ├── translation.js        (if multilingual)
│   └── scroll-reveal.js      (if animations)
├── partials/
│   ├── header.html
│   └── footer.html
└── .agents/
    ├── AGENTS.md             ← Universal rules (same for all projects)
    ├── AGENTS_PROJECT.md     ← This project's rules (linked)
    └── skills/
        ├── site-architecture/
        ├── brand-identity-creation/
        ├── design-system-builder/
        └── ... (all other skills)
```

---

## Workflow: From Zero to Launched

### Day 1-2: Architecture & Strategy
```
1. external briefing → brief/brief-result.md
   │
2. site-architecture → SITE_STRUCTURE.md
   │
3. brand-identity-creation → BRAND_IDENTITY.md + _vars.scss
   │
4. design-system-builder → AGENTS_PROJECT.md + components/ + uikit.html
```

### Day 3-7: Page Development
For each page:
```
1. page-design-execution (use BRAND_IDENTITY.md + AGENTS_PROJECT.md)
   │
2. design-consistency (verify it looks like the system)
   │
3. section-visual-balance (if multi-column)
   │
4. seo-optimization (use brief/brief-result.md and SITE_STRUCTURE.md keywords)
   │
5. image-prompt-generator (if needed)
```

### Day 8: Polish & Launch
```
1. navigation-adaptivity (mobile menu)
2. scroll-reveal-animations (optional)
3. performance (optimize assets)
4. Final audit
```

---

## Key Advantages

✅ external briefing keeps business discovery outside the build workflow
✅ brand-identity-creation builds brand from first principles
✅ design-system-builder generates components tailored to brand + type
✅ site-architecture plans the entire information structure
✅ AGENTS.md + AGENTS_PROJECT.md separates universal rules from project specifics
✅ All 4 skills output documents that feed into next skills
✅ page-design-execution uses generated tokens, not industry-specific references
✅ Works for SaaS, e-commerce, agencies, corporate, startups, creators, etc.

---

## Implementation Roadmap

### Phase 1: Skills Created ✅
- brand-identity-creation
- design-system-builder
- site-architecture

### Phase 2: Update Existing Skills
- Keep `design-identity` as a universal compatibility layer
- Prefer `page-design-execution` for page implementation
- Update skills to reference `BRAND_IDENTITY.md`, `AGENTS_PROJECT.md`, and `SITE_STRUCTURE.md`
- Update `design-consistency` to reference `AGENTS_PROJECT.md`
- Update `seo-optimization` to use `brief/brief-result.md` and `SITE_STRUCTURE.md` keywords

### Phase 3: Create Supporting Docs
- Keep `AGENTS.md` as the universal rule source
- Create templates for all output documents
- Create example projects (B2B SaaS, e-commerce, agency)

### Phase 4: Validation & Iteration
- Test complete workflow on 2–3 different website types
- Refine skill instructions based on real-world results
- Build reusable templates for common page types

---

## How to Use This System

### For a Specific Website Project

1. **Create new project folder** with workspace
2. **Provide completed briefing output** → `brief/brief-result.md`
3. **Run site-architecture** → plan pages → create `SITE_STRUCTURE.md`
4. **Run brand-identity-creation** → analyze brief and structure → create `BRAND_IDENTITY.md` + `_vars.scss`
5. **Run design-system-builder** → build components → create `AGENTS_PROJECT.md` + `uikit.html`
6. **For each page:** use `page-generator`, then `page-design-execution` + other supporting skills
7. **Polish & launch**

### For a Client Proposal

1. Use the completed external brief as `brief/brief-result.md`
2. Run site-architecture (show `SITE_STRUCTURE.md`)
3. Run brand-identity-creation (show `BRAND_IDENTITY.md`)
4. Show client design system (`uikit.html`)
5. Propose timeline and budget based on page count and complexity

### For Documentation & Training

- Share `AGENTS.md` with team (universal principles)
- Each project includes its own `AGENTS_PROJECT.md` (specific rules)
- All strategic documents (`brief/brief-result.md`, `SITE_STRUCTURE.md`, `BRAND_IDENTITY.md`, etc.) are team-readable
- `uikit.html` is developer reference for all components

---

## Non-Negotiables for This System

1. **Every skill output is a prerequisite** for the next skill
   - Don't skip `brief/brief-result.md`
   - Don't run `brand-identity-creation` before `site-architecture`
   - Don't run design-system-builder before brand-identity-creation
   - All page design must follow AGENTS_PROJECT.md

2. **All design tokens come from BRAND_IDENTITY.md**
   - No arbitrary colors, spacing, or sizing
   - Every token has a documented purpose

3. **All pages follow SITE_STRUCTURE.md**
   - No page exists without a strategic purpose
   - Page content strategy is predetermined

4. **Consistency is non-negotiable**
   - All pages use same component classes
   - All pages use same spacing tokens
   - All pages follow same hierarchy rules

5. **Documentation drives decisions**
   - Every project has all 5 strategic documents
   - Documents are source of truth, not design files
   - Team refers to documents, not memory or assumptions
