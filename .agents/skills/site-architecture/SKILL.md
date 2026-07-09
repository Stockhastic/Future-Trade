---
name: site-architecture
description: Use this skill when planning the overall structure and content strategy of a website. Takes brief-result.md as input data and generates SITE_STRUCTURE.md with complete site map, page-by-page content strategy, and information architecture guidelines.
---

# Site Architecture Skill

## Goal

Define the complete information architecture and content strategy for the website:
- What pages the site needs
- What primary content goes on each page
- How pages relate and link to each other
- What conversion goal each page serves
- What content blocks each page should contain

**Input:** `brief/brief-result.md` — Business brief with industry, goals, audience, and positioning  
**Output:** `SITE_STRUCTURE.md` — a blueprint for content and page layout.

---

## Related skills

Use this skill with:

- `brand-identity-creation` after architecture is defined, so visual identity supports the actual audience, page map, and conversion path.
- `design-system-builder` after brand identity, so architecture patterns become reusable components.
- `page-generator` when `SITE_STRUCTURE.md` is ready to become semantic page scaffolds.
- `seo-optimization` when defining page intent, keyword strategy, metadata direction, URL structure, and internal links.
- `navigation-adaptivity` when planning header/footer navigation, anchors, mobile menu behavior, or deep page maps.
- `translation-system` when the site architecture must account for multilingual labels, page variants, or language switching.
- `form-email-submission` when conversion paths depend on contact, callback, quote, or lead forms.

---

## Phase 1: Extract Business Context from brief-result.md

Read `brief/brief-result.md` and extract:

### Business Model
- **Model type:** B2B SaaS, B2C E-Commerce, Agency, Corporate, Creator/Portfolio, Content/Education, Other
- **Company name, what it does, business model**
- **Problem solved, competitive advantage**

### Conversion & Goals
- **Primary business goal:** Lead generation, direct sales, trust building, sign-ups, other
- **Conversion metric:** What counts as a success? (demo request, purchase, contact form, newsletter signup, etc.)
- **Website scope:** Single landing page, 5+ pages, 20+ pages?

### Target Audience
- **Target client:** Role, demographics, geography
- **Decision-maker profile:** Who actually decides?
- **Audience problem:** What problem should the site solve for them?

### Market & Positioning
- **Industry/category**
- **Positioning:** Fast/innovative/trust-focused/etc.
- **Unique advantage vs competitors**
- **Multilingual:** Yes/no and which languages?

### Visual Direction (if provided)
- **Brand/design tone:** Friendly, professional, bold, minimal, etc.
- **Existing brand assets:** Logo, colors, examples

---

## Phase 2: Determine Website Type & Standard Architecture

Based on the business model extracted from brief-result.md, choose the matching page structure template:

Different website types follow different page structures:

### B2B SaaS Landing Page

Typical structure:
1. **Home** — Hero + value prop
2. **Features** — What it does
3. **Pricing** — Cost structure
4. **Case Studies / Proof** — Social proof
5. **FAQ** — Objection handling
6. **Contact** — Sales inquiry

**Conversion flow:** Home → Features → Pricing/Case Studies → Contact

---

### B2B SaaS Multi-Page Site

Add:
- **Blog** — SEO, thought leadership
- **Integration** — Partner/API documentation
- **About** — Team, company story
- **Security/Compliance** — Trust
- **Careers** — Hiring

---

### E-commerce Store

Core pages:
1. **Home** — Hero + featured products + categories
2. **Product Category** — Filtered product grid
3. **Product Detail** — Image, description, specs, reviews, CTA to cart
4. **Cart** — Review items
5. **Checkout** — Shipping, payment
6. **Order Confirmation** — Success page
7. **Account** — Order history, settings

**Optional:**
- Blog (SEO)
- Contact
- Returns/Shipping Info

---

### Agency Portfolio

