# Contributing

Thanks for contributing.

This project is deployed on Vercel. The goal of this guide is to keep the production site stable, the Git history readable, and the workflow lightweight.

## Core Rules

- `main` is the production branch.
- Direct commits to `main` are allowed for normal day-to-day work on this repo.
- Run `npm run lint` and `npm run build` before pushing.
- Use short-lived branches only when the change is large, experimental, or easier to review separately.
- Use Conventional Commits for commit messages.

## Recommended Workflow

This repo is intentionally lightweight. It is a single-maintainer personal site, so the default workflow is:

1. work directly on `main`
2. validate locally
3. commit with a clear message
4. push to `origin/main`

Typical flow:

```bash
git checkout main
git pull --ff-only origin main

# make changes

npm run lint
npm run build

git add .
git commit -m "fix(home): resolve mobile overflow"
git push origin main
```

## When To Use A Branch

Create a short-lived branch only when it makes the work easier:

- a large redesign or refactor
- an experiment you may discard
- a change that touches many files and may span multiple sessions
- a change you explicitly want to review in a PR before merging

Suggested branch names:

- `feat/<short-description>`
- `fix/<short-description>`
- `content/<short-description>`
- `chore/<short-description>`
- `refactor/<short-description>`
- `docs/<short-description>`

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

If you add or modify behavior, validate it locally before pushing.

## Pull Requests

Pull requests are optional for this repo, not mandatory.

Use a PR when it helps you:

- compare a larger redesign against the current site
- keep an experiment isolated from `main`
- use Vercel Preview or GitHub review as part of the decision
- preserve a clearer review trail for a substantial change

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

If you use a PR, use "Squash and merge" by default to keep `main` history clean.

The final squash commit title should follow Conventional Commits where practical.

Examples:

- `feat(homepage): add redesigned hero section`
- `fix(nav): resolve mobile overflow issue`
- `content(about): refresh personal introduction`

## Validation Before Merge

Before pushing to `main` or merging a PR, verify as applicable.

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
