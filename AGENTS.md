# AGENTS.md

## Mission
Build a distinct, premium, brand-forward site that feels intentional, polished, and clearly designed.

## Brand and composition priorities
- Start with composition, not components.
- The first viewport must read as one clear composition, not a dashboard.
- Brand identity must be obvious above the fold.
- Lead with one sharp headline, one short supporting sentence, and one clear CTA group.
- Treat the first screen like a poster, not a document.
- Prefer one dominant visual idea over multiple competing elements.
- Avoid floating card clutter, badge confetti, stat strips, and generic agency-site patterns in the hero.

## Frontend direction
- Build mobile-first, then scale to desktop.
- Prefer full-bleed or full-canvas hero compositions.
- Each section gets one job and one primary takeaway.
- Use cards only when they improve comprehension or interaction.
- Avoid placeholder copy, fake metrics, filler sections, and repetitive layouts unless explicitly requested.
- Keep motion subtle, meaningful, and respectful of reduced-motion preferences.
- Prioritize hierarchy, spacing, contrast, and rhythm before decorative effects.

## Implementation rules
- Preserve existing architecture unless there is a clear reason to change it.
- Reuse existing tokens, utilities, and component patterns before introducing new abstractions.
- Keep code clean, readable, and easy to extend.
- Respect repo conventions, lint rules, package scripts, and the existing project documentation in `docs/` and `docs/ai-context/`.
- For non-trivial UI tasks, propose a short plan first, then implement.
- Prioritize clarity, responsiveness, accessibility, and maintainability together.

## Quality gates
- Run the project's quality checks before asking to push.
- If available, run lint, typecheck, build, and relevant tests.
- Review final diffs for regressions, accessibility issues, and unnecessary complexity.
- Always include a short manual test plan after changes.

## Done when
- The first screen is visually cohesive and clearly branded.
- The CTA is obvious.
- Mobile readability is strong.
- Visual clutter has been reduced.
- The final diff is concise and reviewable.
