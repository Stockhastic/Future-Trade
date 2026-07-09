---
name: design-system-builder
description: Use this skill when building or adapting a complete design system for a new website project. This skill takes the brand identity tokens and creates reusable components, design rules, and CSS architecture specific to the project type (B2B SaaS, e-commerce, portfolio, etc.). Output includes component library (_buttons, _cards, _forms, _sections, etc.), AGENTS_PROJECT.md (project-specific design rules), and a complete SCSS structure ready for page development.
---

# Design System Builder Skill

## Goal

Transform brand identity tokens into a cohesive, reusable design system that:
- Is consistent across all pages and components
- Adapts to the specific website type and use cases
- Is documented for development and team consistency
- Scales as the project grows
- Is built from BRAND_IDENTITY.md tokens (not arbitrary values)

**Outputs:**
1. Complete `src/scss/` folder structure with all components
2. `AGENTS_PROJECT.md` — project-specific design rules derived from brand + website type
3. `uikit.html` — component showcase for validation
4. Ready-to-use component classes

## Related skills

Use this skill with:

- `brand-identity-creation` as the required upstream source for tokens, tone, and component feel.
- `page-generator` after the component system exists, so generated pages use the available classes instead of one-off styles.
- `page-design-execution`, `design-consistency`, and `section-visual-balance` when components are applied to real sections.
- `form-email-submission` when form components must support validation, status, error, and consent states.
- `navigation-adaptivity` when header and mobile menu components are part of the system.
- `performance` when component CSS, shadows, fonts, animations, or media rules affect load/render cost.

---

## Phase 1: Determine Website Type & Component Needs

Extract from `SITE_STRUCTURE.md`, `brief/brief-result.md`, and `BRAND_IDENTITY.md`:

- **Website type:** B2B SaaS, e-commerce, agency portfolio, corporate, startup landing, etc.
- **Primary use cases:** Lead generation, product showcase, transactional, educational, etc.
- **Key page types:** Landing page, service pages, product pages, blog, checkout, etc.
- **Interactive complexity:** Simple (mostly static), medium (forms, filters), high (app-like)

**Component needs vary by type:**

| Website Type | Core Components | Special Components |
|---|---|---|
| **B2B SaaS Landing** | Buttons, cards, hero, CTA form, trust strip, pricing table, FAQ | Feature comparison matrix |
| **E-commerce Store** | Buttons, cards (product), form, CTA, filters, reviews | Product grid, cart, checkout flow |
| **Agency Portfolio** | Buttons, cards (case studies), hero, contact form, testimonials | Before/after, project showcase |
| **Corporate Site** | Buttons, cards, sections, navigation, forms, footer | Team grid, timeline |
| **Creator Portfolio** | Buttons, cards (portfolio items), hero, gallery, contact | Image galleries, filter grids |

---

## Phase 2: Build Core Component Files

Create this SCSS structure in `src/scss/components/`:

```
components/
├── index.scss          (imports all components)
├── _buttons.scss       (all button variants)
├── _cards.scss         (all card variants)
├── _sections.scss      (section layout patterns)
├── _typography.scss    (type styles, utilities)
├── _forms.scss         (inputs, selects, textareas, validation)
├── _navigation.scss    (header, menus, mobile nav)
├── _footer.scss        (footer patterns)
├── _tables.scss        (if needed: pricing tables, comparison grids)
├── _gallery.scss       (if needed: image galleries, lightbox)
└── _special.scss       (project-specific components)
```

### Component File: _buttons.scss

```scss
// Use BRAND_IDENTITY tokens, never arbitrary values

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-heading);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  gap: var(--space-2);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.button--primary {
  background-color: var(--color-primary);
  color: white;

  &:hover:not(:disabled) {
    background-color: var(--color-secondary);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }
}

.button--secondary {
  background-color: var(--color-neutral-100);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);

  &:hover:not(:disabled) {
    background-color: var(--color-primary);
    color: white;
  }
}

.button--large {
  padding: var(--space-4) var(--space-5);
  font-size: 18px;
}

.button--small {
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-small);
}

.button--full {
  width: 100%;
}

// Icon buttons
.button--icon-only {
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: var(--radius-full);
}
```

**Key principles:**
- All sizes from spacing tokens
- All colors from brand tokens
- All transitions consistent
- States (hover, active, disabled) clearly defined
- No arbitrary values

### Component File: _cards.scss

