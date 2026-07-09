---
name: page-design-execution
description: Use this skill when creating or refining website pages that must follow the project's design system. Apply it to landing pages, service pages, homepage sections, trust blocks, proof sections, CTA areas, forms, and mobile UI refinements. Works with BRAND_IDENTITY.md and AGENTS_PROJECT.md to ensure consistency across all pages.
---

# Page Design Execution Skill

This skill converts a landing-page brief and strategic direction into actual page design by applying:
- `BRAND_IDENTITY.md` — visual identity tokens and rules
- `AGENTS_PROJECT.md` — project-specific design rules
- Component library — reusable SCSS components
- Business strategy — from `brief/brief-result.md` and `SITE_STRUCTURE.md`

## Core Principle

**Design is not decoration. Design communicates the business.**

Every design decision must serve:
1. The primary conversion goal
2. The business positioning
3. The visual brand identity
4. The page's specific purpose

Do not start from how things look. Start from what needs to be communicated.

---

## Before You Start

Read these documents in order:
1. `brief/brief-result.md` — understand the business, audience, offer, market, tone, conversion goal, and available assets
2. `SITE_STRUCTURE.md` — understand what content blocks this page needs
3. `BRAND_IDENTITY.md` — understand the visual language (colors, typography, tone)
4. `AGENTS_PROJECT.md` — understand the design rules and component system

If the user starts from a raw landing-page request and these documents do not exist yet, first look for `brief/brief-result.md`. The briefing step is upstream and must be completed before page design begins.

- `site-architecture`
- `brand-identity-creation`
- `design-system-builder`

For a small one-page landing, keep the scope focused, but still base the workflow on the completed brief. If the brief is missing, ask for it or run the external brief generator when requested.

**Do not reuse assumptions from another project.**

## Related skills

Use this skill together with:

- `design-consistency` for every new or edited section that must match the surrounding page rhythm.
- `section-visual-balance` for two-column sections, card grids, asymmetric compositions, and rendered alignment checks.
- `seo-optimization` for metadata, headings, semantic structure, images, schema, indexation, and share previews.
- `translation-system` when visible copy, form states, navigation, or aria labels are multilingual.
- `image-prompt-generator` when the page needs hero, section, logo, or OG image prompts.
- `scroll-reveal-animations` when multi-element sections benefit from subtle reveal motion.
- `navigation-adaptivity` when header navigation or burger menu behavior is created or changed.
- `form-email-submission` when CTA/contact forms need validation or email delivery.
- `backer-implementation` when the final page is long enough to need a fixed back-to-top control.
- `performance` when page design changes images, fonts, animation, scripts, or heavy CSS.
- `maintenance-system` only when the page being designed is a maintenance fallback or related preview gate.

---

## Workflow

### Phase 1: Define Page Purpose

Every page must answer:
- **What is the primary business goal?** (convert, educate, prove credibility, etc.)
- **Who is the audience?** (from `brief/brief-result.md` and `SITE_STRUCTURE.md`)
- **What action should they take?** (primary CTA)
- **What proof supports this action?** (testimonials, metrics, logos, etc.)
- **What objections might they have?** (why might they not convert?)

**Write these down before opening design tools.**

### Phase 2: Choose Content Structure

Use `SITE_STRUCTURE.md` as the blueprint. For each page type, the structure is predefined:

#### Landing Page Structure
1. Hero (headline + subheadline + CTA)
2. Trust / Proof (logos, metrics, or brief testimonial)
3. Main Value Proposition (2–3 sections)
4. Features / Services (card grid or list)
5. Social Proof (testimonials, case results, or metrics)
6. Use Cases or Application (specific industry/use cases)
7. Final CTA (conversion opportunity)
8. FAQ (address objections)

#### Service Detail Page Structure
1. Hero (service name + key benefit + CTA)
2. Problem Statement (why this service matters)
3. How It Works (3–5 step process)
4. Key Features (card-based feature list)
5. Use Cases (industry applications)
6. Results / Proof (metrics or testimonials)
7. Pricing or CTA (clear next step)
8. FAQ (common questions)

#### Portfolio / Case Study Page Structure
1. Hero (project/case name + key metric)
2. Client Background (who they are, challenge they faced)
3. The Challenge (deep dive into problem)
4. Our Approach (solution and process)
5. Results (measurable outcomes)
6. Key Lessons (what this teaches)
7. CTA (related projects or contact)

**Follow the structure from `SITE_STRUCTURE.md`. Do not invent new sections.**

### Phase 3: Apply Visual Hierarchy

Use `BRAND_IDENTITY.md` type scale. Every page should have clear hierarchy:

```
Hero Headline        → H1 (largest, most attention)
  ↓
Section Headline     → H2
  ↓
Subsection           → H3
  ↓
Card/Item Title      → H4
  ↓
Body Text            → 16px
  ↓
Secondary Text       → 14px (captions, metadata)
  ↓
Fine Print           → 12px
```

