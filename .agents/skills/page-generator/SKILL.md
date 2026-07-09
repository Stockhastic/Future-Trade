---
name: page-generator
description: Use this skill when generating initial semantic HTML page scaffolds from SITE_STRUCTURE.md after brand identity and design-system files exist. It converts page architecture, section plans, conversion goals, and component rules into real page files using existing design-system classes, BEM naming, section/container structure, CTA/form/proof placeholders, and minimal token-based page SCSS. Use before page-design-execution, visual polish, section-visual-balance, SEO finalization, translation completion, or scroll animation work.
---

# Page Generator Skill

## Goal

Generate the first implementation-ready page scaffold from the project's strategic and design-system documents.

This skill is the bridge between planning and final design execution:

- `site-architecture` defines what pages and sections are needed.
- `brand-identity-creation` defines visual tokens.
- `design-system-builder` defines reusable components and project rules.
- `page-generator` creates semantic HTML pages from those documents.
- `page-design-execution` visually refines, balances, and polishes the generated pages.

The output should be about 80% structurally complete: clear HTML, correct section order, real content placeholders, component classes, accessible landmarks, and no layout hacks.

## Related skills

Use this skill with:

- `site-architecture`, `brand-identity-creation`, and `design-system-builder` as the required upstream workflow for complete projects.
- `page-design-execution` after scaffold generation, so sections receive final visual hierarchy, polish, and responsive refinement.
- `design-consistency` and `section-visual-balance` when generated sections must be checked against existing layout rhythm and multi-column balance.
- `seo-optimization` and `translation-system` when generated HTML includes metadata, headings, links, images, or `data-i18n` content.
- `navigation-adaptivity`, `form-email-submission`, `backer-implementation`, `scroll-reveal-animations`, `performance`, or `maintenance-system` when the generated page includes those behaviors.

## Inputs

Read these files in order:

1. `SITE_STRUCTURE.md` - page list, section order, page goals, CTAs, SEO focus.
2. `AGENTS_PROJECT.md` - project-specific component rules, BEM conventions, layout rules, responsive behavior.
3. `BRAND_IDENTITY.md` - brand tone, content tone, typography/color constraints.
4. `uikit.html` - canonical examples of available component classes.
5. Existing page and SCSS files - local naming, imports, script paths, i18n patterns, and asset conventions.

If `SITE_STRUCTURE.md`, `BRAND_IDENTITY.md`, or `AGENTS_PROJECT.md` is missing, do not generate a full page from guesswork. Run or request the preceding workflow step unless the user explicitly asked for a quick draft with documented assumptions.

## Outputs

Create or update only the files needed for the requested page scope:

- `index.html` or the relevant page file(s).
- Optional `src/scss/pages/_page-name.scss` only for page-specific layout composition.
- Optional import updates if the project already uses page-level SCSS imports.
- Optional translation keys/`data-i18n` hooks if the project already uses the translation system.
- Handoff notes in the final response for `page-design-execution` and related skills.

Do not create new brand tokens, rewrite component primitives, or replace the design system.

## Workflow

### Phase 1: Preflight

Confirm the project has enough upstream context:

- `SITE_STRUCTURE.md` exists and includes the requested page.
- `BRAND_IDENTITY.md` exists.
- `AGENTS_PROJECT.md` exists.
- A compiled or source stylesheet path is known.
- Existing components and page conventions are identified.
- Multilingual behavior is detected if translation files or `data-i18n` attributes exist.

Inspect existing files before editing. Reuse their structure, script includes, and class style.

### Phase 2: Select Page Scope

Determine exactly what to generate:

- Single landing page.
- Home page plus support pages.
- Service/detail page.
- Contact page.
- Case study page.
- FAQ or resource page.

For multi-page sites, generate pages in dependency order: home first, then primary conversion pages, then proof/support pages, then legal/content pages.

### Phase 3: Map Architecture to Sections

Use `SITE_STRUCTURE.md` as the source of truth. Do not invent new sections unless the architecture is incomplete and the user asked for a practical draft.

Common section mapping:

| Architecture Block | HTML Pattern |
| --- | --- |
| Hero | `.section.section--hero` with H1, supporting text, CTA, optional visual |
| Trust / Proof | logo strip, metrics row, testimonial preview, or partner proof |
| Services / Features | card grid using existing `.card` variants |
| Process / How It Works | ordered steps grid or timeline pattern from project components |
| Use Cases | card/list grid with audience-specific copy |
| Case Results / Metrics | metric cards or proof section |
| Pricing | pricing/comparison component if present in design system |
| FAQ | semantic question/answer list or accordion if project has one |
| Contact / Lead Form | existing form classes and accessible labels |
| Final CTA | focused conversion section with one primary action |

Preserve the conversion flow from `SITE_STRUCTURE.md`.

### Phase 4: Generate Semantic HTML

Use this section skeleton unless the project already has a stronger established pattern:

```html
<section class="section section--name">
  <div class="container">
    <div class="section__inner name__inner">
      ...
    </div>
  </div>
</section>
```

Rules:

- Use one `h1` per page.
- Use logical heading order: `h2` for sections, `h3` for card groups/items when appropriate.
- Use `header`, `main`, `section`, `article`, `nav`, `footer`, `form`, `label`, and `button` semantically.
- Use actual links/buttons based on action type: navigation uses `<a>`, form submission uses `<button type="submit">`.
- Add useful `alt` text for images and placeholders.
- Keep copy specific to the business context from `SITE_STRUCTURE.md`; avoid generic filler.
- Add IDs for anchor navigation only when needed.
- Preserve existing script/style include patterns.

### Phase 5: Use Existing Components

Prefer existing component classes from `AGENTS_PROJECT.md` and `uikit.html`:

- Buttons: `.button`, `.button--primary`, `.button--secondary`, project CTA variants.
- Cards: `.card`, `.card--surface`, `.card--accent`, feature/service variants.
- Sections: `.section`, `.container`, `.section__inner`, `.section-heading`.
- Forms: `.form-field`, `.form-label`, `.form-input`, `.form-textarea`, `.form-select`, `.form-actions`.
- Navigation/footer: existing header and footer classes.

Create page-specific BEM classes only for composition, not for restyling primitives.

Good:

```html
<div class="services__grid section__grid">
  <article class="card services__card">
    <h3 class="card__title">Fulfillment audit</h3>
    <p class="card__text">...</p>
  </article>
</div>
```

Avoid:

```html
<article class="blue-card custom-shadow-card random-offset-card">
  ...
</article>
```

### Phase 6: Add Minimal Page SCSS Only When Needed

Only add page-level SCSS for section composition that existing utilities cannot express.

Allowed:

- Grid/flex layout wrappers.
- Responsive column collapse.
- Section-specific card grid areas.
- Content max-widths using existing tokens.
- Parent `gap` values from spacing tokens.

Not allowed:

- New colors outside `BRAND_IDENTITY.md`.
- New typography scales.
- Arbitrary spacing such as `37px`, `83px`, `14rem`.
- Layout fixes using negative margins, empty spacer divs, `transform`, or absolute positioning for normal content.
- Hardcoded card heights used to fake alignment.

Use tokenized patterns:

```scss
.services__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.4fr);
  gap: var(--space-8);
  align-items: center;
}

@media (max-width: 768px) {
  .services__layout {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}
```

### Phase 7: Translation Hooks

If the project already uses `data-i18n` and translation files:

- Add stable keys for every visible text node.
- Follow the existing key namespace pattern.
- Update the translation file with all supported languages.
- Keep generated keys semantic, not positional.

Example:

```html
<h2 data-i18n="home.services.title">Services built for marketplace growth</h2>
```

If the project is not multilingual, do not introduce a translation system.

### Phase 8: SEO Scaffold

Add or preserve the page-level SEO foundation:

- Unique `<title>`.
- Meta description when the project manages metadata in HTML.
- One H1.
- Logical heading hierarchy.
- Descriptive links.
- Image `alt` text.
- Canonical/Open Graph placeholders only if the project already uses them or `SITE_STRUCTURE.md` requires them.

Do not do final SEO optimization here. Leave that to `seo-optimization`.

### Phase 9: Validation

Before finishing, check:

- Page structure matches `SITE_STRUCTURE.md`.
- Every section has a clear purpose and CTA/proof where specified.
- HTML uses the project section pattern.
- Component classes come from `AGENTS_PROJECT.md` or existing pages.
- One H1 only.
- No random margins, transforms, empty spacers, or absolute positioning for flow.
- Multi-column sections use parent grid/flex and tokenized `gap`.
- Forms have labels, names, required fields when appropriate, and clear submit action.
- Images have `alt`.
- Mobile collapse is structurally predictable.
- Any complex two-column/card section is ready for `section-visual-balance`.

## Handoff To Next Skills

End with a concise handoff:

- Pages generated.
- Sections created.
- Files changed.
- Known placeholders: images, logos, real testimonials, form endpoint, links.
- Sections that need `page-design-execution`.
- Sections that should be checked by `section-visual-balance`.
- Whether `seo-optimization`, `translation-system`, `scroll-reveal-animations`, `navigation-adaptivity`, `form-email-submission`, `backer-implementation`, `performance`, or `maintenance-system` should run next.

## Non-Negotiables

- Treat `SITE_STRUCTURE.md` as the page blueprint.
- Do not create brand identity or design-system rules.
- Do not invent new component primitives when existing components work.
- Do not use arbitrary spacing, colors, typography, or layout hacks.
- Do not make final visual-polish decisions that belong to `page-design-execution`.
- Generate clean, semantic, accessible scaffolds that are easy for later skills to refine.
