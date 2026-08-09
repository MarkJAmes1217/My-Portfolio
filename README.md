# Mark Dela Cruz Portfolio

Angular 22 portfolio starter for Mark James Brian S. Dela Cruz.

## Requirements

- Node.js 22.22.3+ or Node.js 24.x (required by Angular 22)
- npm 10+

Angular 22 requires TypeScript 6.0.x.

## Run locally

```bash
npm install
npm start
```

Open the local URL shown by Angular CLI.

## Build

```bash
npm run build
```

## Where to edit portfolio content

Main portfolio data:

`src/app/data/portfolio.ts`

Update your:
- name
- summary
- projects
- technologies
- responsibilities
- experience
- contact email

## Project structure

- `src/app/pages/home` - landing page, projects, skills and experience
- `src/app/pages/project` - project detail page
- `src/app/data/portfolio.ts` - portfolio data
- `src/app/models` - TypeScript models
- `src/styles.scss` - global visual design

## Notes

This starter intentionally keeps project content separate from the UI so the portfolio can later be changed to load the JSON file/API without rewriting the components.
