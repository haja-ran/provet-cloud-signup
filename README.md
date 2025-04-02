# Nuxt SignUp Form

## Overview

This project leverages Custom Elements for building a sign-up form in a Nuxt application. Given the nature of Custom Elements, component testing is conducted using **Storybook** and **Playwright**, as traditional virtual environments (e.g., jsdom, happy-dom) are often unreliable in this context.

## Testing Approach

- **Storybook & Playwright:** Component tests are executed within Storybook (accessible at port **6006** after running `npm run storybook`).
- **Continuous Integration (CI):** Tests can also be executed in the CI pipeline (or locally) by running the `npm run test-storybook` command. Note that the Storybook server must be running in parallel.
- **Documentation:** Storybook is used not only for testing but also for component documentation. More details on this approach can be found in the [Storybook Component Testing Guide](https://storybook.js.org/docs/writing-tests/component-testing).

## Form Validation

- **Zod** is utilized for schema-based form validation, ensuring robust data integrity.

## References

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
