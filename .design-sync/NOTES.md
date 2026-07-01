# design-sync notes

## Re-sync risks

- Font is loaded via a Google Fonts `@import` in `src/styles.css` (`[FONT_REMOTE]`) — renders correctly assuming the design agent's runtime has network access to fonts.googleapis.com. If that ever fails, Inter falls back silently to a system sans-serif.
- No providers/decorators are used (`[GENERAL]` — none needed): all components are plain, unwrapped exports. `cfg.provider` intentionally left unset.
- All 6 components graded `match` from images on first sync — no `close`/`skip` exceptions.

## [GENERAL] Fixes applied this sync

- Storybook title/export mismatch: a single `Typography.stories.tsx` exporting stories for both `Heading` and `Text` under one title (`Components/Typography`) couldn't be paired to a single export and was dropped (`[TITLE_UNMAPPED]`). Fixed by splitting into `Heading.stories.tsx` (title `Components/Heading`) and `Text.stories.tsx` (title `Components/Text`), each matching its own export 1:1. Going forward: one story title per exported component.