**No arbitrary sizing. Every headline must use the type scale from `BRAND_IDENTITY.md`.**

### Phase 4: Apply Color Strategy

From `BRAND_IDENTITY.md`:
- **Primary color:** 40–50% of all color usage → headlines, primary buttons, key links
- **Secondary/Accent color:** 5–10% of usage → CTAs, success states, emphasis
- **Neutrals:** 40–50% of usage → text, backgrounds, borders

**Rule: Do not add new colors. Use only the defined palette.**

### Phase 5: Build With Components

Every section should be built from existing components in `AGENTS_PROJECT.md`:

- **Hero** → use `.section--hero` + `.button--primary` for CTA
- **Cards** → use `.card` or `.card--feature` 
- **Buttons** → use `.button--primary`, `.button--secondary`, `.button--cta`
- **Forms** → use `.form-group`, `.form-input`, `.form-label`
- **Grid layouts** → use `.section__grid` or `.section__two-column`
- **Typography** → use `.h1`, `.h2`, `.h3`, `.h4` or `<h1>`, `<h2>` tags

**Do not create custom CSS for individual elements. Use component classes only.**

### Phase 6: Apply Spacing Discipline

All spacing must come from `BRAND_IDENTITY.md` spacing tokens:
- `--space-1` (4px)
- `--space-2` (8px)
- `--space-3` (12px)
- `--space-4` (16px)
- `--space-5` (24px)
- `--space-6` (32px)
- `--space-7` (48px)
- `--space-8` (64px)
- `--space-9` (96px)

**Rules:**
- Section padding: `--section-padding-desktop` (usually `--space-8`)
- Card padding: `--space-5` (24px)
- Grid gaps: `--space-5` or `--space-6`
- Margins between elements: use `gap` property (not individual `margin-top`)

**NEVER use arbitrary spacing like `margin-top: 47px` or `padding: 33px`.**

### Phase 7: Ensure Responsive Design

Test at 3 breakpoints:
- Desktop (1200px+) — full width, multiple columns
- Tablet (768–1199px) — simplified grids, reduced columns
- Mobile (480–767px) — single column, reduced padding

**Rules:**
- Don't break content readability for "visual balance"
- Cards should be one column on mobile
- Headings may reduce (48px → 36px on mobile)
- Padding reduces but stays proportional (`--section-padding-mobile`)
- All gaps remain from token scale

### Phase 8: Validate Against Brand Tone

Before finishing, check:

✓ **Visual hierarchy is clear** — Headline > Subheading > Body is obvious
✓ **Color follows strategy** — Primary ~45%, secondary ~8%, neutrals ~47%
✓ **Spacing is consistent** — All gaps/padding from tokens only
✓ **Typography is readable** — Body text min 16px, good contrast
✓ **Components are reused** — No custom one-off styles
✓ **Responsive works** — No orphaned elements or broken layouts on mobile
✓ **Tone matches brand** — Professional/playful/bold/minimal per `BRAND_IDENTITY.md`
✓ **Conversion path is clear** — One obvious CTA per section
✓ **Accessibility is built-in** — Focus states visible, colors have contrast, alt text on images

---

## Common Section Patterns

### Hero Section
```html
<section class="section section--hero">
  <div class="container">
    <div class="hero__content">
      <h1>Main Value Proposition</h1>
      <p>Supporting statement about who this is for and why they need it</p>
      <button class="button button--primary">Primary CTA</button>
    </div>
    <div class="hero__visual">
      <!-- Image or graphic -->
    </div>
  </div>
</section>
```

**Design Rules:**
- H1 uses primary color and largest type size
- Subheadline uses neutral-700 color
- CTA button uses primary color
- Visual (right side) should reinforce the value prop
- On mobile: stack vertically, reduce heading size

### Feature/Service Card Grid
```html
<section class="section">
  <div class="container">
    <h2>Key Features</h2>
    <div class="section__grid">
      <article class="card card--feature">
        <div class="card__icon"><!-- Icon --></div>
        <h3 class="card__title">Feature Name</h3>
        <p class="card__text">Brief description</p>
      </article>
      <!-- More cards -->
    </div>
  </div>
</section>
```

**Design Rules:**
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Gap: `--space-5` (24px)
- Card padding: `--space-5`
- Icon: use secondary color or neutral-600
- Title: `--font-size-h4` (usually 20px)
- Text: body color (neutral-700)

### Two-Column Layout (Text + Visual)
```html
<section class="section">
  <div class="container">
    <div class="section__two-column">
      <div class="section__content">
        <h2>Headline</h2>
        <p>Body copy explaining benefit</p>
        <button class="button button--secondary">CTA</button>
      </div>
      <div class="section__visual">
        <!-- Image, video, or graphic -->
      </div>
    </div>
  </div>
</section>
```