```scss
.card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-md);
  }
}

.card--surface {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
}

.card--accent {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  border: none;

  .card__title {
    color: white;
  }

  .card__text {
    color: rgba(255, 255, 255, 0.9);
  }
}

.card--special {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-4);
  align-items: start;
}

.card__icon {
  width: 48px;
  height: 48px;
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.card__title {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.card__text {
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body);
}

.card__value {
  font-size: 32px;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.card__label {
  font-size: var(--font-size-small);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Component File: _sections.scss

```scss
.section {
  padding: var(--section-padding-desktop) 0;

  @media (max-width: 768px) {
    padding: var(--section-padding-tablet) 0;
  }

  @media (max-width: 480px) {
    padding: var(--section-padding-mobile) 0;
  }
}

.section--hero {
  padding: calc(var(--section-padding-desktop) * 1.5) 0;
}

.section--alt {
  background-color: var(--color-bg-secondary);
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

.section__inner {
  display: flex;
  flex-direction: column;
}

// Grid-based layout wrapper (for multi-column sections)
.section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  align-items: stretch;
}

// Two-column layout
.section__two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

// Content + sidebar
.section__main-sidebar {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-8);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
```

### Component File: _forms.scss

```scss
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-4);
}

.form-label {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.form-input,
.form-textarea,
.form-select {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-body);
  font-family: var(--font-body);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &:disabled {
    background-color: var(--color-bg-secondary);
    cursor: not-allowed;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: flex-end;
}

.form-error {
  color: var(--color-error);
  font-size: var(--font-size-small);
  margin-top: var(--space-2);
}

.form-success {
  color: var(--color-success);
  font-size: var(--font-size-small);
  margin-top: var(--space-2);
}
```

### Component File: _typography.scss

```scss
h1, .h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

h2, .h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

h3, .h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}

h4, .h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-heading);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

p, .body {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-text-secondary);
}

.text-small {
  font-size: var(--font-size-small);
  color: var(--color-text-muted);
}

.text-muted {
  color: var(--color-text-muted);
}

.text-primary {
  color: var(--color-primary);
}

.text-secondary {
  color: var(--color-secondary);
}

.text-center {
  text-align: center;
}

strong, .bold {
  font-weight: var(--font-weight-semibold);
}
```

---

## Phase 3: Create AGENTS_PROJECT.md

This is the project-specific design rules document (analogous to AGENTS.md but tailored to this project):

```markdown
# Design Rules for [Project Name]

Created from BRAND_IDENTITY.md, SITE_STRUCTURE.md, and brief/brief-result.md.
All design and development decisions must follow these rules.

## 1. Design Tokens (from BRAND_IDENTITY.md)

### Colors
- Primary: #1a4d7d (brand navy)
- Secondary: #16a085 (accent teal)
- Text: #1a1a1a (dark), #333333 (secondary), #767676 (muted)
- Backgrounds: white, #f5f5f5 (light), #e8e8e8 (border)

### Typography
- Heading: Inter, 600–700 weight
- Body: Inter, 400 weight
- Scale: H1 (42px), H2 (36px), H3 (28px), H4 (24px), Body (16px)

### Spacing Scale
All spacing from: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

### Border & Shadows
- Radius: 4px (small), 8px (medium), 12px (large)
- Shadows: 0 1px 2px, 0 4px 8px, 0 8px 16px, 0 16px 32px

## 2. Component Rules

### Buttons
- Primary buttons: brand navy background, white text
- Secondary buttons: transparent with border, navy text
- All button padding from spacing scale
- No arbitrary button sizes

### Cards
- Base: white background, light border, shadow-sm
- Card padding: 24px (--space-5)
- Card radius: 12px (--radius-lg)
- On hover: increase to shadow-md

### Sections
- Section padding: 96px (desktop), 48px (tablet), 32px (mobile)
- Container max-width: 1200px
- Container padding: 32px horizontal
- Use grid for multi-column layouts
- All gaps from spacing scale

### Forms
- Input padding: 12px vertical, 16px horizontal
- Input border: 2px solid light gray
- Focus state: border color changes to primary
- Labels above inputs, bold
- Error text: red color

### Typography
- All font sizes from type scale
- Line height: 1.2 (headings), 1.6 (body)
- Color: text-primary for headers, text-secondary for body

## 3. Layout Patterns

### Hero Section
- Full-width, high vertical padding
- Headline + supporting text + CTA
- Optional background color or image

### Two-Column Section (Text + Visual)
- Left: content (400–500px max width)
- Right: image or cards
- Centered vertically
- Grid-based, not manual positioning

### Cards Grid
- 3 columns on desktop, 2 on tablet, 1 on mobile
- All gaps: 24px (--space-5)
- Card heights: natural content flow (not hardcoded)

### CTA Section
- Centered headline
- Centered supporting text
- Centered button(s)
- Use --section-padding tokens

