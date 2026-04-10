# Contributing

Thanks for contributing.

This project is deployed on Vercel. The goal of this guide is to keep the production site stable, the Git history readable, and the workflow lightweight.

## Core Rules

- `main` is the production branch.
- Do not develop directly on `main`.
- Create short-lived branches from `main` for meaningful changes.
- Open a Pull Request (PR) for meaningful changes.
- Review the Vercel Preview before merging user-facing changes.
- Use Conventional Commits for commit messages and PR squash titles.

## Branch Naming

Use short, descriptive branch names based on the type of work:

- `feat/<short-description>` for features
- `fix/<short-description>` for bug fixes
- `content/<short-description>` for content updates
- `chore/<short-description>` for maintenance/dependencies
- `refactor/<short-description>` for internal cleanup
- `docs/<short-description>` for documentation

Examples:

- `feat/homepage-hero`
- `fix/mobile-nav-overflow`
- `content/update-about-copy`
- `chore/upgrade-nextjs`
- `refactor/simplify-header-state`
- `docs/add-local-setup`

## Local Development

Use the package manager and scripts defined by the repo (see `README.md` and `package.json`).

Typical workflow:

```bash
# install dependencies (choose one based on the repo)
npm install
# or: npm ci
# or: pnpm install

# run dev server
npm run dev

# optional: run lint/tests/build if present
npm run lint
npm test
npm run build
```

If you add or modify behavior, validate it locally before opening a PR.

## Pull Requests

Open a PR for all meaningful changes, especially:

- UI/layout updates
- new components or pages
- content changes that affect the live site
- SEO/metadata updates
- routing/redirect changes
- analytics/tracking changes
- dependency upgrades
- build/config changes
- bug fixes and behavior-affecting refactors

### PR Title

Use a short, clear title that describes the change.

Examples:

- `Add redesigned homepage hero`
- `Fix mobile menu overflow on Safari`
- `Update About page biography`

### PR Description Template

```md
## Summary
What changed?

## Why
Why was this change needed?

## Validation
What was tested locally, and what should be checked in Vercel Preview?

## Impact
Any UX/SEO/analytics/routing/content impact?

## Related
Closes #123
```

### PR Scope

Keep PRs focused. Prefer one PR per logical unit of work:

- one feature
- one bug fix
- one content update
- one dependency change
- one refactor

Avoid bundling unrelated changes.

## Commit Messages (Conventional Commits)

Format:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Common types:

- `feat` a new feature
- `fix` a bug fix
- `docs` documentation-only changes
- `style` formatting/styling-only changes with no logic change
- `refactor` code changes that neither fix a bug nor add a feature
- `perf` performance improvements
- `test` adding or updating tests
- `build` build system/dependency changes
- `ci` CI workflow changes
- `chore` maintenance tasks
- `revert` reverting a previous change

Examples:

- `feat(homepage): add redesigned hero section`
- `fix(nav): prevent mobile menu overflow on Safari`
- `content(about): update biography and intro copy`
- `chore(deps): upgrade nextjs and eslint packages`
- `docs(readme): add local setup instructions`
- `refactor(header): simplify menu state handling`

### Breaking Changes

Use `!` in the header, or include a `BREAKING CHANGE:` footer.

Example:

```text
feat(config)!: rename public analytics environment variable

BREAKING CHANGE: NEXT_PUBLIC_GA_ID has been replaced by NEXT_PUBLIC_GA_MEASUREMENT_ID
```

### Commit Hygiene

- Keep messages specific and readable; use imperative phrasing.
- Prefer one logical change per commit when practical.
- Avoid vague messages such as "update", "fix", or "changes".

## Merging

- Use "Squash and merge" by default to keep `main` history clean.
- The final squash commit title should follow Conventional Commits where practical.

Examples:

- `feat(homepage): add redesigned hero section`
- `fix(nav): resolve mobile overflow issue`
- `content(about): refresh personal introduction`

## Validation Before Merge

Before merging, verify as applicable.

Local:

- project runs successfully
- change behaves as expected
- no obvious regressions

Vercel Preview:

- layout is correct
- navigation and links work
- responsive behavior is acceptable
- metadata/SEO changes are correct
- analytics/tracking changes are validated where possible
- no obvious console/build issues

## Production Safety

`main` should always represent a version of the site that is safe to deploy.

