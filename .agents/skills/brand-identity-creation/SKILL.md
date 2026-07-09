---
name: brand-identity-creation
description: Use this skill when establishing or refining a website's visual identity from scratch. This skill analyzes the business strategy, industry context, competitive landscape, and available brand assets to create a cohesive brand identity (colors, typography, visual tone, spacing scale). It generates BRAND_IDENTITY.md, produces a project-specific _vars.scss file with design tokens, and creates a GPT Image 2 logo prompt when the client has no logo.
---

# Brand Identity Creation Skill

## Goal

Transform business strategy and positioning into a cohesive, defensible visual language that:
- Reflects the business positioning and competitive advantage
- Works within industry conventions (but stands out)
- Supports the primary conversion goal
- Is consistent and scalable across all website pages
- Is documented for reuse and future team members

**Outputs:**
1. `BRAND_IDENTITY.md` — complete visual brand documentation
2. `_vars.scss` — generated design tokens (colors, typography, spacing, radius, shadows)
3. GPT Image 2 logo generation prompt when the client has no logo or logo file
4. Design rationale notes for each decision

## Related skills

Use this skill with:

- `site-architecture` before brand work, so visual decisions support the planned pages, audience, and conversion flow.
- `design-system-builder` immediately after brand work, so tokens become reusable components and `AGENTS_PROJECT.md` rules.
- `image-prompt-generator` when the project needs logo, hero, section, or OG image prompts that match the identity.
- `page-design-execution` or `design-identity` when applying the identity to real sections and page layouts.
- `seo-optimization` when brand language, page titles, OG imagery, or content tone affects discoverability and share previews.

---

## Core Process

### Phase 1: Analyze Business & Industry Context

Before designing anything, extract from `brief/brief-result.md` and `SITE_STRUCTURE.md`:

- **Business positioning:** Premium / accessible / specialist / innovative / trustworthy?
- **Industry category:** SaaS, logistics, e-commerce, professional services, creative, fintech, etc.
- **Target audience:** Corporate decision-makers, consumers, technical users, creatives?
- **Competitive landscape:** How do competitors present themselves visually?
- **Primary goal:** Lead generation (trust), direct sales (urgency), portfolio (creativity), etc.
- **Existing brand constraints:** Colors, fonts, logo style (if any)?
- **Logo availability:** Check whether the brief provides an existing logo, logo file path, brand mark, or explicit logo style. If no logo is available, mark `Logo status: missing` and create a logo generation prompt in Phase 6.

---

### Phase 2: Define Color Strategy

**Rule: Colors must be strategic, not decorative.**

#### Step 1: Choose Primary Color (Brand Color)
- **Industry psychology matters:**
  - Tech/SaaS: Blue (trust, reliability), Purple (innovation), Green (growth)
  - Finance/Professional: Navy, Deep blue, Black (authority, trust)
  - E-commerce/Retail: Bold reds, oranges (urgency, energy)
  - Logistics/Operations: Blues, grays (stability, efficiency)
  - Creative/Design: Saturated colors reflecting creativity
  - Health/Medical: Blue, green (care, safety)
  - Real estate: Warm earth tones (stability, home)

- **Positioning alignment:**
  - Premium → Jewel tones, deep colors, restrained use
  - Affordable → Bright, energetic colors
  - Trustworthy → Blues, grays, earth tones
  - Innovative → Bright, unexpected color combinations
  - Luxury → Gold, silver, deep navy, black

**Decision:** Recommend ONE primary brand color (40-50% of color usage)

**Example logic:**
- Business: Logistics SaaS
- Positioning: Reliable, premium, professional
- Industry norm: Blue
- Competitive differentiation: Deep navy-blue (not bright sky blue)
- Rationale: Signals trust + authority, distinct from generic SaaS blues

#### Step 2: Choose Secondary Color (Accent Color)
- Complements primary without fighting it
- Used for CTAs, highlights, interactive states
- Should create enough contrast for accessible button states

