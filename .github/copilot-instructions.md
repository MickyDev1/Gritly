# Gritly - AI Coding Guidelines

## Architecture Overview
- **Framework**: Next.js 15 with App Router (`src/app/` directory structure)
- **UI**: React 19 components with Tailwind CSS v4 for styling
- **Language**: TypeScript with strict mode enabled
- **Build Tool**: Turbopack for development and production builds

## Key Patterns & Conventions

### Component Structure
- Use `"use client"` directive for interactive components (forms, state management)
- Server components by default for static content
- Import path alias: `@/*` maps to `./src/*`

### Form Handling
Follow the established pattern from `src/app/login/page.tsx` and `src/app/signup/page.tsx`:
```tsx
const [formData, setFormData] = useState({ email: "", password: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target;
  setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle submission
};
```

### Styling
- Use Tailwind utility classes extensively
- Custom CSS variables defined in `src/app/globals.css` for theming
- Font variables: `--font-geist-sans` and `--font-geist-mono`

### File Organization
- Pages: `src/app/[route]/page.tsx`
- Shared layout: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- Static assets: `public/` directory

## Development Workflow
- **Start dev server**: `pnpm dev` (uses Turbopack)
- **Build**: `pnpm build` (uses Turbopack)
- **Lint**: `pnpm lint` (ESLint with Next.js config)
- **Package manager**: pnpm (see `pnpm-lock.yaml`)

## Dependencies
- React 19.1.0 with React DOM
- Next.js 15.5.0
- TypeScript 5.x
- Tailwind CSS v4
- ESLint 9.x with Next.js config

## Current State
- Basic authentication UI (login/signup pages)
- No backend integration yet (forms log to console)
- Default Next.js home page with navigation links</content>
<parameter name="filePath">c:\project\personal\Gritly\.github\copilot-instructions.md