## 4. Spacing Discipline
- NEVER use arbitrary margins like `margin-top: 73px`
- ALWAYS use spacing tokens
- Use gap property for grid/flex child spacing
- Section padding comes from --section-padding tokens
- Container padding is 32px horizontal

## 5. Color Usage
- Primary color: ~40–50% of design
- Secondary color: ~10–15% for CTAs/accents
- Neutrals: ~35–50% for content and backgrounds
- Status colors: Only for success/error/warning/info
- Do NOT add new colors

## 6. Typography Rules
- Only use Inter font (no new font families)
- Heading weight: 600–700
- Body weight: 400
- No arbitrary font sizes — use type scale
- Minimum body text: 16px

## 7. Responsive Behavior
- Mobile breakpoint: 480px
- Tablet breakpoint: 768px
- Desktop: 1200px+
- Grid columns collapse to 1 on mobile
- Spacing reduces on mobile but stays tokenized

## 8. Accessibility
- Link colors: primary color with 4.5:1 contrast
- Button text: always visible with 4.5:1 contrast
- Form labels required
- Focus states clearly visible
- Images require alt attributes

## 9. Non-Negotiables
- Use component classes, not custom styles
- All spacing from tokens
- All colors from token palette
- No layout hacks (negative margins, absolute positioning for flow)
- No hardcoded element heights
- No visual guessing — use grids and gaps
```

---

## Phase 4: Adapt Components by Website Type

### For B2B SaaS:
- Add pricing table component
- Add comparison matrix (if needed)
- Add integration logos section
- Form should ask for business email
- Trust strip with customer logos

### For E-commerce:
- Product card with image, title, price, rating
- Size/color selector components (if needed)
- Shopping cart counter in header
- Product grid with filters
- Review component
- Checkout-specific form

### For Agency Portfolio:
- Case study card (project image, title, description)
- Before/after component (if needed)
- Team member card (photo, name, role)
- Testimonial card
- Portfolio grid with filter options

### For Corporate Site:
- Team grid (headshots, names, roles)
- Timeline component (for company history)
- News/blog card
- Document download card
- Organizational chart (if needed)

---

## Phase 5: Create uikit.html

Build a reference page showcasing all components:

```html
<!DOCTYPE html>
<html>
<head>
  <title>UI Kit</title>
  <link rel="stylesheet" href="src/css/styles.css">
</head>
<body>
  <section class="section">
    <div class="container">
      <h1>UI Kit — [Project Name]</h1>
      
      <h2>Buttons</h2>
      <button class="button button--primary">Primary Button</button>
      <button class="button button--secondary">Secondary Button</button>
      <button class="button button--large">Large Button</button>
      <button class="button button--small">Small Button</button>
      
      <h2>Cards</h2>
      <div class="section__grid">
        <article class="card">
          <h3 class="card__title">Standard Card</h3>
          <p class="card__text">Standard card description</p>
        </article>
        <article class="card card--surface">
          <h3 class="card__title">Surface Card</h3>
          <p class="card__text">Card with background</p>
        </article>
        <article class="card card--accent">
          <h3 class="card__title">Accent Card</h3>
          <p class="card__text">Card with gradient</p>
        </article>
      </div>
      
      <h2>Typography</h2>
      <h1>Heading 1 (42px)</h1>
      <h2>Heading 2 (36px)</h2>
      <h3>Heading 3 (28px)</h3>
      <h4>Heading 4 (24px)</h4>
      <p>Body text (16px): Lorem ipsum dolor sit amet...</p>
      <p class="text-small">Small text (14px)</p>
      
      <h2>Forms</h2>
      <form>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-input" placeholder="your@email.com">
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="form-textarea" placeholder="Your message..."></textarea>
        </div>
        <div class="form-actions">
          <button class="button button--primary">Submit</button>
        </div>
      </form>
    </div>
  </section>
</body>
</html>
```

---

## Output Checklist

Before marking complete:
- [ ] All component files created in `src/scss/components/`
- [ ] All components use BRAND_IDENTITY tokens (no arbitrary values)
- [ ] AGENTS_PROJECT.md created with complete design rules
- [ ] uikit.html created and all components are visible
- [ ] Components tested responsively (mobile, tablet, desktop)
- [ ] No color, spacing, or typography values outside tokens
- [ ] All grid-based layouts documented
- [ ] Accessibility considerations addressed
- [ ] Component naming follows BEM convention
- [ ] Import structure in components/index.scss is correct

---

## Non-Negotiables

- Every design token must come from BRAND_IDENTITY.md
- No arbitrary spacing, colors, or sizing
- Components must scale and be reusable
- All layout composition must use grid/flex, not manual positioning
- No component styles that contradict the design system
- Documentation must be clear for hand-off to developers