Core pages:
1. **Home** — Hero + case studies + services + CTA
2. **Services** — What the agency offers
3. **Case Studies** — Detailed project breakdowns
4. **About** — Team, company story, approach
5. **Contact** — Project inquiry form
6. **Blog** — Thought leadership, tips

**Optional:**
- Team
- Careers
- Testimonials

---

### Corporate Marketing Site

Core pages:
1. **Home** — Company mission, hero, main message
2. **About** — Company story, team, culture
3. **Services/Products** — What company offers
4. **News/Blog** — Company updates, thought leadership
5. **Careers** — Job listings
6. **Contact** — General inquiry, office locations
7. **Legal** — Privacy, terms, compliance

---

### Creator Portfolio / Freelancer

Core pages:
1. **Home** — Hero, featured work
2. **Portfolio** — Gallery of work
3. **About** — Bio, process, approach
4. **Blog** — Tips, case studies
5. **Contact** — Project inquiry

---

### Content / Education Site

Core pages:
1. **Home** — Hero, featured content
2. **Course/Content Hub** — All courses or articles
3. **Single Article/Course** — Detailed content
4. **About** — Author/instructor bio
5. **Contact** — Support or inquiry

---

## Phase 3: Map Site Structure

Create a visual hierarchy:

```
Home (landing page, entry point)
├── Services / Features (detailed offering)
├── Proof / Case Studies (social proof)
├── Pricing (if applicable)
├── Blog / Resources (SEO, thought leadership)
├── About (team, company story)
├── Contact (lead capture)
└── Legal (privacy, terms)
```

For each page, determine:
- **URL path** (e.g., `/services`, `/about`, `/contact`)
- **Primary purpose** (what does visitor need?)
- **Conversion goal** (what action should they take?)
- **Audience segment** (who is this page for?)
- **SEO keyword focus** (what should it rank for?)

---

## Phase 4: Define Content Strategy Per Page

### For Each Page, Document:

#### 1. Page Purpose
One sentence: "This page teaches visitors what our service does and why it's different."

#### 2. Target Audience Segment
Who is this page for? (e.g., "IT managers evaluating software solutions")

#### 3. Primary Conversion Goal
What should they do here? (e.g., "Request a demo", "Read case study", "Add to cart")

#### 4. Content Blocks (Section by Section)

Example for a Services page:

```
Services Page

## Sections:

### 1. Hero
- Headline: [specific to service, not generic]
- Supporting text: [value prop]
- CTA: [primary action]
- Visual: [relevant image or video]

### 2. Service Overview
- Why this service matters
- Key benefits
- 3–5 bullet points of value

### 3. How It Works
- Step-by-step process (3–5 steps)
- Keep process clear and scannable

### 4. Key Features / Capabilities
- Card-based grid of features
- Icon + title + description for each
- Visual balance (3 or 4 columns)

### 5. Use Cases / Industries
- Show how different customers use this
- Brief description for each use case
- "How [Industry] uses [Service]" format

### 6. Social Proof / Testimonials
- Customer quotes or case metrics
- Name, company, role for each testimonial
- Optional: customer logo

### 7. Pricing (if applicable)
- Clear pricing table or cards
- Highlight recommended plan
- CTA to upgrade or request custom pricing

### 8. FAQ
- 5–8 most common objections
- Clear, concise answers
- Link to detailed docs if needed

### 9. CTA Section
- Final conversion opportunity
- Headline: "Ready to [action]?"
- Primary CTA button
- Optional: chat, email, phone options

### 10. Footer
- Navigation links
- Company info
- Legal links
```

---

## Phase 5: Create Detailed SITE_STRUCTURE.md

Document everything for implementation:

```markdown
# Site Architecture & Content Strategy

## 1. Overall Site Structure

### Sitemap
```
/ (home)
├── /services (service overview)
│   ├── /services/service-1 (detailed service)
│   ├── /services/service-2
│   └── /services/service-3
├── /case-studies (social proof hub)
│   ├── /case-studies/case-1 (detailed case study)
│   └── /case-studies/case-2
├── /about (company story)
├── /contact (lead capture)
├── /blog (thought leadership)
│   ├── /blog/article-1
│   └── /blog/article-2
├── /pricing (if applicable)
├── /faq (common questions)
└── /legal
    ├── /legal/privacy
    └── /legal/terms