**Psychology rules:**
- Primary blue → Secondary: Orange, teal, or warm accent
- Primary purple → Secondary: Yellow or green
- Primary green → Secondary: Deep teal or warm orange
- Primary red → Secondary: White / pale accent or deep navy
- Primary navy → Secondary: Warm orange, teal, or bright accent

**Decision:** Recommend ONE secondary/accent color (10-15% of usage)

#### Step 3: Define Supporting Palette
- **Neutral grays:** 3–5 shades for text, backgrounds, borders, UI elements
  - Darkest (almost black): Text, headers
  - Dark gray: Secondary text, borders
  - Medium gray: Placeholders, disabled states
  - Light gray: Backgrounds, subtle dividers
  - Lightest: Page background or card surfaces

- **Status colors (if applicable):**
  - Success: Green
  - Error: Red
  - Warning: Orange
  - Info: Blue
  - (Keep these standard and recognizable)

**Decision:** Define 5–7 neutral gray tones + status colors

#### Step 4: Document Color Psychology & Usage

For each color, document:
- **Hex value** (e.g., `#1a4d7d`)
- **CSS variable name** (e.g., `--color-primary-navy`)
- **Usage context** (e.g., "Primary buttons, hero headlines, navigation")
- **Accessibility notes** (contrast ratio, when to use on light/dark backgrounds)

---

### Phase 3: Define Typography

**Rule: Typography must be functional, not just beautiful.**

#### Step 1: Choose Font Families (Max 2–3 total)

- **For headings:** One typeface that reflects brand personality
  - Serif: Traditional, premium, editorial (finance, luxury, publishing)
  - Sans-serif (geometric): Modern, tech-forward, clean (SaaS, tech, startups)
  - Sans-serif (humanist): Friendly, approachable, warm (consumer brands, health, education)
  - Display / script: Only if industry allows (creative agencies, luxury, artisan)

- **For body text:** Usually sans-serif (better on screen)
  - Must have excellent readability at 14–16px
  - Must work well in dark and light modes
  - Must have good line spacing and letter spacing

- **Why max 3:** Too many fonts looks chaotic. Usually:
  - Font 1 (headings): Strong, distinctive
  - Font 2 (body): Clear, readable
  - Font 3 (code / special): Monospace (only if applicable)

**Decision process:**
1. Analyze competitor typography (what feels "right" for the industry?)
2. Choose heading font based on brand personality
3. Choose body font optimized for readability
4. Test together (headings + body) to ensure they harmonize

**Example:**
- Industry: Fintech SaaS
- Heading font: Inter (geometric, modern, tech-forward)
- Body font: Inter (same, for consistency + clarity)
- Result: Minimal, professional, clean

**Another example:**
- Industry: Premium consulting
- Heading font: Poppins (bold, friendly-professional)
- Body font: Inter (clean, readable at all sizes)
- Result: Approachable but authoritative

#### Step 2: Define Type Scale

Create a proportional sizing system (usually 1.125× or 1.25× ratio):

```
Base (body): 16px
Ratio: 1.125× (common for balanced scale)

Display: 48px (rarely used)
H1: 42px (page headline)
H2: 36px (section headline)
H3: 28px (subsection)
H4: 24px (card title)
Body: 16px (paragraph text)
Small: 14px (captions, metadata)
Tiny: 12px (labels, fine print)
```

**Rules:**
- Do not use arbitrary sizes
- Ensure sufficient contrast between levels (avoid 16px → 17px → 18px)
- Test on mobile: headings may need smaller scale
- Ensure body text is minimum 16px on mobile

#### Step 3: Define Weight Variations

- **Heading weight:** Usually 600–700 (bold, strong visual hierarchy)
- **Body weight:** 400 (regular, optimal readability)
- **Emphasis weight:** 600 (for bold text within paragraphs)
- **Light weight:** 300 (only for display text or subtle labels)