**Design Rules:**
- Left column: 40% (max 500px content width)
- Right column: 60% (image or graphic)
- Vertically centered or top-aligned
- On mobile: stack to single column
- Content max-width: constrain text for readability

### Proof / Testimonials Section
```html
<section class="section section--alt">
  <div class="container">
    <h2>What Customers Say</h2>
    <div class="section__grid">
      <article class="card">
        <p class="card__text">"Direct customer quote about specific benefit..."</p>
        <p class="card__label">Customer Name, Title, Company</p>
      </article>
      <!-- More testimonials -->
    </div>
  </div>
</section>
```

**Design Rules:**
- Background: use `--color-bg-secondary` (light gray)
- Quote marks optional (can add via CSS)
- Name/role: small, muted color
- 2–3 testimonials max per section (avoid walls of testimonials)

### CTA Section
```html
<section class="section section--cta">
  <div class="container">
    <div class="cta__content">
      <h2>Ready to [Action]?</h2>
      <p>Supporting statement about why they should act now</p>
      <button class="button button--primary button--large">Primary CTA</button>
      <p class="cta__secondary"><a href="#">Alternative contact option</a></p>
    </div>
  </div>
</section>
```

**Design Rules:**
- Centered alignment
- Background: white or light background
- Generous padding (`--section-padding`)
- CTA button: primary color, large size
- Secondary link: smaller text, muted color
- No urgent/pushy language

### Form Section
```html
<section class="section">
  <div class="container">
    <h2>Get Started</h2>
    <form class="form-group form-group--centered">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-input" placeholder="Your name">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-input" placeholder="your@email.com">
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea class="form-textarea" placeholder="Tell us about your project"></textarea>
      </div>
      <div class="form-actions">
        <button type="submit" class="button button--primary">Submit</button>
      </div>
    </form>
  </div>
</section>
```

**Design Rules:**
- Form max-width: 500px
- Center on page
- Labels bold, above input
- Input borders: 2px solid, light gray
- Focus state: primary color border
- Submit button: primary color
- One form per page (don't repeat)

## When This Skill Works Best

✓ Creating pages that follow `SITE_STRUCTURE.md` strategy
✓ Applying `BRAND_IDENTITY.md` consistently across pages
✓ Building from generated components in `AGENTS_PROJECT.md`
✓ Converting strategic direction into actual page design
✓ Ensuring visual consistency across entire site

❌ Not for: Creating brand identity from scratch (use `brand-identity-creation`)
❌ Not for: Planning site structure (use `site-architecture`)
❌ Not for: Fixing broken layouts (use `section-visual-balance` for that)

---

## Decision Framework

If uncertain about any design decision:

1. **Check `BRAND_IDENTITY.md`** — What is the visual identity guidance?
2. **Check `AGENTS_PROJECT.md`** — What are the design rules for this?
3. **Check `SITE_STRUCTURE.md`** — What is the content strategy for this page?
4. **Check existing pages** — How was similar content handled before?

**Decision priority:**
1. Strategic requirement (from documents)
2. Visual consistency (match other pages)
3. Brand guidance (from `BRAND_IDENTITY.md`)
4. Component library (use existing classes)
5. Accessibility (ensure contrast, readability, navigation)

**Do not invent new solutions when documents already provide guidance.**

---

## Final Validation Checklist

Before marking page as complete:

- [ ] Page structure matches `SITE_STRUCTURE.md`
- [ ] All colors from `BRAND_IDENTITY.md` palette only
- [ ] All typography from type scale only
- [ ] All spacing from token scale only
- [ ] All components from component library (no custom CSS)
- [ ] Visual hierarchy is clear (H1 → H2 → H3 → body)
- [ ] Primary CTA is obvious
- [ ] Responsive layout tested at 480px, 768px, 1200px
- [ ] No hardcoded heights or arbitrary margins
- [ ] Color contrast passes WCAG AA (4.5:1 for text)
- [ ] All images have alt text
- [ ] Forms labeled and accessible
- [ ] Page feels aligned with brand tone
- [ ] Heading hierarchy is semantic (H1 only once, H2 then H3, no skipping levels)
- [ ] Page loads as a cohesive unit, not separate blocks

---

## Non-Negotiables

✓ All design decisions documented in `BRAND_IDENTITY.md`, `AGENTS_PROJECT.md`, or `SITE_STRUCTURE.md`
✓ No arbitrary colors, spacing, or sizing
✓ No custom CSS outside component system
✓ No layout hacks (negative margins, absolute positioning, empty spacers)
✓ Every page follows the same component language
✓ Consistency is non-negotiable
✓ If in doubt, defer to documents

---

## Success

A page is successful when:
- It clearly communicates the business purpose
- It looks consistent with other pages on the site
- It follows the brand visual identity
- It converts (users take the intended action)
- It's accessible and readable
- It requires minimal explanation (users understand what to do)