```

### Navigation Structure
- **Primary navigation:** Home, Services, Case Studies, About, Contact
- **Footer navigation:** Services, Blog, About, Contact, Legal
- **Mobile menu:** Collapse primary nav to burger menu

---

## 2. Page-by-Page Content Strategy

### Home Page
**Purpose:** Welcome visitors and communicate main value proposition
**Audience:** First-time visitors, all personas
**Primary conversion goal:** Click to Services or Request Demo
**SEO focus:** Brand keywords, high-level service keywords

**Sections:**
1. Hero
   - Headline: [specific business value]
   - Subheadline: [target audience + key benefit]
   - CTA: "Explore Services" or "Request Demo"
   - Visual: [hero image aligned with BRAND_IDENTITY]
   - Size: Full-width or two-column layout

2. Trust / Proof
   - Customer logos (if available)
   - 2–3 key metrics
   - Brief testimonial

3. Services Overview
   - 3–4 main services or features
   - Card grid layout
   - Icon + title + description
   - CTA: "Learn More" (links to service page)

4. Why Choose Us
   - 3–5 key differentiators
   - Concrete benefits, not vague claims
   - Examples: "40% faster", "99.9% uptime", "24/7 support"

5. Case Study / Success Story
   - One detailed case study
   - Problem, solution, result
   - Optional: metrics or testimonial

6. FAQ
   - 4–6 most common questions
   - Keep answers concise

7. CTA Section
   - Final conversion push
   - "Ready to get started?"
   - Primary button + secondary contact option

---

### Services Page
**Purpose:** Explain what the company offers
**Audience:** Prospects evaluating solutions
**Primary conversion goal:** Click to specific service detail or request demo
**SEO focus:** Service keywords, competitive terms

**Sections:**
1. Hero (Service Overview)
   - Headline: "Our Services"
   - Subheadline: What the company specializes in
   - Optional: icon or background

2. Service Cards (Grid)
   - 3–4 main services
   - Card per service: icon, title, short description, "Learn More" CTA
   - Links to individual service pages

3. Service Comparison (Optional)
   - If services are similar, show how to choose
   - Table or comparison matrix

4. Service Highlights
   - Section explaining key features across all services
   - 3–4 highlights
   - Icon + description format

5. CTA Section
   - "Which service is right for you?"
   - Link to self-assessment tool or contact form

---

### [Service Name] Detail Page
**Purpose:** Convince visitors this specific service solves their problem
**Audience:** Decision-makers evaluating this service
**Primary conversion goal:** Request demo / quote / purchase
**SEO focus:** Specific service keyword + buyer intent keywords

**Sections:**
1. Hero
   - Service name as headline
   - Key benefit as subheadline
   - CTA: "Request a Demo" or "Get Started"

2. Problem Statement
   - What pain point does this solve?
   - "Do you struggle with...?"
   - 2–3 sentence problem description

3. How We Solve It
   - Process (3–5 steps)
   - Diagram or numbered list
   - Brief explanation per step

4. Key Features / Capabilities
   - Card grid (3–4 features)
   - Icon + feature name + description

5. Use Cases
   - "How [Industry A] uses [Service]"
   - "How [Industry B] uses [Service]"
   - Quick description for each

6. Metrics / Results
   - "Average results with [Service]"
   - 3–4 key metrics (time saved, cost reduction, etc.)

7. Customer Testimonials
   - 2–3 quotes from actual customers
   - Include: name, title, company

8. Pricing / CTA
   - Clear pricing (or "contact for quote")
   - Table or comparison cards
   - CTA to purchase or request custom pricing

9. FAQ
   - 5–8 questions specific to this service

10. CTA Section (Final)
    - "Ready to [action]?"
    - Button + alternative contact option

---

### Case Studies / Success Stories Page
**Purpose:** Build trust through concrete examples of success
**Audience:** Prospects, especially analytical decision-makers
**Primary conversion goal:** Generate lead or close deal
**SEO focus:** Case study keywords, industry-specific keywords

**Sections:**
1. Hero
   - Headline: "Case Studies" or "Success Stories"
   - Subheadline: "See what [Company] has achieved"

2. Case Study Cards (Grid)
   - Card per case study
   - Thumbnail image
   - Company name, industry, key metric
   - "Read Case Study" CTA
   - Links to individual case study pages

3. Results Summary
   - Aggregate metrics across all case studies
   - "We've helped [X] companies achieve..."

4. CTA Section
   - "Ready to achieve similar results?"
   - Request demo / quote button

---

### Individual Case Study Page
**Purpose:** Tell a detailed success story
**Audience:** Serious prospects, especially skeptics
**Primary conversion goal:** Build confidence to convert
**SEO focus:** Company name, industry, solution keywords

**Sections:**
1. Hero
   - Client company name
   - Key result (e.g., "Increased revenue by 35%")

2. Client Background
   - Company overview
   - Size, industry, existing challenge

3. The Challenge
   - Specific problem client faced
   - Impact if unsolved
   - Why existing solutions failed

4. Our Solution
   - How we addressed the challenge
   - Process, tools, approach
   - Timeline

5. Results
   - Measurable outcomes
   - Metrics, testimonial, quote

6. Key Takeaway
   - What this case study teaches
   - Applicable to similar customers

7. CTA Section
   - "Want to achieve similar results?"
   - Request demo / quote

---

### About Page
**Purpose:** Build trust and company credibility
**Audience:** Prospects, partners, potential employees
**Primary conversion goal:** Increase confidence in company

**Sections:**
1. Hero
   - Company mission or vision
   - Headline: "About [Company]"

2. Company Story
   - Founded when, why
   - Key milestones
   - Company values or philosophy

3. Team
   - Key leaders (photos, names, roles, brief bios)
   - Optional: link to careers page

4. Why We're Different
   - 3–4 key differentiators
   - Culture, approach, results

5. Customer Trust
   - Logos, testimonials, awards
   - Industry certifications

6. CTA Section
   - "Join [X] companies that trust us"
   - Contact or sign-up button

---

### Contact Page
**Purpose:** Capture lead inquiries
**Audience:** Warm prospects ready to convert
**Primary conversion goal:** Collect inquiry details

**Sections:**
1. Hero
   - Headline: "Contact Us" or "Let's Talk"
   - Subheadline: "We're here to help"

2. Contact Form
   - Name, email, company, message fields
   - Subject dropdown (Sales, Support, Partnership, etc.)
   - CTA button: "Send" or "Request Demo"
   - Optional: phone field

3. Contact Information
   - Email address
   - Phone number
   - Office address
   - Hours of operation

4. Quick Links
   - FAQ, blog, resources
   - Social links
   - Chat / live support option (if available)

5. Map (Optional)
   - Office location on map

---

### Blog / Resources Hub
**Purpose:** Drive organic traffic, establish thought leadership
**Audience:** Prospects researching solutions
**Primary conversion goal:** Read article, subscribe to newsletter

**Sections:**
1. Hero
   - Headline: "Blog" or "Resources"
   - Optional: search box

2. Featured Article
   - Latest or most popular post
   - Thumbnail, title, excerpt, author, date
   - "Read More" CTA

3. Article Grid
   - Grid of recent articles (6–12 per page)
   - Filter by category (optional)
   - Thumbnail, title, excerpt, read time
   - "Read" CTA per article

4. Newsletter Signup (Sidebar or Bottom)
   - Email field
   - "Subscribe" button
   - Brief value prop

5. CTA Section
   - Link to popular resources or guides

---

### FAQ Page
**Purpose:** Reduce objections and support self-service research
**Audience:** Prospects with common questions
**Primary conversion goal:** Get answers without contacting sales

**Sections:**
1. Hero
   - Headline: "Frequently Asked Questions"

2. FAQ Categories (Optional)
   - Organize FAQs by topic (Product, Pricing, Support, etc.)
   - Clickable category tabs or filter

3. Q&A Accordion
   - Question (clickable to expand)
   - Answer (concise, 2–3 sentences)
   - 10–20 questions total
   - Group by category

4. CTA Section
   - "Still have questions?"
   - Contact form or live chat link

---

## 3. Content Hierarchy Rules

**Every page should follow this priority:**
1. **Headline** — Clear, specific, benefit-focused
2. **Subheadline** — Expands on main promise
3. **Body copy** — Explains the value
4. **Social proof** — Testimonials, metrics, logos
5. **CTA** — Clear next step
6. **Supporting details** — Features, specs, FAQ

**Avoid:**
- Vague headlines ("Innovation", "Solutions")
- Paragraphs longer than 3 sentences
- Too many CTAs on one page
- Unsubstantiated claims

---

## 4. Navigation & Linking Strategy

### Primary Navigation (Header)
- Home
- Services
- Case Studies
- About
- Contact

### Footer Navigation
- Services
- Blog
- About
- Contact
- Privacy / Terms
- Social links

### Internal Linking Rules
- Link from home to each main section (Services, About, Contact)
- Link from Services to individual service pages
- Link from service pages back to Services
- Link from blog to homepage and Services
- Every page should have at least 1 internal link (not counting navigation)

---

## 5. Mobile Responsiveness

- Desktop navigation (5 items) → Mobile burger menu
- Two-column layouts → Stack to one column
- Cards: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- Reduce hero padding on mobile
- Maintain full readability and scanability

---

## 6. SEO Keyword Strategy

Organize by page:

| Page | Primary Keyword | Secondary Keywords |
|------|------|------|
| Home | [Brand] | [Broad solution keyword] |
| Services | [Service] solutions | [Service] for [industry] |
| [Service] detail | [Specific service] | [Service] pricing, [Service] features |
| Case Studies | [Service] results | [Industry] case study |
| Blog | [Topic] guide | [Topic] for [audience] |

---

## 7. Success Criteria

✓ Every page has clear headline and CTA
✓ Navigation is logical and findable
✓ No page is more than 2–3 clicks from any other
✓ Conversion path is obvious (Home → Services → Detail → Contact)
✓ Mobile layout flows naturally
✓ All keyword targets are represented
✓ Internal linking supports user journey
✓ Page hierarchy matches business priority
```