**Decision:** Recommend 3–4 weights maximum per font

---

### Phase 4: Define Spacing & Sizing Tokens

**Rule: All spacing must come from a consistent scale.**

#### Recommended Scale (8px base)

```scss
--space-1: 4px;    // tiny gaps, borders
--space-2: 8px;    // small gaps, input padding
--space-3: 12px;   // elements within cards
--space-4: 16px;   // default gap, button padding
--space-5: 24px;   // section gaps, card spacing
--space-6: 32px;   // layout gaps, section padding
--space-7: 48px;   // major section spacing
--space-8: 64px;   // hero sections, large layouts
--space-9: 96px;   // page top padding on desktop
```

#### Responsive Adjustments

On mobile, sections may use:
- `--space-6` or `--space-5` instead of `--space-8`
- `--space-7` instead of `--space-9`
- But never create separate "mobile spaces" — use breakpoints in components

---

### Phase 5: Define Other Design Tokens

#### Border Radius
```scss
--radius-sm: 4px;     // small buttons, inputs
--radius-md: 8px;     // cards, medium elements
--radius-lg: 12px;    // large cards, hero sections
--radius-xl: 16px;    // special components
--radius-full: 9999px; // pills, circles
```

#### Shadows
```scss
--shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
--shadow-md: 0 4px 8px rgba(0,0,0,0.1);
--shadow-lg: 0 8px 16px rgba(0,0,0,0.12);
--shadow-xl: 0 16px 32px rgba(0,0,0,0.15);
```

#### Breakpoints
```scss
--bp-mobile: 480px;
--bp-tablet: 768px;
--bp-desktop: 1200px;
--bp-wide: 1440px;
```

---

### Phase 5.5: Create Logo Prompt When Missing

If `brief/brief-result.md` does not provide a logo, logo file, or usable brand mark, create a GPT Image 2 logo prompt as part of the brand identity output.

Rules:
- Do not generate the logo image directly unless the user explicitly asks for image generation.
- Do not invent a finished logo asset for the site. Treat the prompt as a handoff item for the client.
- Use the exact brand/company name from the brief when requesting a wordmark.
- Align the prompt with the final color palette, typography mood, industry, audience, and visual tone.
- Prefer a simple vector-style brand mark plus horizontal wordmark lockup.
- Request a clean plain or transparent background, flat scalable shapes, and limited colors from the brand palette.
- Avoid mockups, 3D scenes, shadows, gradients unless the brand identity explicitly supports them, stock icons, copyrighted references, extra text, slogans, watermarks, and decorative clutter.

Store the result in `BRAND_IDENTITY.md` under `Logo Generation Prompt` with:
- Logo status: missing
- Image type: logo / brand mark
- Purpose
- Recommended format: square icon mark plus horizontal wordmark lockup; transparent or plain background
- Final prompt: one clean prompt ready for GPT Image 2
- Avoid / negative guidance
- Suggested filename
- Suggested alt text
- Handoff note: include this prompt in the final user response after the landing page is generated

If a usable logo exists, document `Logo status: available`, source/path if known, and do not create a logo prompt unless the user asks for one.

---

### Phase 6: Create BRAND_IDENTITY.md

Document everything for the team and future reference:

```markdown
# Brand Identity

## 1. Brand Positioning
- Positioning statement: [from brief/brief-result.md and SITE_STRUCTURE.md]
- Visual tone: [modern / corporate / playful / technical]
- Industry: [category]
- Target audience: [persona summary]

## Logo Assets
- Logo status: [available / missing]
- Existing logo source: [path, URL, or "not provided"]
- Logo usage notes: [how the logo should be placed, scaled, or substituted]

## 2. Color System

### Primary Color (Brand Navy)
- Hex: #1a4d7d
- RGB: 26, 77, 125
- Usage: Primary buttons, hero headlines, key navigation elements
- Accessibility: WCAG AA on white backgrounds, use secondary accent on this for contrast

### Secondary Color (Accent Teal)
- Hex: #16a085
- RGB: 22, 160, 133
- Usage: CTAs, interactive states, hover effects
- Accessibility: WCAG AA on white backgrounds

### Neutral Grays
- Darkest (#1a1a1a): Headlines, primary text
- Dark (#333333): Secondary text, labels
- Medium (#767676): Borders, disabled text
- Light (#e8e8e8): Backgrounds, subtle dividers
- Lightest (#f5f5f5): Card backgrounds, page background

### Status Colors
- Success: #27ae60 (green)
- Error: #e74c3c (red)
- Warning: #f39c12 (orange)
- Info: #3498db (blue)

## 3. Typography

### Heading Font
- Family: Inter
- Weight: 600–700
- Sizes: H1 (42px), H2 (36px), H3 (28px), H4 (24px)
- Line height: 1.2
- Letter spacing: -0.01em (for larger sizes)
- Usage: All headings, navigation, buttons

### Body Font
- Family: Inter
- Weight: 400 (regular), 600 (emphasis)
- Size: 16px (desktop), 14px (mobile)
- Line height: 1.6
- Letter spacing: 0
- Usage: Paragraph text, descriptions, lists

### Type Scale
```
Display: 48px (rare)
H1: 42px
H2: 36px
H3: 28px
H4: 24px
Body: 16px
Small: 14px
Tiny: 12px
```

## 4. Spacing Scale
- --space-1: 4px
- --space-2: 8px
- --space-3: 12px
- --space-4: 16px
- --space-5: 24px
- --space-6: 32px
- --space-7: 48px
- --space-8: 64px
- --space-9: 96px

## 5. Border Radius
- --radius-sm: 4px
- --radius-md: 8px
- --radius-lg: 12px
- --radius-xl: 16px
- --radius-full: 9999px

## 6. Shadows
- --shadow-sm: 0 1px 2px rgba(0,0,0,0.08)
- --shadow-md: 0 4px 8px rgba(0,0,0,0.1)
- --shadow-lg: 0 8px 16px rgba(0,0,0,0.12)
- --shadow-xl: 0 16px 32px rgba(0,0,0,0.15)

## 7. Visual Tone & Guidelines

### Tone Description
- [Describe the visual feeling: modern, minimal, bold, sophisticated, warm, technical, etc.]
- [How should color be used: restrained, bold, playful?]
- [Spacing philosophy: tight, generous, breathing room?]

### Usage Rules
- Primary color: 40–50% of all color usage
- Secondary color: 10–15% of color usage
- Neutrals: 35–50% of all design
- Status colors: Used only for their purpose
- No arbitrary color choices — every color serves a function

### Do's
- ✓ Use tokens for all spacing, colors, typography
- ✓ Combine primary + secondary for emphasis
- ✓ Use neutrals for content readability
- ✓ Ensure sufficient contrast for accessibility

### Don'ts
- ✗ Do not add new colors — use the system
- ✗ Do not mix multiple accent colors
- ✗ Do not use arbitrary spacing values
- ✗ Do not override brand colors for decoration

## 8. Component Defaults
- Button primary color: [primary brand color]
- Button secondary color: [secondary brand color]
- Link color: [primary brand color]
- Link hover: [secondary brand color]
- Input border: [medium gray]
- Input focus: [primary brand color]
- Card background: [lightest background]
- Card border: [light gray]

## 9. Logo Generation Prompt
Include this section only if no usable logo was provided.

### Logo Status
Missing.

### Image Type
Logo / brand mark.

### Purpose
[Explain what the logo should communicate based on the brand positioning.]

### Recommended Format
Square icon mark plus horizontal wordmark lockup; transparent or plain background.

### Final Prompt
[One clean GPT Image 2 prompt ready to copy.]

### Avoid / Negative Guidance
- No mockups
- No extra text or slogan
- No copyrighted logo references
- No stock icons
- No clutter

### Suggested Filename
[brand-name-logo-concept.png]

### Suggested Alt Text
[Brand name logo concept]

### Handoff Note
Return this prompt to the user after the landing page is generated.
```

