# Design System: Agency Landing Page
**Project ID:** 4551565554229091864

## 1. Visual Theme & Atmosphere

A clean, professional, and energetic agency landing page with a **light theme**. The design communicates confidence and modernity with a bold red accent that demands attention. The overall vibe is **crisp, corporate-creative** — blending professional reliability with creative agency energy. Generous whitespace creates breathing room, while the vibrant red provides dynamic focal points throughout the page.

## 2. Color Palette & Roles

| Color Name | Hex Code | Role |
|------------|----------|------|
| **Energetic Red** | `#ea2a33` | Primary accent — CTAs, active states, key highlights, brand identity |
| **Deep Charcoal** | `#1a1a1a` | Primary text — headings, body copy |
| **Warm Dark** | `#2d2d2d` | Secondary text — subheadings, descriptions |
| **Neutral Gray** | `#6b7280` | Tertiary text — captions, metadata, labels |
| **Light Gray** | `#f3f4f6` | Surface backgrounds — cards, sections with contrast |
| **Soft Silver** | `#e5e7eb` | Borders, dividers, subtle separators |
| **Pure White** | `#ffffff` | Page background, card backgrounds |
| **Near White** | `#fafafa` | Alternate section backgrounds |

## 3. Typography Rules

- **Font Family:** "Be Vietnam Pro" (Google Fonts) — a geometric sans-serif with excellent readability
- **Headings (H1):** Bold (700), 48-64px, tight letter-spacing (-0.02em), Deep Charcoal
- **Headings (H2):** Semibold (600), 36-42px, tight letter-spacing (-0.01em), Deep Charcoal
- **Headings (H3):** Semibold (600), 24-28px, Deep Charcoal
- **Body Text:** Regular (400), 16-18px, line-height 1.6, Warm Dark
- **Small/Caption:** Regular (400), 14px, Neutral Gray
- **Buttons:** Medium (500), 16px, uppercase or sentence-case

## 4. Component Styles

* **Buttons:**
  - Primary: Energetic Red background, white text, rounded corners (8px), subtle hover darkening
  - Secondary: White or transparent background, Energetic Red border, Red text
  - Pill variant available for CTAs with fully rounded ends
  - Hover: slight scale-up (1.02) with shadow elevation

* **Cards/Containers:**
  - Gently rounded corners (8px / `rounded-lg`)
  - White background with whisper-soft box shadow (`0 1px 3px rgba(0,0,0,0.1)`)
  - Hover state: elevated shadow (`0 4px 12px rgba(0,0,0,0.1)`) with smooth transition

* **Navigation:**
  - Clean horizontal navbar with logo left, links center/right
  - Text links in Deep Charcoal, active/hover in Energetic Red
  - Mobile: hamburger menu with slide-out sheet

* **Inputs/Forms:**
  - Light Gray background with Soft Silver border
  - Rounded corners (8px)
  - Focus state: Energetic Red border ring

* **Badges/Tags:**
  - Small rounded pills, light red background (`#fef2f2`), Energetic Red text

## 5. Layout Principles

- **Max container width:** 1280px, centered
- **Section padding:** 80-120px vertical, creating generous breathing room
- **Grid:** 12-column grid, typically 2-3 columns for feature cards, single column for hero
- **Spacing scale:** 4px base unit (4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120)
- **Mobile first:** Responsive breakpoints at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- **Content alignment:** Left-aligned text for readability, centered headings on showcase sections

## 6. Design System Notes for Stitch Generation

When generating new screens, always include this block:

```
DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first responsive
- Theme: Light, clean professional with creative energy
- Background: Pure White (#ffffff) with alternate Near White (#fafafa) sections
- Primary Accent: Energetic Red (#ea2a33) for CTAs, buttons, highlights
- Text Primary: Deep Charcoal (#1a1a1a) for headings
- Text Secondary: Warm Dark (#2d2d2d) for body
- Text Tertiary: Neutral Gray (#6b7280) for captions
- Font: Be Vietnam Pro (Google Fonts)
- Corners: Gently rounded (8px)
- Shadows: Whisper-soft, diffused
- Spacing: Generous whitespace, 80-120px section padding
```