---

## Phase 6: Review & Validate

Before finalizing:
- [ ] All core business goals are addressed by at least one page
- [ ] Primary conversion action is clear on each page
- [ ] No more than 7–10 main pages for first launch (expand later)
- [ ] Navigation is logical and minimal
- [ ] SEO keywords are distributed across pages
- [ ] Mobile structure will work well
- [ ] Internal linking supports user journey
- [ ] Stakeholders agree on page priorities

---

## When to Use This Skill

- **After brief-result.md is generated** — you have extracted the business model, audience, goals, and positioning from the brief
- **Before starting design** — architecture must inform design, not the other way around
- **Any website project** — single-page landing or multi-page site requires planning before execution

---

## Output

`SITE_STRUCTURE.md` — a complete guide to what pages exist, what goes on each page, how they connect, and what content strategy each page follows.

This document becomes the reference for:
- **Design teams** — what sections and content blocks each page needs
- **Content writers** — what to write for each section
- **Developers** — page structure and template needs
- **Product managers** — feature prioritization

---

## Non-Negotiables

- Architecture must match business goals (not just look nice)
- Every page must serve a purpose (no vanity pages)
- Navigation must be simple (users should never be confused about where they are)
- Conversion path must be obvious (visitor should understand what action to take)
- Mobile structure must work (don't just shrink desktop)
- Content strategy must be specific (not generic or vague)