---

### Phase 7: Generate Project _vars.scss

Create a ready-to-use SCSS file with all tokens from BRAND_IDENTITY.md:

```scss
// ===== BRAND IDENTITY TOKENS =====
// Generated from BRAND_IDENTITY.md
// Update only via brand-identity-creation skill

// --- Colors ---
--color-primary: #1a4d7d;        // Brand navy
--color-secondary: #16a085;      // Accent teal
--color-success: #27ae60;
--color-error: #e74c3c;
--color-warning: #f39c12;
--color-info: #3498db;

--color-neutral-900: #1a1a1a;    // Darkest
--color-neutral-700: #333333;    // Dark
--color-neutral-500: #767676;    // Medium
--color-neutral-300: #e8e8e8;    // Light
--color-neutral-100: #f5f5f5;    // Lightest

--color-text-primary: var(--color-neutral-900);
--color-text-secondary: var(--color-neutral-700);
--color-text-muted: var(--color-neutral-500);
--color-bg-primary: white;
--color-bg-secondary: var(--color-neutral-100);
--color-border: var(--color-neutral-300);

// --- Typography ---
--font-heading: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'Courier New', monospace;

--font-size-display: 48px;
--font-size-h1: 42px;
--font-size-h2: 36px;
--font-size-h3: 28px;
--font-size-h4: 24px;
--font-size-body: 16px;
--font-size-small: 14px;
--font-size-tiny: 12px;

--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;

--line-height-heading: 1.2;
--line-height-body: 1.6;
--line-height-loose: 1.8;

// --- Spacing ---
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;

--section-padding-desktop: var(--space-9);
--section-padding-tablet: var(--space-7);
--section-padding-mobile: var(--space-6);

// --- Borders & Radius ---
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

// --- Shadows ---
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.15);

// --- Breakpoints ---
--bp-mobile: 480px;
--bp-tablet: 768px;
--bp-desktop: 1200px;
--bp-wide: 1440px;

// --- Container ---
--container-max-width: 1200px;
--container-padding: var(--space-6);
```

---

## When to Use This Skill

- **Start of a new project** — after `site-architecture` creates `SITE_STRUCTURE.md` from `brief/brief-result.md`
- **Brand refresh or rebrand** — entire color/type system change
- **Inconsistent visual decisions** — audit and rebuild from scratch
- **Expanding to new markets** — may require visual adjustments

---

## Output Checklist

Before marking complete:
- [ ] BRAND_IDENTITY.md created with all sections
- [ ] Color strategy is justified (not arbitrary)
- [ ] Typography choices support readability + brand
- [ ] All tokens documented (colors, type, spacing, radius, shadows)
- [ ] _vars.scss generated and ready to import in SCSS components
- [ ] Logo availability documented as available or missing
- [ ] If logo is missing, GPT Image 2 logo prompt is included in `BRAND_IDENTITY.md`
- [ ] If logo prompt exists, it is marked as a final handoff item for the landing-page response
- [ ] Design rationale documented for each major decision
- [ ] Accessibility considerations noted (contrast, readability)
- [ ] Visual tone and usage rules are clear
- [ ] Tokens follow CSS custom property naming convention

---

## Non-Negotiables

- Do not choose colors for "prettiness" — all choices must serve strategy
- Do not use more than 2–3 fonts — consistency matters more than variety
- Do not create arbitrary spacing or sizing values — use the defined scale
- Do not skip accessibility checks (contrast, readability)
- Do not create a brand identity that contradicts the business positioning
- All tokens must be scalable and reusable, not one-off adjustments
- Do not silently replace a missing logo with generic text styling; create a logo prompt handoff instead
