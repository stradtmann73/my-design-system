## Setup

No provider or root wrapper is required — every component is a plain, unwrapped React export (`Button`, `Input`, `Card`, `Callout`, `Heading`, `Text`). Just import and use directly. `Inter` is loaded globally via a `@import` in `styles.css` (Google Fonts) — no per-component font setup needed.

## Styling idiom: Tailwind utility classes

This system extends Tailwind with its own color and type-scale tokens — use these names, not generic Tailwind defaults:

| Kind | Class | Use |
|---|---|---|
| Color | `bg-white` | Primary background |
| Color | `bg-lavender` | Secondary background, alternating rows, callout fill |
| Color | `border-purple-light` | Borders, dividers, subtle accents |
| Color | `text-purple-dark` | Primary text, dark backgrounds, table headers |
| Color | `bg-purple-mid` / `text-purple-mid` | Primary brand — headings, CTAs, links, highlights |
| Color | `bg-purple-deep` | Link hover, active, secondary CTA |
| Type | `text-h1` … `text-h4` | Heading sizes (bold, tight tracking, per the type scale) |
| Type | `text-body-1` | Lead/emphasis paragraph text (1.125rem) |
| Type | `text-body-2` | Default body copy (1rem) |
| Type | `font-sans` | Inter (applied globally on `body`; rarely needed explicitly) |

Compose new layout/glue elements with these same classes rather than introducing arbitrary hex values or default Tailwind grays/blues — the palette is intentionally purple/lavender/white only.

## Where the truth lives

Read `_ds/my-design-system/styles.css` (and its `@import` of `_ds_bundle.css`) for the full compiled token set before styling anything new. Each component's `.d.ts` and `.prompt.md` under `_ds/my-design-system/components/<Name>/` document its exact prop API.

## Example

```tsx
import { Heading, Text, Card, Button, Callout } from "my-design-system";

function ExampleSection() {
  return (
    <Card className="space-y-3">
      <Heading level={3}>Section title</Heading>
      <Text size={2}>Supporting body copy goes here.</Text>
      <Callout>Use callouts sparingly — three or fewer per section.</Callout>
      <Button variant="primary">Primary action</Button>
    </Card>
  );
}
```
